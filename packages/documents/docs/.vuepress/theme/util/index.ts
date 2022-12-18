import { MarkdownItHeader } from "@mdit-vue/types";
import { RouteLocale } from "@vuepress/client";
import {
  ensureEndingSlash,
} from "@vuepress/shared";
import {
  RouteLocationNormalizedLoaded,
} from "vue-router";
import {
  NavbarGroup,
  NavbarItem,
  PageData,
  SidebarConfig,
  SidebarConfigArray,
  SidebarGroup,
  SidebarItem,
} from "vuepress-vite";
import { VuesaxAlphaThemeOptions } from "../vuesaxAlphaTheme";

export const hashRE = /#.*$/;
export const extRE = /\.(md|html)$/;
export const endingSlashRE = /\/$/;
export const outboundRE = /^(https?:|mailto:|tel:)/;

export function normalize(path: string) {
  return decodeURI(path).replace(hashRE, "").replace(extRE, "").toLocaleLowerCase();
}

export function getHash(path: string) {
  const match = path.match(hashRE);
  if (match) {
    return match[0];
  }
}

export function isExternal(path: string) {
  return outboundRE.test(path);
}

export function isMailto(path: string) {
  return /^mailto:/.test(path);
}

export function isTel(path: string) {
  return /^tel:/.test(path);
}

export function ensureExt(path: string) {
  if (isExternal(path)) {
    return path;
  }
  const hashMatch = path.match(hashRE);
  const hash = hashMatch ? hashMatch[0] : "";
  const normalized = normalize(path);

  if (endingSlashRE.test(normalized)) {
    return path;
  }
  return normalized + ".html" + hash;
}

export function isActive(route: RouteLocationNormalizedLoaded, path: string) {
  const routeHash = route.hash;
  const linkHash = getHash(path);
  if (linkHash && routeHash !== linkHash) {
    return false;
  }
  const routePath = ensureEndingSlash(ensureEndingSlash(normalize(route.path)));
  const pagePath = ensureEndingSlash(ensureEndingSlash(normalize(path)));

  return routePath === pagePath;
}


/**
 * @param relative: route locale
 * @param base: route path (not fullpath)
 */
function resolvePath(relative: RouteLocale, base: string, append?: boolean) {
  const firstChar = relative.charAt(0);
  if (firstChar === "/") {
    return relative;
  }

  if (firstChar === "?" || firstChar === "#") {
    return base + relative;
  }

  const stack = base.split("/");

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  const segments = relative.replace(/^\//, "").split("/");
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    if (segment === "..") {
      stack.pop();
    } else if (segment !== ".") {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== "") {
    stack.unshift("");
  }

  return stack.join("/");
}

export function resolveSidebarItems(
  pageData: PageData,
  themeOptions: VuesaxAlphaThemeOptions,
  localePath: RouteLocale = "/"
): SidebarConfigArray {
  const { locales } = themeOptions;

  const localeConfig =
    localePath && locales ? locales[localePath] || themeOptions : themeOptions;
  const sidebarConfig = localeConfig.sidebar || themeOptions.sidebar;

  if (sidebarConfig === "auto") {
    const headers = groupHeaders(pageData.headers);
    return resolveHeaders(headers, pageData);
  }
  if (sidebarConfig === false || sidebarConfig === undefined) return [];

  const { base, config } = resolveMatchingConfig(localePath, sidebarConfig);
  // return config ? config.map((item) => resolveItem(item, pageData, base)) : [];
  return config || [];
}

function resolveHeaders(
  headers: MarkdownItHeader[],
  page: PageData
): SidebarConfigArray {
  return [
    {
      text: page.title,
      collapsible: false,
      children: headers.map(
        (h: MarkdownItHeader): SidebarItem | SidebarGroup => ({
          text: h.title,
          link: page.path + "#" + h.slug,
          children: resolveHeaders(h.children, page),
        })
      ),
    },
  ];
}

export function groupHeaders(
  headers: MarkdownItHeader[] = []
): MarkdownItHeader[] {
  // group h3s under h2
  headers = headers.map((h) => Object.assign({}, h));
  let lastH2: MarkdownItHeader;

  headers.forEach((h) => {
    if (h.level === 2) {
      lastH2 = h;
    } else if (lastH2) {
      (lastH2.children || (lastH2.children = [])).push(h);
    }
  });
  console.log({
    headers
  })
  return headers.filter((h) => h.level === 2);
}

export function resolveTypeNavLinkItem(
  linkItem: NavbarGroup | NavbarItem | string
) {
  let type: string = "link";

  if (typeof linkItem !== "string" && "children" in linkItem) {
    type = linkItem.children.length > 0 ? "links" : "link";
  }
  return Object.assign(linkItem, {
    type,
  });
}

export function resolveMatchingConfig(
  localePath: RouteLocale,
  config: SidebarConfig
) {
  if (Array.isArray(config)) {
    return {
      base: "/",
      config: config,
    };
  }
  for (const base in config) {
    if (ensureEndingSlash(localePath).indexOf(encodeURI(base)) === 0) {
      return {
        base,
        config: config[base],
      };
    }
  }
  return {};
}
