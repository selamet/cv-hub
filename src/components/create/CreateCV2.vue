<template>
  <div class="inclusive">

  <div class="container">
    <div class="personal">



      <div class="personal-collective personal-image">

        <img class="personal-image-img" :src="personalDetails.image" alt="">

      </div>



      <div class="personal-collective personal-contact">
        <h2 class="personal-title"> <i class="fa fa-user"></i> Contact</h2>

        <div class="personal-contact-list">

          <div class="personal-contact-list-item">
            <i class="fa fa-phone"></i>
            <span class="phone">0533 333 3333</span>
          </div>

          <div class="personal-contact-list-item">
            <i class="fa fa-phone"></i>
            <span>selametsamli</span>
          </div>

          <div class="personal-contact-list-item">
            <i class="fa fa-phone"></i>
            <span>selamet.github.com</span>
          </div>

          <div class="personal-contact-list-item">
            <i class="fa fa-phone"></i>
            <span>Silikon Valley</span>
          </div>

        </div>

      </div>



      <div class="personal-collective personal-education">
        <h2 class="personal-title"> <i class="fa fa-book"></i> Education</h2>

        <div class="personal-education-list">

          <div class="personal-education-list-item">
            <h3>Lorem ipsum dolor.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>

          <div class="personal-education-list-item">
            <h3>Lorem ipsum dolor.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>


        </div>
      </div>



      <div class="personal-collective personal-skills">
        <h2 class="personal-title"> <i class="fa fa-globe"></i> Skills</h2>

        <div class="personal-skills-list">
          <div class="personal-skills-list-item">
            <h3>HTML / CSS</h3>
          </div>
          <div class="personal-skills-list-item">
            <h3>Javascript</h3>
          </div>
          <div class="personal-skills-list-item">
            <h3>Vue</h3>
          </div>
          <div class="personal-skills-list-item">
            <h3>React</h3>
          </div>
          <div class="personal-skills-list-item">
            <h3>Photoshop</h3>
          </div>
        </div>
      </div>
    </div>




    <div class="general">
      <div class="general-title">
        <h1>Selamet Şamlı</h1>
        <h3>Software Developer</h3>
      </div>
    </div>

  </div>


  </div>
</template>




<script>

  import {mapMutations, mapActions, mapGetters} from "vuex";
  import jsPDF from "jspdf"


  export default {

    computed: {
      ...mapGetters({
        education: 'getEducationData',
        personalDetails: 'getPersonalDetails',
        language: 'getLanguageData',
        profile: 'getProfile',
        experience: 'getExperienceData',
        ability: 'getAbilityData',
        achievement: 'getAchievementData',
        course: 'getCourseData'
      }),


    }
  }

</script>




<style lang="scss">

  $orange-background : rgb(232 153 103);
  $dark-color : rgb(49 49 49);
  $light-color : #dddddd;
  $x-light-color : #ededed;

  .inclusive {
    background-color: #1d1133;
    padding: 0px;
    width: 100%;
    height: 92vh;
    padding-top: 15px;
  }

  .container {
    margin-top: 0px;
    margin-bottom: 15px;
    height: calc(92vh - 30px);
    background-color: $x-light-color;
    padding: 0px;
    display: flex;
    width: 100%;

    border-radius:10px;


    .personal {
      width: 25%;
      padding-left: 5%;
      padding-right: 5%;
      height: calc(92vh - 30px);
      background-color: rgba(232, 153, 103, 0.4);
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-between;
      align-items:center;
      -webkit-box-shadow: 3px 0px 7px 1px rgba(14,62,94,0.10);
      -moz-box-shadow: 3px 0px 7px 1px rgba(14,62,94,0.10);
      box-shadow: 3px 0px 7px 1px rgba(14,62,94,0.10);

      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;

      &-collective {
        height: 25%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        padding-top: 0px;
      }

      &-title {
        border-radius: 1px;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 4px;
        font-family: "LiHei Pro";
        background-color: $dark-color;
        padding-left: 5%;
        width: 100%;
        font-weight: 400;
        padding-top: 10px;
        padding-bottom: 10px;
        color: $light-color;
        display: block;

        i {

        }
      }



      &-image {

        display: flex;
        justify-content: center;
        width: 100%;
        align-items: center;

        &-img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 5px solid $x-light-color;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;

        }
      }



      &-contact {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: flex-start;
        font-size: 13px;

        &-list {
          padding-top: 10px;

          &-item {
            margin-bottom: 5px;

            span.phone {
              font-size: 11.5px;
            }
          }

          &-item:last-child {
            margin-bottom: 0px;
          }
        }
      }



      &-education {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: flex-start;
        font-size: 13px;
        align-items: center;

        &-list {
          padding-top: 10px;

          &-item {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 0px;

            h3 {
              font-size: 11px;
              font-weight: 900;
              font-family: sans-serif;
              text-transform: uppercase;
              margin-bottom: 2px;
            }

            p {
              font-size: 10px;
            }
          }

        }
      }



      &-skills {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: flex-start;
        font-size: 13px;
        align-items: flex-start;

        &-list {
          padding-top: 10px;

          &-item {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: flex-start;
            align-items:center ;
            padding-top: 5px;
            padding-bottom: 5px;

            h3 {
              font-size: 11px;
              font-weight: 900;
              font-family: sans-serif;
              text-transform: uppercase;
              margin-bottom: 2px;
            }
          }

          &-item:first-child {
            padding-top: 0px;
          }
        }
      }
    }




    .general {
      width: 75%;
      padding-left: 5%;
      padding-right: 5%;
      height: calc(92vh - 30px);
      background-color: transparent;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-between;
      align-items:center;

      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;

      &-title {
        height: calc(25% - 30px);
        text-transform: uppercase;
        width: calc(100% - 20%);
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        background-color: rgb(203, 208, 218);
        border-radius: 4px;
        -webkit-box-shadow: 0px 3px 15px 1px rgba(14,62,94,0.10);
        -moz-box-shadow: 0px 3px 15px 1px rgba(14,62,94,0.10);
        box-shadow: 0px 3px 15px 1px rgba(14,62,94,0.10);
        margin-top: 20px;
        margin-bottom: 10px;
        margin-left: 10%;
        margin-right: 10%;
        justify-content: center;
        align-items: center;
        padding-top: 0px;

        h1 {
          font-size: 30px;
          font-weight: 700;
          letter-spacing: 0px;
          opacity: 0.85;
        }

        h3 {
          font-size: 13px;
          font-weight: 400;
          opacity: 0.85;
          letter-spacing: 2.5px;
        }
      }
    }

  }



</style>
