<template>
  <div class="con-components">
    <div class="con-logo vuesax-logo">
      <img class="not-darken" src="/vuesax-only.png" alt="" />
      <img class="has-darken" src="/vuesax-only-b.png" alt="" />
      <div class="github-logo__1" />
      <div class="github-logo__2" />
      <div class="github-logo__3" />
    </div>
    <div class="con-logo install-logo">
      <img src="/install.png" alt="" />

      <div class="github-logo__1" />
      <div class="github-logo__2" />
      <div class="github-logo__3" />
    </div>
    <div class="con-logo github-logo">
      <i class="bx bxl-github" />
      <div class="github-logo__1" />
      <div class="github-logo__2" />
      <div class="github-logo__3" />
    </div>
    <div class="content-components">
      <div class="component1">
        <div class="avatar">
          <img class="not-darken" src="/foto1.png" alt="" />
          <img class="back not-darken" src="/foto1.png" alt="" />
          <img class="has-darken" src="/foto12.png" alt="" />
          <img class="back has-darken" src="/foto12.png" alt="" />
          <span class="badge"> 8 </span>
        </div>

        <div class="con-text">
          <h4>Segoe cute</h4>
          <p>Do you want to participate in our initiative? We are open.</p>

          <footer>
            <vs-button color="danger"> Open </vs-button>
            <vs-button color="dark" type="shadow"> cancel </vs-button>
          </footer>
        </div>
      </div>

      <div class="component2">
        <img class="not-darken" src="/vuesax-only.png" alt="" />
        <img class="has-darken" src="/vuesax-only-b.png" alt="" />
      </div>

      <div class="component3">
        <div
          :class="{ active: switch1 }"
          class="con-switch"
          @click="switch1 = !switch1"
        >
          <span class="circle" />
          <p>
            {{ switch1 ? 'on' : 'off' }}
          </p>
        </div>
        <div
          :class="{ active: switch2 }"
          class="con-switch"
          @click="switch2 = !switch2"
        >
          <span class="circle" />
          <p>
            {{ switch2 ? 'on' : 'off' }}
          </p>
        </div>
      </div>

      <div class="component4">
        <img class="not-darken" src="/foto3.png" alt="" />
        <img class="has-darken" src="/foto10.png" alt="" />
        <h4>
          <span class="not-darken"> Potted cactus </span>
          <span class="has-darken"> Red Shoes </span>
        </h4>

        <vs-button block> Button </vs-button>
      </div>

      <div class="component5">
        <i class="bx bxs-star" />
        <div class="con-img">
          <img src="/vue-logo.png" alt="" />
        </div>
        <h4>Vuejs Components</h4>

        <p>
          Framework components for VueJS. Create instances quickly with a few
          lines of code.
        </p>
      </div>

      <div class="component6">
        <vs-button icon color="dark" type="transparent">
          <i class="bx bx-dots-vertical-rounded" />
        </vs-button>

        <div class="con-load" />
      </div>

      <div class="component7">
        <div class="con-img">
          <i class="bx bx-video" />
          <img class="not-darken" src="/foto4.png" alt="" />
          <img class="has-darken" src="/foto11.png" alt="" />
        </div>

        <header>
          <vs-button icon color="dark" type="shadow">
            <i class="bx bxs-heart" />
          </vs-button>

          <vs-button color="dark" type="shadow">
            <i class="bx bxs-chat" />
            12
          </vs-button>
        </header>

        <div class="content-text">
          <h4>Get Started</h4>
          <p>
            Vuesax is an open source framework and you can help even in simple
            details
          </p>
        </div>

        <footer>
          <vs-input v-model="input1" placeholder="Comment" />
          <div>
            <vs-button icon type="flat">
              <i class="bx bx-send" />
            </vs-button>
          </div>
        </footer>
      </div>

      <div class="component8">
        <div class="con-icon">
          <i class="bx bxs-heart" />
        </div>

        <div class="con-img">
          <img class="not-darken" src="/foto2.jpg" alt="" />
          <img class="has-darken" src="/foto13.png" alt="" />

          <div class="play">
            <i class="bx bxs-right-arrow" />
          </div>
        </div>

        <footer>
          <div>
            <h4>Vuesax Alpha</h4>
            <p>Framework</p>
          </div>

          <div class="con-avatars">
            <img src="/foto9.png" alt="" />
            <img src="/foto8.png" alt="" />
            <img src="/foto7.png" alt="" />
          </div>
        </footer>
      </div>

      <div :class="{ active: focusSelect }" class="component9">
        <header>
          <input
            id="select"
            v-model="selectValue"
            placeholder="Select"
            readonly
            type="text"
            name=""
            @blur="handleBur"
            @click="handleClick"
          />
          <i class="bx bx-chevron-down" />
        </header>

        <ul :class="{ active: focusSelect }">
          <li @click="handleClickOption('Bruno Hoffman')">Bruno Hoffman</li>
          <li @click="handleClickOption('Chad kerley')">Chad kerley</li>
          <li @click="handleClickOption('Summer rose')">Summer rose</li>
        </ul>
      </div>

      <div class="component10">
        <vs-button color="danger" icon>
          <i class="bx bx-play" />
        </vs-button>
        <vs-button color="warn" icon>
          <i class="bx bx-git-pull-request" />
        </vs-button>
        <vs-button icon>
          <i class="bx bxl-github" />
        </vs-button>
      </div>

      <div :class="{ active: focusDrop }" class="component11">
        <header>
          <input
            id=""
            placeholder="Dropdown"
            readonly
            type="text"
            name=""
            @blur="handleBurDrop"
            @click="handleClickDrop"
          />
          <i class="bx bx-chevron-down" />
        </header>

        <div class="liquid" />

        <ul :class="{ active: focusDrop }">
          <li>😉</li>
          <li>😺</li>
          <li>😽</li>
          <li>😎</li>
          <li>😂</li>
        </ul>
      </div>

      <div class="component12">
        <vs-input v-model="input2" placeholder="Search" />
        <vs-button icon>
          <i class="bx bx-search" />
        </vs-button>
      </div>

      <div class="component13">
        <header>
          <vs-input v-model="input3" placeholder="location" />
          <button>
            <i class="bx bx-chevron-right" />
          </button>
        </header>

        <ul>
          <li>
            <vs-checkbox> Spain </vs-checkbox>
          </li>
          <li>
            <vs-checkbox> Germany </vs-checkbox>
          </li>
          <li>
            <vs-checkbox> Italy </vs-checkbox>
          </li>
          <li>
            <vs-checkbox> Japan </vs-checkbox>
          </li>
        </ul>

        <vs-button block> Lets Go! </vs-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const switch1 = ref<boolean>(false)
