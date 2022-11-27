<template>
  <div class="con-twits">
    <header>
      <h2>
        These are some of the <b>libraries</b>, <b>languages ​</b> and
        <b>technologies</b> <br />that we use to create this beautiful
        <b>framework</b>
      </h2>
    </header>

    <ul
      @mousedown="mousedownx"
      @mousemove="mousemovex"
      @mouseleave="mouseleaveUl"
      @mouseup="mouseupx"
      class="con-projects-ul-uses"
    >
      <!-- @mousewheel="scrollH" -->
      <li v-for="(item, index) in twits" :key="index">
        <div class="con-img-t">
          <img :class="{ 'not-darken': item.img2 }" :src="item.img" alt="" />
          <img v-if="item.img2" class="has-darken" :src="item.img2" alt="" />
          <img
            v-if="!item.notShadow"
            class="filter"
            :class="{ 'not-darken': item.img2 }"
            :src="item.img"
            alt=""
          />
          <img
            v-if="item.img2"
            class="filter"
            :class="{ 'has-darken': item.img2 }"
            :src="item.img2"
            alt=""
          />
        </div>
        <p v-html="item.name" />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";

const leftx = ref<number>(0);
const notPulse = ref<boolean>(true);
const translatex = ref<number>(0);
const scrolling = ref<boolean>(false);
const drag = ref<boolean>(false);
const activeView = ref<boolean>(false);
const active = ref<number>(0);
const delta = ref<number>(0);
const mousex = ref<number>(0);
const change = ref<number>(0);
const moving = ref<boolean>(false);
const notScrolling = ref<boolean>(false);
const twits = reactive([
      {
        name: "Vuejs",
        link: "https://vuejs.org/",
        img: "/use/vuejs-vuesax-1.png",
      },
      {
        name: "Javascript",
        link: null,
        img: "/use/js-javaScript-vuesax.png",
      },
      {
        name: "Typescript",
        link: "https://www.typescriptlang.org/",
        img: "/use/typescript-vuesax.png",
      },
      {
        name: "Sass",
        link: "https://sass-lang.com/",
        img: "/use/sass-vuesax-4.png",
      },
      {
        name: "Vuepress",
        link: "https://vuepress.vuejs.org/",
        img: "/use/vuepress-vuesax-5.png",
      },
      {
        name: "Babel",
        link: "https://babeljs.io/",
        img: "/use/babel-vuesax-6.png",
      },
      {
        name: "Jest",
        link: "https://jestjs.io/",
        img: "/use/jest-vuesax-8-w.svg",
        img2: "/use/jest-vuesax-8.svg",
        notShadow: true,
      },
      {
        name: "Boxicons",
        link: "https://boxicons.com/",
        img: "/use/boxicons-vuesax-10.png",
        img2: "/use/boxicons-vuesax-9.png",
      },
      {
        name: "Adobe XD",
        link: "https://www.adobe.com/es/products/xd.html",
        img: "/use/adobe-xd-1.svg",
      },
      {
        name: "Webpack",
        link: "https://webpack.js.org/",
        img: "/use/webpack-vuesax-13.png",
        img2: "/use/webpack-vuesax-12.png",
      },
      {
        name: "Illustrator",
        link: "https://www.adobe.com/products/illustrator.html",
        img: "/use/illustrator-vuesax-11.png",
      },
]);

