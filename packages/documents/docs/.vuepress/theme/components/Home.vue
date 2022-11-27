<template>
  <main class="home" aria-labelledby="main-title">
    <!-- <Adsense
      data-ad-client="ca-pub-4283907298344887"
      data-ad-slot="4634073296">
    </Adsense> -->
    <div class="init">
      <header class="hero">
        <div class="points-init">
          <span v-for="span in 16" :key="span"></span>
        </div>
        <div class="circle-init"></div>
        <div class="content-hero">
          <h1
            v-if="pageFrontmatter.heroText"
            v-html="pageFrontmatter.heroText || pageFrontmatter.title || 'Hello'"
            id="main-title"
          ></h1>

          <p
            v-html="
              pageFrontmatter.description || 'Welcome to your VuePress site'
            "
            class="description"
          ></p>

          <div class="con-btns">
            <NavLink
              @mouseleave.native="time('vuesax')"
              @mouseenter.native="
                (nativeButtons.vuesax = true), (expand = true)
              "
              title="Get Started"
              class="action-button"
              :nav-item="(pageFrontmatter.action as NavbarItem)"
            ></NavLink>

            <a
              @mouseleave="time('discord')"
              @mouseenter="(nativeButtons.discord = true), (expand = true)"
              title="Discord"
              class="discord"
              target="_blank"
              href="https://discord.gg/6AZNXEa"
            >
              <i class="bx bxl-discord"></i>
              Discord
            </a>

            <a
              @mouseleave="time('github')"
              @mouseenter="(nativeButtons.github = true), (expand = true)"
              title="Github"
              class="github"
              target="_blank"
              href="https://github.com/lusaxweb/vuesax"
            >
              <i class="bx bxl-github"></i>
              <span title="Stargazers" class="badge-star">
                <!-- <i class='bx bxs-star' ></i> -->
                {{ numberWithCommas }}
              </span>
            </a>
          </div>
        </div>
      </header>

      <HomeComponent
        :class="{
          'github-hover': nativeButtons.github,
          'discord-hover': nativeButtons.discord,
          'vuesax-hover': nativeButtons.vuesax,
          'btn-hover': expand,
        }"
      />
    </div>
    <!-- <home-init>
      <header class="hero">
        <div class="content-hero">
          <h1 v-if="data.heroText !== null" v-html="data.heroText || $title || 'Hello'" id="main-title" />

          <p v-html="data.tagline || $description || 'Welcome to your VuePress site'" class="description" />

          <div class="con-btns">
            <NavLink
              title="Get Started"
              class="action-button"
              :item="actionLink"
            />

            <a title="Discord" class="discord" target="_blank" href="https://discord.gg/9dsKtvB">
              <i class='bx bxl-discord' ></i>
              Discord
            </a>

            <a title="Github" class="github" target="_blank" href="https://github.com/lusaxweb/vuesax">
              <i class='bx bxl-github' ></i>
              <span title="Stargazers" class="badge-star">
                <!<i class='bx bxs-star' ></i>
                {{ numberWithCommas }}
              </span>
            </a>
          </div>
        </div>

      </header>
    </home-init> -->

    <Patrons />

    <Illustration1 :feature="(pageFrontmatter.features as Array<ThemeHomeFeatureOption>)[0]" />
    <Illustration2 :feature="(pageFrontmatter.features as Array<ThemeHomeFeatureOption>)[1]" />

    <Uses />
    <Illustration3 :feature="(pageFrontmatter.features as Array<ThemeHomeFeatureOption>)[2]" />
    <Illustration4 :feature="(pageFrontmatter.features as Array<ThemeHomeFeatureOption>)[3]" />

    <twitter />
    <PremiumThemes :data="pageFrontmatter.premiumThemes" />

    <!-- <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="custom"/> -->

    <!-- <div
      class="footer"
      v-if="data.footer"
    >
      {{ data.footer }}
    </div> -->
    <Footer :subscribe-frontmatter="pageFrontmatter.suscribe"></Footer>
  </main>
</template>

<script lang="ts">
export type PageButtonKeys = "github" | "discord" | "vuesax";

export type PageButtons<T extends PageButtonKeys = PageButtonKeys> = {
  [K in T]: boolean;
};

export type NativeButtons<T extends PageButtons = PageButtons> = Required<T>;
</script>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from "vue";
import { usePageData, usePageFrontmatter } from "@vuepress/client";

