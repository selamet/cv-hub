<template>
  <div class="home">

    <div class="home-title">
      <h1 class="home-title-bold">Profesyonel CV'nizi buradan oluşturun</h1>
      <h3 class="home-title-thin">Profesyonel CV'nizi 15 dakikada hazırlayıp indirin.</h3>
      <button class="btn home-title-btn">CV Oluştur</button>
    </div>





  </div>

</template>



<script>

</script>



<style lang="scss">

  .home {
    height: 92vh;
    width: 100%;
    background-image: url("/src/assets/img/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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

    &-btn {



    }




  }

</style>