const switch2 = ref<boolean>(true)
const focusSelect = ref<boolean>(true)
const focusDrop = ref<boolean>(true)
const selectValue = ref<string>('')
const input1 = ref<string>('')
const input2 = ref<string>('')
const input3 = ref<string>('')

const handleClickOption = (val: string) => {
  selectValue.value = val
}
const handleClick = () => {
  focusSelect.value = !focusSelect.value
}
const handleBur = () => {
  setTimeout(() => {
    focusSelect.value = false
  }, 100)
}
const handleClickDrop = () => {
  focusDrop.value = !focusDrop.value
}
const handleBurDrop = () => {
  setTimeout(() => {
    focusDrop.value = false
  }, 100)
}
</script>
<style lang="scss">
@import '../styles/use';

@keyframes waveslogo {
  0% {
    width: 100px;
    height: 100px;
  }
  100% {
    height: 500px;
    width: 500px;
    opacity: 0;
  }
}

@keyframes componentAnimate {
  0% {
    transform: translate(0px);
  }
  30% {
    transform: translate(0, -10px);
  }
  50% {
    transform: translate(0, 4px);
  }
  70% {
    transform: translate(0, -15px);
  }
  100% {
    transform: translate(0px);
  }
}
.has-darken {
  display: none;
}
.dark {
  .component13 {
    header {
      input {
        background: -color('theme-bg') !important;
      }
      button {
        border: 2px solid rgba(255, 255, 255, 0.1) !important;
        color: #fff !important;
        opacity: 1 !important;
      }
    }
  }
  .not-darken {
    display: none;
  }
  .has-darken {
    display: block;
  }
  .circle {
    background: -color('theme-bg2') !important;
  }
  .bxs-star {
    fill: #fff !important;
    opacity: 1 !important;
  }
  .component7 {
    footer {
      button {
        background: -color('primary');
        color: #fff !important;
      }
      input {
        width: 100%;
        padding: 12px 14px;
        border: 0;
        background: -color(theme-bg);
        border-radius: 10px;
        font-size: 0.7rem;
        transition: all 0.25s ease;
      }
    }
  }
  *::placeholder {
    color: -color('theme-color');
  }
}
.darken .con-logo .github-logo__1,
.darken .con-logo .github-logo__2,
.darken .con-logo .github-logo__3 {
  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.25);
}
.con-logo {
  position: absolute;
  transform: scale(0.3);
  opacity: 0;
  font-size: 9rem;
  z-index: 20;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.04);
  transition: all 0.25s ease;
  &.vuesax-logo {
    border-radius: 50px;
    img {
      width: 50%;
      z-index: 100;
    }
  }
  &.install-logo {
    width: 180px;
    height: 180px;
    border-radius: 40px 40px 5px 40px;
    img {
      width: 50%;
      z-index: 100;
    }
  }
  i {
    z-index: 30;
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: -color('theme-layout');
    z-index: 20;
  }
  .github-logo__1 {
    width: 0px;
    background: transparent;
    height: 0px;
    position: absolute;
    animation: waveslogo 0.7s ease infinite;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: inherit;
    z-index: 10;
  }
  .github-logo__2 {
    z-index: 10;
    width: 0px;
    background: transparent;
    height: 0px;
    position: absolute;
    animation: waveslogo 1.4s linear infinite;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: inherit;
  }
  .github-logo__3 {
    z-index: 10;
    width: 0px;
    background: transparent;
    height: 0px;
    position: absolute;
    animation: waveslogo 1.75s ease infinite;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
    border-radius: inherit;
  }
}
.con-components {
  // background -color('theme-bg')
  // background-color: #FFFFFF;
  // background-image: linear-gradient(180deg, -color('theme-layout') 0%, -color('theme-bg2') 30%, -color('theme-bg2') 80%, -color('theme-layout') 100%);
  width: 60%;
  position: absolute;
  right: 0px;
  height: 80vh;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.8);
  z-index: 100;
  // overflow: hidden;
  .content-components {
    position: relative;
    width: 1100px;
    height: 100%;
    margin-top: 250px;
    .component13 {
      width: 300px;
      padding: 15px;
      background: -color('theme-layout');
      border-radius: 20px;
      top: 180px;
      left: 0px;
      position: absolute;
      box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.04);
      transition: all 0.25s ease;
      animation: componentAnimate 18s infinite ease;
      &:hover {
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
        transform: translate(0, 5px);
      }
      .vs-input {
        width: calc(100% - 50px);
        input {
          width: 100% !important;
        }
      }
      ul {
        margin: 0px;
        padding: 10px 0px;
        list-style: none;
        li {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 3px 3px;
          cursor: pointer;
          transition: all 0.25s ease;
          &:hover {
            label {
              opacity: 0.6;
            }
          }
          label {
            transition: all 0.25s ease;
          }
          .check {
            width: 22px;
            height: 22px;
            display: block;
            background: -color('theme-bg2');
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.25s ease;
            margin-right: 10px;
            i {
              transition: all 0.3s ease;
              font-size: 1.1rem;
              transform: scale(0.5);
              opacity: 0;
            }
          }
          input {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
            z-index: 100;
            cursor: pointer;
            &:checked {
              & ~ .check {
                background: -color('primary');
                i {
                  opacity: 1;
                  color: #fff;
                  transform: scale(1);
                }
              }
            }
          }
        }
      }
      header {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        button {
          border: 2px solid rgba(0, 0, 0, 0.15);
          width: 38px;
          height: 38px;
          opacity: 0.5;
          background: transparent;
          padding: 0px;
          margin-left: 10px;
          display: flex;
          align-items: center;
          transition: all 0.25s ease;
          justify-content: center;
          &:hover {
            background: -color('primary');
            border: 2px solid -color('primary');
            color: #fff;
            opacity: 1;
          }
          i {
            font-size: 1.5rem;
          }
        }
        input {
          padding: 9px 20px;
          border: 0px;
          background: -color('theme-bg2');
          width: calc(100% - 50px);
          border-radius: 14px;
          transition: all 0.25s ease;
          &:focus {
            padding-left: 25px;
          }
        }
      }
      button {
        margin: 0px;
        padding: 2px 0px;
        border-radius: 16px;
      }
    }
    .component12 {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 540px;
      left: 0px;
      transition: all 0.25s ease;
      animation: componentAnimate 20s infinite ease alternate;
      input {
        background: -color('theme-bg2');
        padding: 10px 15px;
        box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.04);
        width: 275px;
        &:focus {
          padding-left: 20px;
          & ~ button {
            transform: translate(-5px, -9px);
            box-shadow: 0px 10px 20px -10px -color('primary', 0.8);
          }
        }
      }
      button {
        position: absolute;
        right: 0px;
        top: -3px;
        border-radius: 17px;
        width: 40px;
        height: 40px;
        margin: 0px;
        box-shadow: 0px 0px 0px 0px -color('primary', 0.8);
        i {
          font-size: 1rem;
        }
      }
    }
    .component11 {
      position: absolute;
      top: 640px;
      left: 100px;
      transition: all 0.25s ease;
      border-radius: 15px;
      user-select: none;
      animation: componentAnimate 16s infinite ease reverse;
      .liquid {
        width: 20px;
        background: -color('theme-layout');
        height: 15px;
        right: 30px;
        position: absolute;
        bottom: 0px;
        transform: translate(0, 80%) scaleX(0.4);
        z-index: 200;
        opacity: 0;
        transition: all 0.25s ease;
        &:after {
          content: '';
          position: absolute;
          top: -5px;
          left: -20px;
          width: 20px;
          height: 15px;
          background: transparent;
          border-radius: 0px 50% 50% 0px;
          border-right: 5px solid -color('theme-layout');
          border-bottom: 5px solid -color('theme-layout');
          border-top: 5px solid -color('theme-layout');
        }
        &:before {
          content: '';
          position: absolute;
          top: -5px;
          right: -20px;
          width: 20px;
          height: 15px;
          background: transparent;
          border-radius: 0px 50% 50% 0px;
          border-right: 5px solid -color('theme-layout');
          border-bottom: 5px solid -color('theme-layout');
          border-top: 5px solid -color('theme-layout');
          transform: rotate(180deg);
        }
      }
      &.active {
        .liquid {
          opacity: 1;
          transform: translate(0, 100%);
        }
        input {
          border-radius: 15px;
          user-select: none;
        }
        i {
          transform: rotate(-180deg);
        }
      }
      ul {
        width: 100%;
        position: absolute;
        top: 0px;
        background: -color('theme-layout');
        list-style: none;
        border-radius: 15px;
        padding-bottom: 5px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.25s ease;
        z-index: 100;
        transform: translate(0, 10px);
        padding-top: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 0px;
        box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.04);
        &.active {
          opacity: 1;
          visibility: visible;
          transform: translate(0, 40px);
        }
        li {
          padding: 7px 4px;
          font-size: 0.8rem;
          transition: all 0.25s ease;
          cursor: pointer;
          &:hover {
            transform: scale(1.3);
          }
        }
      }
      header {
        z-index: 200;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        input {
          background: -color('theme-layout');
          padding: 12px 15px;
          width: 100%;
          border: 0px;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.05);
          font-size: 0.8rem;
          box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.04);
          max-width: 170px;
          &::selection {
            background: transparent;
          }
        }
        i {
          position: absolute;
          right: 12px;
          pointer-events: none;
          font-size: 1.4rem;
          transition: all 0.25s ease;
        }
      }
    }
    .component10 {
      top: 600px;
      position: absolute;
      left: 360px;
      background: -color('theme-layout');
      border-radius: 18px;
      box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.04);
      transition: all 0.25s ease;
      animation: componentAnimate 14s infinite ease;
      &:hover {
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
        transform: translate(0, 5px);
      }
      button {
        margin: 15px;
        &:first-child {
          i {
            transform: translate(1px);
          }
        }
      }
    }
    .component9 {
      position: absolute;
      top: 580px;
      left: 490px;
      box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.04);
      transition: all 0.25s ease;
      border-radius: 15px;
      user-select: none;
      animation: componentAnimate 19s infinite ease-out alternate;
      min-width: 200px;
      &:hover {
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
        transform: translate(0, 5px);
      }
      &.active {
        input {
          border-radius: 15px 15px 0px 0px;
          box-shadow: 0px 10px 25px -10px rgba(0, 0, 0, 0.08);
          user-select: none;
        }
        i {
          transform: rotate(-180deg);
        }
      }
      ul {
        width: 100%;
        position: absolute;
        top: 0px;
        background: -color('theme-layout');
        list-style: none;
        border-radius: 0px 0px 15px 15px;
        padding-bottom: 5px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.25s ease;
        z-index: 100;
        transform: translate(0, 10px);
        padding-top: 7px;
        &.active {
          opacity: 1;
          visibility: visible;
          transform: translate(0, 28px);
        }
        li {
          padding: 7px;
          font-size: 0.8rem;
          transition: all 0.25s ease;
          cursor: pointer;
          &:hover {
            padding-left: 12px;
            color: -color('primary');
          }
        }
      }
      header {
        z-index: 200;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        input {
          background: -color('theme-layout');
          padding: 14px 15px;
          width: 100%;
          border: 0px;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.05);
          font-size: 0.8rem;
          color: -color('theme-color');
          &::selection {
            background: transparent;
          }
        }
        i {
          position: absolute;
          right: 12px;
          pointer-events: none;
          font-size: 1.4rem;
          transition: all 0.25s ease;
        }
      }
    }
    .component8 {
      width: 260px;
      background: -color('theme-layout');
      border-radius: 30px;
      padding: 15px;
      position: absolute;
      left: 365px;
      top: 180px;
      z-index: 100;
      box-shadow: 0px 15px 30px -8px rgba(0, 0, 0, 0.08);
      transition: all 0.25s ease;
      animation: componentAnimate 22s infinite ease reverse;
      &:hover {
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
        transform: translate(0, 7px);
      }
      footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0px;
        h4 {
          margin: 0px;
        }
        p {
          font-size: 0.8rem;
          margin: 0px;
        }
        .con-avatars {
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            border: 2px solid -color('theme-layout');
            width: 45px;
            border-radius: 50%;
            margin-left: -23px;
            transition: all 0.25s ease;
            z-index: 5;
            &:hover {
              box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.1);
              transform: scale(1.1);
            }
            & ~ img {
              z-index: 10;
            }
          }
        }
      }
      .con-icon {
        position: absolute;
        top: -20px;
        left: -20px;
        width: 60px;
        height: 60px;
        border-radius: 22px;
        background: -color('theme-layout');
        box-shadow: 10px 12px 50px -6px rgba(0, 0, 0, 0.3);
        z-index: 300;
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          color: -color('danger');
          font-size: 1.4rem;
          text-shadow: 0px 4px 15px -color('danger', 0.4);
        }
      }
      .con-img {
        width: 230px;
        height: 250px;
        position: relative;
        overflow: hidden;
        border-radius: 30px 30px 30px 8px;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
          .play {
            width: 80px;
            height: 80px;
            border-radius: 25px;
          }
        }
        .play {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.3);
          position: absolute;
          border-radius: 50%;
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          i {
            font-size: 1.5rem;
            color: #fff;
            transition: all 0.25s ease;
            transform: rotate(0deg) translate(0px);
          }
        }
        img {
          height: 100%;
        }
      }
    }
    .component7 {
      width: 260px;
      background: -color('theme-layout');
      border-radius: 30px;
      padding: 15px;
      position: absolute;
      left: 760px;
      top: 410px;
      z-index: 100;
      box-shadow: 0px 15px 30px -8px rgba(0, 0, 0, 0.08);
      transition: all 0.25s ease;
      animation: componentAnimate 15s infinite ease;
      &:hover {
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
        transform: translate(0, 7px);
      }
      footer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
        button {
          width: 41px;
          height: 41px;
          margin-left: 10px;
        }
        .vs-input-parent {
          width: calc(100% - 60px);
        }
        input {
          width: 100% !important;
          padding: 12px 14px;
          border: 0px;
          background: -color('theme-bg');
          border-radius: 10px;
          font-size: 0.7rem;
          transition: all 0.25s ease;
          &:focus {
            background: -color('theme-bg2');
          }
        }
      }
      .content-text {
        h4 {
          margin: 0px;
          margin-top: 15px;
        }
        p {
          margin: 5px 0px;
          font-size: 0.7rem;
          opacity: 0.6;
        }
      }
      header {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 10px;
        margin-top: -20px;
        z-index: 200;
        position: relative;

        button {
          padding: 5px 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 40px;
          border-radius: 16px;
          border: 0px;
          margin: 0px 5px;
          background: -color('theme-layout');
          color: -color('theme-color');
          box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.08);
          font-weight: bold;
          font-size: 0.75rem;
          transition: all 0.25s ease;
          &:hover {
            background: -color('danger');
            i {
              color: #fff;
            }
          }
          i {
            font-size: 1.1rem;
            color: -color('danger');
            text-shadow: 0px 4px 15px -color('danger', 0.4);
          }
          &:last-child {
            &:hover {
              background: -color('primary');
              color: #fff;
              i {
                color: #fff;
              }
            }
            i {
              color: -color('primary');
              text-shadow: 0px 4px 15px -color('primary', 0.4);
              margin-right: 5px;
            }
          }
        }
      }
      .con-img {
        width: 230px;
        height: 200px;
        position: relative;
        overflow: hidden;
        border-radius: 30px 30px 30px 8px;
        z-index: 100;
        i {
          position: absolute;
          top: 20px;
          left: 20px;
          color: #fff;
          font-size: 1.2rem;
        }
        img {
          width: 100%;
        }
      }
    }
    .component6 {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      width: 160px;
      height: 160px;
      background: -color('theme-layout');
      padding: 20px;
      border-radius: 30px;
      left: 920px;
      top: 350px;
      user-select: none;
      box-shadow: 0px 15px 30px -8px rgba(0, 0, 0, 0.08);
      transition: all 0.25s ease;
      z-index: 200;
      animation: componentAnimate 18s infinite ease alternate;
      &:hover {
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
        transform: translate(0, 7px);
      }
      .con-load {
        width: 85px;
        height: 85px;
        border-radius: 50%;
        border: 8px solid -color('primary', 1);
        box-shadow: 0px 0px 20px 0px -color('primary', 0.1),
          inset 0px 0px 20px 0px -color('primary', 0.1);
        border-left: 8px solid -color('primary', 0.1);
        transform: rotate(45deg);
        animation: rotate-load infinite 8s ease;
      }
      button {
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 0px;
        i {
          font-size: 1.1rem;
          color: -color('theme-color') !important;
        }
      }
    }
    .component5 {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      width: 220px;
      background: -color('theme-layout');
      padding: 20px;
      border-radius: 30px;
      left: 860px;
      top: 85px;
      user-select: none;
      box-shadow: 0px 15px 30px -8px rgba(0, 0, 0, 0.08);
      transition: all 0.25s ease;
      animation: componentAnimate 13s infinite ease reverse;
      &:hover {
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
        transform: translate(0, 7px);
        .con-img {
          transform: scale(1.2) translate(0px, -10px);
        }
      }
      i {
        position: absolute;
        top: 15px;
        right: 15px;
        fill: -color('theme-color');
        opacity: 0.2;
      }
      p {
        font-size: 0.7rem;
        opacity: 0.6;
        text-align: center;
        margin: 0px;
      }
      h4 {
        margin: 0px;
        margin-top: 8px;
        margin-bottom: 6px;
        font-size: 0.8rem;
        margin: 10px 0px;
      }
      .con-img {
        width: 90px;
        height: 90px;
        border-radius: 25px;
        overflow: hidden;
        background: rgba(65, 184, 131, 0.08);
        transition: all 0.25s ease;
      }
      img {
        padding: 20px;
        width: 100%;
      }
    }
    .component4 {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      width: 140px;
      background: -color('theme-layout');
      padding: 10px;
      border-radius: 30px;
      user-select: none;
      box-shadow: 0px 15px 30px -8px rgba(0, 0, 0, 0.08);
      transition: all 0.25s ease;
      animation: componentAnimate 16s infinite ease;
      left: 668px;
      top: 120px;
      &:hover {
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
        transform: translate(0, 7px);
        img {
          transform: scale(1.2) translate(0px, -10px);
        }
      }
      h4 {
        margin: 0px;
        margin-top: 8px;
        margin-bottom: 6px;
        font-size: 0.8rem;
      }
      img {
        width: 120px;
        height: 120px;
        border-radius: 30px;
        transition: all 0.25s ease;
      }
      button {
        border-radius: 20px;
      }
    }
    .component3 {
      position: absolute;
      left: 650px;
      top: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.25s ease;
      animation: componentAnimate 21s infinite ease alternate;
      .con-switch {
        width: 65px;
        height: 35px;
        background: -color('theme-layout');
        box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.04);
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        margin: 10px 12px;
        cursor: pointer;
        transition: all 0.25s ease;
        &:active {
          &.active {
            .circle {
              transform: translate(25px) !important;
            }
          }
          .circle {
            width: 35px !important;
            border-radius: 20px;
          }
        }
        &:hover {
          transform: translate(0, -5px);
          box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.08);
        }
        &.active {
          background: -color('primary');
          .circle {
            transform: translate(30px);
            background: -color('theme-layout') !important;
            box-shadow: -3px 3px 20px 0px rgba(255, 255, 255, 0.35);
          }
          p {
            color: #fff;
            opacity: 1;
            transform: translate(-30px);
          }
        }
        .circle {
          width: 25px;
          height: 25px;
          background: -color('theme-layout');
          box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.08);
          border-radius: 50%;
          position: relative;
          display: block;
          transition: all 0.25s ease;
          z-index: 10;
        }
        p {
          z-index: 5;
          transition: all 0.25s ease;
          font-size: 0.7rem;
          font-weight: bold;
          margin: 0px;
          width: calc(100% - 35px);
          text-align: center;
          margin: 0px 5px;
          opacity: 0.5;
          user-select: none;
        }
      }
    }
    .component2 {
      width: 140px;
      height: 140px;
      position: absolute;
      left: 460px;
      top: 0px;
      box-shadow: 0px 15px 30px -8px rgba(0, 0, 0, 0.08);
      border-radius: 30%;
      background: -color('theme-layout');
      padding: 35px;
      transition: all 0.25s ease;
      animation: componentAnimate 19s infinite ease reverse;
      &:hover {
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
        transform: translate(0, 7px);
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .component1 {
      border-radius: 35px;
      width: 400px;
      box-shadow: 0px 15px 30px -8px rgba(0, 0, 0, 0.08);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 10px;
      background: -color('theme-layout');
      transition: all 0.25s ease;
      animation: componentAnimate 15s infinite ease;
      position: absolute;
      top: 0px;
      left: 0px;
      .con-text {
        padding: 0px 20px;
        position: relative;
        background: transparent;
        width: calc(100% - 100px);
        padding-left: 23px;
        footer {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
          position: absolute;
          bottom: -30px;
          button {
            min-width: 100px;
          }
          .vs-button--shadow {
            background: -color('theme-layout') !important;
            color: -color('theme-color') !important;
          }
        }
        p {
          font-size: 0.8rem;
          padding-bottom: 20px;
          margin: 0px;
          opacity: 0.6;
        }
        h4 {
          margin: 0px;
          padding: 0px;
          padding-bottom: 5px;
        }
      }
      .avatar {
        border-radius: 30%;
        position: relative;
        width: 100px;
        height: 100px;
        z-index: 200;
        img {
          border-radius: inherit;
          z-index: 100;
          position: relative;
          width: 100%;
          &.back {
            opacity: 0.25;
            position: absolute;
            bottom: -20px;
            left: 0px;
            filter: blur(15px);
            z-index: 10;
          }
        }
        .badge {
          position: absolute;
          bottom: 4px;
          right: -6px;
          background: -color('danger');
          box-shadow: 0px 4px 10px 0px -color('danger', 0.6);
          width: 20px;
          height: 20px;
          color: #fff;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.6rem;
          border-radius: 50%;
          z-index: 120;
          user-select: none;
        }
      }
    }
  }
}

