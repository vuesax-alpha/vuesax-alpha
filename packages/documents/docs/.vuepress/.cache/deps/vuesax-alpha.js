import {
  Fragment,
  Teleport,
  Transition,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  inject,
  mergeProps,
  nextTick,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  onUpdated,
  openBlock,
  provide,
  reactive,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  toRef,
  unref,
  useAttrs,
  useSlots,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-M4L6X7SD.js";
import {
  normalizeClass,
  normalizeStyle,
  toDisplayString
} from "./chunk-MQXBTJN7.js";

// node_modules/vuesax-alpha/dist/vuesax-alpha.js
var r_ = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
var er = (n, r = {}, i) => {
  i.forEach((c) => {
    r.hasOwnProperty(c) && (n.$data[c] = r[c]);
  });
};
var iu = (n) => [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "dark",
  "light",
  "warn",
  "facebook",
  "twitter",
  "youtube",
  "pinterest",
  "linkedin",
  "snapchat",
  "whatsapp",
  "tumblr",
  "reddit",
  "spotify",
  "amazon",
  "medium",
  "vimeo",
  "skype",
  "dribbble",
  "slack",
  "yahoo",
  "twitch",
  "discord",
  "telegram",
  "google-plus",
  "messenger"
].includes(n);
var fs = (n, r, i) => {
  i ? i.nodeName !== "#comment" && i.style.setProperty(`--vs-${n}`, r) : document.documentElement.style.setProperty(`--vs-${n}`, r);
};
function ou(n) {
  const r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  n = n.replace(r, (c, _, h, v) => _ + _ + h + h + v + v);
  const i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);
  return i ? {
    r: parseInt(i[1], 16),
    g: parseInt(i[2], 16),
    b: parseInt(i[3], 16)
  } : null;
}
var At = (n, r, i, c) => {
  const _ = /^(rgb|rgba)/.test(r), h = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(r), v = /^(#)/.test(r);
  let m;
  if (r == "dark" && i && c && i.classList.add("vs-component-dark"), _) {
    const b = r.replace(/[rgba()]/g, "").split(",");
    m = `${b[0]},${b[1]},${b[2]}`, fs(n, m, i), c && i.classList.add("vs-change-color");
  } else if (v) {
    const b = ou(r);
    m = `${b.r},${b.g},${b.b}`, fs(n, m, i), c && i.classList.add("vs-change-color");
  } else
    iu(r) ? (m = window.getComputedStyle(document.body).getPropertyValue("--vs-" + r), fs(n, m, i), c && i.classList.add("vs-change-color")) : h && (fs(n, r, i), c && i.classList.add("vs-change-color"));
};
var l_ = (n) => {
  const r = /^(rgb|rgba)/.test(n), i = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(n), c = /^(#)/.test(n);
  let _ = "";
  if (r) {
    const h = n.replace(/[rgba()]/g, "").split(",");
    _ = `${h[0]},${h[1]},${h[2]}`;
  } else if (c) {
    const h = ou(n);
    _ = `${h.r},${h.g},${h.b}`;
  } else
    iu(n) ? _ = window.getComputedStyle(document.body).getPropertyValue("--vs-" + n) : i && (_ = n);
  return _;
};
var tr = (n, r) => {
  const i = r || document.body;
  i.insertBefore(n, i.lastChild);
};
var vs = (n, r) => {
  (r || document.body).removeChild(n);
};
var zn = (n, r) => {
  if (!r)
    return;
  const i = r.getBoundingClientRect(), c = i.x, _ = i.y, h = i.width, v = i.height, m = n.style, b = window.pageYOffset, w = n.clientHeight + i.y + b;
  b + window.innerHeight - w < 30 ? (m.top = `${_ + b - n.clientHeight - 4}px`, m.left = `${c}px`, m.width = `${h}px`, n.classList.add("top"), r.classList.add("top")) : (m.top = `${_ + b + v - 4}px`, m.left = `${c}px`, m.width = `${h}px`, n.classList.remove("top"), r.classList.remove("top"));
};
var zo = (n, r, i) => {
  const c = r.getBoundingClientRect(), _ = c.x, h = c.y, v = c.width, m = c.height, b = n.style, w = window.pageYOffset, T = n.clientHeight, O = T + c.y + w, B = w + window.innerHeight;
  if (i == "right" && (_ + v + 10 + n.getBoundingClientRect().width > window.innerWidth ? (i = "left", n.classList.remove("right"), n.classList.add("left")) : (i = "right", n.classList.remove("left"), n.classList.add("right"))), i == "left" && (_ - 10 < n.getBoundingClientRect().width ? (i = "top", n.classList.remove("left"), n.classList.add("top")) : (i = "left", n.classList.remove("top"), n.classList.add("left"))), i == "top" && (h < 10 + T ? (i = "bottom", n.classList.remove("top"), n.classList.add("bottom")) : (i = "top", n.classList.remove("bottom"), n.classList.add("top"))), i == "bottom" && (B - O < 30 ? (i = "top", n.classList.remove("bottom"), n.classList.add("top")) : (i = "bottom", n.classList.remove("top"), n.classList.add("bottom"))), B - O < 30 || i == "top") {
    b.top = `${h + w - n.clientHeight - 8}px`;
    const F = _ + (v - n.getBoundingClientRect().width) / 2;
    F + n.getBoundingClientRect().width < window.innerWidth ? F > 0 ? b.left = `${F}px` : (b.left = "10px", n.classList.add("notArrow")) : (b.left = "auto", b.right = "10px", n.classList.add("notArrow"));
  } else if (i == "bottom") {
    b.top = `${h + w + m + 8}px`;
    const F = _ + (v - n.getBoundingClientRect().width) / 2;
    F + n.getBoundingClientRect().width < window.innerWidth ? F > 0 ? b.left = `${F}px` : (b.left = "10px", n.classList.add("notArrow")) : (b.left = "auto", b.right = "10px", n.classList.add("notArrow"));
  } else
    i == "left" ? (b.top = `${h + w + (m - n.getBoundingClientRect().height) / 2}px`, b.left = `${_ - n.getBoundingClientRect().width - 8}px`) : i == "right" && (b.top = `${h + w + (m - n.getBoundingClientRect().height) / 2}px`, b.left = `${_ + v + 8}px`);
};
var _e = defineComponent({
  props: {
    color: {
      type: String,
      default: null
    },
    danger: Boolean,
    success: Boolean,
    warn: Boolean,
    dark: Boolean,
    primary: Boolean,
    active: Boolean
  },
  data: () => ({
    componentColor: ""
  }),
  computed: {
    isColorDark() {
      return this.color === "dark" || this.dark || this.componentColor === "dark";
    },
    isColor() {
      return !!this.color || !!this.primary || !!this.success || !!this.warn || !!this.danger || !!this.dark;
    },
    getColor() {
      return l_(this.color);
    }
  }
});
var a_ = defineComponent({
  name: "iconClose",
  props: {
    hover: String
  }
});
var ee = (n, r) => {
  const i = n.__vccOpts || n;
  for (const [c, _] of r)
    i[c] = _;
  return i;
};
function u_(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("i", {
    ref: "icon",
    class: normalizeClass(["vs-icon-close", [{ [`vs-icon-hover-${n.hover}`]: n.hover }]])
  }, null, 2);
}
var ps = ee(a_, [["render", u_]]);
var c_ = defineComponent({
  name: "iconPlus",
  props: {
    less: Boolean
  }
});
function d_(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("i", {
    ref: "icon",
    class: normalizeClass(["vs-icon-plus", n.less && "less"])
  }, null, 2);
}
var f_ = ee(c_, [["render", d_]]);
var h_ = defineComponent({
  name: "vsAlert",
  extends: _e,
  emits: ["update:modelValue", "update:hiddenContent", "update:page"],
  props: {
    solid: Boolean,
    border: Boolean,
    shadow: Boolean,
    gradient: Boolean,
    flat: Boolean,
    relief: Boolean,
    hiddenContent: {
      type: Boolean,
      default: null
    },
    closable: Boolean,
    progress: {
      type: [Number, String],
      default: 0
    },
    page: {
      type: [Number, String],
      default: 0
    },
    modelValue: {
      type: Boolean,
      default: true
    },
    time: {
      type: [Number, String],
      default: 0
    }
  },
  watch: {
    page() {
      const n = this.$refs.content;
      n.style.minHeight = n.scrollHeight + "px", nextTick(() => {
        const r = this.$el;
        r.style.height = this.$el.scrollHeight - 1 + "px";
      });
    },
    hiddenContent(n) {
      if (!this.modelValue)
        return;
      const r = this.$el, i = this.$refs.content;
      n ? r.style.height = this.$el.scrollHeight - i.scrollHeight + "px" : (r.style.height = "auto", setTimeout(() => {
        r.style.height = this.$el.scrollHeight - 1 + "px";
      }, 250));
    }
  },
  computed: {
    getTotalPages() {
      return Object.keys(this.$slots).filter((r) => r.indexOf("page") !== -1).length;
    },
    getPages() {
      const n = Object.keys(this.$slots).filter((i) => i.indexOf("page") !== -1), r = [];
      return n.forEach((i) => {
        r.push(this.page == i.split("-")[1] && this.$slots[i]);
      }), r;
    },
    bindStyle() {
      return {
        ["--vs-color"]: this.color ? this.getColor : ""
      };
    },
    bindClass() {
      return {
        ["vs-alert--solid"]: !!this.solid,
        ["vs-alert--border"]: !!this.border,
        ["vs-alert--shadow"]: !!this.shadow,
        ["vs-alert--gradient"]: !!this.gradient,
        ["vs-alert--flat"]: !!this.flat,
        ["vs-alert--relief"]: !!this.relief,
        ["vs-alert--pages"]: this.getPages.length > 0,
        ["vs-component--primary"]: !this.danger && !this.success && !this.warn && !this.dark && !this.color,
        ["vs-component--danger"]: !!this.danger,
        ["vs-component--warn"]: !!this.warn,
        ["vs-component--success"]: !!this.success,
        ["vs-component--dark"]: !!this.dark
      };
    }
  },
  mounted() {
    if (this.$el && this.$refs.content) {
      const n = this.$el;
      n.style.height = this.$el.scrollHeight - 1 + "px";
      const r = this.$refs.content;
      r.style.minHeight = r.scrollHeight + "px";
    }
  },
  methods: {
    beforeEnter(n) {
      n.style.height = 0;
    },
    enter(n, r) {
      let i = n.scrollHeight;
      n.style.height = i - 1 + "px", r();
    },
    leave(n, r) {
      r(), n.style.minHeight = "0px", n.style.height = "0px";
    },
    handleClickClose() {
      this.$emit("update:modelValue", !this.modelValue);
    },
    handleClickHidden() {
      this.$emit("update:hiddenContent", !this.hiddenContent);
    },
    handleClickPrevPage() {
      this.page > 1 && this.$emit("update:page", Number(this.page) - 1);
    },
    handleClickNextPage() {
      this.page < this.getTotalPages && this.$emit("update:page", Number(this.page) + 1);
    }
  },
  components: {
    iconPlus: f_,
    iconClose: ps
  }
});
var v_ = {
  key: 0,
  ref: "icon",
  class: "vs-alert__icon"
};
var p_ = {
  key: 0,
  ref: "content",
  class: "vs-alert__content"
};
var g_ = {
  ref: "text",
  class: "vs-alert__content__text"
};
var __ = {
  key: 8,
  class: "vs-alert__footer"
};
var m_ = {
  key: 10,
  class: "vs-alert__progress"
};
var y_ = {
  key: 12,
  class: "vs-alert__pagination"
};
function b_(n, r, i, c, _, h) {
  const v = resolveComponent("icon-plus"), m = resolveComponent("icon-close");
  return openBlock(), createBlock(Transition, {
    onBeforeEnter: n.beforeEnter,
    onLeave: n.leave,
    onEnter: n.enter
  }, {
    default: withCtx(() => [
      n.modelValue ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["vs-alert", n.bindClass]),
        style: normalizeStyle(n.bindStyle)
      }, [
        n.$slots.icon ? (openBlock(), createElementBlock("div", v_, [
          renderSlot(n.$slots, "icon")
        ], 512)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
        n.$slots.title ? (openBlock(), createElementBlock("div", {
          key: 2,
          onClick: r[0] || (r[0] = (...b) => n.handleClickHidden && n.handleClickHidden(...b)),
          class: normalizeClass(["vs-alert__title", { "vs-alert__title--click__hidden": typeof n.hiddenContent == "boolean" }])
        }, [
          renderSlot(n.$slots, "title"),
          !n.closable && typeof n.hiddenContent == "boolean" ? (openBlock(), createBlock(v, {
            key: 0,
            less: !n.hiddenContent,
            onClick: withModifiers(n.handleClickHidden, ["stop"])
          }, null, 8, ["less", "onClick"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64))
        ], 2)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64)),
        n.hiddenContent ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [], 64)) : (openBlock(), createBlock(Transition, {
          key: 4,
          onBeforeEnter: n.beforeEnter,
          onLeave: n.leave,
          onEnter: n.enter
        }, {
          default: withCtx(() => [
            n.hiddenContent ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", p_, [
              createBaseVNode("div", g_, [
                renderSlot(n.$slots, "default"),
                renderSlot(n.$slots, `page-${n.page}`)
              ], 512)
            ], 512))
          ]),
          _: 3
        }, 8, ["onBeforeEnter", "onLeave", "onEnter"])),
        n.closable ? (openBlock(), createElementBlock("button", {
          key: 6,
          class: "vs-alert__close",
          onClick: r[1] || (r[1] = (...b) => n.handleClickClose && n.handleClickClose(...b))
        }, [
          createVNode(m, { hover: "less" })
        ])) : (openBlock(), createElementBlock(Fragment, { key: 7 }, [], 64)),
        n.$slots.footer ? (openBlock(), createElementBlock("div", __, [
          renderSlot(n.$slots, "footer")
        ])) : (openBlock(), createElementBlock(Fragment, { key: 9 }, [], 64)),
        n.progress ? (openBlock(), createElementBlock("div", m_, [
          createBaseVNode("div", {
            class: "vs-alert__progress__bar",
            style: normalizeStyle({ width: `${n.progress}%` })
          }, null, 4)
        ])) : (openBlock(), createElementBlock(Fragment, { key: 11 }, [], 64)),
        n.getTotalPages > 0 ? (openBlock(), createElementBlock("div", y_, [
          createBaseVNode("button", {
            onClick: r[2] || (r[2] = (...b) => n.handleClickPrevPage && n.handleClickPrevPage(...b)),
            textContent: "<"
          }),
          createBaseVNode("span", null, toDisplayString(n.page) + " / " + toDisplayString(n.getTotalPages), 1),
          createBaseVNode("button", {
            onClick: r[3] || (r[3] = (...b) => n.handleClickNextPage && n.handleClickNextPage(...b)),
            textContent: ">"
          })
        ])) : (openBlock(), createElementBlock(Fragment, { key: 13 }, [], 64))
      ], 6)) : createCommentVNode("", true)
    ]),
    _: 3
  }, 8, ["onBeforeEnter", "onLeave", "onEnter"]);
}
var $_ = ee(h_, [["render", b_]]);
var ds = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var ce = { exports: {} };
(function(n, r) {
  (function() {
    var i, c = "4.17.21", _ = 200, h = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", v = "Expected a function", m = "Invalid `variable` option passed into `_.template`", b = "__lodash_hash_undefined__", w = 500, T = "__lodash_placeholder__", O = 1, B = 2, F = 4, Z = 1, le = 2, me = 1, te = 2, Ee = 4, pe = 8, ae = 16, Q = 32, W = 64, z = 128, X = 256, Te = 512, tt = 30, ht = "...", _s = 800, mi = 16, Sn = 1, Kt = 2, yi = 3, Vt = 1 / 0, Rt = 9007199254740991, bi = 17976931348623157e292, En = 0 / 0, vt = 4294967295, $i = vt - 1, wi = vt >>> 1, ki = [
      ["ary", z],
      ["bind", me],
      ["bindKey", te],
      ["curry", pe],
      ["curryRight", ae],
      ["flip", Te],
      ["partial", Q],
      ["partialRight", W],
      ["rearg", X]
    ], Xt = "[object Arguments]", Tn = "[object Array]", Ci = "[object AsyncFunction]", un = "[object Boolean]", cn = "[object Date]", Si = "[object DOMException]", Ln = "[object Error]", Bn = "[object Function]", ms = "[object GeneratorFunction]", Ke = "[object Map]", Jt = "[object Number]", Xn = "[object Null]", nt = "[object Object]", An = "[object Promise]", Ei = "[object Proxy]", dn = "[object RegExp]", st = "[object Set]", fn = "[object String]", I = "[object Symbol]", q = "[object Undefined]", ie = "[object WeakMap]", ke = "[object WeakSet]", it = "[object ArrayBuffer]", ot = "[object DataView]", Xe = "[object Float32Array]", On = "[object Float64Array]", hn = "[object Int8Array]", Ti = "[object Int16Array]", Li = "[object Int32Array]", Bi = "[object Uint8Array]", Ai = "[object Uint8ClampedArray]", Oi = "[object Uint16Array]", Ri = "[object Uint32Array]", ku = /\b__p \+= '';/g, Cu = /\b(__p \+=) '' \+/g, Su = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ir = /&(?:amp|lt|gt|quot|#39);/g, or = /[&<>"']/g, Eu = RegExp(ir.source), Tu = RegExp(or.source), Lu = /<%-([\s\S]+?)%>/g, Bu = /<%([\s\S]+?)%>/g, rr = /<%=([\s\S]+?)%>/g, Au = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ou = /^\w*$/, Ru = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ii = /[\\^$.*+?()[\]{}|]/g, Iu = RegExp(Ii.source), Pi = /^\s+/, Pu = /\s/, Nu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Mu = /\{\n\/\* \[wrapped with (.+)\] \*/, Vu = /,? & /, Du = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Wu = /[()=,{}\[\]\/\s]/, xu = /\\(\\)?/g, Hu = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, lr = /\w*$/, Fu = /^[-+]0x[0-9a-f]+$/i, Uu = /^0b[01]+$/i, Gu = /^\[object .+?Constructor\]$/, qu = /^0o[0-7]+$/i, zu = /^(?:0|[1-9]\d*)$/, Yu = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ys = /($^)/, Ku = /['\n\r\u2028\u2029\\]/g, bs = "\\ud800-\\udfff", Xu = "\\u0300-\\u036f", Ju = "\\ufe20-\\ufe2f", Zu = "\\u20d0-\\u20ff", ar = Xu + Ju + Zu, ur = "\\u2700-\\u27bf", cr = "a-z\\xdf-\\xf6\\xf8-\\xff", Qu = "\\xac\\xb1\\xd7\\xf7", ju = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ec = "\\u2000-\\u206f", tc = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", dr = "A-Z\\xc0-\\xd6\\xd8-\\xde", fr = "\\ufe0e\\ufe0f", hr = Qu + ju + ec + tc, Ni = "['\u2019]", nc = "[" + bs + "]", vr = "[" + hr + "]", $s = "[" + ar + "]", pr = "\\d+", sc = "[" + ur + "]", gr = "[" + cr + "]", _r = "[^" + bs + hr + pr + ur + cr + dr + "]", Mi = "\\ud83c[\\udffb-\\udfff]", ic = "(?:" + $s + "|" + Mi + ")", mr = "[^" + bs + "]", Vi = "(?:\\ud83c[\\udde6-\\uddff]){2}", Di = "[\\ud800-\\udbff][\\udc00-\\udfff]", Rn = "[" + dr + "]", yr = "\\u200d", br = "(?:" + gr + "|" + _r + ")", oc = "(?:" + Rn + "|" + _r + ")", $r = "(?:" + Ni + "(?:d|ll|m|re|s|t|ve))?", wr = "(?:" + Ni + "(?:D|LL|M|RE|S|T|VE))?", kr = ic + "?", Cr = "[" + fr + "]?", rc = "(?:" + yr + "(?:" + [mr, Vi, Di].join("|") + ")" + Cr + kr + ")*", lc = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ac = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Sr = Cr + kr + rc, uc = "(?:" + [sc, Vi, Di].join("|") + ")" + Sr, cc = "(?:" + [mr + $s + "?", $s, Vi, Di, nc].join("|") + ")", dc = RegExp(Ni, "g"), fc = RegExp($s, "g"), Wi = RegExp(Mi + "(?=" + Mi + ")|" + cc + Sr, "g"), hc = RegExp([
      Rn + "?" + gr + "+" + $r + "(?=" + [vr, Rn, "$"].join("|") + ")",
      oc + "+" + wr + "(?=" + [vr, Rn + br, "$"].join("|") + ")",
      Rn + "?" + br + "+" + $r,
      Rn + "+" + wr,
      ac,
      lc,
      pr,
      uc
    ].join("|"), "g"), vc = RegExp("[" + yr + bs + ar + fr + "]"), pc = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, gc = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], _c = -1, Ce = {};
    Ce[Xe] = Ce[On] = Ce[hn] = Ce[Ti] = Ce[Li] = Ce[Bi] = Ce[Ai] = Ce[Oi] = Ce[Ri] = true, Ce[Xt] = Ce[Tn] = Ce[it] = Ce[un] = Ce[ot] = Ce[cn] = Ce[Ln] = Ce[Bn] = Ce[Ke] = Ce[Jt] = Ce[nt] = Ce[dn] = Ce[st] = Ce[fn] = Ce[ie] = false;
    var be = {};
    be[Xt] = be[Tn] = be[it] = be[ot] = be[un] = be[cn] = be[Xe] = be[On] = be[hn] = be[Ti] = be[Li] = be[Ke] = be[Jt] = be[nt] = be[dn] = be[st] = be[fn] = be[I] = be[Bi] = be[Ai] = be[Oi] = be[Ri] = true, be[Ln] = be[Bn] = be[ie] = false;
    var mc = {
      \u00C0: "A",
      \u00C1: "A",
      \u00C2: "A",
      \u00C3: "A",
      \u00C4: "A",
      \u00C5: "A",
      \u00E0: "a",
      \u00E1: "a",
      \u00E2: "a",
      \u00E3: "a",
      \u00E4: "a",
      \u00E5: "a",
      \u00C7: "C",
      \u00E7: "c",
      \u00D0: "D",
      \u00F0: "d",
      \u00C8: "E",
      \u00C9: "E",
      \u00CA: "E",
      \u00CB: "E",
      \u00E8: "e",
      \u00E9: "e",
      \u00EA: "e",
      \u00EB: "e",
      \u00CC: "I",
      \u00CD: "I",
      \u00CE: "I",
      \u00CF: "I",
      \u00EC: "i",
      \u00ED: "i",
      \u00EE: "i",
      \u00EF: "i",
      \u00D1: "N",
      \u00F1: "n",
      \u00D2: "O",
      \u00D3: "O",
      \u00D4: "O",
      \u00D5: "O",
      \u00D6: "O",
      \u00D8: "O",
      \u00F2: "o",
      \u00F3: "o",
      \u00F4: "o",
      \u00F5: "o",
      \u00F6: "o",
      \u00F8: "o",
      \u00D9: "U",
      \u00DA: "U",
      \u00DB: "U",
      \u00DC: "U",
      \u00F9: "u",
      \u00FA: "u",
      \u00FB: "u",
      \u00FC: "u",
      \u00DD: "Y",
      \u00FD: "y",
      \u00FF: "y",
      \u00C6: "Ae",
      \u00E6: "ae",
      \u00DE: "Th",
      \u00FE: "th",
      \u00DF: "ss",
      \u0100: "A",
      \u0102: "A",
      \u0104: "A",
      \u0101: "a",
      \u0103: "a",
      \u0105: "a",
      \u0106: "C",
      \u0108: "C",
      \u010A: "C",
      \u010C: "C",
      \u0107: "c",
      \u0109: "c",
      \u010B: "c",
      \u010D: "c",
      \u010E: "D",
      \u0110: "D",
      \u010F: "d",
      \u0111: "d",
      \u0112: "E",
      \u0114: "E",
      \u0116: "E",
      \u0118: "E",
      \u011A: "E",
      \u0113: "e",
      \u0115: "e",
      \u0117: "e",
      \u0119: "e",
      \u011B: "e",
      \u011C: "G",
      \u011E: "G",
      \u0120: "G",
      \u0122: "G",
      \u011D: "g",
      \u011F: "g",
      \u0121: "g",
      \u0123: "g",
      \u0124: "H",
      \u0126: "H",
      \u0125: "h",
      \u0127: "h",
      \u0128: "I",
      \u012A: "I",
      \u012C: "I",
      \u012E: "I",
      \u0130: "I",
      \u0129: "i",
      \u012B: "i",
      \u012D: "i",
      \u012F: "i",
      \u0131: "i",
      \u0134: "J",
      \u0135: "j",
      \u0136: "K",
      \u0137: "k",
      \u0138: "k",
      \u0139: "L",
      \u013B: "L",
      \u013D: "L",
      \u013F: "L",
      \u0141: "L",
      \u013A: "l",
      \u013C: "l",
      \u013E: "l",
      \u0140: "l",
      \u0142: "l",
      \u0143: "N",
      \u0145: "N",
      \u0147: "N",
      \u014A: "N",
      \u0144: "n",
      \u0146: "n",
      \u0148: "n",
      \u014B: "n",
      \u014C: "O",
      \u014E: "O",
      \u0150: "O",
      \u014D: "o",
      \u014F: "o",
      \u0151: "o",
      \u0154: "R",
      \u0156: "R",
      \u0158: "R",
      \u0155: "r",
      \u0157: "r",
      \u0159: "r",
      \u015A: "S",
      \u015C: "S",
      \u015E: "S",
      \u0160: "S",
      \u015B: "s",
      \u015D: "s",
      \u015F: "s",
      \u0161: "s",
      \u0162: "T",
      \u0164: "T",
      \u0166: "T",
      \u0163: "t",
      \u0165: "t",
      \u0167: "t",
      \u0168: "U",
      \u016A: "U",
      \u016C: "U",
      \u016E: "U",
      \u0170: "U",
      \u0172: "U",
      \u0169: "u",
      \u016B: "u",
      \u016D: "u",
      \u016F: "u",
      \u0171: "u",
      \u0173: "u",
      \u0174: "W",
      \u0175: "w",
      \u0176: "Y",
      \u0177: "y",
      \u0178: "Y",
      \u0179: "Z",
      \u017B: "Z",
      \u017D: "Z",
      \u017A: "z",
      \u017C: "z",
      \u017E: "z",
      \u0132: "IJ",
      \u0133: "ij",
      \u0152: "Oe",
      \u0153: "oe",
      \u0149: "'n",
      \u017F: "s"
    }, yc = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, bc = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, $c = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, wc = parseFloat, kc = parseInt, Er = typeof ds == "object" && ds && ds.Object === Object && ds, Cc = typeof self == "object" && self && self.Object === Object && self, xe = Er || Cc || Function("return this")(), xi = r && !r.nodeType && r, vn = xi && true && n && !n.nodeType && n, Tr = vn && vn.exports === xi, Hi = Tr && Er.process, pt = function() {
      try {
        var y = vn && vn.require && vn.require("util").types;
        return y || Hi && Hi.binding && Hi.binding("util");
      } catch {
      }
    }(), Lr = pt && pt.isArrayBuffer, Br = pt && pt.isDate, Ar = pt && pt.isMap, Or = pt && pt.isRegExp, Rr = pt && pt.isSet, Ir = pt && pt.isTypedArray;
    function rt(y, C, k) {
      switch (k.length) {
        case 0:
          return y.call(C);
        case 1:
          return y.call(C, k[0]);
        case 2:
          return y.call(C, k[0], k[1]);
        case 3:
          return y.call(C, k[0], k[1], k[2]);
      }
      return y.apply(C, k);
    }
    function Sc(y, C, k, V) {
      for (var K = -1, de = y == null ? 0 : y.length; ++K < de; ) {
        var Me = y[K];
        C(V, Me, k(Me), y);
      }
      return V;
    }
    function gt(y, C) {
      for (var k = -1, V = y == null ? 0 : y.length; ++k < V && C(y[k], k, y) !== false; )
        ;
      return y;
    }
    function Ec(y, C) {
      for (var k = y == null ? 0 : y.length; k-- && C(y[k], k, y) !== false; )
        ;
      return y;
    }
    function Pr(y, C) {
      for (var k = -1, V = y == null ? 0 : y.length; ++k < V; )
        if (!C(y[k], k, y))
          return false;
      return true;
    }
    function Zt(y, C) {
      for (var k = -1, V = y == null ? 0 : y.length, K = 0, de = []; ++k < V; ) {
        var Me = y[k];
        C(Me, k, y) && (de[K++] = Me);
      }
      return de;
    }
    function ws(y, C) {
      var k = y == null ? 0 : y.length;
      return !!k && In(y, C, 0) > -1;
    }
    function Fi(y, C, k) {
      for (var V = -1, K = y == null ? 0 : y.length; ++V < K; )
        if (k(C, y[V]))
          return true;
      return false;
    }
    function Se(y, C) {
      for (var k = -1, V = y == null ? 0 : y.length, K = Array(V); ++k < V; )
        K[k] = C(y[k], k, y);
      return K;
    }
    function Qt(y, C) {
      for (var k = -1, V = C.length, K = y.length; ++k < V; )
        y[K + k] = C[k];
      return y;
    }
    function Ui(y, C, k, V) {
      var K = -1, de = y == null ? 0 : y.length;
      for (V && de && (k = y[++K]); ++K < de; )
        k = C(k, y[K], K, y);
      return k;
    }
    function Tc(y, C, k, V) {
      var K = y == null ? 0 : y.length;
      for (V && K && (k = y[--K]); K--; )
        k = C(k, y[K], K, y);
      return k;
    }
    function Gi(y, C) {
      for (var k = -1, V = y == null ? 0 : y.length; ++k < V; )
        if (C(y[k], k, y))
          return true;
      return false;
    }
    var Lc = qi("length");
    function Bc(y) {
      return y.split("");
    }
    function Ac(y) {
      return y.match(Du) || [];
    }
    function Nr(y, C, k) {
      var V;
      return k(y, function(K, de, Me) {
        if (C(K, de, Me))
          return V = de, false;
      }), V;
    }
    function ks(y, C, k, V) {
      for (var K = y.length, de = k + (V ? 1 : -1); V ? de-- : ++de < K; )
        if (C(y[de], de, y))
          return de;
      return -1;
    }
    function In(y, C, k) {
      return C === C ? Fc(y, C, k) : ks(y, Mr, k);
    }
    function Oc(y, C, k, V) {
      for (var K = k - 1, de = y.length; ++K < de; )
        if (V(y[K], C))
          return K;
      return -1;
    }
    function Mr(y) {
      return y !== y;
    }
    function Vr(y, C) {
      var k = y == null ? 0 : y.length;
      return k ? Yi(y, C) / k : En;
    }
    function qi(y) {
      return function(C) {
        return C == null ? i : C[y];
      };
    }
    function zi(y) {
      return function(C) {
        return y == null ? i : y[C];
      };
    }
    function Dr(y, C, k, V, K) {
      return K(y, function(de, Me, ye) {
        k = V ? (V = false, de) : C(k, de, Me, ye);
      }), k;
    }
    function Rc(y, C) {
      var k = y.length;
      for (y.sort(C); k--; )
        y[k] = y[k].value;
      return y;
    }
    function Yi(y, C) {
      for (var k, V = -1, K = y.length; ++V < K; ) {
        var de = C(y[V]);
        de !== i && (k = k === i ? de : k + de);
      }
      return k;
    }
    function Ki(y, C) {
      for (var k = -1, V = Array(y); ++k < y; )
        V[k] = C(k);
      return V;
    }
    function Ic(y, C) {
      return Se(C, function(k) {
        return [k, y[k]];
      });
    }
    function Wr(y) {
      return y && y.slice(0, Ur(y) + 1).replace(Pi, "");
    }
    function lt(y) {
      return function(C) {
        return y(C);
      };
    }
    function Xi(y, C) {
      return Se(C, function(k) {
        return y[k];
      });
    }
    function Jn(y, C) {
      return y.has(C);
    }
    function xr(y, C) {
      for (var k = -1, V = y.length; ++k < V && In(C, y[k], 0) > -1; )
        ;
      return k;
    }
    function Hr(y, C) {
      for (var k = y.length; k-- && In(C, y[k], 0) > -1; )
        ;
      return k;
    }
    function Pc(y, C) {
      for (var k = y.length, V = 0; k--; )
        y[k] === C && ++V;
      return V;
    }
    var Nc = zi(mc), Mc = zi(yc);
    function Vc(y) {
      return "\\" + $c[y];
    }
    function Dc(y, C) {
      return y == null ? i : y[C];
    }
    function Pn(y) {
      return vc.test(y);
    }
    function Wc(y) {
      return pc.test(y);
    }
    function xc(y) {
      for (var C, k = []; !(C = y.next()).done; )
        k.push(C.value);
      return k;
    }
    function Ji(y) {
      var C = -1, k = Array(y.size);
      return y.forEach(function(V, K) {
        k[++C] = [K, V];
      }), k;
    }
    function Fr(y, C) {
      return function(k) {
        return y(C(k));
      };
    }
    function jt(y, C) {
      for (var k = -1, V = y.length, K = 0, de = []; ++k < V; ) {
        var Me = y[k];
        (Me === C || Me === T) && (y[k] = T, de[K++] = k);
      }
      return de;
    }
    function Cs(y) {
      var C = -1, k = Array(y.size);
      return y.forEach(function(V) {
        k[++C] = V;
      }), k;
    }
    function Hc(y) {
      var C = -1, k = Array(y.size);
      return y.forEach(function(V) {
        k[++C] = [V, V];
      }), k;
    }
    function Fc(y, C, k) {
      for (var V = k - 1, K = y.length; ++V < K; )
        if (y[V] === C)
          return V;
      return -1;
    }
    function Uc(y, C, k) {
      for (var V = k + 1; V--; )
        if (y[V] === C)
          return V;
      return V;
    }
    function Nn(y) {
      return Pn(y) ? qc(y) : Lc(y);
    }
    function Et(y) {
      return Pn(y) ? zc(y) : Bc(y);
    }
    function Ur(y) {
      for (var C = y.length; C-- && Pu.test(y.charAt(C)); )
        ;
      return C;
    }
    var Gc = zi(bc);
    function qc(y) {
      for (var C = Wi.lastIndex = 0; Wi.test(y); )
        ++C;
      return C;
    }
    function zc(y) {
      return y.match(Wi) || [];
    }
    function Yc(y) {
      return y.match(hc) || [];
    }
    var Kc = function y(C) {
      C = C == null ? xe : Mn.defaults(xe.Object(), C, Mn.pick(xe, gc));
      var k = C.Array, V = C.Date, K = C.Error, de = C.Function, Me = C.Math, ye = C.Object, Zi = C.RegExp, Xc = C.String, _t = C.TypeError, Ss = k.prototype, Jc = de.prototype, Vn = ye.prototype, Es = C["__core-js_shared__"], Ts = Jc.toString, ge = Vn.hasOwnProperty, Zc = 0, Gr = function() {
        var e = /[^.]+$/.exec(Es && Es.keys && Es.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Ls = Vn.toString, Qc = Ts.call(ye), jc = xe._, ed = Zi(
        "^" + Ts.call(ge).replace(Ii, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Bs = Tr ? C.Buffer : i, en = C.Symbol, As = C.Uint8Array, qr = Bs ? Bs.allocUnsafe : i, Os = Fr(ye.getPrototypeOf, ye), zr = ye.create, Yr = Vn.propertyIsEnumerable, Rs = Ss.splice, Kr = en ? en.isConcatSpreadable : i, Zn = en ? en.iterator : i, pn = en ? en.toStringTag : i, Is = function() {
        try {
          var e = bn(ye, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), td = C.clearTimeout !== xe.clearTimeout && C.clearTimeout, nd = V && V.now !== xe.Date.now && V.now, sd = C.setTimeout !== xe.setTimeout && C.setTimeout, Ps = Me.ceil, Ns = Me.floor, Qi = ye.getOwnPropertySymbols, id = Bs ? Bs.isBuffer : i, Xr = C.isFinite, od = Ss.join, rd = Fr(ye.keys, ye), Ve = Me.max, Fe = Me.min, ld = V.now, ad = C.parseInt, Jr = Me.random, ud = Ss.reverse, ji = bn(C, "DataView"), Qn = bn(C, "Map"), eo = bn(C, "Promise"), Dn = bn(C, "Set"), jn = bn(C, "WeakMap"), es = bn(ye, "create"), Ms = jn && new jn(), Wn = {}, cd = $n(ji), dd = $n(Qn), fd = $n(eo), hd = $n(Dn), vd = $n(jn), Vs = en ? en.prototype : i, ts = Vs ? Vs.valueOf : i, Zr = Vs ? Vs.toString : i;
      function a(e) {
        if (Be(e) && !J(e) && !(e instanceof re)) {
          if (e instanceof mt)
            return e;
          if (ge.call(e, "__wrapped__"))
            return Ql(e);
        }
        return new mt(e);
      }
      var xn = function() {
        function e() {
        }
        return function(t) {
          if (!Le(t))
            return {};
          if (zr)
            return zr(t);
          e.prototype = t;
          var s = new e();
          return e.prototype = i, s;
        };
      }();
      function Ds() {
      }
      function mt(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i;
      }
      a.templateSettings = {
        escape: Lu,
        evaluate: Bu,
        interpolate: rr,
        variable: "",
        imports: {
          _: a
        }
      }, a.prototype = Ds.prototype, a.prototype.constructor = a, mt.prototype = xn(Ds.prototype), mt.prototype.constructor = mt;
      function re(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = vt, this.__views__ = [];
      }
      function pd() {
        var e = new re(this.__wrapped__);
        return e.__actions__ = Je(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Je(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Je(this.__views__), e;
      }
      function gd() {
        if (this.__filtered__) {
          var e = new re(this);
          e.__dir__ = -1, e.__filtered__ = true;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function _d() {
        var e = this.__wrapped__.value(), t = this.__dir__, s = J(e), o = t < 0, l = s ? e.length : 0, u = Af(0, l, this.__views__), d = u.start, p = u.end, $ = p - d, S = o ? p : d - 1, E = this.__iteratees__, L = E.length, M = 0, D = Fe($, this.__takeCount__);
        if (!s || !o && l == $ && D == $)
          return $l(e, this.__actions__);
        var U = [];
        e:
          for (; $-- && M < D; ) {
            S += t;
            for (var ne = -1, G = e[S]; ++ne < L; ) {
              var oe = E[ne], ue = oe.iteratee, ct = oe.type, ze = ue(G);
              if (ct == Kt)
                G = ze;
              else if (!ze) {
                if (ct == Sn)
                  continue e;
                break e;
              }
            }
            U[M++] = G;
          }
        return U;
      }
      re.prototype = xn(Ds.prototype), re.prototype.constructor = re;
      function gn(e) {
        var t = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++t < s; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function md() {
        this.__data__ = es ? es(null) : {}, this.size = 0;
      }
      function yd(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function bd(e) {
        var t = this.__data__;
        if (es) {
          var s = t[e];
          return s === b ? i : s;
        }
        return ge.call(t, e) ? t[e] : i;
      }
      function $d(e) {
        var t = this.__data__;
        return es ? t[e] !== i : ge.call(t, e);
      }
      function wd(e, t) {
        var s = this.__data__;
        return this.size += this.has(e) ? 0 : 1, s[e] = es && t === i ? b : t, this;
      }
      gn.prototype.clear = md, gn.prototype.delete = yd, gn.prototype.get = bd, gn.prototype.has = $d, gn.prototype.set = wd;
      function Dt(e) {
        var t = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++t < s; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function kd() {
        this.__data__ = [], this.size = 0;
      }
      function Cd(e) {
        var t = this.__data__, s = Ws(t, e);
        if (s < 0)
          return false;
        var o = t.length - 1;
        return s == o ? t.pop() : Rs.call(t, s, 1), --this.size, true;
      }
      function Sd(e) {
        var t = this.__data__, s = Ws(t, e);
        return s < 0 ? i : t[s][1];
      }
      function Ed(e) {
        return Ws(this.__data__, e) > -1;
      }
      function Td(e, t) {
        var s = this.__data__, o = Ws(s, e);
        return o < 0 ? (++this.size, s.push([e, t])) : s[o][1] = t, this;
      }
      Dt.prototype.clear = kd, Dt.prototype.delete = Cd, Dt.prototype.get = Sd, Dt.prototype.has = Ed, Dt.prototype.set = Td;
      function Wt(e) {
        var t = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++t < s; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function Ld() {
        this.size = 0, this.__data__ = {
          hash: new gn(),
          map: new (Qn || Dt)(),
          string: new gn()
        };
      }
      function Bd(e) {
        var t = Zs(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function Ad(e) {
        return Zs(this, e).get(e);
      }
      function Od(e) {
        return Zs(this, e).has(e);
      }
      function Rd(e, t) {
        var s = Zs(this, e), o = s.size;
        return s.set(e, t), this.size += s.size == o ? 0 : 1, this;
      }
      Wt.prototype.clear = Ld, Wt.prototype.delete = Bd, Wt.prototype.get = Ad, Wt.prototype.has = Od, Wt.prototype.set = Rd;
      function _n(e) {
        var t = -1, s = e == null ? 0 : e.length;
        for (this.__data__ = new Wt(); ++t < s; )
          this.add(e[t]);
      }
      function Id(e) {
        return this.__data__.set(e, b), this;
      }
      function Pd(e) {
        return this.__data__.has(e);
      }
      _n.prototype.add = _n.prototype.push = Id, _n.prototype.has = Pd;
      function Tt(e) {
        var t = this.__data__ = new Dt(e);
        this.size = t.size;
      }
      function Nd() {
        this.__data__ = new Dt(), this.size = 0;
      }
      function Md(e) {
        var t = this.__data__, s = t.delete(e);
        return this.size = t.size, s;
      }
      function Vd(e) {
        return this.__data__.get(e);
      }
      function Dd(e) {
        return this.__data__.has(e);
      }
      function Wd(e, t) {
        var s = this.__data__;
        if (s instanceof Dt) {
          var o = s.__data__;
          if (!Qn || o.length < _ - 1)
            return o.push([e, t]), this.size = ++s.size, this;
          s = this.__data__ = new Wt(o);
        }
        return s.set(e, t), this.size = s.size, this;
      }
      Tt.prototype.clear = Nd, Tt.prototype.delete = Md, Tt.prototype.get = Vd, Tt.prototype.has = Dd, Tt.prototype.set = Wd;
      function Qr(e, t) {
        var s = J(e), o = !s && wn(e), l = !s && !o && rn(e), u = !s && !o && !l && Gn(e), d = s || o || l || u, p = d ? Ki(e.length, Xc) : [], $ = p.length;
        for (var S in e)
          (t || ge.call(e, S)) && !(d && (S == "length" || l && (S == "offset" || S == "parent") || u && (S == "buffer" || S == "byteLength" || S == "byteOffset") || Ut(S, $))) && p.push(S);
        return p;
      }
      function jr(e) {
        var t = e.length;
        return t ? e[fo(0, t - 1)] : i;
      }
      function xd(e, t) {
        return Qs(Je(e), mn(t, 0, e.length));
      }
      function Hd(e) {
        return Qs(Je(e));
      }
      function to(e, t, s) {
        (s !== i && !Lt(e[t], s) || s === i && !(t in e)) && xt(e, t, s);
      }
      function ns(e, t, s) {
        var o = e[t];
        (!(ge.call(e, t) && Lt(o, s)) || s === i && !(t in e)) && xt(e, t, s);
      }
      function Ws(e, t) {
        for (var s = e.length; s--; )
          if (Lt(e[s][0], t))
            return s;
        return -1;
      }
      function Fd(e, t, s, o) {
        return tn(e, function(l, u, d) {
          t(o, l, s(l), d);
        }), o;
      }
      function el(e, t) {
        return e && Pt(t, De(t), e);
      }
      function Ud(e, t) {
        return e && Pt(t, Qe(t), e);
      }
      function xt(e, t, s) {
        t == "__proto__" && Is ? Is(e, t, {
          configurable: true,
          enumerable: true,
          value: s,
          writable: true
        }) : e[t] = s;
      }
      function no(e, t) {
        for (var s = -1, o = t.length, l = k(o), u = e == null; ++s < o; )
          l[s] = u ? i : Vo(e, t[s]);
        return l;
      }
      function mn(e, t, s) {
        return e === e && (s !== i && (e = e <= s ? e : s), t !== i && (e = e >= t ? e : t)), e;
      }
      function yt(e, t, s, o, l, u) {
        var d, p = t & O, $ = t & B, S = t & F;
        if (s && (d = l ? s(e, o, l, u) : s(e)), d !== i)
          return d;
        if (!Le(e))
          return e;
        var E = J(e);
        if (E) {
          if (d = Rf(e), !p)
            return Je(e, d);
        } else {
          var L = Ue(e), M = L == Bn || L == ms;
          if (rn(e))
            return Cl(e, p);
          if (L == nt || L == Xt || M && !l) {
            if (d = $ || M ? {} : Ul(e), !p)
              return $ ? $f(e, Ud(d, e)) : bf(e, el(d, e));
          } else {
            if (!be[L])
              return l ? e : {};
            d = If(e, L, p);
          }
        }
        u || (u = new Tt());
        var D = u.get(e);
        if (D)
          return D;
        u.set(e, d), ma(e) ? e.forEach(function(G) {
          d.add(yt(G, t, s, G, e, u));
        }) : ga(e) && e.forEach(function(G, oe) {
          d.set(oe, yt(G, t, s, oe, e, u));
        });
        var U = S ? $ ? ko : wo : $ ? Qe : De, ne = E ? i : U(e);
        return gt(ne || e, function(G, oe) {
          ne && (oe = G, G = e[oe]), ns(d, oe, yt(G, t, s, oe, e, u));
        }), d;
      }
      function Gd(e) {
        var t = De(e);
        return function(s) {
          return tl(s, e, t);
        };
      }
      function tl(e, t, s) {
        var o = s.length;
        if (e == null)
          return !o;
        for (e = ye(e); o--; ) {
          var l = s[o], u = t[l], d = e[l];
          if (d === i && !(l in e) || !u(d))
            return false;
        }
        return true;
      }
      function nl(e, t, s) {
        if (typeof e != "function")
          throw new _t(v);
        return us(function() {
          e.apply(i, s);
        }, t);
      }
      function ss(e, t, s, o) {
        var l = -1, u = ws, d = true, p = e.length, $ = [], S = t.length;
        if (!p)
          return $;
        s && (t = Se(t, lt(s))), o ? (u = Fi, d = false) : t.length >= _ && (u = Jn, d = false, t = new _n(t));
        e:
          for (; ++l < p; ) {
            var E = e[l], L = s == null ? E : s(E);
            if (E = o || E !== 0 ? E : 0, d && L === L) {
              for (var M = S; M--; )
                if (t[M] === L)
                  continue e;
              $.push(E);
            } else
              u(t, L, o) || $.push(E);
          }
        return $;
      }
      var tn = Bl(It), sl = Bl(io, true);
      function qd(e, t) {
        var s = true;
        return tn(e, function(o, l, u) {
          return s = !!t(o, l, u), s;
        }), s;
      }
      function xs(e, t, s) {
        for (var o = -1, l = e.length; ++o < l; ) {
          var u = e[o], d = t(u);
          if (d != null && (p === i ? d === d && !ut(d) : s(d, p)))
            var p = d, $ = u;
        }
        return $;
      }
      function zd(e, t, s, o) {
        var l = e.length;
        for (s = j(s), s < 0 && (s = -s > l ? 0 : l + s), o = o === i || o > l ? l : j(o), o < 0 && (o += l), o = s > o ? 0 : ba(o); s < o; )
          e[s++] = t;
        return e;
      }
      function il(e, t) {
        var s = [];
        return tn(e, function(o, l, u) {
          t(o, l, u) && s.push(o);
        }), s;
      }
      function He(e, t, s, o, l) {
        var u = -1, d = e.length;
        for (s || (s = Nf), l || (l = []); ++u < d; ) {
          var p = e[u];
          t > 0 && s(p) ? t > 1 ? He(p, t - 1, s, o, l) : Qt(l, p) : o || (l[l.length] = p);
        }
        return l;
      }
      var so = Al(), ol = Al(true);
      function It(e, t) {
        return e && so(e, t, De);
      }
      function io(e, t) {
        return e && ol(e, t, De);
      }
      function Hs(e, t) {
        return Zt(t, function(s) {
          return Gt(e[s]);
        });
      }
      function yn(e, t) {
        t = sn(t, e);
        for (var s = 0, o = t.length; e != null && s < o; )
          e = e[Nt(t[s++])];
        return s && s == o ? e : i;
      }
      function rl(e, t, s) {
        var o = t(e);
        return J(e) ? o : Qt(o, s(e));
      }
      function Ge(e) {
        return e == null ? e === i ? q : Xn : pn && pn in ye(e) ? Bf(e) : Ff(e);
      }
      function oo(e, t) {
        return e > t;
      }
      function Yd(e, t) {
        return e != null && ge.call(e, t);
      }
      function Kd(e, t) {
        return e != null && t in ye(e);
      }
      function Xd(e, t, s) {
        return e >= Fe(t, s) && e < Ve(t, s);
      }
      function ro(e, t, s) {
        for (var o = s ? Fi : ws, l = e[0].length, u = e.length, d = u, p = k(u), $ = 1 / 0, S = []; d--; ) {
          var E = e[d];
          d && t && (E = Se(E, lt(t))), $ = Fe(E.length, $), p[d] = !s && (t || l >= 120 && E.length >= 120) ? new _n(d && E) : i;
        }
        E = e[0];
        var L = -1, M = p[0];
        e:
          for (; ++L < l && S.length < $; ) {
            var D = E[L], U = t ? t(D) : D;
            if (D = s || D !== 0 ? D : 0, !(M ? Jn(M, U) : o(S, U, s))) {
              for (d = u; --d; ) {
                var ne = p[d];
                if (!(ne ? Jn(ne, U) : o(e[d], U, s)))
                  continue e;
              }
              M && M.push(U), S.push(D);
            }
          }
        return S;
      }
      function Jd(e, t, s, o) {
        return It(e, function(l, u, d) {
          t(o, s(l), u, d);
        }), o;
      }
      function is(e, t, s) {
        t = sn(t, e), e = Yl(e, t);
        var o = e == null ? e : e[Nt($t(t))];
        return o == null ? i : rt(o, e, s);
      }
      function ll(e) {
        return Be(e) && Ge(e) == Xt;
      }
      function Zd(e) {
        return Be(e) && Ge(e) == it;
      }
      function Qd(e) {
        return Be(e) && Ge(e) == cn;
      }
      function os(e, t, s, o, l) {
        return e === t ? true : e == null || t == null || !Be(e) && !Be(t) ? e !== e && t !== t : jd(e, t, s, o, os, l);
      }
      function jd(e, t, s, o, l, u) {
        var d = J(e), p = J(t), $ = d ? Tn : Ue(e), S = p ? Tn : Ue(t);
        $ = $ == Xt ? nt : $, S = S == Xt ? nt : S;
        var E = $ == nt, L = S == nt, M = $ == S;
        if (M && rn(e)) {
          if (!rn(t))
            return false;
          d = true, E = false;
        }
        if (M && !E)
          return u || (u = new Tt()), d || Gn(e) ? xl(e, t, s, o, l, u) : Tf(e, t, $, s, o, l, u);
        if (!(s & Z)) {
          var D = E && ge.call(e, "__wrapped__"), U = L && ge.call(t, "__wrapped__");
          if (D || U) {
            var ne = D ? e.value() : e, G = U ? t.value() : t;
            return u || (u = new Tt()), l(ne, G, s, o, u);
          }
        }
        return M ? (u || (u = new Tt()), Lf(e, t, s, o, l, u)) : false;
      }
      function ef(e) {
        return Be(e) && Ue(e) == Ke;
      }
      function lo(e, t, s, o) {
        var l = s.length, u = l, d = !o;
        if (e == null)
          return !u;
        for (e = ye(e); l--; ) {
          var p = s[l];
          if (d && p[2] ? p[1] !== e[p[0]] : !(p[0] in e))
            return false;
        }
        for (; ++l < u; ) {
          p = s[l];
          var $ = p[0], S = e[$], E = p[1];
          if (d && p[2]) {
            if (S === i && !($ in e))
              return false;
          } else {
            var L = new Tt();
            if (o)
              var M = o(S, E, $, e, t, L);
            if (!(M === i ? os(E, S, Z | le, o, L) : M))
              return false;
          }
        }
        return true;
      }
      function al(e) {
        if (!Le(e) || Vf(e))
          return false;
        var t = Gt(e) ? ed : Gu;
        return t.test($n(e));
      }
      function tf(e) {
        return Be(e) && Ge(e) == dn;
      }
      function nf(e) {
        return Be(e) && Ue(e) == st;
      }
      function sf(e) {
        return Be(e) && ii(e.length) && !!Ce[Ge(e)];
      }
      function ul(e) {
        return typeof e == "function" ? e : e == null ? je : typeof e == "object" ? J(e) ? fl(e[0], e[1]) : dl(e) : Oa(e);
      }
      function ao(e) {
        if (!as(e))
          return rd(e);
        var t = [];
        for (var s in ye(e))
          ge.call(e, s) && s != "constructor" && t.push(s);
        return t;
      }
      function of(e) {
        if (!Le(e))
          return Hf(e);
        var t = as(e), s = [];
        for (var o in e)
          o == "constructor" && (t || !ge.call(e, o)) || s.push(o);
        return s;
      }
      function uo(e, t) {
        return e < t;
      }
      function cl(e, t) {
        var s = -1, o = Ze(e) ? k(e.length) : [];
        return tn(e, function(l, u, d) {
          o[++s] = t(l, u, d);
        }), o;
      }
      function dl(e) {
        var t = So(e);
        return t.length == 1 && t[0][2] ? ql(t[0][0], t[0][1]) : function(s) {
          return s === e || lo(s, e, t);
        };
      }
      function fl(e, t) {
        return To(e) && Gl(t) ? ql(Nt(e), t) : function(s) {
          var o = Vo(s, e);
          return o === i && o === t ? Do(s, e) : os(t, o, Z | le);
        };
      }
      function Fs(e, t, s, o, l) {
        e !== t && so(t, function(u, d) {
          if (l || (l = new Tt()), Le(u))
            rf(e, t, d, s, Fs, o, l);
          else {
            var p = o ? o(Bo(e, d), u, d + "", e, t, l) : i;
            p === i && (p = u), to(e, d, p);
          }
        }, Qe);
      }
      function rf(e, t, s, o, l, u, d) {
        var p = Bo(e, s), $ = Bo(t, s), S = d.get($);
        if (S) {
          to(e, s, S);
          return;
        }
        var E = u ? u(p, $, s + "", e, t, d) : i, L = E === i;
        if (L) {
          var M = J($), D = !M && rn($), U = !M && !D && Gn($);
          E = $, M || D || U ? J(p) ? E = p : Re(p) ? E = Je(p) : D ? (L = false, E = Cl($, true)) : U ? (L = false, E = Sl($, true)) : E = [] : cs($) || wn($) ? (E = p, wn(p) ? E = $a(p) : (!Le(p) || Gt(p)) && (E = Ul($))) : L = false;
        }
        L && (d.set($, E), l(E, $, o, u, d), d.delete($)), to(e, s, E);
      }
      function hl(e, t) {
        var s = e.length;
        if (!!s)
          return t += t < 0 ? s : 0, Ut(t, s) ? e[t] : i;
      }
      function vl(e, t, s) {
        t.length ? t = Se(t, function(u) {
          return J(u) ? function(d) {
            return yn(d, u.length === 1 ? u[0] : u);
          } : u;
        }) : t = [je];
        var o = -1;
        t = Se(t, lt(H()));
        var l = cl(e, function(u, d, p) {
          var $ = Se(t, function(S) {
            return S(u);
          });
          return { criteria: $, index: ++o, value: u };
        });
        return Rc(l, function(u, d) {
          return yf(u, d, s);
        });
      }
      function lf(e, t) {
        return pl(e, t, function(s, o) {
          return Do(e, o);
        });
      }
      function pl(e, t, s) {
        for (var o = -1, l = t.length, u = {}; ++o < l; ) {
          var d = t[o], p = yn(e, d);
          s(p, d) && rs(u, sn(d, e), p);
        }
        return u;
      }
      function af(e) {
        return function(t) {
          return yn(t, e);
        };
      }
      function co(e, t, s, o) {
        var l = o ? Oc : In, u = -1, d = t.length, p = e;
        for (e === t && (t = Je(t)), s && (p = Se(e, lt(s))); ++u < d; )
          for (var $ = 0, S = t[u], E = s ? s(S) : S; ($ = l(p, E, $, o)) > -1; )
            p !== e && Rs.call(p, $, 1), Rs.call(e, $, 1);
        return e;
      }
      function gl(e, t) {
        for (var s = e ? t.length : 0, o = s - 1; s--; ) {
          var l = t[s];
          if (s == o || l !== u) {
            var u = l;
            Ut(l) ? Rs.call(e, l, 1) : po(e, l);
          }
        }
        return e;
      }
      function fo(e, t) {
        return e + Ns(Jr() * (t - e + 1));
      }
      function uf(e, t, s, o) {
        for (var l = -1, u = Ve(Ps((t - e) / (s || 1)), 0), d = k(u); u--; )
          d[o ? u : ++l] = e, e += s;
        return d;
      }
      function ho(e, t) {
        var s = "";
        if (!e || t < 1 || t > Rt)
          return s;
        do
          t % 2 && (s += e), t = Ns(t / 2), t && (e += e);
        while (t);
        return s;
      }
      function se(e, t) {
        return Ao(zl(e, t, je), e + "");
      }
      function cf(e) {
        return jr(qn(e));
      }
      function df(e, t) {
        var s = qn(e);
        return Qs(s, mn(t, 0, s.length));
      }
      function rs(e, t, s, o) {
        if (!Le(e))
          return e;
        t = sn(t, e);
        for (var l = -1, u = t.length, d = u - 1, p = e; p != null && ++l < u; ) {
          var $ = Nt(t[l]), S = s;
          if ($ === "__proto__" || $ === "constructor" || $ === "prototype")
            return e;
          if (l != d) {
            var E = p[$];
            S = o ? o(E, $, p) : i, S === i && (S = Le(E) ? E : Ut(t[l + 1]) ? [] : {});
          }
          ns(p, $, S), p = p[$];
        }
        return e;
      }
      var _l = Ms ? function(e, t) {
        return Ms.set(e, t), e;
      } : je, ff = Is ? function(e, t) {
        return Is(e, "toString", {
          configurable: true,
          enumerable: false,
          value: xo(t),
          writable: true
        });
      } : je;
      function hf(e) {
        return Qs(qn(e));
      }
      function bt(e, t, s) {
        var o = -1, l = e.length;
        t < 0 && (t = -t > l ? 0 : l + t), s = s > l ? l : s, s < 0 && (s += l), l = t > s ? 0 : s - t >>> 0, t >>>= 0;
        for (var u = k(l); ++o < l; )
          u[o] = e[o + t];
        return u;
      }
      function vf(e, t) {
        var s;
        return tn(e, function(o, l, u) {
          return s = t(o, l, u), !s;
        }), !!s;
      }
      function Us(e, t, s) {
        var o = 0, l = e == null ? o : e.length;
        if (typeof t == "number" && t === t && l <= wi) {
          for (; o < l; ) {
            var u = o + l >>> 1, d = e[u];
            d !== null && !ut(d) && (s ? d <= t : d < t) ? o = u + 1 : l = u;
          }
          return l;
        }
        return vo(e, t, je, s);
      }
      function vo(e, t, s, o) {
        var l = 0, u = e == null ? 0 : e.length;
        if (u === 0)
          return 0;
        t = s(t);
        for (var d = t !== t, p = t === null, $ = ut(t), S = t === i; l < u; ) {
          var E = Ns((l + u) / 2), L = s(e[E]), M = L !== i, D = L === null, U = L === L, ne = ut(L);
          if (d)
            var G = o || U;
          else
            S ? G = U && (o || M) : p ? G = U && M && (o || !D) : $ ? G = U && M && !D && (o || !ne) : D || ne ? G = false : G = o ? L <= t : L < t;
          G ? l = E + 1 : u = E;
        }
        return Fe(u, $i);
      }
      function ml(e, t) {
        for (var s = -1, o = e.length, l = 0, u = []; ++s < o; ) {
          var d = e[s], p = t ? t(d) : d;
          if (!s || !Lt(p, $)) {
            var $ = p;
            u[l++] = d === 0 ? 0 : d;
          }
        }
        return u;
      }
      function yl(e) {
        return typeof e == "number" ? e : ut(e) ? En : +e;
      }
      function at(e) {
        if (typeof e == "string")
          return e;
        if (J(e))
          return Se(e, at) + "";
        if (ut(e))
          return Zr ? Zr.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -Vt ? "-0" : t;
      }
      function nn(e, t, s) {
        var o = -1, l = ws, u = e.length, d = true, p = [], $ = p;
        if (s)
          d = false, l = Fi;
        else if (u >= _) {
          var S = t ? null : Sf(e);
          if (S)
            return Cs(S);
          d = false, l = Jn, $ = new _n();
        } else
          $ = t ? [] : p;
        e:
          for (; ++o < u; ) {
            var E = e[o], L = t ? t(E) : E;
            if (E = s || E !== 0 ? E : 0, d && L === L) {
              for (var M = $.length; M--; )
                if ($[M] === L)
                  continue e;
              t && $.push(L), p.push(E);
            } else
              l($, L, s) || ($ !== p && $.push(L), p.push(E));
          }
        return p;
      }
      function po(e, t) {
        return t = sn(t, e), e = Yl(e, t), e == null || delete e[Nt($t(t))];
      }
      function bl(e, t, s, o) {
        return rs(e, t, s(yn(e, t)), o);
      }
      function Gs(e, t, s, o) {
        for (var l = e.length, u = o ? l : -1; (o ? u-- : ++u < l) && t(e[u], u, e); )
          ;
        return s ? bt(e, o ? 0 : u, o ? u + 1 : l) : bt(e, o ? u + 1 : 0, o ? l : u);
      }
      function $l(e, t) {
        var s = e;
        return s instanceof re && (s = s.value()), Ui(t, function(o, l) {
          return l.func.apply(l.thisArg, Qt([o], l.args));
        }, s);
      }
      function go(e, t, s) {
        var o = e.length;
        if (o < 2)
          return o ? nn(e[0]) : [];
        for (var l = -1, u = k(o); ++l < o; )
          for (var d = e[l], p = -1; ++p < o; )
            p != l && (u[l] = ss(u[l] || d, e[p], t, s));
        return nn(He(u, 1), t, s);
      }
      function wl(e, t, s) {
        for (var o = -1, l = e.length, u = t.length, d = {}; ++o < l; ) {
          var p = o < u ? t[o] : i;
          s(d, e[o], p);
        }
        return d;
      }
      function _o(e) {
        return Re(e) ? e : [];
      }
      function mo(e) {
        return typeof e == "function" ? e : je;
      }
      function sn(e, t) {
        return J(e) ? e : To(e, t) ? [e] : Zl(he(e));
      }
      var pf = se;
      function on(e, t, s) {
        var o = e.length;
        return s = s === i ? o : s, !t && s >= o ? e : bt(e, t, s);
      }
      var kl = td || function(e) {
        return xe.clearTimeout(e);
      };
      function Cl(e, t) {
        if (t)
          return e.slice();
        var s = e.length, o = qr ? qr(s) : new e.constructor(s);
        return e.copy(o), o;
      }
      function yo(e) {
        var t = new e.constructor(e.byteLength);
        return new As(t).set(new As(e)), t;
      }
      function gf(e, t) {
        var s = t ? yo(e.buffer) : e.buffer;
        return new e.constructor(s, e.byteOffset, e.byteLength);
      }
      function _f(e) {
        var t = new e.constructor(e.source, lr.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function mf(e) {
        return ts ? ye(ts.call(e)) : {};
      }
      function Sl(e, t) {
        var s = t ? yo(e.buffer) : e.buffer;
        return new e.constructor(s, e.byteOffset, e.length);
      }
      function El(e, t) {
        if (e !== t) {
          var s = e !== i, o = e === null, l = e === e, u = ut(e), d = t !== i, p = t === null, $ = t === t, S = ut(t);
          if (!p && !S && !u && e > t || u && d && $ && !p && !S || o && d && $ || !s && $ || !l)
            return 1;
          if (!o && !u && !S && e < t || S && s && l && !o && !u || p && s && l || !d && l || !$)
            return -1;
        }
        return 0;
      }
      function yf(e, t, s) {
        for (var o = -1, l = e.criteria, u = t.criteria, d = l.length, p = s.length; ++o < d; ) {
          var $ = El(l[o], u[o]);
          if ($) {
            if (o >= p)
              return $;
            var S = s[o];
            return $ * (S == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function Tl(e, t, s, o) {
        for (var l = -1, u = e.length, d = s.length, p = -1, $ = t.length, S = Ve(u - d, 0), E = k($ + S), L = !o; ++p < $; )
          E[p] = t[p];
        for (; ++l < d; )
          (L || l < u) && (E[s[l]] = e[l]);
        for (; S--; )
          E[p++] = e[l++];
        return E;
      }
      function Ll(e, t, s, o) {
        for (var l = -1, u = e.length, d = -1, p = s.length, $ = -1, S = t.length, E = Ve(u - p, 0), L = k(E + S), M = !o; ++l < E; )
          L[l] = e[l];
        for (var D = l; ++$ < S; )
          L[D + $] = t[$];
        for (; ++d < p; )
          (M || l < u) && (L[D + s[d]] = e[l++]);
        return L;
      }
      function Je(e, t) {
        var s = -1, o = e.length;
        for (t || (t = k(o)); ++s < o; )
          t[s] = e[s];
        return t;
      }
      function Pt(e, t, s, o) {
        var l = !s;
        s || (s = {});
        for (var u = -1, d = t.length; ++u < d; ) {
          var p = t[u], $ = o ? o(s[p], e[p], p, s, e) : i;
          $ === i && ($ = e[p]), l ? xt(s, p, $) : ns(s, p, $);
        }
        return s;
      }
      function bf(e, t) {
        return Pt(e, Eo(e), t);
      }
      function $f(e, t) {
        return Pt(e, Hl(e), t);
      }
      function qs(e, t) {
        return function(s, o) {
          var l = J(s) ? Sc : Fd, u = t ? t() : {};
          return l(s, e, H(o, 2), u);
        };
      }
      function Hn(e) {
        return se(function(t, s) {
          var o = -1, l = s.length, u = l > 1 ? s[l - 1] : i, d = l > 2 ? s[2] : i;
          for (u = e.length > 3 && typeof u == "function" ? (l--, u) : i, d && qe(s[0], s[1], d) && (u = l < 3 ? i : u, l = 1), t = ye(t); ++o < l; ) {
            var p = s[o];
            p && e(t, p, o, u);
          }
          return t;
        });
      }
      function Bl(e, t) {
        return function(s, o) {
          if (s == null)
            return s;
          if (!Ze(s))
            return e(s, o);
          for (var l = s.length, u = t ? l : -1, d = ye(s); (t ? u-- : ++u < l) && o(d[u], u, d) !== false; )
            ;
          return s;
        };
      }
      function Al(e) {
        return function(t, s, o) {
          for (var l = -1, u = ye(t), d = o(t), p = d.length; p--; ) {
            var $ = d[e ? p : ++l];
            if (s(u[$], $, u) === false)
              break;
          }
          return t;
        };
      }
      function wf(e, t, s) {
        var o = t & me, l = ls(e);
        function u() {
          var d = this && this !== xe && this instanceof u ? l : e;
          return d.apply(o ? s : this, arguments);
        }
        return u;
      }
      function Ol(e) {
        return function(t) {
          t = he(t);
          var s = Pn(t) ? Et(t) : i, o = s ? s[0] : t.charAt(0), l = s ? on(s, 1).join("") : t.slice(1);
          return o[e]() + l;
        };
      }
      function Fn(e) {
        return function(t) {
          return Ui(Ba(La(t).replace(dc, "")), e, "");
        };
      }
      function ls(e) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var s = xn(e.prototype), o = e.apply(s, t);
          return Le(o) ? o : s;
        };
      }
      function kf(e, t, s) {
        var o = ls(e);
        function l() {
          for (var u = arguments.length, d = k(u), p = u, $ = Un(l); p--; )
            d[p] = arguments[p];
          var S = u < 3 && d[0] !== $ && d[u - 1] !== $ ? [] : jt(d, $);
          if (u -= S.length, u < s)
            return Ml(
              e,
              t,
              zs,
              l.placeholder,
              i,
              d,
              S,
              i,
              i,
              s - u
            );
          var E = this && this !== xe && this instanceof l ? o : e;
          return rt(E, this, d);
        }
        return l;
      }
      function Rl(e) {
        return function(t, s, o) {
          var l = ye(t);
          if (!Ze(t)) {
            var u = H(s, 3);
            t = De(t), s = function(p) {
              return u(l[p], p, l);
            };
          }
          var d = e(t, s, o);
          return d > -1 ? l[u ? t[d] : d] : i;
        };
      }
      function Il(e) {
        return Ft(function(t) {
          var s = t.length, o = s, l = mt.prototype.thru;
          for (e && t.reverse(); o--; ) {
            var u = t[o];
            if (typeof u != "function")
              throw new _t(v);
            if (l && !d && Js(u) == "wrapper")
              var d = new mt([], true);
          }
          for (o = d ? o : s; ++o < s; ) {
            u = t[o];
            var p = Js(u), $ = p == "wrapper" ? Co(u) : i;
            $ && Lo($[0]) && $[1] == (z | pe | Q | X) && !$[4].length && $[9] == 1 ? d = d[Js($[0])].apply(d, $[3]) : d = u.length == 1 && Lo(u) ? d[p]() : d.thru(u);
          }
          return function() {
            var S = arguments, E = S[0];
            if (d && S.length == 1 && J(E))
              return d.plant(E).value();
            for (var L = 0, M = s ? t[L].apply(this, S) : E; ++L < s; )
              M = t[L].call(this, M);
            return M;
          };
        });
      }
      function zs(e, t, s, o, l, u, d, p, $, S) {
        var E = t & z, L = t & me, M = t & te, D = t & (pe | ae), U = t & Te, ne = M ? i : ls(e);
        function G() {
          for (var oe = arguments.length, ue = k(oe), ct = oe; ct--; )
            ue[ct] = arguments[ct];
          if (D)
            var ze = Un(G), dt = Pc(ue, ze);
          if (o && (ue = Tl(ue, o, l, D)), u && (ue = Ll(ue, u, d, D)), oe -= dt, D && oe < S) {
            var Ie = jt(ue, ze);
            return Ml(
              e,
              t,
              zs,
              G.placeholder,
              s,
              ue,
              Ie,
              p,
              $,
              S - oe
            );
          }
          var Bt = L ? s : this, zt = M ? Bt[e] : e;
          return oe = ue.length, p ? ue = Uf(ue, p) : U && oe > 1 && ue.reverse(), E && $ < oe && (ue.length = $), this && this !== xe && this instanceof G && (zt = ne || ls(zt)), zt.apply(Bt, ue);
        }
        return G;
      }
      function Pl(e, t) {
        return function(s, o) {
          return Jd(s, e, t(o), {});
        };
      }
      function Ys(e, t) {
        return function(s, o) {
          var l;
          if (s === i && o === i)
            return t;
          if (s !== i && (l = s), o !== i) {
            if (l === i)
              return o;
            typeof s == "string" || typeof o == "string" ? (s = at(s), o = at(o)) : (s = yl(s), o = yl(o)), l = e(s, o);
          }
          return l;
        };
      }
      function bo(e) {
        return Ft(function(t) {
          return t = Se(t, lt(H())), se(function(s) {
            var o = this;
            return e(t, function(l) {
              return rt(l, o, s);
            });
          });
        });
      }
      function Ks(e, t) {
        t = t === i ? " " : at(t);
        var s = t.length;
        if (s < 2)
          return s ? ho(t, e) : t;
        var o = ho(t, Ps(e / Nn(t)));
        return Pn(t) ? on(Et(o), 0, e).join("") : o.slice(0, e);
      }
      function Cf(e, t, s, o) {
        var l = t & me, u = ls(e);
        function d() {
          for (var p = -1, $ = arguments.length, S = -1, E = o.length, L = k(E + $), M = this && this !== xe && this instanceof d ? u : e; ++S < E; )
            L[S] = o[S];
          for (; $--; )
            L[S++] = arguments[++p];
          return rt(M, l ? s : this, L);
        }
        return d;
      }
      function Nl(e) {
        return function(t, s, o) {
          return o && typeof o != "number" && qe(t, s, o) && (s = o = i), t = qt(t), s === i ? (s = t, t = 0) : s = qt(s), o = o === i ? t < s ? 1 : -1 : qt(o), uf(t, s, o, e);
        };
      }
      function Xs(e) {
        return function(t, s) {
          return typeof t == "string" && typeof s == "string" || (t = wt(t), s = wt(s)), e(t, s);
        };
      }
      function Ml(e, t, s, o, l, u, d, p, $, S) {
        var E = t & pe, L = E ? d : i, M = E ? i : d, D = E ? u : i, U = E ? i : u;
        t |= E ? Q : W, t &= ~(E ? W : Q), t & Ee || (t &= ~(me | te));
        var ne = [
          e,
          t,
          l,
          D,
          L,
          U,
          M,
          p,
          $,
          S
        ], G = s.apply(i, ne);
        return Lo(e) && Kl(G, ne), G.placeholder = o, Xl(G, e, t);
      }
      function $o(e) {
        var t = Me[e];
        return function(s, o) {
          if (s = wt(s), o = o == null ? 0 : Fe(j(o), 292), o && Xr(s)) {
            var l = (he(s) + "e").split("e"), u = t(l[0] + "e" + (+l[1] + o));
            return l = (he(u) + "e").split("e"), +(l[0] + "e" + (+l[1] - o));
          }
          return t(s);
        };
      }
      var Sf = Dn && 1 / Cs(new Dn([, -0]))[1] == Vt ? function(e) {
        return new Dn(e);
      } : Uo;
      function Vl(e) {
        return function(t) {
          var s = Ue(t);
          return s == Ke ? Ji(t) : s == st ? Hc(t) : Ic(t, e(t));
        };
      }
      function Ht(e, t, s, o, l, u, d, p) {
        var $ = t & te;
        if (!$ && typeof e != "function")
          throw new _t(v);
        var S = o ? o.length : 0;
        if (S || (t &= ~(Q | W), o = l = i), d = d === i ? d : Ve(j(d), 0), p = p === i ? p : j(p), S -= l ? l.length : 0, t & W) {
          var E = o, L = l;
          o = l = i;
        }
        var M = $ ? i : Co(e), D = [
          e,
          t,
          s,
          o,
          l,
          E,
          L,
          u,
          d,
          p
        ];
        if (M && xf(D, M), e = D[0], t = D[1], s = D[2], o = D[3], l = D[4], p = D[9] = D[9] === i ? $ ? 0 : e.length : Ve(D[9] - S, 0), !p && t & (pe | ae) && (t &= ~(pe | ae)), !t || t == me)
          var U = wf(e, t, s);
        else
          t == pe || t == ae ? U = kf(e, t, p) : (t == Q || t == (me | Q)) && !l.length ? U = Cf(e, t, s, o) : U = zs.apply(i, D);
        var ne = M ? _l : Kl;
        return Xl(ne(U, D), e, t);
      }
      function Dl(e, t, s, o) {
        return e === i || Lt(e, Vn[s]) && !ge.call(o, s) ? t : e;
      }
      function Wl(e, t, s, o, l, u) {
        return Le(e) && Le(t) && (u.set(t, e), Fs(e, t, i, Wl, u), u.delete(t)), e;
      }
      function Ef(e) {
        return cs(e) ? i : e;
      }
      function xl(e, t, s, o, l, u) {
        var d = s & Z, p = e.length, $ = t.length;
        if (p != $ && !(d && $ > p))
          return false;
        var S = u.get(e), E = u.get(t);
        if (S && E)
          return S == t && E == e;
        var L = -1, M = true, D = s & le ? new _n() : i;
        for (u.set(e, t), u.set(t, e); ++L < p; ) {
          var U = e[L], ne = t[L];
          if (o)
            var G = d ? o(ne, U, L, t, e, u) : o(U, ne, L, e, t, u);
          if (G !== i) {
            if (G)
              continue;
            M = false;
            break;
          }
          if (D) {
            if (!Gi(t, function(oe, ue) {
              if (!Jn(D, ue) && (U === oe || l(U, oe, s, o, u)))
                return D.push(ue);
            })) {
              M = false;
              break;
            }
          } else if (!(U === ne || l(U, ne, s, o, u))) {
            M = false;
            break;
          }
        }
        return u.delete(e), u.delete(t), M;
      }
      function Tf(e, t, s, o, l, u, d) {
        switch (s) {
          case ot:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return false;
            e = e.buffer, t = t.buffer;
          case it:
            return !(e.byteLength != t.byteLength || !u(new As(e), new As(t)));
          case un:
          case cn:
          case Jt:
            return Lt(+e, +t);
          case Ln:
            return e.name == t.name && e.message == t.message;
          case dn:
          case fn:
            return e == t + "";
          case Ke:
            var p = Ji;
          case st:
            var $ = o & Z;
            if (p || (p = Cs), e.size != t.size && !$)
              return false;
            var S = d.get(e);
            if (S)
              return S == t;
            o |= le, d.set(e, t);
            var E = xl(p(e), p(t), o, l, u, d);
            return d.delete(e), E;
          case I:
            if (ts)
              return ts.call(e) == ts.call(t);
        }
        return false;
      }
      function Lf(e, t, s, o, l, u) {
        var d = s & Z, p = wo(e), $ = p.length, S = wo(t), E = S.length;
        if ($ != E && !d)
          return false;
        for (var L = $; L--; ) {
          var M = p[L];
          if (!(d ? M in t : ge.call(t, M)))
            return false;
        }
        var D = u.get(e), U = u.get(t);
        if (D && U)
          return D == t && U == e;
        var ne = true;
        u.set(e, t), u.set(t, e);
        for (var G = d; ++L < $; ) {
          M = p[L];
          var oe = e[M], ue = t[M];
          if (o)
            var ct = d ? o(ue, oe, M, t, e, u) : o(oe, ue, M, e, t, u);
          if (!(ct === i ? oe === ue || l(oe, ue, s, o, u) : ct)) {
            ne = false;
            break;
          }
          G || (G = M == "constructor");
        }
        if (ne && !G) {
          var ze = e.constructor, dt = t.constructor;
          ze != dt && "constructor" in e && "constructor" in t && !(typeof ze == "function" && ze instanceof ze && typeof dt == "function" && dt instanceof dt) && (ne = false);
        }
        return u.delete(e), u.delete(t), ne;
      }
      function Ft(e) {
        return Ao(zl(e, i, ta), e + "");
      }
      function wo(e) {
        return rl(e, De, Eo);
      }
      function ko(e) {
        return rl(e, Qe, Hl);
      }
      var Co = Ms ? function(e) {
        return Ms.get(e);
      } : Uo;
      function Js(e) {
        for (var t = e.name + "", s = Wn[t], o = ge.call(Wn, t) ? s.length : 0; o--; ) {
          var l = s[o], u = l.func;
          if (u == null || u == e)
            return l.name;
        }
        return t;
      }
      function Un(e) {
        var t = ge.call(a, "placeholder") ? a : e;
        return t.placeholder;
      }
      function H() {
        var e = a.iteratee || Ho;
        return e = e === Ho ? ul : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Zs(e, t) {
        var s = e.__data__;
        return Mf(t) ? s[typeof t == "string" ? "string" : "hash"] : s.map;
      }
      function So(e) {
        for (var t = De(e), s = t.length; s--; ) {
          var o = t[s], l = e[o];
          t[s] = [o, l, Gl(l)];
        }
        return t;
      }
      function bn(e, t) {
        var s = Dc(e, t);
        return al(s) ? s : i;
      }
      function Bf(e) {
        var t = ge.call(e, pn), s = e[pn];
        try {
          e[pn] = i;
          var o = true;
        } catch {
        }
        var l = Ls.call(e);
        return o && (t ? e[pn] = s : delete e[pn]), l;
      }
      var Eo = Qi ? function(e) {
        return e == null ? [] : (e = ye(e), Zt(Qi(e), function(t) {
          return Yr.call(e, t);
        }));
      } : Go, Hl = Qi ? function(e) {
        for (var t = []; e; )
          Qt(t, Eo(e)), e = Os(e);
        return t;
      } : Go, Ue = Ge;
      (ji && Ue(new ji(new ArrayBuffer(1))) != ot || Qn && Ue(new Qn()) != Ke || eo && Ue(eo.resolve()) != An || Dn && Ue(new Dn()) != st || jn && Ue(new jn()) != ie) && (Ue = function(e) {
        var t = Ge(e), s = t == nt ? e.constructor : i, o = s ? $n(s) : "";
        if (o)
          switch (o) {
            case cd:
              return ot;
            case dd:
              return Ke;
            case fd:
              return An;
            case hd:
              return st;
            case vd:
              return ie;
          }
        return t;
      });
      function Af(e, t, s) {
        for (var o = -1, l = s.length; ++o < l; ) {
          var u = s[o], d = u.size;
          switch (u.type) {
            case "drop":
              e += d;
              break;
            case "dropRight":
              t -= d;
              break;
            case "take":
              t = Fe(t, e + d);
              break;
            case "takeRight":
              e = Ve(e, t - d);
              break;
          }
        }
        return { start: e, end: t };
      }
      function Of(e) {
        var t = e.match(Mu);
        return t ? t[1].split(Vu) : [];
      }
      function Fl(e, t, s) {
        t = sn(t, e);
        for (var o = -1, l = t.length, u = false; ++o < l; ) {
          var d = Nt(t[o]);
          if (!(u = e != null && s(e, d)))
            break;
          e = e[d];
        }
        return u || ++o != l ? u : (l = e == null ? 0 : e.length, !!l && ii(l) && Ut(d, l) && (J(e) || wn(e)));
      }
      function Rf(e) {
        var t = e.length, s = new e.constructor(t);
        return t && typeof e[0] == "string" && ge.call(e, "index") && (s.index = e.index, s.input = e.input), s;
      }
      function Ul(e) {
        return typeof e.constructor == "function" && !as(e) ? xn(Os(e)) : {};
      }
      function If(e, t, s) {
        var o = e.constructor;
        switch (t) {
          case it:
            return yo(e);
          case un:
          case cn:
            return new o(+e);
          case ot:
            return gf(e, s);
          case Xe:
          case On:
          case hn:
          case Ti:
          case Li:
          case Bi:
          case Ai:
          case Oi:
          case Ri:
            return Sl(e, s);
          case Ke:
            return new o();
          case Jt:
          case fn:
            return new o(e);
          case dn:
            return _f(e);
          case st:
            return new o();
          case I:
            return mf(e);
        }
      }
      function Pf(e, t) {
        var s = t.length;
        if (!s)
          return e;
        var o = s - 1;
        return t[o] = (s > 1 ? "& " : "") + t[o], t = t.join(s > 2 ? ", " : " "), e.replace(Nu, `{
/* [wrapped with ` + t + `] */
`);
      }
      function Nf(e) {
        return J(e) || wn(e) || !!(Kr && e && e[Kr]);
      }
      function Ut(e, t) {
        var s = typeof e;
        return t = t == null ? Rt : t, !!t && (s == "number" || s != "symbol" && zu.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function qe(e, t, s) {
        if (!Le(s))
          return false;
        var o = typeof t;
        return (o == "number" ? Ze(s) && Ut(t, s.length) : o == "string" && t in s) ? Lt(s[t], e) : false;
      }
      function To(e, t) {
        if (J(e))
          return false;
        var s = typeof e;
        return s == "number" || s == "symbol" || s == "boolean" || e == null || ut(e) ? true : Ou.test(e) || !Au.test(e) || t != null && e in ye(t);
      }
      function Mf(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function Lo(e) {
        var t = Js(e), s = a[t];
        if (typeof s != "function" || !(t in re.prototype))
          return false;
        if (e === s)
          return true;
        var o = Co(s);
        return !!o && e === o[0];
      }
      function Vf(e) {
        return !!Gr && Gr in e;
      }
      var Df = Es ? Gt : qo;
      function as(e) {
        var t = e && e.constructor, s = typeof t == "function" && t.prototype || Vn;
        return e === s;
      }
      function Gl(e) {
        return e === e && !Le(e);
      }
      function ql(e, t) {
        return function(s) {
          return s == null ? false : s[e] === t && (t !== i || e in ye(s));
        };
      }
      function Wf(e) {
        var t = ni(e, function(o) {
          return s.size === w && s.clear(), o;
        }), s = t.cache;
        return t;
      }
      function xf(e, t) {
        var s = e[1], o = t[1], l = s | o, u = l < (me | te | z), d = o == z && s == pe || o == z && s == X && e[7].length <= t[8] || o == (z | X) && t[7].length <= t[8] && s == pe;
        if (!(u || d))
          return e;
        o & me && (e[2] = t[2], l |= s & me ? 0 : Ee);
        var p = t[3];
        if (p) {
          var $ = e[3];
          e[3] = $ ? Tl($, p, t[4]) : p, e[4] = $ ? jt(e[3], T) : t[4];
        }
        return p = t[5], p && ($ = e[5], e[5] = $ ? Ll($, p, t[6]) : p, e[6] = $ ? jt(e[5], T) : t[6]), p = t[7], p && (e[7] = p), o & z && (e[8] = e[8] == null ? t[8] : Fe(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = l, e;
      }
      function Hf(e) {
        var t = [];
        if (e != null)
          for (var s in ye(e))
            t.push(s);
        return t;
      }
      function Ff(e) {
        return Ls.call(e);
      }
      function zl(e, t, s) {
        return t = Ve(t === i ? e.length - 1 : t, 0), function() {
          for (var o = arguments, l = -1, u = Ve(o.length - t, 0), d = k(u); ++l < u; )
            d[l] = o[t + l];
          l = -1;
          for (var p = k(t + 1); ++l < t; )
            p[l] = o[l];
          return p[t] = s(d), rt(e, this, p);
        };
      }
      function Yl(e, t) {
        return t.length < 2 ? e : yn(e, bt(t, 0, -1));
      }
      function Uf(e, t) {
        for (var s = e.length, o = Fe(t.length, s), l = Je(e); o--; ) {
          var u = t[o];
          e[o] = Ut(u, s) ? l[u] : i;
        }
        return e;
      }
      function Bo(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var Kl = Jl(_l), us = sd || function(e, t) {
        return xe.setTimeout(e, t);
      }, Ao = Jl(ff);
      function Xl(e, t, s) {
        var o = t + "";
        return Ao(e, Pf(o, Gf(Of(o), s)));
      }
      function Jl(e) {
        var t = 0, s = 0;
        return function() {
          var o = ld(), l = mi - (o - s);
          if (s = o, l > 0) {
            if (++t >= _s)
              return arguments[0];
          } else
            t = 0;
          return e.apply(i, arguments);
        };
      }
      function Qs(e, t) {
        var s = -1, o = e.length, l = o - 1;
        for (t = t === i ? o : t; ++s < t; ) {
          var u = fo(s, l), d = e[u];
          e[u] = e[s], e[s] = d;
        }
        return e.length = t, e;
      }
      var Zl = Wf(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ru, function(s, o, l, u) {
          t.push(l ? u.replace(xu, "$1") : o || s);
        }), t;
      });
      function Nt(e) {
        if (typeof e == "string" || ut(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -Vt ? "-0" : t;
      }
      function $n(e) {
        if (e != null) {
          try {
            return Ts.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Gf(e, t) {
        return gt(ki, function(s) {
          var o = "_." + s[0];
          t & s[1] && !ws(e, o) && e.push(o);
        }), e.sort();
      }
      function Ql(e) {
        if (e instanceof re)
          return e.clone();
        var t = new mt(e.__wrapped__, e.__chain__);
        return t.__actions__ = Je(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function qf(e, t, s) {
        (s ? qe(e, t, s) : t === i) ? t = 1 : t = Ve(j(t), 0);
        var o = e == null ? 0 : e.length;
        if (!o || t < 1)
          return [];
        for (var l = 0, u = 0, d = k(Ps(o / t)); l < o; )
          d[u++] = bt(e, l, l += t);
        return d;
      }
      function zf(e) {
        for (var t = -1, s = e == null ? 0 : e.length, o = 0, l = []; ++t < s; ) {
          var u = e[t];
          u && (l[o++] = u);
        }
        return l;
      }
      function Yf() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = k(e - 1), s = arguments[0], o = e; o--; )
          t[o - 1] = arguments[o];
        return Qt(J(s) ? Je(s) : [s], He(t, 1));
      }
      var Kf = se(function(e, t) {
        return Re(e) ? ss(e, He(t, 1, Re, true)) : [];
      }), Xf = se(function(e, t) {
        var s = $t(t);
        return Re(s) && (s = i), Re(e) ? ss(e, He(t, 1, Re, true), H(s, 2)) : [];
      }), Jf = se(function(e, t) {
        var s = $t(t);
        return Re(s) && (s = i), Re(e) ? ss(e, He(t, 1, Re, true), i, s) : [];
      });
      function Zf(e, t, s) {
        var o = e == null ? 0 : e.length;
        return o ? (t = s || t === i ? 1 : j(t), bt(e, t < 0 ? 0 : t, o)) : [];
      }
      function Qf(e, t, s) {
        var o = e == null ? 0 : e.length;
        return o ? (t = s || t === i ? 1 : j(t), t = o - t, bt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function jf(e, t) {
        return e && e.length ? Gs(e, H(t, 3), true, true) : [];
      }
      function eh(e, t) {
        return e && e.length ? Gs(e, H(t, 3), true) : [];
      }
      function th(e, t, s, o) {
        var l = e == null ? 0 : e.length;
        return l ? (s && typeof s != "number" && qe(e, t, s) && (s = 0, o = l), zd(e, t, s, o)) : [];
      }
      function jl(e, t, s) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var l = s == null ? 0 : j(s);
        return l < 0 && (l = Ve(o + l, 0)), ks(e, H(t, 3), l);
      }
      function ea(e, t, s) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var l = o - 1;
        return s !== i && (l = j(s), l = s < 0 ? Ve(o + l, 0) : Fe(l, o - 1)), ks(e, H(t, 3), l, true);
      }
      function ta(e) {
        var t = e == null ? 0 : e.length;
        return t ? He(e, 1) : [];
      }
      function nh(e) {
        var t = e == null ? 0 : e.length;
        return t ? He(e, Vt) : [];
      }
      function sh(e, t) {
        var s = e == null ? 0 : e.length;
        return s ? (t = t === i ? 1 : j(t), He(e, t)) : [];
      }
      function ih(e) {
        for (var t = -1, s = e == null ? 0 : e.length, o = {}; ++t < s; ) {
          var l = e[t];
          o[l[0]] = l[1];
        }
        return o;
      }
      function na(e) {
        return e && e.length ? e[0] : i;
      }
      function oh(e, t, s) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var l = s == null ? 0 : j(s);
        return l < 0 && (l = Ve(o + l, 0)), In(e, t, l);
      }
      function rh(e) {
        var t = e == null ? 0 : e.length;
        return t ? bt(e, 0, -1) : [];
      }
      var lh = se(function(e) {
        var t = Se(e, _o);
        return t.length && t[0] === e[0] ? ro(t) : [];
      }), ah = se(function(e) {
        var t = $t(e), s = Se(e, _o);
        return t === $t(s) ? t = i : s.pop(), s.length && s[0] === e[0] ? ro(s, H(t, 2)) : [];
      }), uh = se(function(e) {
        var t = $t(e), s = Se(e, _o);
        return t = typeof t == "function" ? t : i, t && s.pop(), s.length && s[0] === e[0] ? ro(s, i, t) : [];
      });
      function ch(e, t) {
        return e == null ? "" : od.call(e, t);
      }
      function $t(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : i;
      }
      function dh(e, t, s) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var l = o;
        return s !== i && (l = j(s), l = l < 0 ? Ve(o + l, 0) : Fe(l, o - 1)), t === t ? Uc(e, t, l) : ks(e, Mr, l, true);
      }
      function fh(e, t) {
        return e && e.length ? hl(e, j(t)) : i;
      }
      var hh = se(sa);
      function sa(e, t) {
        return e && e.length && t && t.length ? co(e, t) : e;
      }
      function vh(e, t, s) {
        return e && e.length && t && t.length ? co(e, t, H(s, 2)) : e;
      }
      function ph(e, t, s) {
        return e && e.length && t && t.length ? co(e, t, i, s) : e;
      }
      var gh = Ft(function(e, t) {
        var s = e == null ? 0 : e.length, o = no(e, t);
        return gl(e, Se(t, function(l) {
          return Ut(l, s) ? +l : l;
        }).sort(El)), o;
      });
      function _h(e, t) {
        var s = [];
        if (!(e && e.length))
          return s;
        var o = -1, l = [], u = e.length;
        for (t = H(t, 3); ++o < u; ) {
          var d = e[o];
          t(d, o, e) && (s.push(d), l.push(o));
        }
        return gl(e, l), s;
      }
      function Oo(e) {
        return e == null ? e : ud.call(e);
      }
      function mh(e, t, s) {
        var o = e == null ? 0 : e.length;
        return o ? (s && typeof s != "number" && qe(e, t, s) ? (t = 0, s = o) : (t = t == null ? 0 : j(t), s = s === i ? o : j(s)), bt(e, t, s)) : [];
      }
      function yh(e, t) {
        return Us(e, t);
      }
      function bh(e, t, s) {
        return vo(e, t, H(s, 2));
      }
      function $h(e, t) {
        var s = e == null ? 0 : e.length;
        if (s) {
          var o = Us(e, t);
          if (o < s && Lt(e[o], t))
            return o;
        }
        return -1;
      }
      function wh(e, t) {
        return Us(e, t, true);
      }
      function kh(e, t, s) {
        return vo(e, t, H(s, 2), true);
      }
      function Ch(e, t) {
        var s = e == null ? 0 : e.length;
        if (s) {
          var o = Us(e, t, true) - 1;
          if (Lt(e[o], t))
            return o;
        }
        return -1;
      }
      function Sh(e) {
        return e && e.length ? ml(e) : [];
      }
      function Eh(e, t) {
        return e && e.length ? ml(e, H(t, 2)) : [];
      }
      function Th(e) {
        var t = e == null ? 0 : e.length;
        return t ? bt(e, 1, t) : [];
      }
      function Lh(e, t, s) {
        return e && e.length ? (t = s || t === i ? 1 : j(t), bt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function Bh(e, t, s) {
        var o = e == null ? 0 : e.length;
        return o ? (t = s || t === i ? 1 : j(t), t = o - t, bt(e, t < 0 ? 0 : t, o)) : [];
      }
      function Ah(e, t) {
        return e && e.length ? Gs(e, H(t, 3), false, true) : [];
      }
      function Oh(e, t) {
        return e && e.length ? Gs(e, H(t, 3)) : [];
      }
      var Rh = se(function(e) {
        return nn(He(e, 1, Re, true));
      }), Ih = se(function(e) {
        var t = $t(e);
        return Re(t) && (t = i), nn(He(e, 1, Re, true), H(t, 2));
      }), Ph = se(function(e) {
        var t = $t(e);
        return t = typeof t == "function" ? t : i, nn(He(e, 1, Re, true), i, t);
      });
      function Nh(e) {
        return e && e.length ? nn(e) : [];
      }
      function Mh(e, t) {
        return e && e.length ? nn(e, H(t, 2)) : [];
      }
      function Vh(e, t) {
        return t = typeof t == "function" ? t : i, e && e.length ? nn(e, i, t) : [];
      }
      function Ro(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = Zt(e, function(s) {
          if (Re(s))
            return t = Ve(s.length, t), true;
        }), Ki(t, function(s) {
          return Se(e, qi(s));
        });
      }
      function ia(e, t) {
        if (!(e && e.length))
          return [];
        var s = Ro(e);
        return t == null ? s : Se(s, function(o) {
          return rt(t, i, o);
        });
      }
      var Dh = se(function(e, t) {
        return Re(e) ? ss(e, t) : [];
      }), Wh = se(function(e) {
        return go(Zt(e, Re));
      }), xh = se(function(e) {
        var t = $t(e);
        return Re(t) && (t = i), go(Zt(e, Re), H(t, 2));
      }), Hh = se(function(e) {
        var t = $t(e);
        return t = typeof t == "function" ? t : i, go(Zt(e, Re), i, t);
      }), Fh = se(Ro);
      function Uh(e, t) {
        return wl(e || [], t || [], ns);
      }
      function Gh(e, t) {
        return wl(e || [], t || [], rs);
      }
      var qh = se(function(e) {
        var t = e.length, s = t > 1 ? e[t - 1] : i;
        return s = typeof s == "function" ? (e.pop(), s) : i, ia(e, s);
      });
      function oa(e) {
        var t = a(e);
        return t.__chain__ = true, t;
      }
      function zh(e, t) {
        return t(e), e;
      }
      function js(e, t) {
        return t(e);
      }
      var Yh = Ft(function(e) {
        var t = e.length, s = t ? e[0] : 0, o = this.__wrapped__, l = function(u) {
          return no(u, e);
        };
        return t > 1 || this.__actions__.length || !(o instanceof re) || !Ut(s) ? this.thru(l) : (o = o.slice(s, +s + (t ? 1 : 0)), o.__actions__.push({
          func: js,
          args: [l],
          thisArg: i
        }), new mt(o, this.__chain__).thru(function(u) {
          return t && !u.length && u.push(i), u;
        }));
      });
      function Kh() {
        return oa(this);
      }
      function Xh() {
        return new mt(this.value(), this.__chain__);
      }
      function Jh() {
        this.__values__ === i && (this.__values__ = ya(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? i : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function Zh() {
        return this;
      }
      function Qh(e) {
        for (var t, s = this; s instanceof Ds; ) {
          var o = Ql(s);
          o.__index__ = 0, o.__values__ = i, t ? l.__wrapped__ = o : t = o;
          var l = o;
          s = s.__wrapped__;
        }
        return l.__wrapped__ = e, t;
      }
      function jh() {
        var e = this.__wrapped__;
        if (e instanceof re) {
          var t = e;
          return this.__actions__.length && (t = new re(this)), t = t.reverse(), t.__actions__.push({
            func: js,
            args: [Oo],
            thisArg: i
          }), new mt(t, this.__chain__);
        }
        return this.thru(Oo);
      }
      function ev() {
        return $l(this.__wrapped__, this.__actions__);
      }
      var tv = qs(function(e, t, s) {
        ge.call(e, s) ? ++e[s] : xt(e, s, 1);
      });
      function nv(e, t, s) {
        var o = J(e) ? Pr : qd;
        return s && qe(e, t, s) && (t = i), o(e, H(t, 3));
      }
      function sv(e, t) {
        var s = J(e) ? Zt : il;
        return s(e, H(t, 3));
      }
      var iv = Rl(jl), ov = Rl(ea);
      function rv(e, t) {
        return He(ei(e, t), 1);
      }
      function lv(e, t) {
        return He(ei(e, t), Vt);
      }
      function av(e, t, s) {
        return s = s === i ? 1 : j(s), He(ei(e, t), s);
      }
      function ra(e, t) {
        var s = J(e) ? gt : tn;
        return s(e, H(t, 3));
      }
      function la(e, t) {
        var s = J(e) ? Ec : sl;
        return s(e, H(t, 3));
      }
      var uv = qs(function(e, t, s) {
        ge.call(e, s) ? e[s].push(t) : xt(e, s, [t]);
      });
      function cv(e, t, s, o) {
        e = Ze(e) ? e : qn(e), s = s && !o ? j(s) : 0;
        var l = e.length;
        return s < 0 && (s = Ve(l + s, 0)), oi(e) ? s <= l && e.indexOf(t, s) > -1 : !!l && In(e, t, s) > -1;
      }
      var dv = se(function(e, t, s) {
        var o = -1, l = typeof t == "function", u = Ze(e) ? k(e.length) : [];
        return tn(e, function(d) {
          u[++o] = l ? rt(t, d, s) : is(d, t, s);
        }), u;
      }), fv = qs(function(e, t, s) {
        xt(e, s, t);
      });
      function ei(e, t) {
        var s = J(e) ? Se : cl;
        return s(e, H(t, 3));
      }
      function hv(e, t, s, o) {
        return e == null ? [] : (J(t) || (t = t == null ? [] : [t]), s = o ? i : s, J(s) || (s = s == null ? [] : [s]), vl(e, t, s));
      }
      var vv = qs(function(e, t, s) {
        e[s ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function pv(e, t, s) {
        var o = J(e) ? Ui : Dr, l = arguments.length < 3;
        return o(e, H(t, 4), s, l, tn);
      }
      function gv(e, t, s) {
        var o = J(e) ? Tc : Dr, l = arguments.length < 3;
        return o(e, H(t, 4), s, l, sl);
      }
      function _v(e, t) {
        var s = J(e) ? Zt : il;
        return s(e, si(H(t, 3)));
      }
      function mv(e) {
        var t = J(e) ? jr : cf;
        return t(e);
      }
      function yv(e, t, s) {
        (s ? qe(e, t, s) : t === i) ? t = 1 : t = j(t);
        var o = J(e) ? xd : df;
        return o(e, t);
      }
      function bv(e) {
        var t = J(e) ? Hd : hf;
        return t(e);
      }
      function $v(e) {
        if (e == null)
          return 0;
        if (Ze(e))
          return oi(e) ? Nn(e) : e.length;
        var t = Ue(e);
        return t == Ke || t == st ? e.size : ao(e).length;
      }
      function wv(e, t, s) {
        var o = J(e) ? Gi : vf;
        return s && qe(e, t, s) && (t = i), o(e, H(t, 3));
      }
      var kv = se(function(e, t) {
        if (e == null)
          return [];
        var s = t.length;
        return s > 1 && qe(e, t[0], t[1]) ? t = [] : s > 2 && qe(t[0], t[1], t[2]) && (t = [t[0]]), vl(e, He(t, 1), []);
      }), ti = nd || function() {
        return xe.Date.now();
      };
      function Cv(e, t) {
        if (typeof t != "function")
          throw new _t(v);
        return e = j(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function aa(e, t, s) {
        return t = s ? i : t, t = e && t == null ? e.length : t, Ht(e, z, i, i, i, i, t);
      }
      function ua(e, t) {
        var s;
        if (typeof t != "function")
          throw new _t(v);
        return e = j(e), function() {
          return --e > 0 && (s = t.apply(this, arguments)), e <= 1 && (t = i), s;
        };
      }
      var Io = se(function(e, t, s) {
        var o = me;
        if (s.length) {
          var l = jt(s, Un(Io));
          o |= Q;
        }
        return Ht(e, o, t, s, l);
      }), ca = se(function(e, t, s) {
        var o = me | te;
        if (s.length) {
          var l = jt(s, Un(ca));
          o |= Q;
        }
        return Ht(t, o, e, s, l);
      });
      function da(e, t, s) {
        t = s ? i : t;
        var o = Ht(e, pe, i, i, i, i, i, t);
        return o.placeholder = da.placeholder, o;
      }
      function fa(e, t, s) {
        t = s ? i : t;
        var o = Ht(e, ae, i, i, i, i, i, t);
        return o.placeholder = fa.placeholder, o;
      }
      function ha(e, t, s) {
        var o, l, u, d, p, $, S = 0, E = false, L = false, M = true;
        if (typeof e != "function")
          throw new _t(v);
        t = wt(t) || 0, Le(s) && (E = !!s.leading, L = "maxWait" in s, u = L ? Ve(wt(s.maxWait) || 0, t) : u, M = "trailing" in s ? !!s.trailing : M);
        function D(Ie) {
          var Bt = o, zt = l;
          return o = l = i, S = Ie, d = e.apply(zt, Bt), d;
        }
        function U(Ie) {
          return S = Ie, p = us(oe, t), E ? D(Ie) : d;
        }
        function ne(Ie) {
          var Bt = Ie - $, zt = Ie - S, Ra = t - Bt;
          return L ? Fe(Ra, u - zt) : Ra;
        }
        function G(Ie) {
          var Bt = Ie - $, zt = Ie - S;
          return $ === i || Bt >= t || Bt < 0 || L && zt >= u;
        }
        function oe() {
          var Ie = ti();
          if (G(Ie))
            return ue(Ie);
          p = us(oe, ne(Ie));
        }
        function ue(Ie) {
          return p = i, M && o ? D(Ie) : (o = l = i, d);
        }
        function ct() {
          p !== i && kl(p), S = 0, o = $ = l = p = i;
        }
        function ze() {
          return p === i ? d : ue(ti());
        }
        function dt() {
          var Ie = ti(), Bt = G(Ie);
          if (o = arguments, l = this, $ = Ie, Bt) {
            if (p === i)
              return U($);
            if (L)
              return kl(p), p = us(oe, t), D($);
          }
          return p === i && (p = us(oe, t)), d;
        }
        return dt.cancel = ct, dt.flush = ze, dt;
      }
      var Sv = se(function(e, t) {
        return nl(e, 1, t);
      }), Ev = se(function(e, t, s) {
        return nl(e, wt(t) || 0, s);
      });
      function Tv(e) {
        return Ht(e, Te);
      }
      function ni(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new _t(v);
        var s = function() {
          var o = arguments, l = t ? t.apply(this, o) : o[0], u = s.cache;
          if (u.has(l))
            return u.get(l);
          var d = e.apply(this, o);
          return s.cache = u.set(l, d) || u, d;
        };
        return s.cache = new (ni.Cache || Wt)(), s;
      }
      ni.Cache = Wt;
      function si(e) {
        if (typeof e != "function")
          throw new _t(v);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      function Lv(e) {
        return ua(2, e);
      }
      var Bv = pf(function(e, t) {
        t = t.length == 1 && J(t[0]) ? Se(t[0], lt(H())) : Se(He(t, 1), lt(H()));
        var s = t.length;
        return se(function(o) {
          for (var l = -1, u = Fe(o.length, s); ++l < u; )
            o[l] = t[l].call(this, o[l]);
          return rt(e, this, o);
        });
      }), Po = se(function(e, t) {
        var s = jt(t, Un(Po));
        return Ht(e, Q, i, t, s);
      }), va = se(function(e, t) {
        var s = jt(t, Un(va));
        return Ht(e, W, i, t, s);
      }), Av = Ft(function(e, t) {
        return Ht(e, X, i, i, i, t);
      });
      function Ov(e, t) {
        if (typeof e != "function")
          throw new _t(v);
        return t = t === i ? t : j(t), se(e, t);
      }
      function Rv(e, t) {
        if (typeof e != "function")
          throw new _t(v);
        return t = t == null ? 0 : Ve(j(t), 0), se(function(s) {
          var o = s[t], l = on(s, 0, t);
          return o && Qt(l, o), rt(e, this, l);
        });
      }
      function Iv(e, t, s) {
        var o = true, l = true;
        if (typeof e != "function")
          throw new _t(v);
        return Le(s) && (o = "leading" in s ? !!s.leading : o, l = "trailing" in s ? !!s.trailing : l), ha(e, t, {
          leading: o,
          maxWait: t,
          trailing: l
        });
      }
      function Pv(e) {
        return aa(e, 1);
      }
      function Nv(e, t) {
        return Po(mo(t), e);
      }
      function Mv() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return J(e) ? e : [e];
      }
      function Vv(e) {
        return yt(e, F);
      }
      function Dv(e, t) {
        return t = typeof t == "function" ? t : i, yt(e, F, t);
      }
      function Wv(e) {
        return yt(e, O | F);
      }
      function xv(e, t) {
        return t = typeof t == "function" ? t : i, yt(e, O | F, t);
      }
      function Hv(e, t) {
        return t == null || tl(e, t, De(t));
      }
      function Lt(e, t) {
        return e === t || e !== e && t !== t;
      }
      var Fv = Xs(oo), Uv = Xs(function(e, t) {
        return e >= t;
      }), wn = ll(function() {
        return arguments;
      }()) ? ll : function(e) {
        return Be(e) && ge.call(e, "callee") && !Yr.call(e, "callee");
      }, J = k.isArray, Gv = Lr ? lt(Lr) : Zd;
      function Ze(e) {
        return e != null && ii(e.length) && !Gt(e);
      }
      function Re(e) {
        return Be(e) && Ze(e);
      }
      function qv(e) {
        return e === true || e === false || Be(e) && Ge(e) == un;
      }
      var rn = id || qo, zv = Br ? lt(Br) : Qd;
      function Yv(e) {
        return Be(e) && e.nodeType === 1 && !cs(e);
      }
      function Kv(e) {
        if (e == null)
          return true;
        if (Ze(e) && (J(e) || typeof e == "string" || typeof e.splice == "function" || rn(e) || Gn(e) || wn(e)))
          return !e.length;
        var t = Ue(e);
        if (t == Ke || t == st)
          return !e.size;
        if (as(e))
          return !ao(e).length;
        for (var s in e)
          if (ge.call(e, s))
            return false;
        return true;
      }
      function Xv(e, t) {
        return os(e, t);
      }
      function Jv(e, t, s) {
        s = typeof s == "function" ? s : i;
        var o = s ? s(e, t) : i;
        return o === i ? os(e, t, i, s) : !!o;
      }
      function No(e) {
        if (!Be(e))
          return false;
        var t = Ge(e);
        return t == Ln || t == Si || typeof e.message == "string" && typeof e.name == "string" && !cs(e);
      }
      function Zv(e) {
        return typeof e == "number" && Xr(e);
      }
      function Gt(e) {
        if (!Le(e))
          return false;
        var t = Ge(e);
        return t == Bn || t == ms || t == Ci || t == Ei;
      }
      function pa(e) {
        return typeof e == "number" && e == j(e);
      }
      function ii(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Rt;
      }
      function Le(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function Be(e) {
        return e != null && typeof e == "object";
      }
      var ga = Ar ? lt(Ar) : ef;
      function Qv(e, t) {
        return e === t || lo(e, t, So(t));
      }
      function jv(e, t, s) {
        return s = typeof s == "function" ? s : i, lo(e, t, So(t), s);
      }
      function ep(e) {
        return _a(e) && e != +e;
      }
      function tp(e) {
        if (Df(e))
          throw new K(h);
        return al(e);
      }
      function np(e) {
        return e === null;
      }
      function sp(e) {
        return e == null;
      }
      function _a(e) {
        return typeof e == "number" || Be(e) && Ge(e) == Jt;
      }
      function cs(e) {
        if (!Be(e) || Ge(e) != nt)
          return false;
        var t = Os(e);
        if (t === null)
          return true;
        var s = ge.call(t, "constructor") && t.constructor;
        return typeof s == "function" && s instanceof s && Ts.call(s) == Qc;
      }
      var Mo = Or ? lt(Or) : tf;
      function ip(e) {
        return pa(e) && e >= -Rt && e <= Rt;
      }
      var ma = Rr ? lt(Rr) : nf;
      function oi(e) {
        return typeof e == "string" || !J(e) && Be(e) && Ge(e) == fn;
      }
      function ut(e) {
        return typeof e == "symbol" || Be(e) && Ge(e) == I;
      }
      var Gn = Ir ? lt(Ir) : sf;
      function op(e) {
        return e === i;
      }
      function rp(e) {
        return Be(e) && Ue(e) == ie;
      }
      function lp(e) {
        return Be(e) && Ge(e) == ke;
      }
      var ap = Xs(uo), up = Xs(function(e, t) {
        return e <= t;
      });
      function ya(e) {
        if (!e)
          return [];
        if (Ze(e))
          return oi(e) ? Et(e) : Je(e);
        if (Zn && e[Zn])
          return xc(e[Zn]());
        var t = Ue(e), s = t == Ke ? Ji : t == st ? Cs : qn;
        return s(e);
      }
      function qt(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = wt(e), e === Vt || e === -Vt) {
          var t = e < 0 ? -1 : 1;
          return t * bi;
        }
        return e === e ? e : 0;
      }
      function j(e) {
        var t = qt(e), s = t % 1;
        return t === t ? s ? t - s : t : 0;
      }
      function ba(e) {
        return e ? mn(j(e), 0, vt) : 0;
      }
      function wt(e) {
        if (typeof e == "number")
          return e;
        if (ut(e))
          return En;
        if (Le(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = Le(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Wr(e);
        var s = Uu.test(e);
        return s || qu.test(e) ? kc(e.slice(2), s ? 2 : 8) : Fu.test(e) ? En : +e;
      }
      function $a(e) {
        return Pt(e, Qe(e));
      }
      function cp(e) {
        return e ? mn(j(e), -Rt, Rt) : e === 0 ? e : 0;
      }
      function he(e) {
        return e == null ? "" : at(e);
      }
      var dp = Hn(function(e, t) {
        if (as(t) || Ze(t)) {
          Pt(t, De(t), e);
          return;
        }
        for (var s in t)
          ge.call(t, s) && ns(e, s, t[s]);
      }), wa = Hn(function(e, t) {
        Pt(t, Qe(t), e);
      }), ri = Hn(function(e, t, s, o) {
        Pt(t, Qe(t), e, o);
      }), fp = Hn(function(e, t, s, o) {
        Pt(t, De(t), e, o);
      }), hp = Ft(no);
      function vp(e, t) {
        var s = xn(e);
        return t == null ? s : el(s, t);
      }
      var pp = se(function(e, t) {
        e = ye(e);
        var s = -1, o = t.length, l = o > 2 ? t[2] : i;
        for (l && qe(t[0], t[1], l) && (o = 1); ++s < o; )
          for (var u = t[s], d = Qe(u), p = -1, $ = d.length; ++p < $; ) {
            var S = d[p], E = e[S];
            (E === i || Lt(E, Vn[S]) && !ge.call(e, S)) && (e[S] = u[S]);
          }
        return e;
      }), gp = se(function(e) {
        return e.push(i, Wl), rt(ka, i, e);
      });
      function _p(e, t) {
        return Nr(e, H(t, 3), It);
      }
      function mp(e, t) {
        return Nr(e, H(t, 3), io);
      }
      function yp(e, t) {
        return e == null ? e : so(e, H(t, 3), Qe);
      }
      function bp(e, t) {
        return e == null ? e : ol(e, H(t, 3), Qe);
      }
      function $p(e, t) {
        return e && It(e, H(t, 3));
      }
      function wp(e, t) {
        return e && io(e, H(t, 3));
      }
      function kp(e) {
        return e == null ? [] : Hs(e, De(e));
      }
      function Cp(e) {
        return e == null ? [] : Hs(e, Qe(e));
      }
      function Vo(e, t, s) {
        var o = e == null ? i : yn(e, t);
        return o === i ? s : o;
      }
      function Sp(e, t) {
        return e != null && Fl(e, t, Yd);
      }
      function Do(e, t) {
        return e != null && Fl(e, t, Kd);
      }
      var Ep = Pl(function(e, t, s) {
        t != null && typeof t.toString != "function" && (t = Ls.call(t)), e[t] = s;
      }, xo(je)), Tp = Pl(function(e, t, s) {
        t != null && typeof t.toString != "function" && (t = Ls.call(t)), ge.call(e, t) ? e[t].push(s) : e[t] = [s];
      }, H), Lp = se(is);
      function De(e) {
        return Ze(e) ? Qr(e) : ao(e);
      }
      function Qe(e) {
        return Ze(e) ? Qr(e, true) : of(e);
      }
      function Bp(e, t) {
        var s = {};
        return t = H(t, 3), It(e, function(o, l, u) {
          xt(s, t(o, l, u), o);
        }), s;
      }
      function Ap(e, t) {
        var s = {};
        return t = H(t, 3), It(e, function(o, l, u) {
          xt(s, l, t(o, l, u));
        }), s;
      }
      var Op = Hn(function(e, t, s) {
        Fs(e, t, s);
      }), ka = Hn(function(e, t, s, o) {
        Fs(e, t, s, o);
      }), Rp = Ft(function(e, t) {
        var s = {};
        if (e == null)
          return s;
        var o = false;
        t = Se(t, function(u) {
          return u = sn(u, e), o || (o = u.length > 1), u;
        }), Pt(e, ko(e), s), o && (s = yt(s, O | B | F, Ef));
        for (var l = t.length; l--; )
          po(s, t[l]);
        return s;
      });
      function Ip(e, t) {
        return Ca(e, si(H(t)));
      }
      var Pp = Ft(function(e, t) {
        return e == null ? {} : lf(e, t);
      });
      function Ca(e, t) {
        if (e == null)
          return {};
        var s = Se(ko(e), function(o) {
          return [o];
        });
        return t = H(t), pl(e, s, function(o, l) {
          return t(o, l[0]);
        });
      }
      function Np(e, t, s) {
        t = sn(t, e);
        var o = -1, l = t.length;
        for (l || (l = 1, e = i); ++o < l; ) {
          var u = e == null ? i : e[Nt(t[o])];
          u === i && (o = l, u = s), e = Gt(u) ? u.call(e) : u;
        }
        return e;
      }
      function Mp(e, t, s) {
        return e == null ? e : rs(e, t, s);
      }
      function Vp(e, t, s, o) {
        return o = typeof o == "function" ? o : i, e == null ? e : rs(e, t, s, o);
      }
      var Sa = Vl(De), Ea = Vl(Qe);
      function Dp(e, t, s) {
        var o = J(e), l = o || rn(e) || Gn(e);
        if (t = H(t, 4), s == null) {
          var u = e && e.constructor;
          l ? s = o ? new u() : [] : Le(e) ? s = Gt(u) ? xn(Os(e)) : {} : s = {};
        }
        return (l ? gt : It)(e, function(d, p, $) {
          return t(s, d, p, $);
        }), s;
      }
      function Wp(e, t) {
        return e == null ? true : po(e, t);
      }
      function xp(e, t, s) {
        return e == null ? e : bl(e, t, mo(s));
      }
      function Hp(e, t, s, o) {
        return o = typeof o == "function" ? o : i, e == null ? e : bl(e, t, mo(s), o);
      }
      function qn(e) {
        return e == null ? [] : Xi(e, De(e));
      }
      function Fp(e) {
        return e == null ? [] : Xi(e, Qe(e));
      }
      function Up(e, t, s) {
        return s === i && (s = t, t = i), s !== i && (s = wt(s), s = s === s ? s : 0), t !== i && (t = wt(t), t = t === t ? t : 0), mn(wt(e), t, s);
      }
      function Gp(e, t, s) {
        return t = qt(t), s === i ? (s = t, t = 0) : s = qt(s), e = wt(e), Xd(e, t, s);
      }
      function qp(e, t, s) {
        if (s && typeof s != "boolean" && qe(e, t, s) && (t = s = i), s === i && (typeof t == "boolean" ? (s = t, t = i) : typeof e == "boolean" && (s = e, e = i)), e === i && t === i ? (e = 0, t = 1) : (e = qt(e), t === i ? (t = e, e = 0) : t = qt(t)), e > t) {
          var o = e;
          e = t, t = o;
        }
        if (s || e % 1 || t % 1) {
          var l = Jr();
          return Fe(e + l * (t - e + wc("1e-" + ((l + "").length - 1))), t);
        }
        return fo(e, t);
      }
      var zp = Fn(function(e, t, s) {
        return t = t.toLowerCase(), e + (s ? Ta(t) : t);
      });
      function Ta(e) {
        return Wo(he(e).toLowerCase());
      }
      function La(e) {
        return e = he(e), e && e.replace(Yu, Nc).replace(fc, "");
      }
      function Yp(e, t, s) {
        e = he(e), t = at(t);
        var o = e.length;
        s = s === i ? o : mn(j(s), 0, o);
        var l = s;
        return s -= t.length, s >= 0 && e.slice(s, l) == t;
      }
      function Kp(e) {
        return e = he(e), e && Tu.test(e) ? e.replace(or, Mc) : e;
      }
      function Xp(e) {
        return e = he(e), e && Iu.test(e) ? e.replace(Ii, "\\$&") : e;
      }
      var Jp = Fn(function(e, t, s) {
        return e + (s ? "-" : "") + t.toLowerCase();
      }), Zp = Fn(function(e, t, s) {
        return e + (s ? " " : "") + t.toLowerCase();
      }), Qp = Ol("toLowerCase");
      function jp(e, t, s) {
        e = he(e), t = j(t);
        var o = t ? Nn(e) : 0;
        if (!t || o >= t)
          return e;
        var l = (t - o) / 2;
        return Ks(Ns(l), s) + e + Ks(Ps(l), s);
      }
      function eg(e, t, s) {
        e = he(e), t = j(t);
        var o = t ? Nn(e) : 0;
        return t && o < t ? e + Ks(t - o, s) : e;
      }
      function tg(e, t, s) {
        e = he(e), t = j(t);
        var o = t ? Nn(e) : 0;
        return t && o < t ? Ks(t - o, s) + e : e;
      }
      function ng(e, t, s) {
        return s || t == null ? t = 0 : t && (t = +t), ad(he(e).replace(Pi, ""), t || 0);
      }
      function sg(e, t, s) {
        return (s ? qe(e, t, s) : t === i) ? t = 1 : t = j(t), ho(he(e), t);
      }
      function ig() {
        var e = arguments, t = he(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var og = Fn(function(e, t, s) {
        return e + (s ? "_" : "") + t.toLowerCase();
      });
      function rg(e, t, s) {
        return s && typeof s != "number" && qe(e, t, s) && (t = s = i), s = s === i ? vt : s >>> 0, s ? (e = he(e), e && (typeof t == "string" || t != null && !Mo(t)) && (t = at(t), !t && Pn(e)) ? on(Et(e), 0, s) : e.split(t, s)) : [];
      }
      var lg = Fn(function(e, t, s) {
        return e + (s ? " " : "") + Wo(t);
      });
      function ag(e, t, s) {
        return e = he(e), s = s == null ? 0 : mn(j(s), 0, e.length), t = at(t), e.slice(s, s + t.length) == t;
      }
      function ug(e, t, s) {
        var o = a.templateSettings;
        s && qe(e, t, s) && (t = i), e = he(e), t = ri({}, t, o, Dl);
        var l = ri({}, t.imports, o.imports, Dl), u = De(l), d = Xi(l, u), p, $, S = 0, E = t.interpolate || ys, L = "__p += '", M = Zi(
          (t.escape || ys).source + "|" + E.source + "|" + (E === rr ? Hu : ys).source + "|" + (t.evaluate || ys).source + "|$",
          "g"
        ), D = "//# sourceURL=" + (ge.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++_c + "]") + `
`;
        e.replace(M, function(G, oe, ue, ct, ze, dt) {
          return ue || (ue = ct), L += e.slice(S, dt).replace(Ku, Vc), oe && (p = true, L += `' +
__e(` + oe + `) +
'`), ze && ($ = true, L += `';
` + ze + `;
__p += '`), ue && (L += `' +
((__t = (` + ue + `)) == null ? '' : __t) +
'`), S = dt + G.length, G;
        }), L += `';
`;
        var U = ge.call(t, "variable") && t.variable;
        if (!U)
          L = `with (obj) {
` + L + `
}
`;
        else if (Wu.test(U))
          throw new K(m);
        L = ($ ? L.replace(ku, "") : L).replace(Cu, "$1").replace(Su, "$1;"), L = "function(" + (U || "obj") + `) {
` + (U ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (p ? ", __e = _.escape" : "") + ($ ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + L + `return __p
}`;
        var ne = Aa(function() {
          return de(u, D + "return " + L).apply(i, d);
        });
        if (ne.source = L, No(ne))
          throw ne;
        return ne;
      }
      function cg(e) {
        return he(e).toLowerCase();
      }
      function dg(e) {
        return he(e).toUpperCase();
      }
      function fg(e, t, s) {
        if (e = he(e), e && (s || t === i))
          return Wr(e);
        if (!e || !(t = at(t)))
          return e;
        var o = Et(e), l = Et(t), u = xr(o, l), d = Hr(o, l) + 1;
        return on(o, u, d).join("");
      }
      function hg(e, t, s) {
        if (e = he(e), e && (s || t === i))
          return e.slice(0, Ur(e) + 1);
        if (!e || !(t = at(t)))
          return e;
        var o = Et(e), l = Hr(o, Et(t)) + 1;
        return on(o, 0, l).join("");
      }
      function vg(e, t, s) {
        if (e = he(e), e && (s || t === i))
          return e.replace(Pi, "");
        if (!e || !(t = at(t)))
          return e;
        var o = Et(e), l = xr(o, Et(t));
        return on(o, l).join("");
      }
      function pg(e, t) {
        var s = tt, o = ht;
        if (Le(t)) {
          var l = "separator" in t ? t.separator : l;
          s = "length" in t ? j(t.length) : s, o = "omission" in t ? at(t.omission) : o;
        }
        e = he(e);
        var u = e.length;
        if (Pn(e)) {
          var d = Et(e);
          u = d.length;
        }
        if (s >= u)
          return e;
        var p = s - Nn(o);
        if (p < 1)
          return o;
        var $ = d ? on(d, 0, p).join("") : e.slice(0, p);
        if (l === i)
          return $ + o;
        if (d && (p += $.length - p), Mo(l)) {
          if (e.slice(p).search(l)) {
            var S, E = $;
            for (l.global || (l = Zi(l.source, he(lr.exec(l)) + "g")), l.lastIndex = 0; S = l.exec(E); )
              var L = S.index;
            $ = $.slice(0, L === i ? p : L);
          }
        } else if (e.indexOf(at(l), p) != p) {
          var M = $.lastIndexOf(l);
          M > -1 && ($ = $.slice(0, M));
        }
        return $ + o;
      }
      function gg(e) {
        return e = he(e), e && Eu.test(e) ? e.replace(ir, Gc) : e;
      }
      var _g = Fn(function(e, t, s) {
        return e + (s ? " " : "") + t.toUpperCase();
      }), Wo = Ol("toUpperCase");
      function Ba(e, t, s) {
        return e = he(e), t = s ? i : t, t === i ? Wc(e) ? Yc(e) : Ac(e) : e.match(t) || [];
      }
      var Aa = se(function(e, t) {
        try {
          return rt(e, i, t);
        } catch (s) {
          return No(s) ? s : new K(s);
        }
      }), mg = Ft(function(e, t) {
        return gt(t, function(s) {
          s = Nt(s), xt(e, s, Io(e[s], e));
        }), e;
      });
      function yg(e) {
        var t = e == null ? 0 : e.length, s = H();
        return e = t ? Se(e, function(o) {
          if (typeof o[1] != "function")
            throw new _t(v);
          return [s(o[0]), o[1]];
        }) : [], se(function(o) {
          for (var l = -1; ++l < t; ) {
            var u = e[l];
            if (rt(u[0], this, o))
              return rt(u[1], this, o);
          }
        });
      }
      function bg(e) {
        return Gd(yt(e, O));
      }
      function xo(e) {
        return function() {
          return e;
        };
      }
      function $g(e, t) {
        return e == null || e !== e ? t : e;
      }
      var wg = Il(), kg = Il(true);
      function je(e) {
        return e;
      }
      function Ho(e) {
        return ul(typeof e == "function" ? e : yt(e, O));
      }
      function Cg(e) {
        return dl(yt(e, O));
      }
      function Sg(e, t) {
        return fl(e, yt(t, O));
      }
      var Eg = se(function(e, t) {
        return function(s) {
          return is(s, e, t);
        };
      }), Tg = se(function(e, t) {
        return function(s) {
          return is(e, s, t);
        };
      });
      function Fo(e, t, s) {
        var o = De(t), l = Hs(t, o);
        s == null && !(Le(t) && (l.length || !o.length)) && (s = t, t = e, e = this, l = Hs(t, De(t)));
        var u = !(Le(s) && "chain" in s) || !!s.chain, d = Gt(e);
        return gt(l, function(p) {
          var $ = t[p];
          e[p] = $, d && (e.prototype[p] = function() {
            var S = this.__chain__;
            if (u || S) {
              var E = e(this.__wrapped__), L = E.__actions__ = Je(this.__actions__);
              return L.push({ func: $, args: arguments, thisArg: e }), E.__chain__ = S, E;
            }
            return $.apply(e, Qt([this.value()], arguments));
          });
        }), e;
      }
      function Lg() {
        return xe._ === this && (xe._ = jc), this;
      }
      function Uo() {
      }
      function Bg(e) {
        return e = j(e), se(function(t) {
          return hl(t, e);
        });
      }
      var Ag = bo(Se), Og = bo(Pr), Rg = bo(Gi);
      function Oa(e) {
        return To(e) ? qi(Nt(e)) : af(e);
      }
      function Ig(e) {
        return function(t) {
          return e == null ? i : yn(e, t);
        };
      }
      var Pg = Nl(), Ng = Nl(true);
      function Go() {
        return [];
      }
      function qo() {
        return false;
      }
      function Mg() {
        return {};
      }
      function Vg() {
        return "";
      }
      function Dg() {
        return true;
      }
      function Wg(e, t) {
        if (e = j(e), e < 1 || e > Rt)
          return [];
        var s = vt, o = Fe(e, vt);
        t = H(t), e -= vt;
        for (var l = Ki(o, t); ++s < e; )
          t(s);
        return l;
      }
      function xg(e) {
        return J(e) ? Se(e, Nt) : ut(e) ? [e] : Je(Zl(he(e)));
      }
      function Hg(e) {
        var t = ++Zc;
        return he(e) + t;
      }
      var Fg = Ys(function(e, t) {
        return e + t;
      }, 0), Ug = $o("ceil"), Gg = Ys(function(e, t) {
        return e / t;
      }, 1), qg = $o("floor");
      function zg(e) {
        return e && e.length ? xs(e, je, oo) : i;
      }
      function Yg(e, t) {
        return e && e.length ? xs(e, H(t, 2), oo) : i;
      }
      function Kg(e) {
        return Vr(e, je);
      }
      function Xg(e, t) {
        return Vr(e, H(t, 2));
      }
      function Jg(e) {
        return e && e.length ? xs(e, je, uo) : i;
      }
      function Zg(e, t) {
        return e && e.length ? xs(e, H(t, 2), uo) : i;
      }
      var Qg = Ys(function(e, t) {
        return e * t;
      }, 1), jg = $o("round"), e_ = Ys(function(e, t) {
        return e - t;
      }, 0);
      function t_(e) {
        return e && e.length ? Yi(e, je) : 0;
      }
      function n_(e, t) {
        return e && e.length ? Yi(e, H(t, 2)) : 0;
      }
      return a.after = Cv, a.ary = aa, a.assign = dp, a.assignIn = wa, a.assignInWith = ri, a.assignWith = fp, a.at = hp, a.before = ua, a.bind = Io, a.bindAll = mg, a.bindKey = ca, a.castArray = Mv, a.chain = oa, a.chunk = qf, a.compact = zf, a.concat = Yf, a.cond = yg, a.conforms = bg, a.constant = xo, a.countBy = tv, a.create = vp, a.curry = da, a.curryRight = fa, a.debounce = ha, a.defaults = pp, a.defaultsDeep = gp, a.defer = Sv, a.delay = Ev, a.difference = Kf, a.differenceBy = Xf, a.differenceWith = Jf, a.drop = Zf, a.dropRight = Qf, a.dropRightWhile = jf, a.dropWhile = eh, a.fill = th, a.filter = sv, a.flatMap = rv, a.flatMapDeep = lv, a.flatMapDepth = av, a.flatten = ta, a.flattenDeep = nh, a.flattenDepth = sh, a.flip = Tv, a.flow = wg, a.flowRight = kg, a.fromPairs = ih, a.functions = kp, a.functionsIn = Cp, a.groupBy = uv, a.initial = rh, a.intersection = lh, a.intersectionBy = ah, a.intersectionWith = uh, a.invert = Ep, a.invertBy = Tp, a.invokeMap = dv, a.iteratee = Ho, a.keyBy = fv, a.keys = De, a.keysIn = Qe, a.map = ei, a.mapKeys = Bp, a.mapValues = Ap, a.matches = Cg, a.matchesProperty = Sg, a.memoize = ni, a.merge = Op, a.mergeWith = ka, a.method = Eg, a.methodOf = Tg, a.mixin = Fo, a.negate = si, a.nthArg = Bg, a.omit = Rp, a.omitBy = Ip, a.once = Lv, a.orderBy = hv, a.over = Ag, a.overArgs = Bv, a.overEvery = Og, a.overSome = Rg, a.partial = Po, a.partialRight = va, a.partition = vv, a.pick = Pp, a.pickBy = Ca, a.property = Oa, a.propertyOf = Ig, a.pull = hh, a.pullAll = sa, a.pullAllBy = vh, a.pullAllWith = ph, a.pullAt = gh, a.range = Pg, a.rangeRight = Ng, a.rearg = Av, a.reject = _v, a.remove = _h, a.rest = Ov, a.reverse = Oo, a.sampleSize = yv, a.set = Mp, a.setWith = Vp, a.shuffle = bv, a.slice = mh, a.sortBy = kv, a.sortedUniq = Sh, a.sortedUniqBy = Eh, a.split = rg, a.spread = Rv, a.tail = Th, a.take = Lh, a.takeRight = Bh, a.takeRightWhile = Ah, a.takeWhile = Oh, a.tap = zh, a.throttle = Iv, a.thru = js, a.toArray = ya, a.toPairs = Sa, a.toPairsIn = Ea, a.toPath = xg, a.toPlainObject = $a, a.transform = Dp, a.unary = Pv, a.union = Rh, a.unionBy = Ih, a.unionWith = Ph, a.uniq = Nh, a.uniqBy = Mh, a.uniqWith = Vh, a.unset = Wp, a.unzip = Ro, a.unzipWith = ia, a.update = xp, a.updateWith = Hp, a.values = qn, a.valuesIn = Fp, a.without = Dh, a.words = Ba, a.wrap = Nv, a.xor = Wh, a.xorBy = xh, a.xorWith = Hh, a.zip = Fh, a.zipObject = Uh, a.zipObjectDeep = Gh, a.zipWith = qh, a.entries = Sa, a.entriesIn = Ea, a.extend = wa, a.extendWith = ri, Fo(a, a), a.add = Fg, a.attempt = Aa, a.camelCase = zp, a.capitalize = Ta, a.ceil = Ug, a.clamp = Up, a.clone = Vv, a.cloneDeep = Wv, a.cloneDeepWith = xv, a.cloneWith = Dv, a.conformsTo = Hv, a.deburr = La, a.defaultTo = $g, a.divide = Gg, a.endsWith = Yp, a.eq = Lt, a.escape = Kp, a.escapeRegExp = Xp, a.every = nv, a.find = iv, a.findIndex = jl, a.findKey = _p, a.findLast = ov, a.findLastIndex = ea, a.findLastKey = mp, a.floor = qg, a.forEach = ra, a.forEachRight = la, a.forIn = yp, a.forInRight = bp, a.forOwn = $p, a.forOwnRight = wp, a.get = Vo, a.gt = Fv, a.gte = Uv, a.has = Sp, a.hasIn = Do, a.head = na, a.identity = je, a.includes = cv, a.indexOf = oh, a.inRange = Gp, a.invoke = Lp, a.isArguments = wn, a.isArray = J, a.isArrayBuffer = Gv, a.isArrayLike = Ze, a.isArrayLikeObject = Re, a.isBoolean = qv, a.isBuffer = rn, a.isDate = zv, a.isElement = Yv, a.isEmpty = Kv, a.isEqual = Xv, a.isEqualWith = Jv, a.isError = No, a.isFinite = Zv, a.isFunction = Gt, a.isInteger = pa, a.isLength = ii, a.isMap = ga, a.isMatch = Qv, a.isMatchWith = jv, a.isNaN = ep, a.isNative = tp, a.isNil = sp, a.isNull = np, a.isNumber = _a, a.isObject = Le, a.isObjectLike = Be, a.isPlainObject = cs, a.isRegExp = Mo, a.isSafeInteger = ip, a.isSet = ma, a.isString = oi, a.isSymbol = ut, a.isTypedArray = Gn, a.isUndefined = op, a.isWeakMap = rp, a.isWeakSet = lp, a.join = ch, a.kebabCase = Jp, a.last = $t, a.lastIndexOf = dh, a.lowerCase = Zp, a.lowerFirst = Qp, a.lt = ap, a.lte = up, a.max = zg, a.maxBy = Yg, a.mean = Kg, a.meanBy = Xg, a.min = Jg, a.minBy = Zg, a.stubArray = Go, a.stubFalse = qo, a.stubObject = Mg, a.stubString = Vg, a.stubTrue = Dg, a.multiply = Qg, a.nth = fh, a.noConflict = Lg, a.noop = Uo, a.now = ti, a.pad = jp, a.padEnd = eg, a.padStart = tg, a.parseInt = ng, a.random = qp, a.reduce = pv, a.reduceRight = gv, a.repeat = sg, a.replace = ig, a.result = Np, a.round = jg, a.runInContext = y, a.sample = mv, a.size = $v, a.snakeCase = og, a.some = wv, a.sortedIndex = yh, a.sortedIndexBy = bh, a.sortedIndexOf = $h, a.sortedLastIndex = wh, a.sortedLastIndexBy = kh, a.sortedLastIndexOf = Ch, a.startCase = lg, a.startsWith = ag, a.subtract = e_, a.sum = t_, a.sumBy = n_, a.template = ug, a.times = Wg, a.toFinite = qt, a.toInteger = j, a.toLength = ba, a.toLower = cg, a.toNumber = wt, a.toSafeInteger = cp, a.toString = he, a.toUpper = dg, a.trim = fg, a.trimEnd = hg, a.trimStart = vg, a.truncate = pg, a.unescape = gg, a.uniqueId = Hg, a.upperCase = _g, a.upperFirst = Wo, a.each = ra, a.eachRight = la, a.first = na, Fo(a, function() {
        var e = {};
        return It(a, function(t, s) {
          ge.call(a.prototype, s) || (e[s] = t);
        }), e;
      }(), { chain: false }), a.VERSION = c, gt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        a[e].placeholder = a;
      }), gt(["drop", "take"], function(e, t) {
        re.prototype[e] = function(s) {
          s = s === i ? 1 : Ve(j(s), 0);
          var o = this.__filtered__ && !t ? new re(this) : this.clone();
          return o.__filtered__ ? o.__takeCount__ = Fe(s, o.__takeCount__) : o.__views__.push({
            size: Fe(s, vt),
            type: e + (o.__dir__ < 0 ? "Right" : "")
          }), o;
        }, re.prototype[e + "Right"] = function(s) {
          return this.reverse()[e](s).reverse();
        };
      }), gt(["filter", "map", "takeWhile"], function(e, t) {
        var s = t + 1, o = s == Sn || s == yi;
        re.prototype[e] = function(l) {
          var u = this.clone();
          return u.__iteratees__.push({
            iteratee: H(l, 3),
            type: s
          }), u.__filtered__ = u.__filtered__ || o, u;
        };
      }), gt(["head", "last"], function(e, t) {
        var s = "take" + (t ? "Right" : "");
        re.prototype[e] = function() {
          return this[s](1).value()[0];
        };
      }), gt(["initial", "tail"], function(e, t) {
        var s = "drop" + (t ? "" : "Right");
        re.prototype[e] = function() {
          return this.__filtered__ ? new re(this) : this[s](1);
        };
      }), re.prototype.compact = function() {
        return this.filter(je);
      }, re.prototype.find = function(e) {
        return this.filter(e).head();
      }, re.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, re.prototype.invokeMap = se(function(e, t) {
        return typeof e == "function" ? new re(this) : this.map(function(s) {
          return is(s, e, t);
        });
      }), re.prototype.reject = function(e) {
        return this.filter(si(H(e)));
      }, re.prototype.slice = function(e, t) {
        e = j(e);
        var s = this;
        return s.__filtered__ && (e > 0 || t < 0) ? new re(s) : (e < 0 ? s = s.takeRight(-e) : e && (s = s.drop(e)), t !== i && (t = j(t), s = t < 0 ? s.dropRight(-t) : s.take(t - e)), s);
      }, re.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, re.prototype.toArray = function() {
        return this.take(vt);
      }, It(re.prototype, function(e, t) {
        var s = /^(?:filter|find|map|reject)|While$/.test(t), o = /^(?:head|last)$/.test(t), l = a[o ? "take" + (t == "last" ? "Right" : "") : t], u = o || /^find/.test(t);
        !l || (a.prototype[t] = function() {
          var d = this.__wrapped__, p = o ? [1] : arguments, $ = d instanceof re, S = p[0], E = $ || J(d), L = function(oe) {
            var ue = l.apply(a, Qt([oe], p));
            return o && M ? ue[0] : ue;
          };
          E && s && typeof S == "function" && S.length != 1 && ($ = E = false);
          var M = this.__chain__, D = !!this.__actions__.length, U = u && !M, ne = $ && !D;
          if (!u && E) {
            d = ne ? d : new re(this);
            var G = e.apply(d, p);
            return G.__actions__.push({ func: js, args: [L], thisArg: i }), new mt(G, M);
          }
          return U && ne ? e.apply(this, p) : (G = this.thru(L), U ? o ? G.value()[0] : G.value() : G);
        });
      }), gt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = Ss[e], s = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", o = /^(?:pop|shift)$/.test(e);
        a.prototype[e] = function() {
          var l = arguments;
          if (o && !this.__chain__) {
            var u = this.value();
            return t.apply(J(u) ? u : [], l);
          }
          return this[s](function(d) {
            return t.apply(J(d) ? d : [], l);
          });
        };
      }), It(re.prototype, function(e, t) {
        var s = a[t];
        if (s) {
          var o = s.name + "";
          ge.call(Wn, o) || (Wn[o] = []), Wn[o].push({ name: t, func: s });
        }
      }), Wn[zs(i, te).name] = [{
        name: "wrapper",
        func: i
      }], re.prototype.clone = pd, re.prototype.reverse = gd, re.prototype.value = _d, a.prototype.at = Yh, a.prototype.chain = Kh, a.prototype.commit = Xh, a.prototype.next = Jh, a.prototype.plant = Qh, a.prototype.reverse = jh, a.prototype.toJSON = a.prototype.valueOf = a.prototype.value = ev, a.prototype.first = a.prototype.head, Zn && (a.prototype[Zn] = Zh), a;
    }, Mn = Kc();
    vn ? ((vn.exports = Mn)._ = Mn, xi._ = Mn) : xe._ = Mn;
  }).call(ds);
})(ce, ce.exports);
var w_ = defineComponent({
  name: "iconLoading"
});
var k_ = { class: "vs-icon-loading" };
var C_ = createBaseVNode("svg", {
  viewBox: "0 0 50 50",
  class: "vs-icon-loading__item vs-icon-loading__1"
}, [
  createBaseVNode("circle", {
    class: "path",
    cx: "25",
    cy: "25",
    r: "25"
  })
], -1);
var S_ = createBaseVNode("svg", {
  viewBox: "0 0 50 50",
  class: "vs-icon-loading__item vs-icon-loading__2"
}, [
  createBaseVNode("circle", {
    class: "path",
    cx: "25",
    cy: "25",
    r: "25"
  })
], -1);
var E_ = [
  C_,
  S_
];
function T_(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("div", k_, E_);
}
var Ot = ee(w_, [["render", T_]]);
var L_ = defineComponent({
  name: "vsAvatar",
  extends: _e,
  props: {
    badgePosition: String,
    pointer: Boolean,
    circle: Boolean,
    square: Boolean,
    history: Boolean,
    historyGradient: Boolean,
    loading: Boolean,
    writing: Boolean,
    badge: Boolean,
    badgeColor: String,
    size: String
  },
  components: { iconLoading: Ot },
  data: () => ({
    textLength: 0,
    countPlus: 0,
    index: 0
  }),
  computed: {
    getText() {
      var r, i;
      const [n] = (i = (r = this.$slots).text) == null ? void 0 : i.call(r);
      if (ce.exports.isArray(n.children))
        throw new Error("Required $slots.text: one tag HTMLElement or text only required");
      {
        let c = n.children.trim(), _ = [c];
        return c.length > 5 ? (_ = c.split(/\s/g).map((h) => h[0]), this.textLength = _.length) : this.textLength = _[0].length, _.join("");
      }
    },
    isHidden() {
      return this.getParent() && this.getParent().max && this.index > Number(this.getParent().max) - 1;
    },
    isLatest() {
      return this.getParent() && this.index == Number(this.getParent().max) - 1;
    },
    bindStyle() {
      return [
        `width: ${this.size}px`,
        `height: ${this.size}px`,
        { cursor: this.pointer ? "pointer" : "" },
        { ["--vs-color"]: this.color ? this.getColor : "" }
      ];
    },
    bindClass() {
      return [
        {
          history: this.history,
          "history--gradient": this.historyGradient,
          "vs-avatar-content--circle": this.circle,
          "vs-avatar-content--square": this.square,
          "vs-avatar-content--hidden": this.isHidden,
          "vs-avatar-content--latest": this.isLatest,
          "vs-avatar-content--hasIcons": this.$slots.icons
        },
        { ["vs-component--primary"]: !!this.primary },
        { ["vs-component--danger"]: !!this.danger },
        { ["vs-component--warn"]: !!this.warn },
        { ["vs-component--success"]: !!this.success },
        { ["vs-component--dark"]: !!this.dark },
        { ["vs-component--is-color"]: !!this.isColor }
      ];
    }
  },
  methods: {
    getParent() {
      return this.$parent.vsAvatarGroup && this.$parent;
    }
  },
  watch: {
    "$slots.text"() {
      console.log("cambio el slot");
    },
    badgeColor() {
      var n;
      At("badge", (n = this.badgeColor) != null ? n : "primary", this.$el), this.$el.classList.add("vs-change-color-badge");
    }
  },
  mounted() {
    var n;
    At("badge", (n = this.badgeColor) != null ? n : "primary", this.$el), this.$el.classList.add("vs-change-color-badge"), this.getParent() && (this.index = this.getParent().avatars.length, this.getParent().avatars.push(this));
  }
});
var B_ = {
  key: 0,
  class: "vs-avatar__loading"
};
var A_ = { class: "vs-avatar__loading__animate" };
var O_ = { key: 0 };
var R_ = {
  key: 0,
  class: "vs-avatar__points"
};
var I_ = createBaseVNode("div", { class: "vs-avatar__points__point" }, null, -1);
var P_ = createBaseVNode("div", { class: "vs-avatar__points__point" }, null, -1);
var N_ = createBaseVNode("div", { class: "vs-avatar__points__point" }, null, -1);
var M_ = [
  I_,
  P_,
  N_
];
var V_ = {
  key: 6,
  class: "vs-avatar__icons"
};
function D_(n, r, i, c, _, h) {
  var m, b;
  const v = resolveComponent("icon-loading");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vs-avatar-content", n.bindClass]),
    style: normalizeStyle(n.bindStyle)
  }, [
    n.loading ? (openBlock(), createElementBlock("div", B_, [
      createBaseVNode("div", A_, [
        createVNode(v)
      ])
    ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
    createBaseVNode("div", {
      class: normalizeClass(["vs-avatar", { [`vs-avatar--letter--${n.textLength}`]: n.textLength > 2 }])
    }, [
      n.$slots.text ? (openBlock(), createElementBlock("div", O_, toDisplayString(n.getText), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
      renderSlot(n.$slots, "default")
    ], 2),
    n.$slots.badge || n.badge ? (openBlock(), createElementBlock("div", {
      key: 2,
      class: normalizeClass(["vs-avatar__badge", [{ isSlot: n.$slots.badge, writing: n.writing }, n.badgePosition]])
    }, [
      n.writing ? (openBlock(), createElementBlock("div", R_, M_)) : renderSlot(n.$slots, "badge", { key: 1 })
    ], 2)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64)),
    n.isLatest ? withDirectives((openBlock(), createElementBlock("div", {
      key: 4,
      class: "vs-avatar__latest"
    }, toDisplayString(`+${((m = n.getParent()) == null ? void 0 : m.avatars.length) - n.index - 1}`), 513)), [
      [vShow, ((b = n.getParent()) == null ? void 0 : b.avatars.length) - n.index - 1 !== 0]
    ]) : (openBlock(), createElementBlock(Fragment, { key: 5 }, [], 64)),
    n.$slots.icons ? (openBlock(), createElementBlock("div", V_, [
      renderSlot(n.$slots, "icons")
    ])) : (openBlock(), createElementBlock(Fragment, { key: 7 }, [], 64))
  ], 6);
}
var W_ = ee(L_, [["render", D_]]);
var x_ = defineComponent({
  name: "vsAvatarGroup",
  extends: _e,
  props: {
    max: [Number, String],
    float: Boolean
  },
  data: () => ({
    avatars: [],
    vsAvatarGroup: true
  })
});
function H_(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vs-avatar__group", { float: n.float }])
  }, [
    renderSlot(n.$slots, "default")
  ], 2);
}
var F_ = ee(x_, [["render", H_]]);
var Ia = (n, r = "", i = false) => {
  const c = n.currentTarget, _ = c.getBoundingClientRect(), h = n.clientX - _.left, v = n.clientY - _.top;
  let m = 0.6;
  c.clientWidth > 150 && (m = 1.2);
  const b = document.createElement("div");
  b.className = "vs-ripple-content";
  const w = document.createElement("div");
  r || At("color", "#fff", b), w.className = "vs-ripple", i && w.classList.add("vs-ripple--solid"), w.style.transition = `all ${m}s ease`, w.style.left = `${h}px`, w.style.top = `${v}px`, b.appendChild(w), c.appendChild(b), w.style.width = `${c.clientWidth * 2.5}px`, w.style.height = `${c.clientWidth * 2.5}px`, w.style.opacity = "1";
  let T = false;
  setTimeout(() => {
    T = true;
  }, 300);
  function O(B) {
    w.style.transition = `all 0.${m * 600}s ease`, setTimeout(() => {
      w.style.opacity = "0", setTimeout(() => {
        c.removeChild(b);
      }, m * 300);
    }, T ? 0 : m * 400), B.target.removeEventListener("mouseup", O), B.target.removeEventListener("mouseleave", O);
  }
  n.target.addEventListener("mouseup", O), n.target.addEventListener("mouseleave", O);
};
var U_ = (n) => {
  const r = n.currentTarget, i = r.getBoundingClientRect(), c = n.clientX - i.left, _ = n.clientY - i.top;
  let h = 0.6;
  r.clientWidth > 150 && (h = 1.2);
  const v = document.createElement("div");
  v.className = "vs-ripple-content";
  const m = document.createElement("div");
  m.className = "vs-ripple-invert", m.style.left = `${c}px`, m.style.top = `${_}px`, m.style.width = `${r.clientWidth * 2.5}px`, m.style.height = `${r.clientWidth * 2.5}px`, m.style.opacity = "0", v.appendChild(m), r.appendChild(v), setTimeout(() => {
    m.style.width = "0px", m.style.height = "0px", m.style.opacity = "0.5";
  }, 1);
  let b = false;
  setTimeout(() => {
    b = true;
  }, 300);
  function w(T) {
    m.style.transition = `all 0.${h * 600}s ease`, setTimeout(() => {
      m.style.opacity = "0", setTimeout(() => {
        r.removeChild(v);
      }, h * 300);
    }, b ? 0 : h * 400), T.target.removeEventListener("mouseup", w), T.target.removeEventListener("mouseleave", w);
  }
  n.target.addEventListener("mouseup", w), n.target.addEventListener("mouseleave", w);
};
var G_ = (n) => {
  const r = n.currentTarget, i = r.getBoundingClientRect(), c = n.clientX - i.left, _ = n.clientY - i.top;
  let h = 0.6;
  r.clientWidth > 150 && (h = 1.2);
  const v = document.createElement("div");
  v.className = "vs-ripple-content";
  const m = document.createElement("div"), b = document.createElement("div");
  m.className = "vs-ripple-cut-1", b.className = "vs-ripple-cut-2", m.style.left = b.style.left = `${c}px`, m.style.top = b.style.top = `${_}px`, m.style.width = b.style.width = `${r.clientWidth * 2.5}px`, m.style.height = b.style.height = `${r.clientWidth * 2.5}px`, m.style.opacity = b.style.opacity = "1", v.appendChild(m), v.appendChild(b), r.appendChild(v), setTimeout(() => {
    m.style.left = `-${r.clientWidth * 1.3}px`, m.style.opacity = "1", b.style.left = `${r.clientWidth * 1.3}px`, b.style.opacity = "1";
  }, 1);
  let w = false;
  setTimeout(() => {
    w = true;
  }, 300);
  function T(O) {
    m.style.transition = `all 0.${h * 600}s ease`, setTimeout(() => {
      m.style.opacity = "0", setTimeout(() => {
        r.removeChild(v);
      }, h * 300);
    }, w ? 0 : h * 400), O.target.removeEventListener("mouseup", T), O.target.removeEventListener("mouseleave", T);
  }
  n.target.addEventListener("mouseup", T), n.target.addEventListener("mouseleave", T);
};
var q_ = ["xl", "large", "default", "small", "mini"];
var z_ = ["vertical", "scale", "rotate"];
var Y_ = defineComponent({
  name: "vsButton",
  extends: _e,
  emits: ["mousedown"],
  props: {
    ripple: String,
    activeDisabled: Boolean,
    flat: Boolean,
    border: Boolean,
    gradient: Boolean,
    relief: Boolean,
    transparent: Boolean,
    shadow: Boolean,
    floating: Boolean,
    icon: Boolean,
    circle: Boolean,
    square: Boolean,
    size: {
      type: String,
      validator(n) {
        return ce.exports.includes(q_, n);
      }
    },
    loading: Boolean,
    upload: Boolean,
    block: Boolean,
    animationType: {
      type: String,
      validator(n) {
        return ce.exports.includes(z_, n);
      }
    },
    animateInactive: Boolean,
    to: [String, Object],
    href: String,
    blank: Boolean
  },
  components: { iconLoading: Ot },
  data: () => ({
    class: "",
    prototype: null
  }),
  computed: {
    bindRootClass() {
      return [
        `vs-button--size-${this.size}`,
        { ["vs-button--fff"]: this.color === "#fff" },
        { ["vs-button--active"]: !!this.active },
        { ["vs-button--active-disabled"]: !!this.activeDisabled },
        { ["vs-button--icon"]: !!this.icon },
        { ["vs-button--circle"]: !!this.circle },
        { ["vs-button--square"]: !!this.square },
        { ["vs-button--loading"]: !!this.loading },
        { ["vs-button--upload"]: !!this.upload },
        { ["vs-button--block"]: !!this.block },
        { ["vs-button--animate"]: !!this.$slots.animate },
        { [`vs-button--animate-${this.animationType}`]: !!this.animationType },
        { ["vs-button--animate-inactive"]: !!this.animateInactive },
        {
          ["vs-button--primary"]: !this.danger && !this.success && !this.warn && !this.dark && !this.color
        },
        { ["vs-button--danger"]: !!this.danger },
        { ["vs-button--warn"]: !!this.warn },
        { ["vs-button--success"]: !!this.success },
        { ["vs-button--dark"]: !!this.dark },
        {
          ["vs-button--default"]: !this.flat && !this.border && !this.gradient && !this.relief && !this.transparent && !this.shadow && !this.floating
        },
        { ["vs-button--flat"]: !!this.flat },
        { ["vs-button--border"]: !!this.border },
        { ["vs-button--gradient"]: !!this.gradient },
        { ["vs-button--relief"]: !!this.relief },
        { ["vs-button--transparent"]: !!this.transparent },
        { ["vs-button--shadow"]: !!this.shadow },
        { ["vs-button--floating"]: !!this.floating }
      ];
    },
    bindRootStyle() {
      return {
        ["--vs-color"]: this.color ? this.getColor : ""
      };
    }
  },
  methods: {
    mouseDown(n) {
      this.ripple === "reverse" ? U_(n) : this.ripple === "cut" ? G_(n) : this.flat ? Ia(n, (this.componentColor || this.color || "primary") && !this.active && document.activeElement !== this.$el ? "inherit" : null, this.flat && !this.active && document.activeElement !== this.$el) : Ia(n, null, false);
    },
    click() {
      this.to ? this.$router.push(this.to) : this.href && window.open(this.href, this.blank && "_blank" || "_self");
    }
  }
});
var K_ = { class: "vs-button__content" };
var X_ = {
  key: 2,
  class: "vs-button__loading"
};
function J_(n, r, i, c, _, h) {
  const v = resolveComponent("icon-loading");
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["vs-button", n.bindRootClass]),
    style: normalizeStyle(n.bindRootStyle),
    onMousedown: r[0] || (r[0] = (...m) => n.mouseDown && n.mouseDown(...m)),
    onClick: r[1] || (r[1] = (...m) => n.click && n.click(...m))
  }, [
    createBaseVNode("div", K_, [
      renderSlot(n.$slots, "default")
    ]),
    n.$slots.animate ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["vs-button__animate", [`vs-button__animate--${n.animationType}`]])
    }, [
      renderSlot(n.$slots, "animate")
    ], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
    n.loading ? (openBlock(), createElementBlock("div", X_, [
      createVNode(v)
    ])) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64))
  ], 38);
}
var Z_ = ee(Y_, [["render", J_]]);
var Q_ = defineComponent({
  name: "vsButtonGroup",
  extends: _e,
  data: () => ({
    class: "",
    prototype: null
  })
});
var j_ = { class: "vs-button__group" };
function em(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("div", j_, [
    renderSlot(n.$slots, "default")
  ]);
}
var tm = ee(Q_, [["render", em]]);
var nm = defineComponent({
  name: "iconCheck",
  props: {
    indeterminate: Boolean
  }
});
var sm = createBaseVNode("span", null, [
  createBaseVNode("div", { class: "line1" }),
  createBaseVNode("div", { class: "line2" })
], -1);
var im = [
  sm
];
function om(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("i", {
    class: normalizeClass(["vs-icon-check", n.indeterminate && "indeterminate"])
  }, im, 2);
}
var rm = ee(nm, [["render", om]]);
Object.freeze({});
Object.freeze([]);
var am = Object.assign;
var ru = Array.isArray;
var um = (n) => typeof n == "function";
var cm = (n) => typeof n == "symbol";
var dm;
function fm(n, r = dm) {
  r && r.active && r.effects.push(n);
}
var Pa = (n) => {
  const r = new Set(n);
  return r.w = 0, r.n = 0, r;
};
var lu = (n) => (n.w & an) > 0;
var au = (n) => (n.n & an) > 0;
var hm = ({ deps: n }) => {
  if (n.length)
    for (let r = 0; r < n.length; r++)
      n[r].w |= an;
};
var vm = (n) => {
  const { deps: r } = n;
  if (r.length) {
    let i = 0;
    for (let c = 0; c < r.length; c++) {
      const _ = r[c];
      lu(_) && !au(_) ? _.delete(n) : r[i++] = _, _.w &= ~an, _.n &= ~an;
    }
    r.length = i;
  }
};
var hs = 0;
var an = 1;
var Xo = 30;
var ft;
Symbol(true ? "iterate" : "");
Symbol(true ? "Map key iterate" : "");
var pm = class {
  constructor(r, i = null, c) {
    this.fn = r, this.scheduler = i, this.active = true, this.deps = [], this.parent = void 0, fm(this, c);
  }
  run() {
    if (!this.active)
      return this.fn();
    let r = ft, i = li;
    for (; r; ) {
      if (r === this)
        return;
      r = r.parent;
    }
    try {
      return this.parent = ft, ft = this, li = true, an = 1 << ++hs, hs <= Xo ? hm(this) : Na(this), this.fn();
    } finally {
      hs <= Xo && vm(this), an = 1 << --hs, ft = this.parent, li = i, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ft === this ? this.deferStop = true : this.active && (Na(this), this.onStop && this.onStop(), this.active = false);
  }
};
function Na(n) {
  const { deps: r } = n;
  if (r.length) {
    for (let i = 0; i < r.length; i++)
      r[i].delete(n);
    r.length = 0;
  }
}
var li = true;
function Ma(n, r) {
  let i = false;
  hs <= Xo ? au(n) || (n.n |= an, i = !lu(n)) : i = !n.has(ft), i && (n.add(ft), ft.deps.push(n), ft.onTrack && ft.onTrack(Object.assign({ effect: ft }, r)));
}
function Va(n, r) {
  const i = ru(n) ? n : [...n];
  for (const c of i)
    c.computed && Da(c, r);
  for (const c of i)
    c.computed || Da(c, r);
}
function Da(n, r) {
  (n !== ft || n.allowRecurse) && (n.onTrigger && n.onTrigger(am({ effect: n }, r)), n.scheduler ? n.scheduler() : n.run());
}
new Set(
  Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(cm)
);
function gi(n) {
  const r = n && n.__v_raw;
  return r ? gi(r) : n;
}
function gm(n) {
  li && ft && (n = gi(n), true ? Ma(n.dep || (n.dep = Pa()), {
    target: n,
    type: "get",
    key: "value"
  }) : Ma(n.dep || (n.dep = Pa())));
}
function _m(n, r) {
  n = gi(n), n.dep && (true ? Va(n.dep, {
    target: n,
    type: "set",
    key: "value",
    newValue: r
  }) : Va(n.dep));
}
var uu;
var mm = class {
  constructor(r, i, c, _) {
    this._setter = i, this.dep = void 0, this.__v_isRef = true, this[uu] = false, this._dirty = true, this.effect = new pm(r, () => {
      this._dirty || (this._dirty = true, _m(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !_, this.__v_isReadonly = c;
  }
  get value() {
    const r = gi(this);
    return gm(r), (r._dirty || !r._cacheable) && (r._dirty = false, r._value = r.effect.run()), r._value;
  }
  set value(r) {
    this._setter(r);
  }
};
uu = "__v_isReadonly";
function Ct(n, r, i = false) {
  let c, _;
  const h = um(n);
  h ? (c = n, _ = true ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : lm) : (c = n.get, _ = n.set);
  const v = new mm(c, _, h || !_, i);
  return r && !i && (v.effect.onTrack = r.onTrack, v.effect.onTrigger = r.onTrigger), v;
}
var ym = defineComponent({
  inheritAttrs: false,
  name: "vsCheckbox",
  extends: _e,
  components: { iconCheck: rm, iconLoading: Ot },
  emits: ["input", "blur", "mousedown", "update:modelValue"],
  props: {
    modelValue: [Boolean, String, Array],
    val: [String, Object],
    notValue: String,
    indeterminate: Boolean,
    lineThrough: Boolean,
    checked: Boolean,
    loading: Boolean,
    label: String,
    labelBefore: Boolean,
    checkedForce: Boolean
  },
  setup(n, r) {
    const i = getCurrentInstance(), c = i == null ? void 0 : i.uid, _ = useAttrs(), h = Ct(() => n.modelValue ? typeof n.modelValue == "boolean" ? n.modelValue : ce.exports.isArray(n.modelValue) ? ce.exports.includes(n.modelValue, n.val) && ce.exports.includes(JSON.stringify(n.modelValue), JSON.stringify(n.val)) : _.hasOwnProperty("checked") : n.checkedForce && typeof n.checkedForce == "boolean" ? n.checkedForce : false), v = () => {
      if (typeof n.modelValue == "boolean")
        r.emit("update:modelValue", !n.modelValue);
      else if (ce.exports.isArray(n.modelValue) && n.modelValue !== null) {
        const w = n.modelValue, T = ce.exports.includes(w, n.val) || ce.exports.includes(JSON.stringify(w), JSON.stringify(n.val));
        let O = 0;
        w.forEach((B, F) => {
          JSON.stringify(B) === JSON.stringify(n.val) && (O = F);
        }), T ? w.splice(O, 1) : w.push(n.val), r.emit("update:modelValue", w);
      } else
        n.val !== n.modelValue ? r.emit("update:modelValue", n.val) : r.emit("update:modelValue", n.notValue || null);
    }, m = (w) => {
      v(), r.emit("mousedown", w);
    }, b = (w) => {
      r.emit("blur", w);
    };
    return watch(() => n.indeterminate, (w) => {
      r.emit("update:modelValue", w);
    }), onMounted(() => {
      (n.checked || n.checkedForce) && v();
    }), {
      uid: c,
      isChecked: h,
      listenerBlur: b,
      listenerInput: m
    };
  },
  computed: {
    bindStyle() {
      return {
        ["--vs-color"]: this.color ? this.getColor : ""
      };
    },
    bindClass() {
      return {
        "vs-checkbox--checked": this.isChecked,
        "vs-checkbox--disabled": this.$attrs.hasOwnProperty("disabled"),
        "vs-checkbox--loading": this.loading,
        "vs-checkbox--label-before": this.labelBefore,
        "vs-component--primary": !this.danger && !this.success && !this.warn && !this.dark && !this.color,
        "vs-component--danger": !!this.danger,
        "vs-component--warn": !!this.warn,
        "vs-component--success": !!this.success,
        "vs-component--dark": !!this.dark
      };
    }
  }
});
var bm = { class: "vs-checkbox-con" };
var $m = ["value", "id", "checked"];
var wm = { class: "vs-checkbox-mask" };
var km = ["for"];
var Cm = { key: 0 };
function Sm(n, r, i, c, _, h) {
  const v = resolveComponent("icon-check"), m = resolveComponent("icon-loading");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vs-checkbox-content", n.bindClass]),
    style: normalizeStyle(n.bindStyle)
  }, [
    createBaseVNode("div", bm, [
      createBaseVNode("input", mergeProps(n.$attrs, {
        type: "checkbox",
        value: n.val || n.notValue,
        id: n.uid,
        class: "vs-checkbox",
        checked: n.checkedForce || n.isChecked,
        onInput: r[0] || (r[0] = (...b) => n.listenerInput && n.listenerInput(...b)),
        onBlur: r[1] || (r[1] = (...b) => n.listenerBlur && n.listenerBlur(...b))
      }), null, 16, $m),
      createBaseVNode("div", wm, [
        n.$slots.icon ? renderSlot(n.$slots, "icon", { key: 1 }) : (openBlock(), createBlock(v, {
          key: 0,
          indeterminate: n.indeterminate
        }, null, 8, ["indeterminate"]))
      ]),
      n.loading ? (openBlock(), createBlock(m, { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64))
    ]),
    n.label || n.$slots.default ? (openBlock(), createElementBlock("label", {
      key: 0,
      for: n.uid,
      class: normalizeClass(["vs-checkbox-label", n.lineThrough && "lineThrough"])
    }, [
      n.label ? (openBlock(), createElementBlock("div", Cm, toDisplayString(n.label), 1)) : renderSlot(n.$slots, "default", { key: 1 })
    ], 10, km)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64))
  ], 6);
}
var cu = ee(ym, [["render", Sm]]);
var Em = defineComponent({
  inheritAttrs: false,
  name: "vsSwitch",
  extends: _e,
  emits: ["update:modelValue", "change", "click"],
  components: { iconLoading: Ot },
  props: {
    modelValue: {
      type: [Array, Boolean],
      default: null
    },
    val: {
      type: String,
      default: ""
    },
    notValue: {
      type: String,
      default: ""
    },
    loading: Boolean,
    square: Boolean,
    indeterminate: Boolean,
    icon: Boolean
  },
  computed: {
    bindClass() {
      return [
        {
          "vs-switch--loading": this.loading,
          "vs-switch--square": this.square,
          "vs-switch--indeterminate": this.indeterminate,
          "vs-switch--icon": this.icon,
          "vs-switch--checked": this.checkedStatus,
          "vs-component--primary": !this.danger && !this.success && !this.warn && !this.dark && !this.color,
          "vs-component--danger": !!this.danger,
          "vs-component--warn": !!this.warn,
          "vs-component--success": !!this.success,
          "vs-component--dark": !!this.dark
        }
      ];
    },
    checkedStatus() {
      if (this.modelValue) {
        if (typeof this.modelValue == "boolean")
          return this.modelValue;
        if (ce.exports.isArray(this.modelValue))
          return ce.exports.includes(this.modelValue, this.val) || ce.exports.includes(JSON.stringify(this.modelValue), JSON.stringify(this.val));
      }
      return false;
    },
    bindStyle() {
      return {
        "--vs-color": this.color ? this.getColor : ""
      };
    }
  },
  methods: {
    input(n) {
      if (typeof this.modelValue == "boolean")
        this.$emit("update:modelValue", !this.modelValue);
      else if (ce.exports.isArray(this.modelValue) && this.modelValue !== null) {
        const r = this.modelValue, i = ce.exports.includes(r, this.val) || ce.exports.includes(JSON.stringify(r), JSON.stringify(this.val));
        let c = 0;
        r.forEach((_, h) => {
          JSON.stringify(_) === JSON.stringify(this.val) && (c = h);
        }), i ? r.splice(c, 1) : r.push(this.val), this.$emit("update:modelValue", r);
      } else
        this.val !== this.modelValue ? this.$emit("update:modelValue", this.val) : this.$emit("update:modelValue", this.notValue || null);
      this.$emit("change", n);
    },
    click(n) {
      this.$emit("click", n);
    }
  }
});
var Tm = ["checked"];
var Lm = { class: "vs-switch__circle" };
var Bm = {
  key: 0,
  ref: "on",
  class: "vs-switch__text on"
};
var Am = {
  key: 2,
  ref: "off",
  class: "vs-switch__text off"
};
var Om = createBaseVNode("div", { class: "vs-switch__background" }, null, -1);
function Rm(n, r, i, c, _, h) {
  const v = resolveComponent("icon-loading");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vs-switch", n.bindClass]),
    onClick: r[1] || (r[1] = (...m) => n.click && n.click(...m)),
    style: normalizeStyle(n.bindStyle),
    type: "checkbox"
  }, [
    createBaseVNode("input", mergeProps({ checked: n.checkedStatus }, n.$attrs, {
      type: "checkbox",
      class: "vs-switch__input",
      onInput: r[0] || (r[0] = (...m) => n.input && n.input(...m))
    }), null, 16, Tm),
    createBaseVNode("div", Lm, [
      renderSlot(n.$slots, "circle"),
      n.loading ? (openBlock(), createBlock(v, { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64))
    ]),
    n.$slots.on || n.$slots.default ? (openBlock(), createElementBlock("div", Bm, [
      n.$slots.on ? renderSlot(n.$slots, "on", { key: 0 }) : n.$slots.default ? renderSlot(n.$slots, "default", { key: 1 }) : createCommentVNode("", true)
    ], 512)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
    n.$slots.off || n.$slots.default ? (openBlock(), createElementBlock("div", Am, [
      n.$slots.off ? renderSlot(n.$slots, "off", { key: 0 }) : n.$slots.default ? renderSlot(n.$slots, "default", { key: 1 }) : createCommentVNode("", true)
    ], 512)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64)),
    Om
  ], 6);
}
var Im = ee(Em, [["render", Rm]]);
var Pm = defineComponent({
  name: "vsRadio",
  extends: _e,
  emits: ["update:modelValue"],
  components: {
    iconLoading: Ot
  },
  props: {
    modelValue: null,
    val: null,
    name: String,
    disabled: Boolean,
    loading: Boolean,
    label: String,
    labelBefore: Boolean
  },
  setup(n, r) {
    const i = getCurrentInstance(), c = i == null ? void 0 : i.uid, _ = Ct(() => n.modelValue === n.val);
    return { uid: c, isChecked: _, input: (v) => {
      n.loading || r.emit("update:modelValue", n.val);
    } };
  },
  computed: {
    bindClass() {
      return [
        {
          disabled: this.disabled,
          loading: this.loading,
          active: this.isChecked,
          ["vs-radio__label__before"]: this.labelBefore
        },
        {
          ["vs-component--primary"]: !this.danger && !this.success && !this.warn && !this.dark && !this.color
        },
        { ["vs-component--danger"]: !!this.danger },
        { ["vs-component--warn"]: !!this.warn },
        { ["vs-component--success"]: !!this.success },
        { ["vs-component--dark"]: !!this.dark }
      ];
    },
    bindStyle() {
      return {
        ["--vs-color"]: this.color ? this.getColor : ""
      };
    }
  }
});
var Nm = { class: "vs-radio" };
var Mm = ["id", "value", "name", "checked"];
var Vm = { class: "vs-radio__effect" };
var Dm = {
  key: 0,
  class: "vs-radio__effect__icon"
};
var Wm = {
  key: 2,
  class: "vs-radio__effect__loading"
};
var xm = ["for"];
function Hm(n, r, i, c, _, h) {
  const v = resolveComponent("icon-loading");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vs-radio-content", n.bindClass]),
    style: normalizeStyle(n.bindStyle)
  }, [
    createBaseVNode("div", Nm, [
      createBaseVNode("input", {
        type: "radio",
        id: n.uid,
        value: n.val,
        name: n.name || n.modelValue,
        checked: n.isChecked,
        onInput: r[0] || (r[0] = (...m) => n.input && n.input(...m))
      }, null, 40, Mm),
      createBaseVNode("span", Vm, [
        n.$slots.icon ? (openBlock(), createElementBlock("span", Dm, [
          renderSlot(n.$slots, "icon")
        ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
        n.loading ? (openBlock(), createElementBlock("span", Wm, [
          createVNode(v)
        ])) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64))
      ])
    ]),
    n.label || n.$slots.default ? (openBlock(), createElementBlock("label", {
      key: 0,
      for: n.uid,
      class: "vs-radio__label"
    }, [
      n.label ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createTextVNode(toDisplayString(n.label), 1)
      ], 64)) : renderSlot(n.$slots, "default", { key: 1 })
    ], 8, xm)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64))
  ], 6);
}
var Fm = ee(Pm, [["render", Hm]]);
var Um = {
  modelValue: null,
  labelPlaceholder: null,
  label: null,
  block: Boolean,
  iconAfter: Boolean,
  showPassword: Boolean,
  loading: Boolean,
  color: String,
  state: String,
  progress: Number,
  border: Boolean,
  shadow: Boolean,
  transparent: Boolean,
  textWhite: Boolean,
  square: Boolean,
  clearable: Boolean,
  disabled: Boolean,
  type: String
};
var Gm = defineComponent({
  props: {
    type: String
  },
  setup() {
    return {
      beforeEnter: (c) => {
        c.style.height = "0";
      },
      enter: (c, _) => {
        let h = c.scrollHeight;
        c.style.height = h - 1 + "px", _();
      },
      leave: (c, _) => {
        c.style.minHeight = "0px", c.style.height = "0px";
      }
    };
  }
});
function qm(n, r, i, c, _, h) {
  return openBlock(), createBlock(Transition, {
    onBeforeEnter: n.beforeEnter,
    onEnter: n.enter,
    onLeave: n.leave
  }, {
    default: withCtx(() => [
      renderSlot(n.$slots, "default")
    ]),
    _: 3
  }, 8, ["onBeforeEnter", "onEnter", "onLeave"]);
}
var du = ee(Gm, [["render", qm]]);
var zm = defineComponent({
  inheritAttrs: false,
  name: "vsInput",
  extends: _e,
  components: {
    iconLoading: Ot,
    iconClose: ps,
    Message: du
  },
  props: Um,
  emits: ["update:modelValue", "click-icon"],
  setup(n, r) {
    const i = getCurrentInstance(), c = useAttrs(), _ = ["success", "warn", "danger", "primary", "dark"], h = ref(false), v = ref(false), m = ref(false), b = i.uid, w = Ct(() => `vs-input--${c.id || b}`), T = Ct(() => n.showPassword ? m.value ? "text" : "password" : n.type), O = (z) => {
      z.style.height = "0";
    }, B = (z, X) => {
      let Te = z.scrollHeight;
      z.style.height = Te - 1 + "px", X();
    }, F = (z) => {
      z.style.minHeight = "0px", z.style.height = "0px";
    }, Z = (z) => {
      r.emit("update:modelValue", z.target.value);
    }, le = () => {
      h.value = true;
    }, me = () => {
      h.value = false;
    }, te = (z) => {
      r.emit("click-icon", z.target.value);
    }, Ee = () => {
      m.value = !m.value;
    }, pe = () => {
      v.value = true;
    }, ae = () => {
      v.value = false;
    }, Q = Ct(() => !n.clearable && n.type != "search" || n.disabled || n.loading || !n.modelValue || n.modelValue === 0 ? false : h.value);
    return {
      attrs: c,
      isVisiblePassword: m,
      messageType: _,
      getId: w,
      showClearable: Q,
      inputType: T,
      inputEvent: Z,
      clickIcon: te,
      handleShowPassword: Ee,
      mouseEnterClearable: pe,
      mouseLeaveClearable: ae,
      clearOptions: () => {
        n.disabled || r.emit("update:modelValue", null);
      },
      mouseEnterInput: le,
      mouseLeaveInput: me,
      transitionBeforeEnter: O,
      transitionEnter: B,
      transitionLeave: F
    };
  },
  computed: {
    bindRootStyle() {
      return {
        ["--vs-color"]: this.color ? this.getColor : ""
      };
    },
    bindRootClass() {
      return [
        `vs-input-parent--state-${this.state}`,
        { "vs-input-parent--border": !!this.border },
        { "vs-input-parent--shadow": !!this.shadow },
        {
          ["vs-input-content--has-label"]: this.label || this.labelPlaceholder
        },
        { block: this.block },
        { transparent: this.transparent },
        { textWhite: this.textWhite },
        { square: this.square },
        {
          ["vs-component--primary"]: !this.danger && !this.success && !this.warn && !this.dark && !this.color
        },
        { ["vs-component--danger"]: !!this.danger },
        { ["vs-component--warn"]: !!this.warn },
        { ["vs-component--success"]: !!this.success },
        { ["vs-component--dark"]: !!this.dark },
        { ["vs-component--is-color"]: !!this.isColor }
      ];
    },
    hasColor() {
      return this.color || this.primary || this.danger || this.success || this.dark || this.warn;
    }
  }
});
var Ym = ["value", "id", "type"];
var Km = ["for"];
var Xm = ["for"];
var Jm = {
  key: 3,
  class: "vs-input__loading"
};
var Zm = ["for"];
var Qm = ["for"];
var jm = {
  key: 0,
  class: "bx bx-show-alt"
};
var e0 = {
  key: 1,
  class: "bx bx-hide"
};
var t0 = createBaseVNode("div", { class: "vs-input__affects" }, [
  createBaseVNode("div", { class: "vs-input__affects__1" }),
  createBaseVNode("div", { class: "vs-input__affects__2" })
], -1);
function n0(n, r, i, c, _, h) {
  const v = resolveComponent("icon-loading"), m = resolveComponent("icon-close"), b = resolveComponent("Message");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vs-input-parent", n.bindRootClass]),
    style: normalizeStyle(n.bindRootStyle)
  }, [
    createBaseVNode("div", {
      class: normalizeClass(["vs-input-content", [
        { ["vs-input-content--has-color"]: n.hasColor },
        { ["vs-input-content--has-label"]: n.label || n.labelPlaceholder },
        { ["vs-input-content-icon--after"]: !!n.iconAfter }
      ]]),
      onMouseenter: r[5] || (r[5] = (...w) => n.mouseEnterInput && n.mouseEnterInput(...w)),
      onMouseleave: r[6] || (r[6] = (...w) => n.mouseLeaveInput && n.mouseLeaveInput(...w))
    }, [
      createBaseVNode("input", mergeProps(n.$attrs, {
        class: ["vs-input vs-hide-clear", [
          { ["vs-input--has-icon"]: !!n.$slots.icon },
          { ["vs-input--has-icon--after"]: !!n.iconAfter },
          { ["vs-input--has-icon--eye"]: n.showPassword },
          { ["vs-input--has-icon--clearable"]: n.clearable || n.type === "search" }
        ]],
        value: n.modelValue,
        placeholder: "",
        id: n.getId,
        type: n.inputType,
        onInput: r[0] || (r[0] = (...w) => n.inputEvent && n.inputEvent(...w))
      }), null, 16, Ym),
      n.label ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: n.getId,
        class: normalizeClass([
          "vs-input__label",
          { "vs-input__label--hidden": n.modelValue !== "" }
        ])
      }, toDisplayString(n.$attrs.placeholder), 11, Km)) : createCommentVNode("", true),
      createBaseVNode("label", {
        for: n.getId,
        class: normalizeClass([
          "vs-input__label",
          { "vs-input__label--placeholder": n.labelPlaceholder },
          {
            "vs-input__label--hidden": n.modelValue || n.modelValue === 0 || n.$attrs.type == "date" || n.$attrs.type == "time"
          },
          { "vs-input__label--label": n.label }
        ])
      }, toDisplayString(n.label || n.$attrs.placeholder || n.labelPlaceholder), 11, Xm),
      n.$slots.icon ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: normalizeClass(["vs-input__icon", [
          { "vs-input__icon--after": n.iconAfter },
          { "vs-input__icon--click": !!n.$attrs["click-icon"] || true }
        ]]),
        onClick: r[1] || (r[1] = (...w) => n.clickIcon && n.clickIcon(...w))
      }, [
        renderSlot(n.$slots, "icon")
      ], 2)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [], 64)),
      n.loading ? (openBlock(), createElementBlock("div", Jm, [
        createVNode(v)
      ])) : (openBlock(), createElementBlock(Fragment, { key: 4 }, [], 64)),
      createVNode(Transition, { name: "input-default-icon" }, {
        default: withCtx(() => [
          n.showClearable ? (openBlock(), createElementBlock("label", {
            key: 0,
            for: n.getId,
            class: "vs-input-content__clearable",
            onMouseenter: r[2] || (r[2] = (...w) => n.mouseEnterClearable && n.mouseEnterClearable(...w)),
            onMouseleave: r[3] || (r[3] = (...w) => n.mouseLeaveClearable && n.mouseLeaveClearable(...w))
          }, [
            createVNode(m, { onClick: n.clearOptions }, null, 8, ["onClick"])
          ], 40, Zm)) : createCommentVNode("", true)
        ]),
        _: 1
      }),
      n.showPassword && n.type === "password" ? (openBlock(), createElementBlock("label", {
        key: 5,
        for: n.getId,
        onClick: r[4] || (r[4] = (...w) => n.handleShowPassword && n.handleShowPassword(...w)),
        class: "vs-input-content__show--password"
      }, [
        n.isVisiblePassword ? (openBlock(), createElementBlock("i", jm)) : (openBlock(), createElementBlock("i", e0))
      ], 8, Qm)) : (openBlock(), createElementBlock(Fragment, { key: 6 }, [], 64)),
      t0
    ], 34),
    n.progress && n.progress > 0 ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["vs-input__progress", [
        { "vs-input__progress--danger": n.progress <= 33 },
        { "vs-input__progress--warn": n.progress <= 66 && n.progress > 33 },
        { "vs-input__progress--success": n.progress > 66 }
      ]])
    }, [
      createBaseVNode("div", {
        class: "vs-input__progress__bar",
        style: normalizeStyle({ width: `${n.progress}%` })
      }, null, 4)
    ], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
    (openBlock(true), createElementBlock(Fragment, null, renderList(n.messageType, (w) => (openBlock(), createBlock(b, null, {
      default: withCtx(() => [
        n.$slots[`message-${w}`] ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["vs-input__message", [`vs-input__message--${w}`]])
        }, [
          renderSlot(n.$slots, `message-${w}`)
        ], 2)) : createCommentVNode("", true)
      ]),
      _: 2
    }, 1024))), 256))
  ], 6);
}
var s0 = ee(zm, [["render", n0]]);
var i0 = defineComponent({
  name: "vsPaginationButtons",
  props: {
    array: {
      type: Array,
      required: true
    }
  },
  methods: {
    dynamicNameSlot(n) {
      return n === "...>" || n === "<..." ? "dotted" : "button";
    }
  }
});
function o0(n, r, i, c, _, h) {
  return openBlock(true), createElementBlock(Fragment, null, renderList(n.array, (v, m) => renderSlot(n.$slots, n.dynamicNameSlot(v), {
    key: m,
    item: v
  })), 128);
}
var r0 = ee(i0, [["render", o0]]);
var l0 = defineComponent({
  name: "iconArrow",
  props: {
    less: Boolean
  }
});
function a0(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("i", {
    ref: "icon",
    class: normalizeClass(["vs-icon-arrow", n.less && "less"])
  }, null, 2);
}
var gs = ee(l0, [["render", a0]]);
var u0 = defineComponent({
  name: "vsPagination",
  extends: _e,
  components: {
    iconArrow: gs,
    iconLoading: Ot,
    Buttons: r0
  },
  props: {
    modelValue: {
      type: Number,
      required: true,
      validator(n) {
        return n >= 1;
      }
    },
    infinite: Boolean,
    progress: Boolean,
    notMargin: Boolean,
    buttonsDotted: Boolean,
    notArrows: Boolean,
    onlyArrows: Boolean,
    circle: Boolean,
    square: Boolean,
    disabled: Boolean,
    length: {
      type: Number,
      default: 0,
      validator(n) {
        return n >= 1;
      }
    },
    max: {
      type: Number,
      default: 9,
      validator(n) {
        return n > 0;
      }
    },
    dottedNumber: {
      type: Number,
      default: 5,
      validator(n) {
        return n > 0;
      }
    },
    disabledItems: {
      type: Array,
      default: () => []
    },
    loadingItems: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    val: 0,
    leftActive: 42,
    activeClassMove: false
  }),
  watch: {
    length() {
      this.$nextTick(() => {
        const n = this.$refs.pagination.offsetLeft;
        this.leftActive = this.$refs[`btn${this.modelValue}`].offsetLeft + n, setTimeout(() => {
          this.activeClassMove = false;
        }, 300);
      });
    },
    modelValue: {
      handler(n, r) {
        this.handlerModelValue(n, r);
      },
      immediate: true,
      flush: "post"
    }
  },
  computed: {
    bindStyle() {
      return {
        ["--vs-color"]: this.color ? this.getColor : ""
      };
    },
    bindClass() {
      return [
        {
          buttonsDotted: this.buttonsDotted,
          circle: this.circle,
          square: this.square,
          disabled: this.disabled,
          notMargin: this.notMargin
        },
        {
          ["vs-component--primary"]: !this.danger && !this.success && !this.warn && !this.dark && !this.color
        },
        { ["vs-component--danger"]: !!this.danger },
        { ["vs-component--warn"]: !!this.warn },
        { ["vs-component--success"]: !!this.success },
        { ["vs-component--dark"]: !!this.dark }
      ];
    },
    isMobile() {
      return window.innerWidth < 600;
    },
    getProgress() {
      return this.modelValue * 100 / this.length;
    },
    getPages() {
      const n = Number(this.length), r = this.isMobile ? 5 : this.max, i = r % 2 === 0 ? 1 : 0, c = Math.floor(r / 2), _ = n - c + 1 + i;
      if (this.modelValue >= c && this.modelValue <= _ && !this.buttonsDotted) {
        const h = this.modelValue - c + 2, v = this.modelValue + c - 2 - i;
        return [1, "<...", ...this.getButtons(h, v), "...>", this.length];
      }
      return !this.buttonsDotted && this.length > 6 ? [
        ...this.getButtons(1, c),
        "...>",
        ...this.getButtons(_, n)
      ] : this.buttonsDotted || this.length <= 6 ? [...this.getButtons(1, this.length == 0 ? 1 : this.length)] : [];
    },
    paginationActive() {
      return this.buttonsDotted ? "" : this.modelValue;
    }
  },
  methods: {
    setValuePage(n) {
      this.$emit("update:modelValue", n);
    },
    isDisabledItem(n) {
      return ce.exports.includes(this.disabledItems, n);
    },
    isLoadingItem(n) {
      return ce.exports.includes(this.loadingItems, n);
    },
    getButtons(n = 1, r = 6) {
      const i = [];
      for (n > 0 ? n : 1; n <= r; n++)
        i.push(n);
      return i;
    },
    clickPrevBtn() {
      const n = this.modelValue - 1;
      n > 0 ? this.setValuePage(n) : this.infinite && this.setValuePage(this.length);
    },
    clickNextBtn() {
      const n = this.modelValue + 1;
      n <= this.length ? this.setValuePage(n) : this.infinite && this.setValuePage(1);
    },
    clickDottedBtn(n = "...") {
      let i = (this.modelValue === this.length ? false : n === "...>") ? this.modelValue + this.dottedNumber : this.modelValue - this.dottedNumber;
      i > this.length ? i = this.length : i < 1 && (i = 1), this.setValuePage(i);
    },
    isButtonDotted(n) {
      return n === "...>" || n === "<...";
    },
    handlerModelValue(n, r) {
      if (this.isDisabledItem(n) || this.isLoadingItem(n)) {
        let i = n;
        n > r ? i += 1 : i -= 1, i > this.length ? i = this.infinite ? 1 : r : i <= 0 && (i = this.infinite ? this.length : r), this.setValuePage(i);
      } else
        this.$refs.pagination && (this.activeClassMove = true, this.$nextTick(() => {
          const i = this.$refs.pagination.offsetLeft, c = this.$refs[`btn${n}`].offsetLeft;
          this.leftActive = c + i, setTimeout(() => {
            this.activeClassMove = false;
          }, 300);
        }));
    }
  },
  mounted() {
    this.handlerModelValue(this.modelValue, 0);
  },
  beforeMount() {
    this.notArrows && (this.leftActive = 0), this.buttonsDotted && (this.leftActive = 21);
  }
});
var c0 = ["disabled"];
var d0 = {
  key: 4,
  class: "vs-pagination__slot"
};
var f0 = {
  key: 6,
  class: "vs-pagination",
  ref: "pagination"
};
var h0 = ["onClick"];
var v0 = createBaseVNode("span", { class: "dotted" }, "...", -1);
var p0 = { class: "con-arrows" };
var g0 = ["onClick"];
var _0 = ["disabled"];
var m0 = {
  key: 10,
  class: "vs-pagination__progress"
};
function y0(n, r, i, c, _, h) {
  const v = resolveComponent("icon-arrow"), m = resolveComponent("icon-loading"), b = resolveComponent("Buttons");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vs-pagination-content", n.bindClass]),
    style: normalizeStyle(n.bindStyle)
  }, [
    !n.onlyArrows && !n.$slots.default ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["vs-pagination__active", { move: n.activeClassMove }]),
      style: normalizeStyle({ left: `${n.leftActive}px` })
    }, toDisplayString(n.paginationActive), 7)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
    n.notArrows ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64)) : (openBlock(), createElementBlock("button", {
      key: 2,
      class: "prev vs-pagination__arrow",
      disabled: n.infinite ? false : n.modelValue <= 1,
      onClick: r[0] || (r[0] = (...w) => n.clickPrevBtn && n.clickPrevBtn(...w))
    }, [
      n.$slots.arrowPrev ? renderSlot(n.$slots, "arrowPrev", { key: 0 }) : (openBlock(), createBlock(v, { key: 1 }))
    ], 8, c0)),
    n.$slots.default ? (openBlock(), createElementBlock("div", d0, [
      renderSlot(n.$slots, "default")
    ])) : (openBlock(), createElementBlock(Fragment, { key: 5 }, [], 64)),
    !n.onlyArrows && !n.$slots.default ? (openBlock(), createElementBlock("div", f0, [
      createVNode(b, { array: n.getPages }, {
        dotted: withCtx(({ item: w }) => [
          createBaseVNode("div", {
            class: normalizeClass(["vs-pagination__dotted", {
              next: n.modelValue === n.length ? false : w === "...>"
            }]),
            onClick: (T) => n.clickDottedBtn(w)
          }, [
            v0,
            createBaseVNode("span", p0, [
              createVNode(v),
              createVNode(v)
            ])
          ], 10, h0)
        ]),
        button: withCtx(({ item: w }) => [
          createBaseVNode("button", {
            ref: `btn${w}`,
            class: normalizeClass(["vs-pagination__button", {
              active: w === n.modelValue,
              prevActive: w === n.modelValue - 1,
              nextActive: w === n.modelValue + 1,
              disabled: n.isDisabledItem(Number(w)),
              loading: n.isLoadingItem(Number(w))
            }]),
            onClick: (T) => n.setValuePage(Number(w))
          }, [
            createTextVNode(toDisplayString(n.buttonsDotted ? "" : w) + " ", 1),
            n.isLoadingItem(Number(w)) ? (openBlock(), createBlock(m, {
              key: 0,
              class: "vs-pagination__button__loading"
            })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64))
          ], 10, g0)
        ]),
        _: 1
      }, 8, ["array"])
    ], 512)) : (openBlock(), createElementBlock(Fragment, { key: 7 }, [], 64)),
    n.notArrows ? (openBlock(), createElementBlock(Fragment, { key: 9 }, [], 64)) : (openBlock(), createElementBlock("button", {
      key: 8,
      class: "next vs-pagination__arrow",
      disabled: n.infinite ? false : n.modelValue >= n.length,
      onClick: r[1] || (r[1] = (...w) => n.clickNextBtn && n.clickNextBtn(...w))
    }, [
      n.$slots.arrowNext ? renderSlot(n.$slots, "arrowNext", { key: 0 }) : (openBlock(), createBlock(v, { key: 1 }))
    ], 8, _0)),
    n.progress ? (openBlock(), createElementBlock("div", m0, [
      createBaseVNode("div", {
        class: "progress",
        style: normalizeStyle({ width: `${n.getProgress}%` })
      }, null, 4)
    ])) : (openBlock(), createElementBlock(Fragment, { key: 11 }, [], 64))
  ], 6);
}
var b0 = ee(u0, [["render", y0]]);
var $0 = defineComponent({
  name: "vsTooltip",
  extends: _e,
  components: { iconLoading: Ot },
  props: {
    modelValue: {
      default: null
    },
    loading: Boolean,
    bottom: Boolean,
    left: Boolean,
    right: Boolean,
    notHover: Boolean,
    shadow: Boolean,
    interactivity: Boolean,
    notArrow: Boolean,
    square: Boolean,
    circle: Boolean,
    border: Boolean,
    borderThick: Boolean,
    delay: null
  },
  data: () => ({
    activeTooltip: false,
    isHoverTooltip: false,
    timeoutTooltip: NaN
  }),
  watch: {
    modelValue(n) {
      this.activeTooltip = n, n && this.$nextTick(() => {
        this.insertTooltip();
      });
    }
  },
  computed: {
    bindTooltipClass() {
      return [
        {
          top: !this.bottom && !this.left && !this.right,
          bottom: this.bottom,
          left: this.left,
          right: this.right,
          shadow: this.shadow,
          notArrow: this.notArrow,
          square: this.square,
          circle: this.circle,
          border: this.border,
          borderThick: this.borderThick,
          loading: this.loading
        },
        { ["vs-component--primary"]: !!this.primary },
        { ["vs-component--danger"]: !!this.danger },
        { ["vs-component--warn"]: !!this.warn },
        { ["vs-component--success"]: !!this.success },
        { ["vs-component--dark"]: !!this.dark }
      ];
    },
    bindTooltipStyle() {
      return {
        ["--vs-color"]: this.color ? this.getColor : ""
      };
    }
  },
  methods: {
    insertTooltip() {
      const n = this.$refs.tooltip;
      tr(n, document.body);
      let r = "top";
      this.bottom ? r = "bottom" : this.left ? r = "left" : this.right && (r = "right"), zo(n, this.$refs.content, r), this.$emit("update:modelValue", true);
    },
    handlerMouseEnter() {
      this.delay ? setTimeout(() => {
        this.activeTooltip = true, this.$nextTick(() => {
          this.insertTooltip();
        });
      }, Number(this.delay)) : (this.activeTooltip = true, this.$nextTick(() => {
        this.insertTooltip();
      }));
    },
    removeTooltip() {
      this.activeTooltip = false, this.$emit("update:modelValue", false);
    },
    handleResize() {
      let n = "top";
      this.bottom ? n = "bottom" : this.left ? n = "left" : this.right && (n = "right");
      const r = this.$refs.tooltip;
      if (!!r) {
        this.$nextTick(() => {
          zo(r, this.$refs.content, n);
        });
        for (let i = 0; i < 300; i++)
          setTimeout(() => {
            zo(r, this.$refs.content, n);
          }, i);
      }
    },
    handleMouseDownNotHover(n) {
      !n.target.closest(".vs-tooltip") && !n.target.closest(".vs-tooltip-content") && this.removeTooltip();
    },
    onMouseEnter() {
      this.notHover || this.handlerMouseEnter();
    },
    onMouseLeave() {
      this.notHover || (this.interactivity ? (clearTimeout(this.timeoutTooltip), this.timeoutTooltip = setTimeout(() => {
        this.isHoverTooltip || this.removeTooltip();
      }, 250)) : this.removeTooltip());
    },
    onMouseEnterTooltip() {
      this.interactivity && (this.isHoverTooltip = true, this.handlerMouseEnter());
    },
    onMouseLeaveTooltip() {
      this.isHoverTooltip = false, this.removeTooltip();
    },
    leaveTooltip(n, r) {
      setTimeout(() => {
        r(), vs(n, n.parentElement);
      }, 250);
    }
  },
  mounted() {
    window.addEventListener("popstate", () => {
      document.querySelectorAll(".vs-tooltip").forEach((r) => {
        r.remove();
      });
    }), window.addEventListener("resize", this.handleResize), this.notHover && window.addEventListener("mousedown", this.handleMouseDownNotHover), window.addEventListener("touchstart", this.handleMouseDownNotHover);
  },
  beforeUnmount() {
    this.activeTooltip = false, window.removeEventListener("resize", this.handleResize), window.removeEventListener("mousedown", this.handleMouseDownNotHover);
  }
});
function w0(n, r, i, c, _, h) {
  const v = resolveComponent("icon-loading");
  return openBlock(), createElementBlock("div", {
    ref: "content",
    class: "vs-tooltip-content",
    onMouseenter: r[2] || (r[2] = (...m) => n.onMouseEnter && n.onMouseEnter(...m)),
    onMouseleave: r[3] || (r[3] = (...m) => n.onMouseLeave && n.onMouseLeave(...m))
  }, [
    createVNode(Transition, {
      name: "vs-tooltip",
      onLeave: n.leaveTooltip
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          ref: "tooltip",
          class: normalizeClass(["vs-tooltip", n.bindTooltipClass]),
          style: normalizeStyle(n.bindTooltipStyle),
          onMouseenter: r[0] || (r[0] = (...m) => n.onMouseEnterTooltip && n.onMouseEnterTooltip(...m)),
          onMouseleave: r[1] || (r[1] = (...m) => n.onMouseLeaveTooltip && n.onMouseLeaveTooltip(...m))
        }, [
          renderSlot(n.$slots, "tooltip"),
          n.loading ? (openBlock(), createBlock(v, { key: 0 })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64))
        ], 38), [
          [vShow, n.activeTooltip]
        ])
      ]),
      _: 3
    }, 8, ["onLeave"]),
    renderSlot(n.$slots, "default")
  ], 544);
}
var k0 = ee($0, [["render", w0]]);
var fu = Symbol("vsSelectOptionGroup");
var C0 = {
  modelValue: null,
  multiple: Boolean,
  filter: Boolean,
  placeholder: String,
  labelPlaceholder: String,
  label: String,
  disabled: Boolean,
  collapseChips: Boolean,
  loading: Boolean,
  state: String,
  block: Boolean,
  hideScrollbar: Boolean,
  nativeScrollbar: Boolean,
  clearable: Boolean
};
var S0 = ["focus", "update:modelValue", "blur", "change", "click"];
var nr = Symbol("vsSelect");
var hi = (n = []) => {
  let r = [];
  return n.forEach((i) => {
    let c = [];
    if (i.type.name === "vsOption") {
      r.push(i);
      return;
    }
    if (i.type.name === "vsOptionGroup") {
      const _ = i.children.default();
      c = hi(_);
    } else
      Array.isArray(i.children) && (c = hi(i.children));
    r = [...r, ...c];
  }), r;
};
var Wa;
var _i = typeof window < "u";
var E0 = (n) => typeof n == "string";
var T0 = () => {
};
_i && ((Wa = window == null ? void 0 : window.navigator) == null ? void 0 : Wa.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function L0(n) {
  return typeof n == "function" ? n() : unref(n);
}
function B0(n) {
  return n;
}
function hu(n) {
  return getCurrentScope() ? (onScopeDispose(n), true) : false;
}
function A0(n, r = true) {
  getCurrentInstance() ? onMounted(n) : r ? n() : nextTick(n);
}
function vu(n) {
  var r;
  const i = L0(n);
  return (r = i == null ? void 0 : i.$el) != null ? r : i;
}
var pu = _i ? window : void 0;
function Jo(...n) {
  let r, i, c, _;
  if (E0(n[0]) || Array.isArray(n[0]) ? ([i, c, _] = n, r = pu) : [r, i, c, _] = n, !r)
    return T0;
  Array.isArray(i) || (i = [i]), Array.isArray(c) || (c = [c]);
  const h = [], v = () => {
    h.forEach((T) => T()), h.length = 0;
  }, m = (T, O, B) => (T.addEventListener(O, B, _), () => T.removeEventListener(O, B, _)), b = watch(() => vu(r), (T) => {
    v(), T && h.push(...i.flatMap((O) => c.map((B) => m(T, O, B))));
  }, { immediate: true, flush: "post" }), w = () => {
    b(), v();
  };
  return hu(w), w;
}
function O0(n, r = false) {
  const i = ref(), c = () => i.value = Boolean(n());
  return c(), A0(c, r), i;
}
var Zo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var Qo = "__vueuse_ssr_handlers__";
Zo[Qo] = Zo[Qo] || {};
Zo[Qo];
var xa = Object.getOwnPropertySymbols;
var R0 = Object.prototype.hasOwnProperty;
var I0 = Object.prototype.propertyIsEnumerable;
var P0 = (n, r) => {
  var i = {};
  for (var c in n)
    R0.call(n, c) && r.indexOf(c) < 0 && (i[c] = n[c]);
  if (n != null && xa)
    for (var c of xa(n))
      r.indexOf(c) < 0 && I0.call(n, c) && (i[c] = n[c]);
  return i;
};
function N0(n, r, i = {}) {
  const c = i, { window: _ = pu } = c, h = P0(c, ["window"]);
  let v;
  const m = O0(() => _ && "ResizeObserver" in _), b = () => {
    v && (v.disconnect(), v = void 0);
  }, w = watch(() => vu(n), (O) => {
    b(), m.value && _ && O && (v = new ResizeObserver(r), v.observe(O, h));
  }, { immediate: true, flush: "post" }), T = () => {
    b(), w();
  };
  return hu(T), {
    isSupported: m,
    stop: T
  };
}
var Ha;
(function(n) {
  n.UP = "UP", n.RIGHT = "RIGHT", n.DOWN = "DOWN", n.LEFT = "LEFT", n.NONE = "NONE";
})(Ha || (Ha = {}));
var M0 = Object.defineProperty;
var Fa = Object.getOwnPropertySymbols;
var V0 = Object.prototype.hasOwnProperty;
var D0 = Object.prototype.propertyIsEnumerable;
var Ua = (n, r, i) => r in n ? M0(n, r, { enumerable: true, configurable: true, writable: true, value: i }) : n[r] = i;
var W0 = (n, r) => {
  for (var i in r || (r = {}))
    V0.call(r, i) && Ua(n, i, r[i]);
  if (Fa)
    for (var i of Fa(r))
      D0.call(r, i) && Ua(n, i, r[i]);
  return n;
};
var x0 = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
W0({
  linear: B0
}, x0);
var gu = Symbol("scrollbarContextKey");
var H0 = {
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: Boolean,
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  showAlways: Boolean,
  thickness: {
    type: [Number, String],
    default: 8
  },
  minSize: {
    type: [String, Number],
    default: 20
  },
  hideScrollbar: Boolean
};
var F0 = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
};
var Yn = 4;
var U0 = ["onMousedown"];
var G0 = ["onMousedown"];
var q0 = defineComponent({
  inheritAttrs: false,
  name: "scrollbar-thumb"
});
var Ga = defineComponent({
  ...q0,
  props: {
    vertical: Boolean,
    size: [String, Number],
    move: Number,
    ratio: {
      type: Number,
      required: true
    },
    showAlways: Boolean
  },
  setup(n) {
    const r = n, i = inject(gu);
    if (!i)
      throw new Error("vsScollbar can not inject scrollbar context");
    const c = ref(), _ = ref(), h = ref({}), v = ref(false), m = ref(false), b = ref(false);
    let w = _i ? document.onselectstart : null;
    const T = computed(() => F0[r.vertical ? "vertical" : "horizontal"]), O = computed(() => ({
      [T.value.size]: r.size,
      transform: `translate${T.value.axis}(${r.move}%)`
    })), B = computed(() => c.value[T.value.offset] ** 2 / i.wrapElement[T.value.scrollSize] / r.ratio / _.value[T.value.offset]), F = (Q) => {
      var z;
      if (Q.ctrlKey || [1, 2].includes(Q.button))
        return;
      (z = window.getSelection()) == null || z.removeAllRanges(), le();
      const W = Q.currentTarget;
      !W || (h.value[T.value.axis] = W[T.value.offset] - (Q[T.value.client] - W.getBoundingClientRect()[T.value.direction]));
    }, Z = (Q) => {
      if (!_.value || !c.value || !i.wrapElement)
        return;
      i.wrapElement.style.scrollBehavior = "smooth";
      const W = Math.abs(Q.target.getBoundingClientRect()[T.value.direction] - Q[T.value.client]), z = _.value[T.value.offset] / 2, X = (W - z) * 100 * B.value / c.value[T.value.offset];
      i.wrapElement[T.value.scroll] = X * i.wrapElement[T.value.scrollSize] / 100, i.wrapElement.style.scrollBehavior = "unset";
    }, le = (Q) => {
      m.value = true, document.addEventListener("mousemove", me), document.addEventListener("mouseup", te), w = document.onselectstart, document.onselectstart = () => false;
    }, me = (Q) => {
      if (!c.value || !_.value || m.value === false)
        return;
      const W = h.value[T.value.axis];
      if (!W)
        return;
      const z = (c.value.getBoundingClientRect()[T.value.direction] - Q[T.value.client]) * -1, X = _.value[T.value.offset] - W, Te = (z - X) * 100 * B.value / c.value[T.value.offset];
      i.wrapElement[T.value.scroll] = Te * i.wrapElement[T.value.scrollSize] / 100;
    }, te = () => {
      m.value = false, h.value[T.value.axis] = 0, document.removeEventListener("mousemove", me), document.removeEventListener("mouseup", te), ae(), b.value && (v.value = false);
    }, Ee = () => {
      b.value = false, v.value = !!r.size;
    }, pe = () => {
      b.value = true, v.value = m.value;
    };
    onBeforeUnmount(() => {
      ae(), document.removeEventListener("mouseup", te);
    });
    const ae = () => {
      document.onselectstart !== w && (document.onselectstart = w);
    };
    return Jo(toRef(i, "scrollbarElement"), "mousemove", Ee), Jo(toRef(i, "scrollbarElement"), "mouseleave", pe), (Q, W) => (openBlock(), createBlock(Transition, { name: "scrollbar-fade" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          ref_key: "instance",
          ref: c,
          class: normalizeClass([
            "vs-scrollbar__bar",
            `vs-scrollbar__bar--${unref(T).key}`
          ]),
          onMousedown: withModifiers(Z, ["self"])
        }, [
          createBaseVNode("div", mergeProps({
            ref_key: "thumb",
            ref: _,
            class: "vs-scrollbar__thumb",
            style: unref(O),
            onMousedown: withModifiers(F, ["self"])
          }, Q.$attrs), null, 16, G0)
        ], 42, U0), [
          [vShow, n.showAlways || v.value]
        ])
      ]),
      _: 1
    }));
  }
});
var z0 = defineComponent({
  name: "scrollbar-bar"
});
var Y0 = defineComponent({
  ...z0,
  props: {
    showAlways: {
      type: Boolean,
      default: true
    },
    width: [String, Number],
    height: [String, Number],
    ratioX: {
      type: Number,
      default: 1
    },
    ratioY: {
      type: Number,
      default: 1
    },
    thickness: {
      type: [Number, String],
      default: 8
    }
  },
  setup(n, { expose: r }) {
    const i = n, c = ref(0), _ = ref(0);
    return r({
      handleScroll: (v) => {
        if (v) {
          const m = v.offsetHeight - Yn, b = v.offsetWidth - Yn;
          _.value = v.scrollTop * 100 / m * i.ratioY, c.value = v.scrollLeft * 100 / b * i.ratioX;
        }
      }
    }), (v, m) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(Ga, {
        move: c.value,
        ratio: n.ratioX,
        size: n.width,
        showAlways: n.showAlways,
        style: normalizeStyle(`height: ${n.thickness}px`)
      }, null, 8, ["move", "ratio", "size", "showAlways", "style"]),
      createVNode(Ga, {
        vertical: "",
        move: _.value,
        ratio: n.ratioY,
        size: n.height,
        showAlways: n.showAlways,
        style: normalizeStyle(`width: ${n.thickness}px`)
      }, null, 8, ["move", "ratio", "size", "showAlways", "style"])
    ], 64));
  }
});
var K0 = defineComponent({
  name: "vsScrollbar"
});
var sr = defineComponent({
  ...K0,
  props: H0,
  emits: ["scroll"],
  setup(n, { expose: r, emit: i }) {
    const c = n, _ = getCurrentInstance();
    let h, v;
    const m = ref(), b = ref(), w = ref(), T = ref({ scrollTop: 0, scrollLeft: 0 }), O = ref("0"), B = ref("0"), F = ref(), Z = ref(1), le = ref(1), me = computed(() => [`height: ${c.height}px`, `max-height: ${c.maxHeight}px`]), te = () => {
      var W;
      b.value && ((W = F.value) == null || W.handleScroll(b.value), T.value = {
        scrollTop: b.value.scrollTop,
        scrollLeft: b.value.scrollLeft
      }, i("scroll", T.value));
    };
    function Ee(W, z) {
      var X, Te;
      ce.exports.isObject(W) ? (X = b.value) == null || X.scrollTo(W) : ce.exports.isNumber(W) && ce.exports.isNumber(z) && ((Te = b.value) == null || Te.scrollTo(W, z));
    }
    const pe = (W) => {
      if (!ce.exports.isNumber(W))
        throw new Error("Scrollbar: Set Scrolltop, params value must be a number");
      b.value.scrollTop = W;
    }, ae = (W) => {
      if (!ce.exports.isNumber(W))
        throw new Error("Scrollbar: Set ScrollLeft, params value must be a number");
      b.value.scrollLeft = W;
    }, Q = () => {
      if (!b.value)
        return;
      const W = b.value.offsetHeight - Yn, z = b.value.offsetWidth - Yn, X = W ** 2 / b.value.scrollHeight, Te = z ** 2 / b.value.scrollWidth, tt = Math.max(X, Number(c.minSize)), ht = Math.max(Te, Number(c.minSize));
      Z.value = X / (W - X) / (tt / (W - tt)), le.value = Te / (z - Te) / (ht / (z - ht)), B.value = tt + Yn < W ? `${tt}px` : "", O.value = ht + Yn < z ? `${ht}px` : "";
    };
    return watch(() => c.noresize, (W) => {
      W ? (h == null || h(), v == null || v()) : ({ stop: h } = N0(w, Q), v = Jo("resize", Q));
    }, { immediate: true }), watch(() => [c.maxHeight, c.height], () => {
      c.native || nextTick(() => {
        var W;
        Q(), b.value && ((W = F.value) == null || W.handleScroll(b.value));
      });
    }), provide(gu, reactive({
      scrollbarElement: m,
      wrapElement: b
    })), onMounted(() => {
      c.native || nextTick(() => {
        Q();
      });
    }), onUpdated(() => Q()), r({
      scrollbar$: m,
      wrap$: b,
      instance: _,
      view$: w,
      update: Q,
      scrollTo: Ee,
      setScrollTop: pe,
      setScrollLeft: ae,
      handleScroll: te,
      scrollView: T
    }), (W, z) => (openBlock(), createElementBlock("div", {
      ref_key: "scrollbar$",
      ref: m,
      class: "vs-scrollbar"
    }, [
      createBaseVNode("div", {
        ref_key: "wrap$",
        ref: b,
        class: normalizeClass([
          "vs-scrollbar__wrap",
          { "vs-scrollbar--hidden-default": !W.native || W.hideScrollbar },
          W.wrapClass
        ]),
        style: normalizeStyle(unref(me)),
        onScroll: te
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(W.tag), {
          ref_key: "view$",
          ref: w,
          class: normalizeClass(["vs-scrollbar__view", W.viewClass])
        }, {
          default: withCtx(() => [
            renderSlot(W.$slots, "default")
          ]),
          _: 3
        }, 8, ["class"]))
      ], 38),
      !W.native && !W.hideScrollbar ? (openBlock(), createBlock(Y0, {
        key: 0,
        ref_key: "barRef",
        ref: F,
        height: B.value,
        width: O.value,
        "show-always": W.showAlways,
        "ratio-x": le.value,
        "ratio-y": Z.value,
        thickness: W.thickness
      }, null, 8, ["height", "width", "show-always", "ratio-x", "ratio-y", "thickness"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64))
    ], 512));
  }
});
var X0 = defineComponent({
  name: "vsSelectLabel",
  props: {
    multiple: Boolean,
    labelPlaceholder: String,
    placeholder: String,
    selectId: String,
    modelValue: null,
    textFilter: String,
    label: String
  }
});
var J0 = ["for"];
var Z0 = ["for"];
function Q0(n, r, i, c, _, h) {
  return openBlock(), createElementBlock(Fragment, null, [
    !n.multiple || n.label || n.labelPlaceholder ? (openBlock(), createElementBlock("label", {
      key: 0,
      class: normalizeClass(["vs-select__label", {
        "vs-select__label--placeholder": n.labelPlaceholder,
        "vs-select__label--label": n.label,
        "vs-select__label--hidden": n.modelValue
      }]),
      for: n.selectId
    }, toDisplayString(n.labelPlaceholder || n.label), 11, J0)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
    !n.multiple && !n.labelPlaceholder && n.placeholder ? (openBlock(), createElementBlock("label", {
      key: 2,
      ref: "placeholder$",
      for: n.selectId,
      class: normalizeClass(["vs-select__label", {
        "vs-select__label--hidden": n.modelValue || n.textFilter
      }])
    }, toDisplayString(n.placeholder), 11, Z0)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64))
  ], 64);
}
var j0 = ee(X0, [["render", Q0]]);
var ey = defineComponent({
  inheritAttrs: false,
  name: "vsSelect",
  extends: _e,
  components: {
    iconArrow: gs,
    iconClose: ps,
    iconLoading: Ot,
    Message: du,
    vsScrollbar: sr,
    Labels: j0
  },
  props: C0,
  emits: S0,
  setup(n, r) {
    const i = getCurrentInstance(), c = ref([]), _ = `${i.uid}`, h = ref(false), v = ref(false), m = ref([]), b = ref(-1), w = ref([]), T = ref(false), O = ref(false), B = ref(false), F = ref(false), Z = ref(""), le = ref(false), me = ["success", "warn", "danger", "primary", "dark"], te = ref(), Ee = ref(), pe = ref(), ae = ref(), Q = ref(), W = ref(), z = ref(), X = ref(), Te = ref(), tt = () => {
      !te.value || !ae.value || (tr(te.value, document.body), zn(te.value, ae.value));
    }, ht = (I, q, ie = false) => {
      if (!ie) {
        if (n.multiple) {
          const ke = ce.exports.isArray(n.modelValue) ? ce.exports.cloneDeep(n.modelValue) : [n.modelValue];
          if (ke.indexOf(I) == -1)
            ke.push(I);
          else {
            const it = ke.indexOf(I);
            ke.splice(it, 1);
          }
          r.emit("update:modelValue", ke), n.filter && setTimeout(() => {
            var it;
            v.value && ((it = pe.value) == null || it.focus());
          });
        } else
          r.emit("update:modelValue", I), m.value = [
            {
              label: q,
              value: I
            }
          ], setTimeout(() => {
            var ke;
            F.value && ((ke = Q.value) == null || ke.focus());
          });
        setTimeout(() => {
          var ke;
          n.multiple && v.value && ((ke = Ee.value) == null || ke.focus());
        }), n.multiple || Kt();
      }
    }, _s = () => {
      let I = -1;
      w.value.forEach((q, ie) => {
        var ke;
        ((ke = q.ctx) == null ? void 0 : ke.value) == n.modelValue && (I = ie);
      }), b.value = I;
    }, mi = () => {
      const I = [];
      return w.value.forEach((q) => {
        (ce.exports.isArray(n.modelValue) && ce.exports.includes(n.modelValue, q.props.value) || n.modelValue == q.props.value) && I.push(q);
      }), I;
    }, Sn = () => {
      if (n.modelValue == null || n.modelValue == null)
        return;
      const q = mi().map((ie) => ({
        label: ie.props.label,
        value: ie.props.value,
        disabled: ie.props.disabled
      }));
      q.sort((ie, ke) => `${n.modelValue}`.indexOf(ie.value) - `${n.modelValue}`.indexOf(ke.value)), m.value = q;
    }, Kt = () => {
      nextTick(() => {
        v.value = false;
      }), r.emit("blur"), _s(), window.removeEventListener("mousedown", Xn), v.value && (Z.value = "", n.multiple || (F.value = false));
    }, yi = (I) => {
      (!n.multiple || !I.relatedTarget || !le.value || !T.value && !v.value) && Kt(), n.filter && (F.value = false);
    }, Vt = () => {
      n.filter && n.multiple && v.value && setTimeout(() => {
        var I;
        (I = pe.value) == null || I.focus();
      });
    }, Rt = (I) => {
      O.value || (v.value = true, r.emit("focus", I));
    }, bi = (I) => {
      var q, ie;
      setTimeout(() => {
        O.value = false;
      }), v.value || ((q = Ee.value) == null || q.blur(), n.filter && ((ie = pe.value) == null || ie.blur())), ht(I.value, I.label, I.disabled);
    }, En = () => {
      O.value = true;
    }, vt = () => {
      O.value = false;
    }, $i = (I) => {
      O.value || (v.value = true, r.emit("focus", I), setTimeout(() => {
        var q;
        (q = pe.value) == null || q.focus();
      }));
    }, wi = () => {
      T.value = true, le.value = true;
    }, ki = (I) => {
      I.relatedTarget === Q.value || I.relatedTarget === (Ee == null ? void 0 : Ee.value) || (T.value = false, le.value = false);
    }, Xt = () => {
      B.value = true;
    }, Tn = () => {
      B.value = false;
    }, Ci = computed(() => !n.clearable || n.disabled || n.loading || m.value.length === 0 || m.value.filter((q) => q.disabled === false).length === 0 ? false : T.value), un = () => {
      if (n.disabled)
        return;
      if (!n.multiple) {
        const ie = w.value.find(n.modelValue);
        if (ie != null && ie.props.disabled)
          return;
        r.emit("update:modelValue", null);
        return;
      }
      const q = m.value.filter((ie) => ie.disabled).map((ie) => ie.value);
      r.emit("update:modelValue", q);
    }, cn = (I) => {
      Z.value = I.target.value;
    }, Si = (I) => {
      if (v.value) {
        if (n.filter || O.value)
          return;
      } else if (O.value)
        return;
      B.value || (v.value = !v.value, v.value && (Z.value = "", n.filter && (F.value = true, n.multiple && setTimeout(() => {
        var q;
        (q = pe.value) == null || q.focus();
      })), n.multiple || setTimeout(() => {
        Ke();
      }, 250)));
    }, Ln = (I) => {
      I.relatedTarget !== te.value && (le.value = false, T.value = false);
    }, Bn = () => {
      le.value = true, T.value = true;
    }, ms = () => {
      v.value ? v.value = false : Q.value.focus();
    }, Ke = () => {
      var I, q, ie, ke;
      if (b.value !== -1) {
        const it = w.value[b.value];
        if (!it)
          return;
        const ot = it.ctx.$el.getBoundingClientRect(), Xe = (I = W.value) == null ? void 0 : I.getBoundingClientRect(), On = (q = X.value) == null ? void 0 : q.scrollView;
        if (ot.bottom > Xe.bottom || ot.top > Xe.bottom - Xe.height / 3) {
          const hn = ot.bottom - (Xe.bottom - Xe.height / 3) + On.scrollTop;
          (ie = X.value) == null || ie.scrollTo({
            top: hn,
            behavior: "smooth"
          });
        } else if (ot.bottom < Xe.top + Xe.height / 3 || ot.top < Xe.top) {
          const hn = On.scrollTop - (Xe.top + Xe.height / 3 - ot.top);
          (ke = X.value) == null || ke.scrollTo({
            top: hn,
            behavior: "smooth"
          });
        }
      }
    }, Jt = (I) => {
      var q, ie;
      if (!(!te.value || !ae.value)) {
        for (let ke = 0; ke < 300; ke++)
          setTimeout(() => {
            !te.value || !ae.value || zn(te.value, ae.value);
          }, ke);
        switch (I.key) {
          case "ArrowDown": {
            I.preventDefault();
            do
              b.value < w.value.length - 1 ? b.value++ : b.value = 0;
            while ((q = w.value[b.value]) != null && q.ctx.hiddenOption);
            break;
          }
          case "ArrowUp": {
            I.preventDefault();
            do
              b.value > 0 ? b.value-- : b.value = w.value.length - 1;
            while ((ie = w.value[b.value]) != null && ie.ctx.hiddenOption);
            break;
          }
          case "Enter": {
            b.value !== -1 && !w.value[b.value].props.disabled && !w.value[b.value].ctx.hiddenOption && (ht(w.value[b.value].props.value, w.value[b.value].props.label), n.multiple || Kt());
            break;
          }
          case "Escape": {
            v.value && (v.value = false);
            break;
          }
        }
        b.value !== -1 && W.value && (W.value.scrollTop = w.value[b.value].ctx.$el.offsetTop - 66);
      }
    }, Xn = (I) => {
      le.value || Kt(), n.filter && !v.value && (F.value = false);
    }, nt = () => {
      if (!(!te.value || !ae.value)) {
        nextTick(() => {
          !te.value || !ae.value || zn(te.value, ae.value);
        });
        for (let I = 0; I < 300; I++)
          setTimeout(() => {
            !te.value || !ae.value || zn(te.value, ae.value);
          }, I);
      }
    }, An = () => {
      !te.value || !ae.value || zn(te.value, ae.value);
    };
    watch(b, Ke), watch(Z, (I) => {
      I ? z.value && (z.value.style.transition = "0s") : z.value && (z.value.style.transition = "");
    }), watch(() => n.modelValue, (I) => {
      Sn(), z.value && (I ? z.value.style.transition = "0s" : z.value.style.transition = ""), nextTick(() => {
        !te.value || !ae.value || n.multiple && v.value && zn(te.value, ae.value);
      }), setTimeout(() => {
        r.emit("change", I);
      });
    }), watch(v, (I) => {
      nextTick(() => {
        var q;
        I === true ? ((q = Q.value) == null || q.focus(), tt(), window.addEventListener("resize", nt), window.addEventListener("scroll", An), window.addEventListener("mousedown", Xn), window.addEventListener("keydown", Jt)) : (window.removeEventListener("resize", nt), window.removeEventListener("scroll", An), window.removeEventListener("mousedown", Xn), window.removeEventListener("keydown", Jt));
      }), I === true && (w.value = [], c.value = []);
    });
    const Ei = computed(() => {
      var I;
      return n.filter && !n.multiple && F.value && b.value !== -1 ? (I = w.value[b.value]) == null ? void 0 : I.props.label : "";
    }), dn = computed(() => {
      const I = m.value;
      let q = [];
      return Array.isArray(I) ? I.forEach((ie) => {
        q.push(ie.label);
      }) : q = I, q;
    }), st = computed(() => {
      var I;
      return (I = i.proxy) == null || I.$forceUpdate(), w.value.filter((q) => q.ctx.hiddenOption === false).length === 0;
    }), fn = computed(() => {
      let I = [];
      return I = m.value.map((q) => ({
        ...q,
        isCollapse: false
      })), n.collapseChips && I.length > 1 && (I[1] = {
        label: `+${I.length - 1}`,
        value: null,
        isCollapse: true
      }, I.splice(2)), I;
    });
    return onMounted(() => {
      var I, q;
      w.value = hi((q = (I = i.slots).default) == null ? void 0 : q.call(I)), Sn(), h.value = true, nextTick(() => {
        var ie;
        (ie = i.proxy) == null || ie.$forceUpdate();
      });
    }), onUpdated(() => {
      var q;
      const I = (q = Ee.value) == null ? void 0 : q.scrollHeight;
      Q.value.style.height = `${I}px`;
    }), onBeforeUnmount(() => {
      Kt();
    }), provide(nr, {
      modelValue: toRef(n, "modelValue"),
      uids: c,
      hoverOption: b,
      multiple: n.multiple,
      renderSelect: h,
      childOptions: w,
      textFilter: Z,
      targetSelect: T,
      targetChipClose: O,
      activeOptions: v,
      setHover: _s,
      clickOption: ht
    }), {
      valueLabel: m,
      messageType: me,
      activeFilter: F,
      textFilter: Z,
      getLabels: dn,
      selectId: _,
      activeOptions: v,
      renderSelect: h,
      notData: st,
      getValue: Sn,
      handleWindowResize: nt,
      handleWindowScroll: An,
      handleBlur: Kt,
      mouseLeaveSelect: Ln,
      mouseEnterSelect: Bn,
      handleInputEvent: cn,
      handleOpenOptions: Si,
      inputPlaceholder: Ei,
      handleChipsFocus: Rt,
      blur: yi,
      handleChipClose: bi,
      handleMouseEnterChip: En,
      handleMouseLeaveChip: vt,
      handleMouseDownChips: Vt,
      getChips: fn,
      handleChipinputFocus: $i,
      mouseEnterOptionsRef: wi,
      mouseLeaveOptionsRef: ki,
      clickArrowIcon: ms,
      showClearable: Ci,
      clearOptions: un,
      mouseLeaveClearable: Tn,
      mouseEnterClearable: Xt,
      options$: te,
      chips$: Ee,
      chips_input$: pe,
      select$: ae,
      input$: Q,
      content$: W,
      placeholder$: z,
      scrollbar$: X,
      chip_close$: Te,
      isTouch: r_
    };
  },
  computed: {
    bindRootStyle() {
      return {
        ["--vs-color"]: this.color ? this.getColor : ""
      };
    },
    bindRootClass() {
      return [
        {
          block: this.block
        },
        {
          ["vs-component--primary"]: !this.danger && !this.success && !this.warn && !this.dark && !this.color
        },
        { ["vs-component--danger"]: !!this.danger },
        { ["vs-component--warn"]: !!this.warn },
        { ["vs-component--success"]: !!this.success },
        { ["vs-component--dark"]: !!this.dark }
      ];
    },
    bindRefSelectClass() {
      return [
        { [`vs-select--state-${this.state}`]: this.state },
        {
          "vs-select--disabled": this.disabled,
          activeOptions: this.activeOptions,
          loading: this.loading,
          multiple: this.multiple
        }
      ];
    },
    bindRefOptionsStyle() {
      return {
        ["--vs-color"]: this.color ? this.getColor : ""
      };
    },
    bindRefOptionsClass() {
      return [
        {
          isColorDark: this.isColorDark
        },
        {
          ["vs-component--primary"]: !this.danger && !this.success && !this.warn && !this.dark && !this.color
        },
        { ["vs-component--danger"]: !!this.danger },
        { ["vs-component--warn"]: !!this.warn },
        { ["vs-component--success"]: !!this.success },
        { ["vs-component--dark"]: !!this.dark }
      ];
    }
  }
});
var ty = ["readonly", "id", "value", "placeholder"];
var ny = ["for"];
var sy = ["data-value"];
var iy = ["onClick"];
var oy = ["placeholder", "value"];
var ry = {
  ref: "content$",
  class: "vs-select__options__content"
};
var ly = {
  key: 0,
  class: "vs-select__options__content__not-data"
};
var ay = ["for"];
var uy = ["for"];
function cy(n, r, i, c, _, h) {
  const v = resolveComponent("labels"), m = resolveComponent("icon-close"), b = resolveComponent("vs-scrollbar"), w = resolveComponent("icon-loading"), T = resolveComponent("icon-arrow"), O = resolveComponent("message");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vs-select-content", n.bindRootClass]),
    style: normalizeStyle(n.bindRootStyle)
  }, [
    createBaseVNode("div", {
      ref: "select$",
      class: normalizeClass(["vs-select", n.bindRefSelectClass]),
      onMouseleave: r[12] || (r[12] = (...B) => n.mouseLeaveSelect && n.mouseLeaveSelect(...B)),
      onMouseenter: r[13] || (r[13] = (...B) => n.mouseEnterSelect && n.mouseEnterSelect(...B)),
      onClick: r[14] || (r[14] = withModifiers((...B) => n.handleOpenOptions && n.handleOpenOptions(...B), ["prevent"]))
    }, [
      createBaseVNode("input", mergeProps(n.$attrs, {
        ref: "input$",
        readonly: !n.filter || !n.activeOptions,
        id: `${n.selectId}`,
        class: ["vs-select__input", [
          {
            multiple: n.multiple,
            simple: !n.multiple && !n.filter
          }
        ]],
        value: n.activeFilter ? n.textFilter : n.multiple ? "" : n.getLabels,
        placeholder: n.inputPlaceholder,
        onInput: r[0] || (r[0] = (...B) => n.handleInputEvent && n.handleInputEvent(...B))
      }), null, 16, ty),
      createVNode(v, {
        multiple: n.multiple,
        placeholder: n.placeholder,
        label: n.label,
        "label-placeholder": n.labelPlaceholder,
        "model-value": n.modelValue,
        "select-id": n.selectId,
        "text-filter": n.textFilter
      }, null, 8, ["multiple", "placeholder", "label", "label-placeholder", "model-value", "select-id", "text-filter"]),
      n.multiple ? (openBlock(), createElementBlock("label", {
        key: 0,
        for: n.selectId,
        ref: "chips$",
        class: "vs-select__chips",
        onMousedown: r[5] || (r[5] = (...B) => n.handleMouseDownChips && n.handleMouseDownChips(...B)),
        onFocus: r[6] || (r[6] = (...B) => n.handleChipsFocus && n.handleChipsFocus(...B)),
        onBlur: r[7] || (r[7] = (...B) => n.blur && n.blur(...B))
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(n.getChips, (B) => (openBlock(), createElementBlock("span", {
          class: normalizeClass(["vs-select__chips__chip", {
            isCollapse: B == null ? void 0 : B.isCollapse,
            disabled: B == null ? void 0 : B.disabled
          }]),
          "data-value": B == null ? void 0 : B.value
        }, [
          createTextVNode(toDisplayString(B == null ? void 0 : B.label) + " ", 1),
          !(B != null && B.isCollapse) && !(B != null && B.disabled) ? (openBlock(), createElementBlock("span", {
            key: 0,
            ref_for: true,
            ref: "chip_close$",
            class: "vs-select__chips__chip__close",
            onClick: (F) => n.handleChipClose(B),
            onMouseleave: r[1] || (r[1] = (...F) => n.handleMouseLeaveChip && n.handleMouseLeaveChip(...F)),
            onMouseenter: r[2] || (r[2] = (...F) => n.handleMouseEnterChip && n.handleMouseEnterChip(...F))
          }, [
            createVNode(m, { hover: "less" })
          ], 40, iy)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64))
        ], 10, sy))), 256)),
        n.filter ? (openBlock(), createElementBlock("input", {
          key: 0,
          class: "vs-select__chips__input",
          ref: "chips_input$",
          placeholder: n.placeholder,
          value: n.textFilter,
          onFocus: r[3] || (r[3] = (...B) => n.handleChipinputFocus && n.handleChipinputFocus(...B)),
          onInput: r[4] || (r[4] = (...B) => n.handleInputEvent && n.handleInputEvent(...B))
        }, null, 40, oy)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64))
      ], 40, ny)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
      createVNode(Transition, { name: "vs-select" }, {
        default: withCtx(() => [
          n.activeOptions ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref: "options$",
            class: normalizeClass(["vs-select__options", n.bindRefOptionsClass]),
            style: normalizeStyle(n.bindRefOptionsStyle),
            onMouseleave: r[8] || (r[8] = (...B) => n.mouseLeaveOptionsRef && n.mouseLeaveOptionsRef(...B)),
            onMouseenter: r[9] || (r[9] = (...B) => n.mouseEnterOptionsRef && n.mouseEnterOptionsRef(...B))
          }, [
            createBaseVNode("div", ry, [
              n.notData ? (openBlock(), createElementBlock("div", ly, [
                renderSlot(n.$slots, "notData", {}, () => [
                  createTextVNode("No data available")
                ])
              ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
              createVNode(b, {
                ref: "scrollbar$",
                "max-height": "200",
                thickness: "3",
                "hide-scrollbar": n.hideScrollbar,
                native: n.nativeScrollbar,
                "show-always": !n.hideScrollbar && n.isTouch
              }, {
                default: withCtx(() => [
                  renderSlot(n.$slots, "default")
                ]),
                _: 3
              }, 8, ["hide-scrollbar", "native", "show-always"])
            ], 512)
          ], 38)) : createCommentVNode("", true)
        ]),
        _: 3
      }),
      n.loading ? (openBlock(), createBlock(w, {
        key: 2,
        class: "vs-select__loading"
      })) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64)),
      createVNode(Transition, { name: "v-clearable" }, {
        default: withCtx(() => [
          n.showClearable ? (openBlock(), createElementBlock("label", {
            key: 0,
            for: n.selectId,
            class: "vs-select__clearable",
            onMouseenter: r[10] || (r[10] = (...B) => n.mouseEnterClearable && n.mouseEnterClearable(...B)),
            onMouseleave: r[11] || (r[11] = (...B) => n.mouseLeaveClearable && n.mouseLeaveClearable(...B))
          }, [
            createVNode(m, { onClick: n.clearOptions }, null, 8, ["onClick"])
          ], 40, ay)) : createCommentVNode("", true)
        ]),
        _: 1
      }),
      createBaseVNode("label", {
        for: n.selectId,
        class: "vs-select__arrow"
      }, [
        createVNode(T)
      ], 8, uy)
    ], 34),
    (openBlock(true), createElementBlock(Fragment, null, renderList(n.messageType, (B) => (openBlock(), createBlock(O, null, {
      default: withCtx(() => [
        n.$slots[`message-${B}`] ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["vs-select__message", [`vs-select__message--${B}`]])
        }, [
          renderSlot(n.$slots, `message-${B}`)
        ], 2)) : createCommentVNode("", true)
      ]),
      _: 2
    }, 1024))), 256))
  ], 6);
}
var dy = ee(ey, [["render", cy]]);
var fy = defineComponent({
  name: "vsOption",
  extends: _e,
  components: { vsCheckbox: cu },
  props: {
    value: null,
    disabled: Boolean,
    label: null
  },
  setup(n) {
    var Z;
    const r = getCurrentInstance(), i = ref(false), c = r.uid, _ = ref(0), h = reactive(inject(nr));
    let v = null;
    if (((Z = r == null ? void 0 : r.parent) == null ? void 0 : Z.type.name) === "vsOptionGroup" && (v = reactive(inject(fu))), !h)
      throw new Error("Cannot inject vsSelect component. vsOption component must be inside vsSelect component");
    watch(() => h == null ? void 0 : h.textFilter, (le) => {
      if (le) {
        if (ce.exports.includes(v == null ? void 0 : v.title.toLowerCase(), le.toLowerCase())) {
          i.value = false;
          return;
        }
        n.label.toLowerCase().indexOf(le.toLowerCase()) === -1 ? i.value = true : i.value = false;
      } else
        i.value = false;
    });
    const m = computed(() => Array.isArray(h == null ? void 0 : h.modelValue) ? h.modelValue.includes(n.value) : h.modelValue === n.value), b = computed(() => {
      var le;
      return ((le = h == null ? void 0 : h.uids) == null ? void 0 : le.indexOf(c)) === (h == null ? void 0 : h.hoverOption);
    }), w = computed(() => h == null ? void 0 : h.multiple), T = computed(() => [
      {
        activeOption: m.value,
        isHover: b.value,
        isMultiple: w.value,
        hiddenOption: i.value,
        disabled: n.disabled
      }
    ]), O = computed(() => []), B = () => {
      var le;
      n.disabled === true || (v == null ? void 0 : v.hiddenGroup) === true || (le = h == null ? void 0 : h.clickOption) == null || le.call(h, n.value, n.label, n.disabled);
    }, F = () => {
      !(h != null && h.targetSelect) && !(h != null && h.targetClose) && (h.activeOptions = false);
    };
    return onMounted(() => {
      var me, te, Ee, pe, ae;
      const le = ce.exports.findIndex(h.uids, c);
      (!(h != null && h.renderSelect) || le === -1) && ((me = h.childOptions) == null || me.push(r), (te = h.uids) == null || te.push(c)), v && ((Ee = v.childsOptions) == null || Ee.push(r)), le !== -1 ? _.value = le : _.value = ((pe = h.uids) == null ? void 0 : pe.length) - 1, (ae = h == null ? void 0 : h.setHover) == null || ae.call(h);
    }), {
      hiddenOption: i,
      uid: c,
      isHover: b,
      isMultiple: w,
      isActive: m,
      bindRootStyle: O,
      bindRootClass: T,
      handleMouseDown: B,
      handleBlur: F
    };
  }
});
function hy(n, r, i, c, _, h) {
  const v = resolveComponent("vs-checkbox");
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["vs-select__option", n.bindRootClass]),
    style: normalizeStyle(n.bindRootStyle),
    onMousedown: r[0] || (r[0] = (...m) => n.handleMouseDown && n.handleMouseDown(...m)),
    onBlur: r[1] || (r[1] = (...m) => n.handleBlur && n.handleBlur(...m))
  }, [
    n.isMultiple ? (openBlock(), createBlock(v, {
      key: 0,
      "checked-force": n.isActive
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(n.label), 1)
        ])
      ]),
      _: 3
    }, 8, ["checked-force"])) : renderSlot(n.$slots, "default", { key: 1 }, () => [
      createTextVNode(toDisplayString(n.label), 1)
    ])
  ], 38);
}
var vy = ee(fy, [["render", hy]]);
var py = defineComponent({
  name: "vsOptionGroup",
  extends: _e,
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(n) {
    const i = ref(false), c = ref([]), _ = reactive(inject(nr));
    if (!_)
      throw new Error("Cannot inject vsSelect component. vsOption component must be inside vsSelect component or vsOptionGroup component");
    const h = computed(() => c.value.reduce((v, m) => v += m.props.label, ""));
    return watch(() => _ == null ? void 0 : _.textFilter, (v) => {
      if (v) {
        if (ce.exports.includes(n.title.toLowerCase(), v.toLowerCase())) {
          i.value = false;
          return;
        }
        h.value.toLowerCase().indexOf(v.toLowerCase()) === -1 ? i.value = true : i.value = false;
      } else
        i.value = false;
    }), onMounted(() => {
      var m, b;
      const v = getCurrentInstance();
      c.value = hi((b = (m = v.slots).default) == null ? void 0 : b.call(m));
    }), provide(fu, {
      optionGroup: true,
      hiddenGroup: i,
      childsOptions: c,
      title: toRef(n, "title")
    }), {
      optionGroup: true,
      hiddenGroup: i
    };
  }
});
var gy = { key: 0 };
var _y = { key: 1 };
function my(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vs-select__option-group", { hiddenGroup: n.hiddenGroup }])
  }, [
    n.title ? (openBlock(), createElementBlock("h5", gy, toDisplayString(n.title), 1)) : (openBlock(), createElementBlock("h5", _y, [
      renderSlot(n.$slots, "title")
    ])),
    renderSlot(n.$slots, "default")
  ], 2);
}
var yy = ee(py, [["render", my]]);
var by = defineComponent({
  inheritAttrs: false,
  name: "vsCard",
  extends: _e,
  props: {
    type: {
      type: [String, Number],
      default: "1"
    }
  }
});
var $y = {
  key: 0,
  class: "vs-card__img"
};
var wy = {
  key: 0,
  class: "vs-card__interactions"
};
var ky = {
  key: 2,
  class: "vs-card__text"
};
var Cy = {
  key: 0,
  class: "vs-card__title"
};
var Sy = {
  key: 4,
  class: "vs-card__buttons"
};
var Ey = createBaseVNode("template", { name: "buttons" }, null, -1);
function Ty(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([
      "vs-card-content",
      `type-${n.type}`
    ])
  }, [
    createBaseVNode("div", mergeProps({ class: "vs-card" }, n.$attrs), [
      n.$slots.img ? (openBlock(), createElementBlock("div", $y, [
        renderSlot(n.$slots, "img"),
        n.$slots.interactions ? (openBlock(), createElementBlock("div", wy, [
          renderSlot(n.$slots, "interactions")
        ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64))
      ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
      n.$slots.text ? (openBlock(), createElementBlock("div", ky, [
        n.$slots.title ? (openBlock(), createElementBlock("div", Cy, [
          renderSlot(n.$slots, "title")
        ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
        renderSlot(n.$slots, "text")
      ])) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64)),
      n.$slots.buttons ? (openBlock(), createElementBlock("div", Sy, [
        renderSlot(n.$slots, "buttons")
      ])) : createCommentVNode("", true),
      Ey
    ], 16)
  ], 2);
}
var Ly = ee(by, [["render", Ty]]);
var By = defineComponent({
  name: "vsCardGroup",
  extends: _e,
  components: {
    iconArrow: gs,
    vsScrollbar: sr
  },
  setup() {
    const n = ref();
    return {
      cards$: n,
      handleClickNexticon: () => {
        const c = n.value;
        c.wrap$.style.scrollBehavior = "smooth", c.scrollTo(c.scrollView.scrollLeft + c.view$.clientWidth, 0), c.wrap$.style.scrollBehavior = "unset";
      },
      handleClickPrevicon: () => {
        const c = n.value;
        c.wrap$.style.scrollBehavior = "smooth", c.scrollTo(c.scrollView.scrollLeft - c.view$.clientWidth, 0), c.wrap$.style.scrollBehavior = "unset";
      }
    };
  }
});
var Ay = { class: "vs-card__group" };
var Oy = createBaseVNode("div", { class: "vs-card__group-space" }, null, -1);
function Ry(n, r, i, c, _, h) {
  const v = resolveComponent("icon-arrow"), m = resolveComponent("vs-scrollbar");
  return openBlock(), createElementBlock("div", Ay, [
    createBaseVNode("button", {
      class: "vs-card__group-prev",
      onClick: r[0] || (r[0] = (...b) => n.handleClickPrevicon && n.handleClickPrevicon(...b))
    }, [
      createVNode(v)
    ]),
    createVNode(m, {
      "show-always": "",
      ref: "cards$",
      "view-class": "vs-card__group-cards"
    }, {
      default: withCtx(() => [
        renderSlot(n.$slots, "default")
      ]),
      _: 3
    }, 512),
    Oy,
    createBaseVNode("button", {
      class: "vs-card__group-next",
      onClick: r[1] || (r[1] = (...b) => n.handleClickNexticon && n.handleClickNexticon(...b))
    }, [
      createVNode(v)
    ])
  ]);
}
var Iy = ee(By, [["render", Ry]]);
var qa = Symbol("sidebar-group-key");
var _u = Symbol("sidebar-key");
var Py = defineComponent({
  name: "vsSidebar",
  extends: _e,
  emits: ["update:open", "update:modelValue"],
  props: {
    modelValue: null,
    reduce: {
      default: false,
      type: Boolean
    },
    hoverExpand: {
      default: false,
      type: Boolean
    },
    open: {
      default: false,
      type: Boolean
    },
    notLineActive: {
      default: false,
      type: Boolean
    },
    square: {
      default: false,
      type: Boolean
    },
    textWhite: {
      default: false,
      type: Boolean
    },
    notShadow: {
      default: false,
      type: Boolean
    },
    relative: {
      default: false,
      type: Boolean
    },
    absolute: {
      default: false,
      type: Boolean
    },
    right: {
      default: false,
      type: Boolean
    },
    background: {
      default: "background",
      type: String
    }
  },
  setup(n, r) {
    const i = ref(260);
    ref(false);
    const c = ref(false), _ = ref(), h = () => {
      n.hoverExpand && (c.value = false);
    }, v = () => {
      n.hoverExpand && (c.value = true);
    }, m = (T) => {
      T.target.closest(".vs-sidebar-content") || r.emit("update:open", false);
    }, b = (T) => {
      r.emit("update:modelValue", T);
    };
    watch(() => n.open, (T) => {
      T ? setTimeout(() => {
        window.addEventListener("click", m);
      }) : window.removeEventListener("click", m);
    }), watch(() => n.reduce, (T) => {
      c.value = T;
      const O = _.value;
      T ? O.style.width = "50px" : O.style.width = `${i.value}px`;
    }), watch(c, (T) => {
      const O = _.value;
      T ? O.style.width = "50px" : O.style.width = `${i.value}px`;
    }), watch(() => n.background, () => {
      At("background", n.background, _.value, true);
    });
    const w = Ct(() => n.modelValue);
    return onMounted(() => {
      i.value = _.value.offsetWidth, c.value = n.reduce, n.background !== "background" && At("background", n.background, _.value, true), n.textWhite && At("text", "#fff", _.value, true);
    }), provide(_u, {
      reduce: n.reduce,
      getValue: w,
      handleClickItem: b
    }), {
      el$: _,
      reduceInternal: c,
      handleMouseEnterSidebar: h,
      handleMouseLeaveSidebar: v,
      getValue: w
    };
  },
  computed: {
    bindRootStyle() {
      return {
        ["--vs-color"]: this.color ? this.getColor : ""
      };
    },
    bindRootClass() {
      return [
        {
          reduce: this.reduceInternal,
          open: this.open,
          notLineActive: this.notLineActive,
          square: this.square,
          notShadow: this.notShadow,
          textWhite: this.textWhite,
          relative: this.relative,
          absolute: this.absolute,
          right: this.right
        },
        { ["vs-component--primary"]: !!this.primary },
        { ["vs-component--danger"]: !!this.danger },
        { ["vs-component--warn"]: !!this.warn },
        { ["vs-component--success"]: !!this.success },
        { ["vs-component--dark"]: !!this.dark },
        { ["vs-component--is-color"]: !!this.isColor }
      ];
    }
  }
});
var Ny = {
  key: 0,
  class: "vs-sidebar__logo"
};
var My = {
  key: 2,
  class: "vs-sidebar__header"
};
var Vy = { class: "vs-sidebar" };
var Dy = {
  key: 4,
  class: "vs-sidebar__footer"
};
function Wy(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("div", {
    ref: "el$",
    class: normalizeClass(["vs-sidebar-content", n.bindRootClass]),
    style: normalizeStyle(n.bindRootStyle),
    onMouseenter: r[0] || (r[0] = (...v) => n.handleMouseEnterSidebar && n.handleMouseEnterSidebar(...v)),
    onMouseleave: r[1] || (r[1] = (...v) => n.handleMouseLeaveSidebar && n.handleMouseLeaveSidebar(...v))
  }, [
    n.$slots.logo ? (openBlock(), createElementBlock("div", Ny, [
      renderSlot(n.$slots, "logo")
    ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
    n.$slots.header ? (openBlock(), createElementBlock("div", My, [
      renderSlot(n.$slots, "header")
    ])) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64)),
    createBaseVNode("div", Vy, [
      renderSlot(n.$slots, "default")
    ]),
    n.$slots.footer ? (openBlock(), createElementBlock("div", Dy, [
      renderSlot(n.$slots, "footer")
    ])) : (openBlock(), createElementBlock(Fragment, { key: 5 }, [], 64))
  ], 38);
}
var xy = ee(Py, [["render", Wy]]);
var Hy = defineComponent({
  name: "vsSidebarGroup",
  extends: _e,
  props: {
    open: Boolean
  },
  setup(n) {
    const i = ref(false), c = ref(), _ = ref(), h = inject(qa, void 0);
    watch(() => n.open, (O) => {
      nextTick(() => {
        var F;
        const B = ((F = _.value) == null ? void 0 : F.scrollHeight) || 0;
        if (h != null && h.group) {
          const Z = h.refs.content$.value;
          O ? Z.style.height = `${Z.scrollHeight + B - 1}px` : Z.style.height = `${Z.scrollHeight - B + 1}px`;
        }
      });
    });
    const v = (O) => {
      h == null || h.handleClickItem(O);
    }, m = Ct(() => h == null ? void 0 : h.getValue), b = (O, B) => {
      const F = O.scrollHeight;
      O.style.height = F - 1 + "px", B();
    }, w = (O) => {
      O.style.height = "0";
    }, T = (O) => {
      O.style.minHeight = "0px", O.style.height = "0px";
    };
    return onMounted(() => {
      var O;
      (((O = c.value) == null ? void 0 : O.querySelector(".active")) || n.open) && (i.value = true);
    }), provide(qa, {
      group: true,
      refs: { content$: _ },
      handleClickItem: v,
      getValue: m
    }), { openState: i, beforeEnter: w, enter: b, leave: T };
  }
});
var Fy = {
  ref: "content$",
  class: "vs-sidebar__group__content"
};
function Uy(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("div", {
    ref: "el$",
    class: normalizeClass(["vs-sidebar__group", { open: n.openState }])
  }, [
    createBaseVNode("div", {
      class: "vs-sidebar__group__header",
      onClick: r[0] || (r[0] = (v) => n.openState = !n.openState)
    }, [
      renderSlot(n.$slots, "header")
    ]),
    createVNode(Transition, {
      onBeforeEnter: n.beforeEnter,
      onEnter: n.enter,
      onLeave: n.leave
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", Fy, [
          renderSlot(n.$slots, "default")
        ], 512), [
          [vShow, n.openState]
        ])
      ]),
      _: 3
    }, 8, ["onBeforeEnter", "onEnter", "onLeave"])
  ], 2);
}
var Gy = ee(Hy, [["render", Uy]]);
var za;
(function(n) {
  n.pop = "pop", n.push = "push";
})(za || (za = {}));
var Ya;
(function(n) {
  n.back = "back", n.forward = "forward", n.unknown = "";
})(Ya || (Ya = {}));
Symbol(true ? "navigation failure" : "");
var Ka;
(function(n) {
  n[n.aborted = 4] = "aborted", n[n.cancelled = 8] = "cancelled", n[n.duplicated = 16] = "duplicated";
})(Ka || (Ka = {}));
Symbol(true ? "router view location matched" : "");
Symbol(true ? "router view depth" : "");
var qy = Symbol(true ? "router" : "");
Symbol(true ? "route location" : "");
Symbol(true ? "router view location" : "");
function mu() {
  return inject(qy);
}
var zy = defineComponent({
  name: "vsSidebarItem",
  extends: _e,
  components: {
    iconArrow: gs
  },
  props: {
    to: String,
    href: String,
    target: {
      type: String,
      default: "_blank"
    },
    modelValue: String,
    id: String,
    arrow: Boolean
  },
  setup(n) {
    const r = mu(), i = useSlots(), c = inject(_u), _ = () => {
      n.to ? r.push(n.to) : n.href && window.open(n.href, n.target);
    }, h = () => {
      n.id && (c == null || c.handleClickItem(n.id)), _();
    }, v = Ct(() => ({
      active: c.getValue.value === n.id,
      hasIcon: i.icon
    }));
    return { handleClick: _, bindRootClass: v, clickBtn: h, sidebar: c };
  }
});
var Yy = {
  key: 0,
  class: "vs-sidebar__item__icon"
};
var Ky = {
  key: 2,
  class: "vs-sidebar__item__text"
};
var Xy = {
  key: 3,
  class: "vs-sidebar__item__text-tooltip"
};
var Jy = {
  key: 5,
  class: "vs-sidebar__item__arrow"
};
function Zy(n, r, i, c, _, h) {
  const v = resolveComponent("icon-arrow");
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["vs-sidebar__item", n.bindRootClass]),
    onClick: r[0] || (r[0] = (...m) => n.clickBtn && n.clickBtn(...m))
  }, [
    n.$slots.icon ? (openBlock(), createElementBlock("div", Yy, [
      renderSlot(n.$slots, "icon")
    ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
    n.sidebar.reduce ? (openBlock(), createElementBlock("div", Xy, [
      renderSlot(n.$slots, "default")
    ])) : (openBlock(), createElementBlock("div", Ky, [
      renderSlot(n.$slots, "default")
    ])),
    n.$slots.arrow ? renderSlot(n.$slots, "arrow", { key: 4 }) : n.arrow ? (openBlock(), createElementBlock("div", Jy, [
      createVNode(v)
    ])) : (openBlock(), createElementBlock(Fragment, { key: 6 }, [], 64))
  ], 2);
}
var Qy = ee(zy, [["render", Zy]]);
var yu = Symbol("vs-navbar-context");
var jy = defineComponent({
  name: "vsNavbar",
  extends: _e,
  emits: ["update:modelValue", "collapsed"],
  props: {
    modelValue: null,
    fixed: Boolean,
    shadow: Boolean,
    shadowScroll: Boolean,
    hideScroll: Boolean,
    textWhite: Boolean,
    square: Boolean,
    paddingScroll: Boolean,
    notLine: Boolean,
    leftCollapsed: Boolean,
    centerCollapsed: Boolean,
    rightCollapsed: Boolean,
    targetScroll: String
  },
  setup(n, r) {
    const i = ref(), c = ref(), _ = ref(), h = ref(), v = ref(0), m = ref(0), b = ref(0), w = ref(0), T = ref(false), O = ref(false), B = ref(false), F = ref(false), Z = ref(false), le = () => {
      const X = n.targetScroll ? document.querySelector(n.targetScroll).scrollTop : window.pageYOffset;
      n.hideScroll && (Math.sign(X - b.value) === 1 ? T.value = true : T.value = false), n.shadowScroll && (X > 0 ? O.value = true : O.value = false), n.paddingScroll && (X > 0 ? B.value = true : B.value = false), b.value = X;
    }, me = () => {
      if (n.hideScroll || n.shadowScroll || n.paddingScroll)
        if (n.targetScroll) {
          const X = document.querySelector(n.targetScroll);
          X == null || X.addEventListener("scroll", le);
        } else
          window.addEventListener("scroll", le);
    }, te = (X) => {
      r.emit("update:modelValue", X);
    }, Ee = (X, Te = true) => {
      Te ? F.value = false : F.value = true, nextTick(() => {
        v.value = X;
      });
    }, pe = (X) => {
      nextTick(() => {
        m.value = X;
      });
    }, ae = () => {
      var tt;
      const X = (tt = i.value) == null ? void 0 : tt.querySelector(".vs-navbar__item.active");
      X ? Ee(X.offsetLeft, false) : m.value = 0;
      const Te = i.value;
      (n.leftCollapsed || n.centerCollapsed || n.rightCollapsed) && Te.offsetWidth < w.value && (Z.value = true), Z.value ? r.emit("collapsed", true) : r.emit("collapsed", false), Te.offsetWidth < w.value ? r.emit("collapsed", true) : (r.emit("collapsed", false), Z.value = false);
    }, Q = Ct(() => n.leftCollapsed ? !Z.value : true), W = Ct(() => n.rightCollapsed ? !Z.value : true), z = Ct(() => n.centerCollapsed ? !Z.value : true);
    return watch([
      () => n.hideScroll,
      () => n.paddingScroll,
      () => n.shadowScroll
    ], me), onMounted(() => {
      nextTick(() => {
        if (i.value && c.value && h.value && _.value) {
          const X = c.value, Te = h.value, tt = _.value, ht = i.value;
          w.value = X.offsetWidth + Te.offsetWidth + tt.offsetWidth + 150, ht.offsetWidth < w.value && (Z.value = true, r.emit("collapsed", true), m.value = 0, ae());
        }
      }), me(), window.addEventListener("resize", ae);
    }), provide(yu, {
      setModel: te,
      setLeftLine: Ee,
      setWidthLine: pe
    }), r.expose({
      setLeftLine: Ee,
      setModel: te,
      setWidthLine: pe
    }), {
      el$: i,
      left$: c,
      center$: h,
      right$: _,
      isLeft: Q,
      isRight: W,
      isCenter: z,
      leftLine: v,
      widthLine: m,
      scrollTop: b,
      collapsedWidth: w,
      hidden: T,
      shadowActive: O,
      paddingScrollActive: B,
      lineNotTransition: F,
      collapsedForced: Z
    };
  },
  computed: {
    bindRootStyle() {
      return {
        ["--vs-color"]: this.color ? this.getColor : ""
      };
    },
    bindRootClass() {
      return [
        {
          fixed: this.fixed,
          shadow: this.shadow,
          hidden: this.hidden,
          shadowActive: this.shadowActive,
          textWhite: this.textWhite,
          paddingScroll: this.paddingScroll,
          paddingScrollActive: this.paddingScrollActive,
          vsNavbarSquare: this.square
        },
        { ["vs-component--primary"]: !!this.primary },
        { ["vs-component--danger"]: !!this.danger },
        { ["vs-component--warn"]: !!this.warn },
        { ["vs-component--success"]: !!this.success },
        { ["vs-component--dark"]: !!this.dark },
        { ["vs-component--is-color"]: !!this.isColor }
      ];
    }
  }
});
var eb = { class: "vs-navbar" };
var tb = {
  key: 0,
  ref: "left$",
  class: "vs-navbar__left"
};
var nb = {
  key: 2,
  ref: "center$",
  class: "vs-navbar__center"
};
var sb = {
  key: 4,
  ref: "right$",
  class: "vs-navbar__right"
};
function ib(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("div", {
    ref: "el$",
    class: normalizeClass(["vs-navbar-content", n.bindRootClass]),
    style: normalizeStyle(n.bindRootStyle)
  }, [
    createBaseVNode("div", eb, [
      n.isLeft ? (openBlock(), createElementBlock("div", tb, [
        renderSlot(n.$slots, "left")
      ], 512)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
      n.isCenter ? (openBlock(), createElementBlock("div", nb, [
        renderSlot(n.$slots, "default")
      ], 512)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64)),
      n.isRight ? (openBlock(), createElementBlock("div", sb, [
        renderSlot(n.$slots, "right")
      ], 512)) : (openBlock(), createElementBlock(Fragment, { key: 5 }, [], 64))
    ]),
    n.notLine ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)) : (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["vs-navbar__line", { notTransition: n.lineNotTransition }]),
      style: normalizeStyle({
        left: `${n.leftLine}px`,
        width: `${n.widthLine}px`
      })
    }, null, 6))
  ], 6);
}
var ob = ee(jy, [["render", ib]]);
var rb = defineComponent({
  name: "vsNavbarGroup",
  extends: _e
});
var lb = { class: "vs-navbar__group" };
var ab = {
  ref: "item",
  class: "vs-navbar__group__item"
};
var ub = {
  ref: "items",
  class: "vs-navbar__group__items"
};
function cb(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("div", lb, [
    createBaseVNode("div", ab, [
      renderSlot(n.$slots, "default")
    ], 512),
    createBaseVNode("div", ub, [
      renderSlot(n.$slots, "items")
    ], 512)
  ]);
}
var db = ee(rb, [["render", cb]]);
var fb = defineComponent({
  name: "vsNavbarItem",
  extends: _e,
  emits: ["click"],
  props: {
    active: Boolean,
    to: String,
    href: String,
    target: {
      type: String,
      default: "_blank"
    },
    id: {
      type: String,
      required: true
    }
  },
  setup(n, r) {
    const i = mu(), c = inject(yu), _ = ref(), h = () => {
      nextTick(() => {
        if (n.active) {
          const w = _.value.offsetLeft;
          c.setLeftLine(w);
          const T = _.value.scrollWidth;
          c.setWidthLine(T);
        }
      });
    }, v = () => {
      n.to ? i.push(n.to) : n.href && window.open(n.href, n.target);
    }, m = () => {
      c.setModel(n.id), h();
    }, b = (w) => {
      r.emit("click", w), h(), v(), m();
    };
    return watch(() => n.active, () => {
      h();
    }), onMounted(() => {
      if (n.active) {
        const w = _.value.offsetLeft;
        c.setLeftLine(w);
        const T = _.value.scrollWidth;
        c.setWidthLine(T);
      }
    }), r.expose({ handleActive: m, handleClick: v, click: b }), { el$: _, handleClick: v, handleActive: m, click: b };
  }
});
function hb(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("button", {
    ref: "el$",
    class: normalizeClass(["vs-navbar__item", { active: n.active }]),
    onClick: r[0] || (r[0] = (...v) => n.click && n.click(...v))
  }, [
    renderSlot(n.$slots, "default")
  ], 2);
}
var vb = ee(fb, [["render", hb]]);
var bu = Symbol("vs-table-context");
var pb = defineComponent({
  name: "vsTable",
  extends: _e,
  emits: ["update:modelValue"],
  props: {
    modelValue: null,
    striped: Boolean,
    loading: Boolean
  },
  setup(n, r) {
    const i = ref(0), c = ref(), _ = Ct(() => ru(n.modelValue)), h = (m) => {
      const b = n.modelValue;
      n.modelValue.includes(m) ? b.splice(n.modelValue.indexOf(m), 1) : b.push(m), r.emit("update:modelValue", b);
    }, v = (m) => {
      _.value ? h(m) : r.emit("update:modelValue", m);
    };
    return onMounted(() => {
      var b;
      const m = (b = c.value) == null ? void 0 : b.querySelectorAll("th");
      i.value = (m == null ? void 0 : m.length) || 0;
    }), provide(bu, {
      selected: v,
      colspan: i
    }), { colspan: i, thead$: c, isMultipleSelected: _, selected: v };
  }
});
var gb = { class: "vs-table-content" };
var _b = {
  key: 0,
  class: "vs-table__header"
};
var mb = {
  ref: "thead$",
  class: "vs-table__thead"
};
var yb = { class: "vs-table__tbody" };
var bb = { class: "vs-table__not-found" };
var $b = ["colspan"];
var wb = {
  key: 2,
  class: "vs-table__footer"
};
function kb(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("div", gb, [
    n.$slots.header ? (openBlock(), createElementBlock("div", _b, [
      renderSlot(n.$slots, "header")
    ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
    createBaseVNode("div", {
      class: normalizeClass(["vs-table", {
        isSelectedValue: n.modelValue,
        striped: n.striped,
        isMultipleSelected: n.isMultipleSelected
      }])
    }, [
      createBaseVNode("table", null, [
        createBaseVNode("thead", mb, [
          renderSlot(n.$slots, "thead")
        ], 512),
        createBaseVNode("tbody", yb, [
          renderSlot(n.$slots, "tbody")
        ]),
        createBaseVNode("tbody", bb, [
          createBaseVNode("tr", null, [
            createBaseVNode("td", { colspan: n.colspan }, [
              renderSlot(n.$slots, "notFound", {}, () => [
                createTextVNode("No matching records found")
              ])
            ], 8, $b)
          ])
        ])
      ])
    ], 2),
    n.$slots.footer ? (openBlock(), createElementBlock("div", wb, [
      renderSlot(n.$slots, "footer")
    ])) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64))
  ]);
}
var Cb = ee(pb, [["render", kb]]);
var Sb = defineComponent({
  name: "vsTd",
  extends: _e,
  emits: ["click"],
  props: {
    checkbox: Boolean,
    edit: Boolean
  },
  setup(n, r) {
    return { click: (c) => {
      r.emit("click", c);
    } };
  }
});
function Eb(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("td", {
    class: normalizeClass(["vs-table__td", {
      isCheckbox: n.checkbox,
      isEdit: n.edit
    }]),
    onClick: r[0] || (r[0] = (...v) => n.click && n.click(...v))
  }, [
    renderSlot(n.$slots, "default")
  ], 2);
}
var Tb = ee(Sb, [["render", Eb]]);
var Lb = defineComponent({
  name: "vsTh",
  extends: _e,
  components: { iconArrow: gs },
  props: {
    sort: Boolean
  },
  setup() {
    const n = ref();
    return onMounted(() => {
      n.value.style.width = `${n.value.scrollWidth}px`;
    }), { el$: n };
  }
});
var Bb = { class: "vs-table__th__content" };
var Ab = {
  key: 0,
  class: "vs-table__th__content__icons"
};
function Ob(n, r, i, c, _, h) {
  const v = resolveComponent("icon-arrow");
  return openBlock(), createElementBlock("th", {
    ref: "el$",
    class: normalizeClass(["vs-table__th", { sort: n.sort }])
  }, [
    createBaseVNode("div", Bb, [
      renderSlot(n.$slots, "default"),
      n.sort ? (openBlock(), createElementBlock("div", Ab, [
        createVNode(v, { class: "icon-sort-1" }),
        createVNode(v, { class: "icon-sort-2" })
      ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64))
    ])
  ], 2);
}
var Rb = ee(Lb, [["render", Ob]]);
var Ib = defineComponent({
  name: "vsTrExpand",
  extends: _e,
  props: {
    colspan: Number
  },
  setup() {
    const n = ref(true), r = ref(), i = ref();
    return watch(n, (c) => {
      c || nextTick(() => {
        const _ = i.value;
        _.style.height = `${_.scrollHeight}px`;
      });
    }), {
      hidden: n,
      el$: r,
      content$: i
    };
  }
});
var Pb = {
  key: 0,
  ref: "el$",
  class: "vs-table__tr__expand"
};
var Nb = ["colspan"];
var Mb = {
  ref: "content$",
  class: "vs-table__expand__td__content"
};
var Vb = { class: "vs-table__expand__td__content__sub" };
function Db(n, r, i, c, _, h) {
  return openBlock(), createBlock(Transition, { name: "fade-expand" }, {
    default: withCtx(() => [
      n.hidden ? createCommentVNode("", true) : (openBlock(), createElementBlock("tr", Pb, [
        createBaseVNode("td", {
          class: "vs-table__expand__td",
          colspan: n.colspan
        }, [
          createBaseVNode("div", Mb, [
            createBaseVNode("div", Vb, [
              renderSlot(n.$slots, "default")
            ])
          ], 512)
        ], 8, Nb)
      ], 512))
    ]),
    _: 3
  });
}
var Wb = ee(Ib, [["render", Db]]);
var xb = defineComponent({
  name: "vsTr",
  extends: _e,
  components: {
    vsTableExpand: Wb
  },
  emits: ["click", "selected"],
  props: {
    data: null,
    isSelected: Boolean,
    notClickSelected: Boolean,
    openExpandOnlyTd: Boolean
  },
  setup(n, r) {
    const i = useSlots(), c = inject(bu, {}), _ = ref(), h = ref(), v = ref(false), m = (b) => {
      i.expand && (b.target.className.includes("isEdit") || (v.value = !v.value)), b.target.nodeName == "TD" && !n.notClickSelected && (c.selected(n.data), r.emit("selected", n.data)), r.emit("click", b);
    };
    return watch(v, (b) => {
      b && nextTick(() => {
        const w = h.value;
        w.style.height = `${w.scrollHeight}px`;
      });
    }), watch(() => n.data, () => {
      var b;
      (b = _.value) == null || b.style.removeProperty("--vs-color"), v.value = false;
    }), {
      table: c,
      expand: v,
      el$: _,
      contentExpand$: h,
      click: m
    };
  },
  computed: {
    bindRootClass() {
      return {
        "vs-component--primary": !!this.primary,
        "vs-component--danger": !!this.danger,
        "vs-component--warn": !!this.warn,
        "vs-component--success": !!this.success,
        "vs-component--dark": !!this.dark,
        selected: this.isSelected,
        isExpand: this.expand,
        expand: !!this.$slots.expand
      };
    }
  }
});
var Hb = {
  key: 0,
  class: "vs-table__tr__expand"
};
var Fb = ["colspan"];
var Ub = {
  ref: "contentExpand$",
  class: "vs-table__expand__td__content"
};
var Gb = { class: "vs-table__expand__td__content__sub" };
function qb(n, r, i, c, _, h) {
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("tr", {
      ref: "el$",
      class: normalizeClass(["vs-table__tr", n.bindRootClass]),
      onClick: r[0] || (r[0] = (...v) => n.click && n.click(...v))
    }, [
      renderSlot(n.$slots, "default")
    ], 2),
    n.$slots.expand ? (openBlock(), createBlock(Transition, {
      key: 0,
      name: "fade-expand"
    }, {
      default: withCtx(() => [
        n.expand ? (openBlock(), createElementBlock("tr", Hb, [
          createBaseVNode("td", {
            class: "vs-table__expand__td",
            colspan: n.table.colspan.value
          }, [
            createBaseVNode("div", Ub, [
              createBaseVNode("div", Gb, [
                renderSlot(n.$slots, "expand")
              ])
            ], 512)
          ], 8, Fb)
        ])) : createCommentVNode("", true)
      ]),
      _: 3
    })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64))
  ], 64);
}
var zb = ee(xb, [["render", qb]]);
var Yb = defineComponent({
  name: "vsDialog",
  extends: _e,
  components: {
    iconLoading: Ot,
    iconClose: ps
  },
  props: {
    modelValue: {
      default: false,
      type: Boolean
    },
    loading: {
      default: false,
      type: Boolean
    },
    fullScreen: {
      default: false,
      type: Boolean
    },
    notClose: {
      default: false,
      type: Boolean
    },
    preventClose: {
      default: false,
      type: Boolean
    },
    notPadding: {
      default: false,
      type: Boolean
    },
    overflowHidden: {
      default: false,
      type: Boolean
    },
    blur: {
      default: false,
      type: Boolean
    },
    square: {
      default: false,
      type: Boolean
    },
    autoWidth: {
      default: false,
      type: Boolean
    },
    scroll: {
      default: false,
      type: Boolean
    },
    notCenter: {
      default: false,
      type: Boolean
    },
    width: {
      default: null,
      type: String
    },
    routerClose: {
      default: false,
      type: Boolean
    }
  },
  emits: ["update:modelValue", "close"],
  setup(n, r) {
    const i = ref(false), c = (m) => {
      console.log(m), m.which == 27 && !n.preventClose && (r.emit("update:modelValue", false), r.emit("close"));
    }, _ = () => {
      window.addEventListener("keydown", c);
    }, h = (m) => {
      !m.target.closest(".vs-dialog") && !n.preventClose && (r.emit("update:modelValue", !n.modelValue), r.emit("close")), n.preventClose && !m.target.closest(".vs-dialog") && (i.value = true, setTimeout(() => {
        i.value = false;
      }, 300));
    }, v = () => {
      r.emit("update:modelValue", !n.modelValue), r.emit("close");
    };
    return watch(() => n.modelValue, (m) => {
      m ? (i.value = true, n.overflowHidden && (document.body.style.overflow = "hidden")) : (i.value = false, n.overflowHidden && (document.body.style.overflow = "", window.removeEventListener("keydown", c)));
    }), {
      rebound: i,
      addEsc: _,
      clickDialog: h,
      clickClose: v
    };
  }
});
var Kb = {
  key: 0,
  class: "vs-dialog__loading"
};
var Xb = {
  key: 2,
  class: "vs-dialog__header"
};
var Jb = {
  key: 4,
  class: "vs-dialog__footer"
};
function Zb(n, r, i, c, _, h) {
  const v = resolveComponent("icon-loading"), m = resolveComponent("icon-close");
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    createVNode(Transition, { name: "vs-dialog" }, {
      default: withCtx(() => [
        n.modelValue ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref: "dialog-content",
          class: normalizeClass(["vs-dialog-content", {
            blur: n.blur,
            fullScreen: n.fullScreen
          }]),
          onClick: r[1] || (r[1] = (...b) => n.clickDialog && n.clickDialog(...b))
        }, [
          createBaseVNode("div", {
            class: normalizeClass(["vs-dialog", {
              "vs-dialog--fullScreen": n.fullScreen,
              "vs-dialog--rebound": n.rebound,
              "vs-dialog--notPadding": n.notPadding,
              "vs-dialog--square": n.square,
              "vs-dialog--autoWidth": n.autoWidth,
              "vs-dialog--scroll": n.scroll,
              "vs-dialog--loading": n.loading,
              "vs-dialog--notCenter": n.notCenter
            }]),
            style: normalizeStyle({ width: n.width })
          }, [
            n.loading ? (openBlock(), createElementBlock("div", Kb, [
              createVNode(v)
            ])) : createCommentVNode("", true),
            n.notClose ? createCommentVNode("", true) : (openBlock(), createElementBlock("button", {
              key: 1,
              class: "vs-dialog__close",
              onClick: r[0] || (r[0] = (...b) => n.clickClose && n.clickClose(...b))
            }, [
              createVNode(m, { hover: "x" })
            ])),
            n.$slots.header ? (openBlock(), createElementBlock("div", Xb, [
              renderSlot(n.$slots, "header")
            ])) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64)),
            createBaseVNode("div", {
              class: normalizeClass(["vs-dialog__content", { notFooter: !n.$slots.footer }])
            }, [
              renderSlot(n.$slots, "default")
            ], 2),
            n.$slots.footer ? (openBlock(), createElementBlock("div", Jb, [
              renderSlot(n.$slots, "footer")
            ])) : (openBlock(), createElementBlock(Fragment, { key: 5 }, [], 64))
          ], 6)
        ], 2)) : createCommentVNode("", true)
      ]),
      _: 3
    })
  ]);
}
var Qb = ee(Yb, [["render", Zb]]);
var jb = {
  vsAlert: $_,
  vsAvatar: W_,
  vsAvatarGroup: F_,
  vsButton: Z_,
  vsButtonGroup: tm,
  vsCheckbox: cu,
  vsSwitch: Im,
  vsRadio: Fm,
  vsInput: s0,
  vsPagination: b0,
  vsTooltip: k0,
  vsSelect: dy,
  vsSelectOption: vy,
  vsSelectOptionGroup: yy,
  vsScrollbar: sr,
  vsCard: Ly,
  vsCardGroup: Iy,
  vsSidebar: xy,
  vsSidebarGroup: Gy,
  vsSidebarItem: Qy,
  vsNavbar: ob,
  vsNavbarGroup: db,
  vsNavbarItem: vb,
  vsTable: Cb,
  vsTableTd: Tb,
  vsTableTh: Rb,
  vsTableTr: zb,
  vsDialog: Qb
};
var e$ = defineComponent({
  name: "vsCol",
  props: {
    sm: [String, Number],
    smO: [String, Number],
    md: [String, Number],
    mdO: [String, Number],
    lg: [String, Number],
    lgO: [String, Number],
    xl: [String, Number],
    xlO: [String, Number],
    xxl: [String, Number],
    xxlO: [String, Number]
  },
  computed: {
    bindClass() {
      return [
        this.smO && `sm-o-${this.smO}`,
        this.mdO && `md-o-${this.mdO}`,
        this.lgO && `lg-o-${this.lgO}`,
        this.xlO && `xl-o-${this.xlO}`,
        this.xxlO && `xxl-o-${this.xxlO}`,
        this.sm && `sm-${this.sm}`,
        this.md && `md-${this.md}`,
        this.lg && `lg-${this.lg}`,
        this.xl && `xl-${this.xl}`,
        this.xxl && `xxl-${this.xxl}`
      ];
    }
  }
});
function t$(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vs-col", n.bindClass])
  }, [
    renderSlot(n.$slots, "default")
  ], 2);
}
var n$ = ee(e$, [["render", t$]]);
var s$ = defineComponent({
  name: "vsRow",
  props: {
    w: {
      type: Number,
      default: 12
    },
    justify: {
      type: String,
      default: "flex-start"
    },
    align: {
      type: String,
      default: "flex-start"
    },
    direction: {
      type: String,
      default: "row"
    }
  }
});
var i$ = { class: "vs-row" };
function o$(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("div", i$, [
    renderSlot(n.$slots, "default")
  ]);
}
var r$ = ee(s$, [["render", o$]]);
var l$ = defineComponent({
  name: "vsGrid"
});
var a$ = { class: "vs-grid" };
function u$(n, r, i, c, _, h) {
  return openBlock(), createElementBlock("div", a$, [
    renderSlot(n.$slots, "default")
  ]);
}
var c$ = ee(l$, [["render", u$]]);
var d$ = {
  vsGrid: c$,
  vsRow: r$,
  vsCol: n$
};
var f$ = (n) => {
  document.body.classList.add("vs-remove-transition");
  let i = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return localStorage.vsTheme && (i = localStorage.vsTheme == "dark"), i ? document.body.setAttribute("vs-theme", "dark") : document.body.removeAttribute("vs-theme"), n == "dark" ? document.body.setAttribute("vs-theme", "dark") : n == "light" && document.body.removeAttribute("vs-theme"), localStorage.vsTheme = i ? "dark" : "light", setTimeout(() => {
    document.body.classList.remove("vs-remove-transition");
  }, 100), i ? "dark" : "light";
};
var h$ = (n) => {
  document.body.classList.add("vs-remove-transition");
  let i = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return localStorage.vsTheme && (i = localStorage.vsTheme == "dark"), i ? document.body.removeAttribute("vs-theme") : document.body.setAttribute("vs-theme", "dark"), n == "dark" ? document.body.removeAttribute("vs-theme") : n == "light" && document.body.setAttribute("vs-theme", "dark"), localStorage.vsTheme = i ? "light" : "dark", setTimeout(() => {
    document.body.classList.remove("vs-remove-transition");
  }, 100), i ? "light" : "dark";
};
var v$ = (n, r, i = 5) => {
  const c = Math.ceil(r * i), _ = c - i;
  return n.filter((h, v) => v >= _ && v < c);
};
var p$ = (n, r = 5) => Math.ceil(n.length / r);
var g$ = (n, r) => n.length !== r.length ? [...r] : [];
var $u = (n) => Object.values(n || []).reduce((r, i) => typeof i == "object" ? r.concat($u(i)) : r.concat(i), []);
var _$ = (n) => $u(n).filter(function(r) {
  return typeof r == "string" || typeof r == "number";
});
var Xa = (n) => n.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
var m$ = (n, r = "") => {
  const i = Xa(r);
  return n.filter((c) => {
    const _ = _$(c);
    return Xa(_.toString()).indexOf(i) != -1;
  });
};
var y$ = (n, r, i, c) => {
  r = [...r].sort(w);
  let _ = c || "desc";
  const h = n.target;
  h.dataset[`sortType${i}`] === "desc" ? _ = "asc" : h.dataset[`sortType${i}`] === "asc" && (_ = null), _ === "desc" && r.forEach((T, O) => {
    T[`originalIndex${i}`] = O;
  }), h.dataset[`sortType${i}`] = _, h.dataset.sortType = _, h.dataset.sortKey = `sortType${i}`, h.closest(".vs-table__tr").querySelectorAll("th.sort").forEach((T) => {
    T !== h && (T.dataset.sortType = null, T.dataset[T.dataset.sortKey] = null);
  });
  function b(T, O) {
    return T[i] < O[i] ? _ !== "desc" ? 1 : -1 : T[i] > O[i] ? _ !== "desc" ? -1 : 1 : 0;
  }
  function w(T, O) {
    return T[`originalIndex${i}`] - O[`originalIndex${i}`];
  }
  return _ !== null ? [...r].sort(b) : [...r].sort(w);
};
var b$ = defineComponent({
  name: "vsLoading",
  data: () => ({
    text: void 0,
    type: "default",
    color: void 0,
    background: void 0,
    opacity: void 0,
    percent: void 0,
    progress: 0,
    scale: void 0,
    target: void 0,
    isVisible: false,
    instance: void 0,
    isDirective: false
  }),
  watch: {
    isVisible() {
      this.$nextTick(() => {
        this.color && At("color", this.color, this.$el), this.background && At("background", this.background, this.$el), this.opacity && fs("opacity", this.opacity, this.$el);
      });
    }
  },
  computed: {
    bindRootClass() {
      return [
        `vs-loading--${this.type || "default"}`,
        { "vs-loading--target": !!this.target },
        { "vs-loading--background": !!this.background }
      ];
    }
  },
  methods: {
    close() {
      this.isVisible = false;
    },
    transitionLeave(n, r) {
      setTimeout(() => {
        var i;
        r(), vs(this.$el, this.$el.parentElement), this.isDirective === false && ((i = this.instance) == null || i.unmount());
      }, 2);
    }
  },
  mounted() {
    var n;
    this.instance = (n = getCurrentInstance()) == null ? void 0 : n.appContext.app;
  },
  components: { iconLoading: Ot }
});
var $$ = { class: "vs-loading__load__animation" };
var w$ = {
  key: 0,
  class: "vs-loading__load__percent"
};
var k$ = createBaseVNode("div", { class: "vs-loading__load__animation__item vs-loading__load__animation__1" }, null, -1);
var C$ = createBaseVNode("div", { class: "vs-loading__load__animation__item vs-loading__load__animation__2" }, null, -1);
var S$ = createBaseVNode("div", { class: "vs-loading__load__animation__item vs-loading__load__animation__3" }, null, -1);
var E$ = createBaseVNode("div", { class: "shadow shadow__1" }, null, -1);
var T$ = createBaseVNode("div", { class: "shadow shadow__2" }, null, -1);
var L$ = createBaseVNode("div", { class: "shadow shadow__3" }, null, -1);
var B$ = {
  key: 0,
  class: "vs-loading__load__text"
};
var A$ = {
  key: 0,
  class: "vs-loading__progress"
};
function O$(n, r, i, c, _, h) {
  const v = resolveComponent("icon-loading");
  return openBlock(), createBlock(Transition, {
    name: "loading",
    onLeave: n.transitionLeave
  }, {
    default: withCtx(() => [
      n.isVisible ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["vs-loading", n.bindRootClass])
      }, [
        createBaseVNode("div", {
          class: "vs-loading__load",
          style: normalizeStyle([{ transform: `scale(${n.scale})` }])
        }, [
          createBaseVNode("div", $$, [
            n.percent ? (openBlock(), createElementBlock("div", w$, toDisplayString(n.percent), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
            n.type === "default" ? (openBlock(), createBlock(v, { key: 2 })) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64)),
            k$,
            C$,
            S$,
            n.type === "ball" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
              E$,
              T$,
              L$
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 5 }, [], 64))
          ]),
          n.text ? (openBlock(), createElementBlock("div", B$, toDisplayString(n.text), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64))
        ], 4),
        n.progress ? (openBlock(), createElementBlock("div", A$, [
          createBaseVNode("div", {
            class: "vs-loading__progress__bar",
            style: normalizeStyle([{ width: `${n.progress}%` }])
          }, null, 4)
        ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64))
      ], 2)) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["onLeave"]);
}
var wu = ee(b$, [["render", O$]]);
var R$ = (n = {}) => {
  let i = createApp(wu).mount(document.createElement("div"));
  const c = () => {
    er(i, n, [
      "text",
      "color",
      "background",
      "opacity",
      "percent",
      "type",
      "progress",
      "scale"
    ]), n.hidden && (document.body.style.overflowY = "hidden"), typeof n.target == "string" ? (n.target = document.querySelector(n.target), i.$data.target = n.target) : n.target ? (n.target = n.target.$el || n.target, i.$data.target = n.target) : n.target = document.body;
    const w = getComputedStyle(n.target);
    (!w.position || w.position === "static") && (n.target.style.position = "relative"), n.target.appendChild(i.$el), i.$forceUpdate();
  }, _ = async () => {
    c(), await nextTick(() => {
      i.$data.isVisible = true;
    });
  }, h = () => {
    vs(i.$el, i.$el.parentElement);
  }, v = (w) => {
    i.$data.text = w;
  }, m = (w) => {
    i.$data.progress = w;
  }, b = (w) => {
    i.$data.percent = w;
  };
  return _(), {
    close: i.close,
    setProgress: m,
    setPercent: b,
    setText: v,
    removeElLoading: h
  };
};
var I$ = defineComponent({
  name: "vsNotification",
  components: { iconClose: ps },
  data: () => ({
    content: void 0,
    title: void 0,
    text: void 0,
    color: null,
    border: null,
    icon: null,
    flat: false,
    sticky: false,
    square: false,
    onClick: void 0,
    onClickClose: void 0,
    clickClose: false,
    buttonClose: true,
    onDestroy: void 0,
    width: void 0,
    loading: false,
    notPadding: void 0,
    classNotification: void 0,
    progressAuto: false,
    isVisible: false,
    progress: 0,
    duration: 4e3,
    intervalProgress: null,
    countProgress: 0,
    instance: void 0
  }),
  computed: {
    bindRootClass() {
      return [
        { "vs-notification--color": this.color },
        { "vs-notification--border": this.border },
        { "vs-notification--icon": this.icon },
        { "vs-notification--onClick": this.onClick },
        { "vs-notification--onClickClose": this.onClickClose },
        { "vs-notification--flat": this.flat },
        { "vs-notification--sticky": this.sticky },
        { "vs-notification--square": this.square },
        { "vs-notification--width-all": this.width == "100%" },
        { "vs-notification--width-auto": this.width == "auto" },
        { "vs-notification--loading": this.loading },
        { "vs-notification--notPadding": this.notPadding },
        this.classNotification
      ];
    }
  },
  watch: {
    isVisible() {
      nextTick(() => {
        this.color && At("color", this.color, this.$el), this.border && At("border", this.border, this.$el);
      });
    }
  },
  methods: {
    close() {
      this.isVisible = false;
    },
    transitionBeforeEnter(n) {
      n.style.maxHeight = "0", n.style.padding = "0 20px";
    },
    transitionEnter(n, r) {
      const i = n.scrollHeight;
      n.style.maxHeight = `${i + 40}px`, window.innerWidth < 600 ? n.style.padding = "15px" : n.style.padding = "20px", r();
    },
    transitionLeave(n, r) {
      const i = this.$el.parentElement, c = [...i.childNodes].filter((_) => _.data != "v-if");
      setTimeout(() => {
        var _, h;
        r(), c.length === 1 ? vs(i) : vs(this.$el, i), (_ = this.instance) == null || _.unmount(), (h = this.onDestroy) == null || h.call(this);
      }, 150);
    },
    handleRootClick() {
      var n, r;
      (n = this.onClick) == null || n.call(this), this.clickClose && (this.close(), (r = this.onClickClose) == null || r.call(this));
    }
  },
  mounted() {
    var n;
    this.instance = (n = getCurrentInstance()) == null ? void 0 : n.appContext.app;
  },
  beforeUpdate() {
    this.progressAuto && (this.intervalProgress = setInterval(() => {
      this.progress++;
    }, Number(this.duration) / 100));
  },
  beforeUnmount() {
    clearInterval(this.intervalProgress);
  }
});
var P$ = ["innerHTML"];
var N$ = {
  key: 1,
  class: "vs-notification__icon"
};
var M$ = { class: "vs-notification__content" };
var V$ = {
  key: 0,
  class: "vs-notification__content__header"
};
var D$ = {
  key: 2,
  class: "vs-notification__content__text"
};
var W$ = ["innerHTML"];
var x$ = {
  key: 1,
  class: "vs-notification__loading"
};
function H$(n, r, i, c, _, h) {
  const v = resolveComponent("icon-close");
  return openBlock(), createBlock(Transition, {
    name: "notification",
    onBeforeEnter: n.transitionBeforeEnter,
    onEnter: n.transitionEnter,
    onLeave: n.transitionLeave
  }, {
    default: withCtx(() => [
      n.isVisible ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["vs-notification", n.bindRootClass]),
        onClick: r[1] || (r[1] = (...m) => n.handleRootClick && n.handleRootClick(...m))
      }, [
        n.loading ? (openBlock(), createElementBlock("div", x$)) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          n.icon ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            typeof n.icon == "string" ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "vs-notification__icon",
              innerHTML: n.icon
            }, null, 8, P$)) : (openBlock(), createElementBlock("div", N$, [
              (openBlock(), createBlock(resolveDynamicComponent(n.icon), { class: "vs-notification__icon" }))
            ]))
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
          createBaseVNode("div", M$, [
            n.title ? (openBlock(), createElementBlock("div", V$, [
              createBaseVNode("h4", null, toDisplayString(n.title), 1)
            ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [], 64)),
            n.text ? (openBlock(), createElementBlock("div", D$, [
              createBaseVNode("p", null, toDisplayString(n.text), 1)
            ])) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64)),
            typeof n.content == "string" ? (openBlock(), createElementBlock("div", {
              key: 4,
              innerHTML: n.content
            }, null, 8, W$)) : n.content ? (openBlock(), createBlock(resolveDynamicComponent(n.content), { key: 5 })) : (openBlock(), createElementBlock(Fragment, { key: 6 }, [], 64))
          ])
        ], 64)),
        n.buttonClose ? (openBlock(), createElementBlock("button", {
          key: 2,
          class: "vs-notification__close",
          onClick: r[0] || (r[0] = (...m) => n.close && n.close(...m))
        }, [
          createVNode(v, { hover: "less" })
        ])) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64)),
        Number(n.progress) !== 0 ? (openBlock(), createElementBlock("div", {
          key: 4,
          class: "vs-notification__progress",
          style: normalizeStyle({ width: `${n.progress}%` })
        }, null, 4)) : (openBlock(), createElementBlock(Fragment, { key: 5 }, [], 64))
      ], 2)) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["onBeforeEnter", "onEnter", "onLeave"]);
}
var F$ = ee(I$, [["render", H$]]);
var U$ = (n = {}) => {
  let i = createApp(F$).mount(document.createElement("div"));
  const c = () => {
    er(i, n, [
      "title",
      "text",
      "content",
      "color",
      "colorName",
      "border",
      "icon",
      "flat",
      "sticky",
      "square",
      "onClick",
      "onClickClose",
      "clickClose",
      "buttonClose",
      "onDestroy",
      "width",
      "loading",
      "notPadding",
      "classNotification"
    ]), n.progress == "auto" && n.duration !== 0 ? i.$data.progressAuto = true : i.$data.progress = n.progress, n.duration !== 0 && (i.$data.duration = Number(n.duration) || 4e3), (n.width == "100%" || window.innerWidth < 600) && (n.position === "top-left" || n.position === "top-right" ? n.position = "top-center" : (n.position === "bottom-left" || n.position === "bottom-right" || !n.position) && (n.position = "bottom-center")), typeof n.position != "string" && (n.position = "bottom-right");
    const w = document.querySelector(`.vs-notification-parent--${n.position || "bottom-right"}`) || document.createElement("div");
    document.querySelector(`.vs-notification-parent--${n.position || "bottom-right"}`) || (w.className = "vs-notification-parent", w.classList.add(`vs-notification-parent--${n.position || "bottom-right"}`)), w.appendChild(i.$el), document.body.appendChild(w), i.$forceUpdate();
  }, _ = () => {
    c(), nextTick(() => {
      i.$data.isVisible = true;
    });
  };
  function h(w) {
    i.$data.loading = w;
  }
  function v(w) {
    w && (i.$data.progress = w);
  }
  function m(w) {
    w && (i.$data.classNotification = w, i.$el.closest(".vs-notification-parent").classList.toggle(w));
  }
  const b = {
    close: i.close,
    setLoading: h,
    changeProgress: v,
    toggleClass: m
  };
  return _(), n.duration !== 0 && setTimeout(() => {
    i.close();
  }, Number(n.duration) || 4e3), b;
};
var G$ = (n) => {
  const r = {
    setColor(i, c) {
      At(i, c, document.body);
    },
    loading: R$,
    toggleTheme: h$,
    setTheme: f$,
    notification: U$,
    getPage: v$,
    getLength: p$,
    toggleSelectAll: g$,
    getSearch: m$,
    sortData: y$
  };
  n.config.globalProperties.$vs = r, n.provide("vsFunction", r);
};
var Yo;
var kt;
var Ja = (n, r) => {
  er(n, r.value, [
    "text",
    "color",
    "background",
    "opacity",
    "percent",
    "type",
    "progress",
    "scale"
  ]);
};
var q$ = {
  mounted: (n, r) => {
    Yo = createApp(wu), kt = Yo.mount(document.createElement("div")), kt.$data.isDirective = true, kt.$data.target = kt.$el.parentElement, Ja(kt, r), (!n.style.position || n.style.position === "static") && (n.style.position = "relative"), kt.$data.isVisible = r.value.hasOwnProperty("loading") ? r.value.loading : r.value, kt.$data.isVisible && n.appendChild(kt.$el);
  },
  beforeUpdate(n, r) {
    Ja(kt, r);
    let i = r.value.hasOwnProperty("loading") ? r.value.loading : r.value;
    i !== kt.$data.isVisible && (nextTick(() => {
      kt.$data.isVisible = i;
    }), i && tr(kt.$el, n));
  },
  beforeUnmount() {
    Yo.unmount();
  }
};
var ln = /* @__PURE__ */ new Map();
var Za;
_i && (document.addEventListener("mousedown", (n) => Za = n), document.addEventListener("mouseup", (n) => {
  for (const r of ln.values())
    for (const { documentHandler: i } of r)
      i(n, Za);
}));
function Qa(n, r) {
  let i = [];
  return Array.isArray(r.arg) ? i = r.arg : ce.exports.isElement(r.arg) && i.push(r.arg), function(c, _) {
    const h = r.instance.popperRef, v = c.target, m = _ == null ? void 0 : _.target, b = !r || !r.instance, w = !v || !m, T = n.contains(v) || n.contains(m), O = n === v, B = i.length && i.some((Z) => Z == null ? void 0 : Z.contains(v)) || i.length && i.includes(m), F = h && (h.contains(v) || h.contains(m));
    b || w || T || O || B || F || r.value(c, _);
  };
}
var z$ = {
  beforeMount(n, r) {
    ln.has(n) || ln.set(n, []), ln.get(n).push({
      documentHandler: Qa(n, r),
      bindingFn: r.value
    });
  },
  updated(n, r) {
    ln.has(n) || ln.set(n, []);
    const i = ln.get(n), c = i.findIndex((h) => h.bindingFn === r.oldValue), _ = {
      documentHandler: Qa(n, r),
      bindingFn: r.value
    };
    c >= 0 ? i.splice(c, 1, _) : i.push(_);
  },
  unmounted(n) {
    ln.delete(n);
  }
};
var ja = {
  loading: q$,
  clickOutside: z$
};
var Y$ = (n) => {
  Object.keys(ja).forEach((r) => {
    n.directive(r, ja[r]);
  });
};
var X$ = {
  install: (n) => {
    for (const [r, i] of Object.entries(d$))
      n.component(i.name, i);
    for (const [r, i] of Object.entries(jb))
      n.component(i.name, i);
    G$(n), Y$(n);
  }
};

// dep:vuesax-alpha
var vuesax_alpha_default = X$;
export {
  vuesax_alpha_default as default,
  p$ as getLength,
  v$ as getPage,
  m$ as getSearch,
  R$ as loading,
  U$ as notification,
  y$ as sortData,
  g$ as toggleSelectAll,
  At as vsSetColor,
  f$ as vsSetTheme,
  h$ as vsToggleTheme
};
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
//# sourceMappingURL=vuesax-alpha.js.map
