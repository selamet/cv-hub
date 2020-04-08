<template>
  <div id="app">
    <!--   <app-header></app-header>
       <transition name="fade" mode="out-in">
         <router-view></router-view>
       </transition>


       <app-footer></app-footer>-->

<transition-group>
    <app-ugi
    key="appugi"></app-ugi>
  <canvas key="canvas" id="canvas" style="  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;"></canvas>
</transition-group>
  </div>
</template>

<script>

  import Footer from "./components/shared/Footer"
  import Header from "./components/shared/Header"
  import Ugi from "./components/Ugi"

  export default {
    name: 'app',
    components: {
      appHeader: Header,
      appFooter: Footer,
      appUgi: Ugi

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