import { ThemeProjectHomePageFrontmatter, ThemeHomeFeatureOption } from "../shared/frontmatter/home";
import NavLink from "./NavLink.vue";
import Footer from "./Footer.vue";
import HomeInit from "./homeInit.vue";
import Illustration1 from "./HomeIllustration1.vue";
import Illustration2 from "./HomeIllustration2.vue";
import Illustration3 from "./HomeIllustration3.vue";
import Illustration4 from "./HomeIllustration4.vue";
import HomeComponent from "./HomeComponent.vue";
import PremiumThemes from "./premiumThemes.vue";
import Patrons from "./HomePatrons.vue";
import twitter from "./HomeTwiter.vue";
import Uses from "./HomeUses.vue";
import { NavbarItem } from "vuepress-vite";

const pageFrontmatter = usePageFrontmatter<ThemeProjectHomePageFrontmatter>();

const star = ref<number>(0);

const nativeButtons = reactive<NativeButtons>({
  github: false,
  discord: false,
  vuesax: false,
});

const expand = ref<boolean>(false);

const actions = computed(() => {
  return {
    link: pageFrontmatter.value.actions,
    text: pageFrontmatter.value.actionText,
  };
});
const numberWithCommas = computed(() => {
  const x = star.value;
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(".");
});

onMounted(async () => {
  const res = await fetch(
    "https://api.github.com/repos/tranthinh-coding/vuesax-alpha"
  );

  const json = await res.json();
  star.value = json.stargazers_count;
});

const time = (variable: PageButtonKeys) => {
  expand.value = false;
  nativeButtons[variable] = false;
};
</script>

<style lang="scss">
@import "../styles/mixin";
.darken {
  .init {
    &:after {
      background-image: radial-gradient(
        -color('theme-bg') 0%,
        -color('theme-bg') 30%,
        transparent 70%
      );
    }
  }
  .discord {
    background: -color('theme-bg');
    color: #fff !important;
    i {
      color: #fff !important;
    }
  }
  .badge-star {
    background: -color('theme-bg2');
    color: #fff;
  }
}
.init {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  position: relative;
  .points-init {
    width: 100px;
    height: 100px;
    top: 200px;
    left: 10px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    span {
      width: 25px;
      height: 25px;
      display: block;
      transition: all 0.25s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        &:after {
          background: -color("primary");
          width: 12px;
          height: 12px;
          box-shadow: 0px 4px 10px 0px -color("primary", 0.2);
        }
      }
      &:after {
        content: "";
        position: relative;
        width: 6px;
        height: 6px;
        background: -color('theme-bg2');
        border-radius: 50%;
        transition: all 0.25s ease;
      }
    }
  }
  .circle-init {
    position: absolute;
    width: 430px;
    height: 430px;
    border: 40px solid -color('theme-bg');
    border-radius: 50%;
    bottom: -80px;
    left: -200px;
    z-index: -1;
    transition: all 0.25s ease;
    &:hover {
      border: 40px solid -color('theme-bg2');
    }
  }
  .hero {
    width: 50%;
  }
}
.badge-star {
  position: absolute;
  top: -8px;
  right: -25px;
  font-size: 0.7rem;
  background: -color('theme-color');
  color: -color('theme-layout');
  border-radius: 8px 8px 8px 4px;
  padding: 2px 5px;
  font-weight: normal;
  z-index: 100;
  i {
    font-size: 0.6rem !important;
  }
}
.con-btns {
  display: flex;
  align-items: center;
  justify-content: center;
}
.discord {
  border: 0px;
  padding: 11px 25px;
  margin: 0px 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 14px;
  transition: all 0.25s ease;
  font-size: 0.8rem;
  &:after {
    border-radius: inherit;
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid -color('theme-color');
    opacity: 0.2;
    transition: all 0.25s ease;
    background: transparent;
    box-shadow: 0px 0px 0px 0px -color('theme-color');
  }
  &:hover {
    &:after {
      opacity: 1;
    }
  }
  i {
    font-size: 1.4rem;
    margin-right: 3px;
  }
}
.github {
  padding: 10px 20px;
  margin: 0px 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 14px;
  &:hover {
    &:after {
      opacity: 1;
    }
  }
  &:after {
    border-radius: inherit;
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid -color('theme-color');
    opacity: 0.2;
    transition: all 0.25s ease;
    background: transparent;
    box-shadow: 0px 0px 0px 0px -color('theme-color');
  }
  i {
    font-size: 1.4rem;
  }
  &.github {
    padding: 10px;
    margin-left: 0px;
  }
}
.logo-vuesax {
  max-width: 260px;
  fill: -color('theme-color');
}
.home {
  margin: 0px auto;
  display: block;
  width: 100%;
  overflow: hidden;
  background: -color('theme-layout');
  & ~ .config {
    left: 0px;
  }
  #main-title {
    font-size: 2rem;
    font-weight: normal;
    a {
      text-decoration: underline;
    }
  }
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 800px;
    padding-top: 60px;
    padding: 20px;
    .content-hero {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      padding: 40px 60px;
    }
    img {
      max-width: 100%;
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }
    h1 {
      font-size: 2.3rem !important;
      text-align: left;
      margin-bottom: 15px;
    }
    .description {
      max-width: 35rem;
      font-size: 1.1rem;
      line-height: 1.3;
      color: -color('theme-color');
      opacity: 0.6;
      margin-top: 0px;
    }
    .action-button {
      display: inline-block;
      font-size: 0.8rem;
      color: #fff !important;
      background: -color("primary");
      padding: 13px 25px;
      border-radius: 17px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      transition: all 0.25s ease;
      box-shadow: 0px 10px 20px -10px -color("primary", 0.5);
      i {
        display: none;
      }
      &:hover {
        box-shadow: 0px 20px 20px -10px -color("primary", 0.5);
        transform: translate(0, -5px);
      }
    }
  }
  .features {
    padding: 1.2rem 0px;
    margin: auto;
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }
  .feature {
    flex-grow: 1;
    flex-basis: 30% nav-link action-button;
    max-width: 30%;
    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: -color('theme-color');
    }
    p {
      color: -color('theme-color');
      opacity: 0.7;
    }
  }
}
.home .hero h1,
.home .hero .description,
.home .hero .action {
  text-align: left;
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }
    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }
      h1 {
        font-size: 2rem;
      }
      .description {
        font-size: 1.2rem;
      }
      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }
    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
  .home .hero h1,
  .home .hero .description,
  .home .hero .action {
    margin: 1.2rem auto;
  }
}

