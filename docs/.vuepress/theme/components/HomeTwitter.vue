<template>
  <div ref="$twits" class="con-twits">
    <header>
      <h2>
        <span>Some Words validating</span> <b>Vuesax</b>
        <span>are oxygen for us Thanks!</span>
      </h2>
    </header>

    <ul
      ref="$ul"
      class="con-projects-ul"
      @mousedown="mousedownx"
      @mousemove="mousemovex"
      @mouseleave="mouseleaveUl"
      @mouseup="mouseupx"
    >
      <li v-for="(item, index) in twits" :key="index">
        <div class="con-img-t">
          <img :src="item.img" alt="" />
          <img class="filter" :src="item.img" alt="" />
        </div>
        <h5>
          <a target="_blank" :href="item.link">
            {{ item.user }}
          </a>
        </h5>
        <p v-html="item.text" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'

const speed = 0.08
const notPulse = ref<boolean>(true)
const translatex = ref<number>(0)
const mousex = ref<number>(0)
const moving = ref<boolean>(false)
const notScrolling = ref<boolean>(false)
const offset = ref<number>(0)
const requestAnimationId = ref<number>()

const $ul = ref<HTMLElement>()!
const $twits = ref<HTMLElement>()!

const twits = reactive([
  {
    name: 'Sébastien Chopin',
    user: 'Author of @nuxt_js',
    link: 'https://twitter.com/Atinux',
    text: 'I have to say, Vuesax 4 is 😍',
    img: 'https://pbs.twimg.com/profile_images/1042510623962275840/1Iw_Mvud_400x400.jpg',
  },
  {
    name: 'Paurakh Sharma',
    user: '@PaurakhSharma',
    link: 'https://twitter.com/PaurakhSharma',
    text: 'Awesome news 🎉 Best looking Vue component library 🔥',
    img: 'https://pbs.twimg.com/profile_images/1583893184333201411/3XHND--7_400x400.jpg',
  },
  {
    name: 'illy',
    user: '@__illy___',
    link: 'https://twitter.com/__illy___',
    text: 'Create a serverless mobile web application with Vue (ts), <b>Vuesax</b> and Firebase',
    img: 'https://pbs.twimg.com/profile_images/1450809763206287368/w5jauMCH_400x400.jpg',
  },
  {
    name: 'lvzy',
    user: '@lvzy12',
    link: 'https://twitter.com/lvzy12',
    text: 'Vuesax 4.0 UI components are very beautiful, look forward to your continuous updates 😻😻😻',
    img: 'https://pbs.twimg.com/profile_images/1230510660443725824/veABaJie_400x400.jpg',
  },
  {
    name: 'Gusto',
    user: '@gustojs',
    link: 'https://twitter.com/gustojs',
    text: `<b>@vuesax</b> is one of more unique UI libraries for <b>@vuejs</b>. Its author <b>@luisdfly</b> would want to focus on the upcoming 4.x release, but with a responsibility to maintain 3.x version, it's not easy. You can help him a lot by taking over some of those tasks.`,
    img: 'https://pbs.twimg.com/profile_images/1264846973372432384/9hlJm_eq_400x400.jpg',
  },
  {
    name: 'Luis Pedraz',
    user: '@PedrazL',
    link: 'https://twitter.com/PedrazL',
    text: `Love the work you do, this looks great. Is this going to be part of <b>@vuesax</b> 4.0 or it's just a stand-alone component`,
    img: 'https://pbs.twimg.com/profile_images/1539484981843599360/82oifda4_400x400.jpg',
  },
  {
    name: 'Sergio Márquez',
    user: '@Undervane',
    link: 'https://twitter.com/Undervane',
    text: `I personally like <b>@vuesax</b> , although it's not mature yet, but nothing that could not be resolved by contributing to make it better!`,
    img: 'https://pbs.twimg.com/profile_images/1599144825978343426/mqHxkpOM_400x400.jpg',
  },
  {
    name: 'Stattick',
    user: '@Stattick_',
    link: 'https://twitter.com/Stattick_',
    text: `I recently discovered <b>#vuesax</b>, my favorite component library for <b>#VueJS</b> and that is not complete yet.`,
    img: 'https://pbs.twimg.com/profile_images/1305254964617531394/wOK2RFWg_400x400.jpg',
  },
  {
    name: '新井 モノ',
    user: '@araimonokaiy',
    link: 'https://twitter.com/araimonokaiy',
    text: 'Create modern and modern sites with <b>Vuesax</b>!',
    img: 'https://pbs.twimg.com/profile_images/1167749700667133954/qcnRP65y_400x400.jpg',
  },
  // {
  //   name: "Woterix",
  //   user: "@woterix",
  //   link: "https://twitter.com/woterix",
  //   text: "<b>Vuesax</b> is a library of Vuejs components that facilitates front-end development and streamlines work with great visual quality",
  //   img: "https://pbs.twimg.com/profile_images/980674833800286208/SNzLa2L8_400x400.jpg",
  // },
  {
    name: 'Laravel VueJs',
    user: '@LaravelVueJs',
    link: 'https://twitter.com/LaravelVueJs',
    text: '<b>@vuesax</b>: A new awesome component library based on Vue js 2.0',
    img: 'https://pbs.twimg.com/profile_images/1132817919405113345/2nQsnCip_400x400.png',
  },
])

