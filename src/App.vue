<template>
  <div id="app">
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>


    <app-footer></app-footer>
  </div>
</template>

<script>

  import Footer from "./components/shared/Footer"
  import Header from "./components/shared/Header"

  export default {
    name: 'app',
    components: {
      appHeader: Header,
      appFooter: Footer,

    },
    data() {

    }
  }

</script>

<style>
  body {
    background-color: #fffdf9;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity .3s ease-out;
  }

  .fade-leave {
  }

  .fade-leave-active {
    transition: opacity .3s ease-out;
    opacity: 0;
  }
</style>