@media (max-width: 1400px) {
  .home {
    .content-i {
      padding: 100px 30px;
      .con-text {
        padding-left: 0px;
      }
      .con-ilus {
        height: auto;
        padding-right: 20px;
        width: 50%;
        svg {
          height: auto;
          width: 100%;
        }
      }
    }
  }
}
@media (max-width: 1150px) {
  .home {
    .hero {
      width: 60%;
      justify-content: flex-start;
      .content-hero {
        padding: 20px;
        padding-right: 30px;
        .description {
          font-size: 0.95rem;
        }
        #main-title {
          font-size: 2rem !important;
        }
      }
    }
  }
}
@media (max-width: 1000px) {
  .home {
    .content-i {
      .con-text {
        h2 {
          font-size: 1.5rem;
        }
        p {
          font-size: 0.9rem;
        }
        .btn-action {
          padding: 7px 15px;
          font-size: 0.9rem;
        }
      }
    }
  }
}
@media (max-width: 960px) {
  .home {
    .hero {
      width: 100%;
      align-items: center;
      .content-hero {
        width: 100%;
        align-items: center;
        padding-top: 0px;
        #main-title {
          margin-top: 0px;
          text-align: center;
        }
      }
    }
  }
}
@media (max-width: 800px) {
  .home {
    .content-i {
      position: relative;
      justify-content: flex-start;
      .con-text {
        width: 60%;
        z-index: 300;
      }
      .con-ilus {
        position: absolute;
        width: 50%;
        top: 40px;
        right: 0px;
      }
    }
  }
}

@media (max-width: 670px) {
  .home {
    min-height: auto;
    .content-i {
      position: relative;
      justify-content: flex-start;
      padding: 40px 20px;
      flex-direction: column;
      .con-text {
        width: 90%;
        z-index: 300;
      }
      .con-ilus {
        position: relative;
        width: 100%;
        max-width: none;
        opacity: 1;
        order: -1;
        top: 0px;
        padding: 10px !important;
      }
    }
  }
}
@media (max-width: 550px) {
  .init {
    min-height: auto;
  }
  .home {
    .hero {
      z-index: 120;
      .circle-init {
        display: none;
      }
      .points-init {
        z-index: -1;
      }
      .description {
        text-align: center;
      }
    }
  }
}
@media (max-width: 500px) {
  .home {
    .content-i {
      .con-text {
        width: 100%;
        h2 {
          font-size: 1.2rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
    }
  }
}
@media (max-width: 470px) {
  .home {
    .hero {
      padding: 10px;
      .content-hero {
        z-index: 1000;
        padding-right: 15px !important;
        #main-title {
          font-size: 1.8rem !important;
        }
      }
    }
  }
  .con-btns {
    flex-wrap: wrap;
    width: 100%;
    a {
      width: calc(50% - 20px);
      margin: 10px;
      text-align: center;
      &:first-child {
        width: calc(100% - 30px);
      }
    }
  }
}
</style>