watch(translatex, () => {
  if (translatex.value > 100) {
    notScrolling.value = true;
  } else {
    notScrolling.value = false;
  }
});
onMounted(() => {
  smooth();
  document.addEventListener("keydown", keydownx);
});
const smooth = () => {
  const element = document.querySelector(".con-projects-ul-uses") as HTMLElement;
  if (!element) return;

  const speed = 0.08;
  const raf = ref<number>();
  const offset = ref(0);

  const smoothScroll = () => {
    leftx.value = translatex.value;
    offset.value += (leftx.value - offset.value) * speed;

    const scroll = `translateX(${offset.value}px) translateZ(0)`;
    element.style.transform = scroll;

    raf.value = requestAnimationFrame(smoothScroll);
  };
  smoothScroll();
};
const mouseleaveUl = () => {
  mousex.value = 0;
  notPulse.value = true;
  setTimeout(() => {
    moving.value = false;
  }, 50);
};
const mousemovex = (e: MouseEvent) => {
  if (notPulse.value) {
    return;
  }
  const element = (e.target as HTMLElement).closest(
    ".con-projects-ul-uses"
  ) as HTMLElement | null;
  if (!element) return;

  const parent = element.parentNode! as HTMLElement;

  let move: number;

  if (e.type == "touchmove") {
    move =
      mousex.value -
      ((e as unknown as TouchEvent).targetTouches[0].clientX - 200);
  } else {
    move = mousex.value - (e.clientX - 200);
  }
  if (move > 40 || move < -40) {
    moving.value = true;
  }
  if (move > 50) {
    translatex.value -= -80;
    if (translatex.value > element.clientWidth - parent.clientWidth) {
      translatex.value = element.clientWidth - parent.clientWidth;
    }
    // element.style.transform = `translate(-${translatex.value}px)`
    if (e.type == "touchmove") {
      mousex.value =
        (e as unknown as TouchEvent).targetTouches[0].clientX - 200;
    } else {
      mousex.value = e.clientX - 200;
    }
  } else if (move < -50) {
    translatex.value -= 80;
    if (translatex.value < 0) {
      translatex.value = 0;
    }
    // element.style.transform = `translate(-${translatex.value}px)`
    if (e.type == "touchmove") {
      mousex.value =
        (e as unknown as TouchEvent).targetTouches[0].clientX - 200;
    } else {
      mousex.value = e.clientX - 200;
    }
  }
};
const mouseupx = (e: MouseEvent) => {
  e.preventDefault();
  const element = (e.target as HTMLElement).closest(
    ".con-projects-ul"
  ) as HTMLElement | null;
  if (!element) return;
  const parent = element.parentNode! as HTMLElement;
  // if(e.type=='touchend'){
  //   // translatex.value -= -mousex.value + (e.targetTouches[0].clientX - 200)
  // } else {
  //   // translatex.value -= -mousex.value + (e.clientX - 200)
  // }

  if (translatex.value < 0) {
    translatex.value = 0;
  }

  if (translatex.value > element.clientWidth - parent.clientWidth) {
    translatex.value = element.clientWidth - parent.clientWidth;
  }

  // element.style.transform = `translate(-${translatex.value}px)`
  mousex.value = 0;
  notPulse.value = true;
  setTimeout(() => {
    moving.value = false;
  }, 1);
};
const mousedownx = (e: MouseEvent) => {
  e.preventDefault();
  setTimeout(() => {
    notPulse.value = false;
  }, 20);
  if (e.type == "touchstart") {
    mousex.value = (e as unknown as TouchEvent).targetTouches[0].clientX - 200;
  } else {
    mousex.value = e.clientX - 200;
  }
};
const keydownx = (evt: KeyboardEvent) => {
  const eventKey = evt.key;
  const element = document.querySelector(
    ".con-projects-ul"
  ) as HTMLElement | null;
  const parent = document.querySelector(".con-projects") as HTMLElement | null;
  if (!element || !parent) return;

  if (eventKey == "ArrowRight") {
    translatex.value -= -300;
    if (translatex.value > element.clientWidth - parent.clientWidth) {
      translatex.value = element.clientWidth - parent.clientWidth;
    }
  } else if (eventKey == "ArrowLeft") {
    translatex.value -= 300;
    if (translatex.value < 0) {
      translatex.value = 0;
    }
  }
};
const scrollH = (e: any) => {
  scrolling.value = true;
  e = window.event || e;
  const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  const element = e.target.closest(".con-projects-ul");
  const parent = element.parentNode;
  // console.dir(element)
  if (delta == 1 && translatex.value > 0) {
    translatex.value -= 250;
    if (translatex.value < 0) {
      translatex.value = 0;
    }
  } else if (
    delta == -1 &&
    translatex.value < element.clientWidth - parent.clientWidth
  ) {
    translatex.value += 250;
    if (translatex.value > element.clientWidth - parent.clientWidth) {
      translatex.value = element.clientWidth - parent.clientWidth;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/mixin";

.darken {
  .con-twits {
    ul {
      li {
        .con-img-t {
          background: -color("theme-bg");
        }
        .filter {
          opacity: 0.2;
        }
      }
    }
  }
}
.con-twits {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  margin-top: 150px;
  margin-bottom: 70px;
  header {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 0px;
    h2 {
      font-size: 1.2rem;
      font-weight: normal;
      border: 0px;
      padding: 0px;
      margin: 0px;
      padding: 50px;
      span {
        opacity: 0.6;
      }
    }
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 100px;
    padding-top: 130px;
    li {
      width: auto;
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      border-radius: 40px;
      padding: 0px;
      padding-top: 0px;
      transition: all 0.25s ease;
      margin: 25px;
      p {
        font-weight: bold;
      }
      .con-img-t {
        width: 140px;
        height: 140px;
        position: relative;
        transition: all 0.3s ease;
        box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.05);
        border-radius: 25px;
        box-sizing: border-box;
        background: -color("theme-layout");
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img {
        width: auto;
        z-index: 100;
        position: relative;
        max-height: 70px;
        max-width: 90%;
        &.filter {
          z-index: 50;
          position: absolute;
          opacity: 0.35;
          filter: blur(12px);
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .con-twits {
    margin-top: 50px;
    margin-bottom: 0px;
    ul {
      padding: 50px 20px;
      padding-top: 100px;
    }
    header {
      h2 {
        padding: 10px;
      }
    }
    .con-projects-ul-uses {
      overflow: auto;
      width: 100%;
      li {
        position: relative;
      }
      &::-webkit-scrollbar {
        height: 0px;
      }
    }
  }
}
</style>