@media (min-width: 1150px) {
  .con-components {
    width: 60%;
    position: absolute;
    right: 0px;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.8);
    z-index: 100;
  }

  .con-components {
    // background -color('theme-bg')
    // background-color: #FFFFFF;
    // background-image: linear-gradient(180deg, -color('theme-layout') 0%, -color('theme-bg2') 30%, -color('theme-bg2') 80%, -color('theme-layout') 100%);
    // overflow hidden
    &.btn-hover {
      &.vuesax-hover {
        .vuesax-logo {
          transform: scale(1);
          opacity: 1;
        }
      }
      &.install-hover {
        .install-logo {
          transform: scale(1);
          opacity: 1;
        }
      }
      &.github-hover {
        .github-logo {
          transform: scale(1);
          opacity: 1;
        }
      }
      .component13 {
        top: 160px !important;
        left: -150px !important;
        z-index: 20;
        // transform translate(-150px, -20px) !important
        // animation: none !important
      }
      .component12 {
        top: 560px !important;
        left: -90px !important;

        // transform translate(-90px, 20px) !important
      }
      .component11 {
        top: 710px !important;
        left: 10px !important;
        // transform translate(-90px, 70px) !important
      }
      .component10 {
        top: 650px !important;
        left: 320px !important;
        // transform translate(-40px, 50px) !important
      }
      .component9 {
        top: 660px !important;
        left: 490px !important;

        // transform translate(0px, 80px) !important
      }
      .component8 {
        top: 20px !important;
        left: 120px !important;
        // transform translate(-270px, -160px) !important
        z-index: 10;
      }
      .component7 {
        top: 450px !important;
        left: 810px !important;
        // transform translate(50px, 40px) !important
      }
      .component6 {
        top: 330px !important;
        left: 960px !important;
        // transform translate(40px, -20px) !important
      }
      .component5 {
        top: 15px !important;
        left: 920px !important;
        // transform translate(60px, -70px) !important
      }
      .component4 {
        top: 60px !important;
        left: 748px !important;
        // transform translate(80px, -60px) !important
      }
      .component3 {
        top: -75px !important;
        left: 680px !important;
        // transform translate(30px, -100px) !important
      }
      .component2 {
        top: -70px !important;
        left: 430px !important;
        // transform translate(-30px, -70px) !important
      }
      n .component1 {
        top: -100px !important;
        left: -100px !important;
        transform: translate(-100px, -100px) !important;
      }
    }
  }
}

@media (max-width: 1150px) {
  .content-components {
    transform: scale(0.7);
  }
}
@media (max-width: 960px) {
  .con-components {
    top: 280px;
    width: 100%;
    .content-components {
      transform: scale(0.7);
      left: -7%;
      right: auto;
      bottom: 0px;
      width: 100% !important;
      margin-top: 0;
    }
  }
}
@media (max-width: 960px) {
  .con-components {
    .content-components {
      left: -12%;
    }
  }
}
@media (max-width: 760px) {
  .con-components {
    display: none;
    .content-components {
      left: -18%;
    }
  }
}
@media (max-width: 470px) {
  .con-components {
    .content-components {
      margin-top: 280px;
      transform: scale(0.6);
      left: -25%;
    }
  }
}
</style>
