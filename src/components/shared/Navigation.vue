<template>
  <nav class="navigation">
    <div class="navigation-logo">
      <router-link
        to="/"
        tag="a">
        <a class="navigation-logo-link text-white">CV MAKER</a>
      </router-link>
    </div>

    <div class="navigation-list">

        <router-link
          active-class="active"
          to="/personal-details"
          tag="a">
            <a class="navigation-list-item text-white">Personal Details</a>
        </router-link>

        <router-link
          active-class="active"
          to="/personal-history"
          tag="a">
            <a class="navigation-list-item text-white">Personal History</a>
        </router-link>

    </div>
  </nav>
</template>



<script>

</script>



<style lang="scss">

  .navigation {
    background-color: #1d1133;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    height: 8vh;


    &-logo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 50%;
      padding-left: 30px;

      &-link {
        color: white;
        font-size: 20px;
        font-weight: 300;
        font-family: sans-serif;
      }
    }



    &-list {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-end;


      &-item {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        list-style-type: none;
        padding-right: 30px;

        &-item {

        }
      }
    }
  }


</style>
