<template>
  <div class="pass">
    <header>
      <h1>Vuesax Components Pass</h1>
      <p>
        Exclusive and unique components, every week new and great components
        will be created that you can only obtain by having the
        <b>Vuesax Pass</b> <br />
        You will also have many privileges and improvements such as exclusive
        images discounts in the store and a distinctive on our discord channel
        apart from many more
      </p>
    </header>

    <div class="title-pass">
      <h2>Season 1</h2>

      <footer>
        <button>
          <span>
            <i class="bx bxs-lock"></i>
          </span>
          Unlock Vuesax Pass
        </button>

        <div class="reloj">
          <i class="bx bx-stopwatch"></i>
          <span>
            Season end in
            <b> 31/01/2020 </b>
          </span>
        </div>
      </footer>
    </div>

    <div class="content-pass vuesax-pass-components">
      <div class="has-pass row">
        <h2>Vuesax Pass</h2>
      </div>
      <div class="no-pass row">
        <h2>Free</h2>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
import Footer from "./Footer.vue";
</script>

<style lang="scss">
@import "../styles/use";

.pass {
  padding-top: 60px;
  & ~ .config {
    left: 0px;
  }
  .title-pass {
    text-align: center;
    padding: 40px !important;
    background: -color('theme-bg2');
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 350px;
      width: 100%;
      button {
        padding: 10px 20px;
        border: 0px;
        background: -color('theme-color');
        color: -color('theme-layout');
        border-radius: 15px;
        padding-left: 0px;
        transition: all 0.25s ease;
        &:hover {
          box-shadow: 0px 5px 15px -5px -color('theme-color');
          transform: translate(0, -4px);
        }
        span {
          background: rgba(0, 0, 0, 0.2);
          padding: 10px;
          border-radius: 15px 0px 0px 15px;
          margin-right: 10px;
          padding-left: 12px;
        }
      }
      .reloj {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        span {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          text-align: left;
        }
        i {
          font-size: 1.5rem;
          margin-right: 10px;
        }
      }
    }
    h2 {
      border: 0px;
      margin-top: 0px;
    }
  }
  header {
    background: -color('theme-bg');
    padding: 40px 100px;
    h1 {
      font-size: 1.7rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
  .content-pass {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px 20px;
    max-width: 1200px;
    margin: auto;
    min-height: 100vh;
    position: relative;
    .row {
      width: calc(50% - 20px);
      h2 {
        text-align: center;
        border-bottom: 2px solid -color('theme-bg2');
        font-size: 1.2rem;
        font-weight: 600;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        .badge {
          width: 22px;
          height: 22px;
          border-radius: 8px;
          background: -color('theme-color');
          color: -color('theme-layout');
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 5px;
          transform: translate(0, -8px);
        }
      }
    }
  }
}
</style>