watch(translatex, (transform: number) => {
  if (transform > 100) {
    notScrolling.value = true
  } else {
    notScrolling.value = false
  }
})

onMounted(() => {
  smooth()
  document.addEventListener('keydown', keydownx)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(requestAnimationId.value!)
})

const smooth = () => {
  const smoothScroll = () => {
    offset.value += (translatex.value - offset.value) * speed

    const scroll = `translateX(-${offset.value}px) translateZ(0)`
    $ul.value!.style.transform = scroll

    requestAnimationId.value = requestAnimationFrame(smoothScroll)
  }
  smoothScroll()
}

const mouseleaveUl = () => {
  mousex.value = 0
  notPulse.value = true
  setTimeout(() => {
    moving.value = false
  }, 50)
}

const mousemovex = (e: MouseEvent) => {
  if (notPulse.value) {
    return
  }
  const element = $ul.value!
  const parent = $twits.value!

  let move: number

  if (e.type == 'touchmove') {
    move =
      mousex.value -
      ((e as unknown as TouchEvent).targetTouches[0].clientX - 200)
  } else {
    move = mousex.value - (e.clientX - 200)
  }
  if (move > 40 || move < -40) {
    moving.value = true
  }
  if (move > 50) {
    translatex.value += 80
    if (translatex.value > element.clientWidth - parent.clientWidth) {
      translatex.value = element.clientWidth - parent.clientWidth
    }
    if (e.type == 'touchmove') {
      mousex.value = (e as unknown as TouchEvent).targetTouches[0].clientX - 200
    } else {
      mousex.value = e.clientX - 200
    }
  } else if (move < -50) {
    translatex.value -= 80
    if (translatex.value < 0) {
      translatex.value = 0
    }
    if (e.type == 'touchmove') {
      mousex.value = (e as unknown as TouchEvent).targetTouches[0].clientX - 200
    } else {
      mousex.value = e.clientX - 200
    }
  }
}
const mouseupx = (e: MouseEvent) => {
  e.preventDefault()
  const element = $ul.value!
  const parent = $twits.value!

  if (translatex.value < 0) {
    translatex.value = 0
  }
  if (translatex.value > element.clientWidth - parent.clientWidth) {
    translatex.value = element.clientWidth - parent.clientWidth
  }
  mousex.value = 0
  notPulse.value = true
  setTimeout(() => {
    moving.value = false
  }, 1)
}

const mousedownx = (e: MouseEvent) => {
  e.preventDefault()
  setTimeout(() => {
    notPulse.value = false
  }, 20)
  if (e.type == 'touchstart') {
    mousex.value = (e as unknown as TouchEvent).targetTouches[0].clientX - 200
  } else {
    mousex.value = e.clientX - 200
  }
}

const keydownx = (evt: KeyboardEvent) => {
  const eventKey = evt.key
  const element = $ul.value!
  const parent = $twits.value!

  if (eventKey == 'ArrowRight') {
    translatex.value -= -300
    if (translatex.value > element.clientWidth - parent.clientWidth) {
      translatex.value = element.clientWidth - parent.clientWidth
    }
  } else if (eventKey == 'ArrowLeft') {
    translatex.value -= 300
    if (translatex.value < 0) {
      translatex.value = 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/use';

.darken {
  .con-twits {
    ul {
      li {
        background: -color('theme-bg');
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
      width: 320px;
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.05);
      border-radius: 40px;
      padding: 20px;
      border-radius: 40px;
      margin: 20px;
      transition: all 0.25s ease;
      &:hover {
        background: -color('primary');
        box-shadow: 0px 10px 30px -5px -color('primary', 0.4);
        transform: translate(0, -10px);
        color: #fff;
        h5 {
          a {
            color: #fff !important;
          }
        }
        .con-img-t {
          transform: translate(0, -5px);
        }
        p {
          opacity: 1;
        }
      }
      h5 {
        margin: 0px;
        margin-top: 12px;
        a {
          font-weight: bold;
        }
      }
      p {
        opacity: 0.7;
        font-size: 0.8rem;
        text-align: center;
      }
      .con-img-t {
        width: 90px;
        position: relative;
        transition: all 0.3s ease;
      }
      img {
        width: 100%;
        border-radius: 35%;
        margin-top: -40px;
        z-index: 100;
        position: relative;
        &.filter {
          z-index: 50;
          position: absolute;
          left: 0px;
          top: 10px;
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
    .con-projects-ul {
      overflow: auto;
      width: 100%;
      li {
        position: relative;
        min-width: 320px;
      }
      &::-webkit-scrollbar {
        height: 0px;
      }
    }
  }
}
</style>
