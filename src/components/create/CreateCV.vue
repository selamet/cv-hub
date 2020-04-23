<template>
  <div class="row">

    <div id="facture" class="col-md-12">


      <div class="left-place col-md-2 float-left">
        <div class="m-3 personal">
          <img class="img col-md-12" :src="personalDetails.image" alt="">
          <h4 class="ml-3 mt-3">Personal</h4>
          <hr>
          <p class="m-3"><strong>Name </strong>:<br> {{personalDetails.name}} {{personalDetails.surname}}</p>
          <p class="m-3"><strong>Address</strong> :<br> {{personalDetails.address}} {{personalDetails.city}}</p>
          <p class="m-3"><strong>Phone number </strong>:<br> {{personalDetails.phoneNumber}}</p>
          <p class="m-3"><strong>Birthday </strong>:<br> {{personalDetails.birthday}}</p>
          <p class="m-3"><strong>Doğum Yeri </strong>:<br> {{personalDetails.placeOfBirth}}</p>
          <p class="m-3"><strong>Email </strong>:<br> {{personalDetails.email}}</p>
          <p class="m-3"><strong>Website </strong>:<br> {{personalDetails.website}}</p>
        </div>
        <br>
        <div class="language">
          <h4 class="ml-3 mt-3">Language</h4>
          <hr>
          <p v-for="(value,key) in language.languageList"><strong class="ml-3">{{value.name}}</strong> <span
            class="float-right">{{value.level}}</span>
          </p>
        </div>
      </div>


      <div class="right-place col-md-9 offset-md-2 m-3 float-right">


        <div class="col-md-12">
          <h2 class="text-center">{{personalDetails.name}} {{personalDetails.surname}}</h2>
          <hr>
          <div class="col-md-10 offset-md-1 ">
            <p class="text-center"> {{profile.values.content}} </p>
          </div>
        </div>


        <br>


        <div class="work-experience col-md-12">
          <h4>Work Experience</h4>
          <hr>
          <div v-for="value in experience.experienceList">
            <p><strong>{{value.jobTitle}}</strong>
              <span class="float-right">{{value.starter_date.month}} {{value.starter_date.year}}- {{value.end_date.month}} {{value.end_date.year}}</span>
            </p>
            <p><i>{{value.employer}}, {{value.city}}</i></p>
            <p v-html="value.content"></p>
          </div>
        </div>


        <br>


        <div class="col-md-12 education">
          <h4>Education</h4>
          <hr>
          <div v-for="value in education.educationList">
            <p><strong>{{value.agree}}</strong>
              <span class="float-right">{{value.starter_date.month}} {{value.starter_date.year}}- {{value.end_date.month}} {{value.end_date.year}}</span>
            </p>
            <p><i> {{value.school}}, {{value.city}}</i></p>
            <p>{{value.content}}</p>
          </div>
        </div>


        <br>


        <div class="col-md-12 ability">
          <h4>Skills</h4>
          <hr>
          <div v-for="value in ability.abilityList">
            <div class="col-md-6 ">
              <p>{{value.name}}</p>
            </div>
            <div class="col-md-12 ">
              <div class="progress">
                <div class="progress-bar " role="progressbar" :style="{width: value.level*20 +'%' }" aria-valuenow="25"
                     aria-valuemin="0"
                     aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>


        <br>


        <div class="col-md-12 achievements">
          <h4>Achievements</h4>
          <hr>
          <div v-for="value in achievement.achievementList">
            <p>{{value.content}}</p>
          </div>
        </div>

        <br>


        <div class="courses col-md-12">
          <h4>Work Experience</h4>
          <hr>
          <div v-for="value in course.courseList">
            <p><strong>{{value.name}}</strong>
              <span class="float-right">{{value.starter_date.month}} {{value.starter_date.year}}- {{value.end_date.month}} {{value.end_date.year}}</span>
            </p>
            <p><i>{{value.institution}}</i></p>
            <p>{{value.content}}</p>
          </div>
        </div>


      </div>
    </div>

    <br>

    <button @click="createPDF" class="btn btn-success col-md-10 btn-block">Export PDF</button>
  </div>

</template>

<script>


  import {mapMutations, mapActions, mapGetters} from "vuex";
  import jsPDF from "jspdf"
  import html2canvas from 'html2canvas';

  export default {

    methods: {

    },

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


<style scoped>

  body {
    background-color: #fff;
  }

  .left-place {
    background: #0275d8;
    color: #f4f4f4;
    font-size: 12px;
    width: 100vh;
    height: 200vh;
  }

  .right-place div {

  }

</style>
