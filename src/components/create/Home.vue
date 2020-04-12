<template>
  <div class="home">

    <div class="home-title">
      <h1 class="home-title-bold">Profesyonel CV'nizi buradan oluşturun</h1>
      <h3 class="home-title-thin">Profesyonel CV'nizi 15 dakikada hazırlayıp indirin.</h3>
      <button class="btn home-title-btn">CV Oluştur</button>
    </div>

    <div class="home-text">
      <h1 class="home-text-title">CV Maker ile CV'nizi 15 dakikada hazırlayıp indirin.</h1>
      <div class="home-text-card home-text-card-a">
        <i class="fa fa-sliders"></i>
        <i class="fa fa-search"></i>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quasi!</p>
      </div>
      <div class="home-text-card home-text-card-b">
        <i class="fa fa-user"></i>
        <i class="fa fa-tasks"></i>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, sit.</p>
      </div>
      <div class="home-text-card home-text-card-c">
        <i class="fa fa-angle-double-down"></i>
        <i class="fa fa-download"></i>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, praesentium.</p>
      </div>
    </div>





  </div>

</template>



<script>

</script>



<style lang="scss">
  $color1 : 393473;

  .home {
    height: 92vh;
    width: 100%;
    background-image: url("/src/assets/img/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding-top: 120px;

    &-title {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;


      &-bold {
        font-size: 40px;
        font-weight: 700;
        letter-spacing: .4px;
        text-align: center;
        color: white;
        width: 100%;
        display: block;
        margin-bottom: 20px;
      }

      &-thin {
        font-weight: 300;
        text-align: center;
        font-size: 18px;
        width: 100%;
        color: white;
        display: block;
      }

      &-btn {
        margin-top: 70px;
        background-color: #0060df;
        color: white;
        padding: 15px 40px;
        border-radius: 4px;
        text-align: center;
      }
    }

    &-text {
      width: 50%;
      height: 28vh;
      background-color: white;
      border-radius: 10px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      position: relative;

      &-title {
        text-align: center;
        color: #393473;
        padding-top: 15px;
        padding-top: 15px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding-bottom: 10px;
        font-size: 18px;
        letter-spacing: .2px;
        opacity: 0.9;
        font-weight: 600;
        width: 100%;
        position: absolute;
        top: 0;
        background-color: #f4f6f9;
      }

      &-card {
        width: 33.333%;
        padding-left: 15px;
        padding-right: 15px;
        height: 20vh;
        background-color: transparent;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: 35px;

        i {
          //color: rgb(199,57,197);
          //color: linear-gradient(90deg, rgba(199,57,197,1) 0%, rgba(223,67,152,1) 51%, rgba(240,73,122,1) 100%);
          color: #5b7ff6;
          font-size: 30px;
          padding:5px;
        }

        p {
          text-align: center;
          color: #42425a;
          letter-spacing: .5px;
          opacity: 0.8;
          font-size: 14px;
        }

      }


      &-card-a {

      }
      &-card-b {

      }
      &-card-c {
      }
    }





  }

</style>
