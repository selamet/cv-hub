<template>
  <div class="general">
      <h3 class="general-h3">Personal History Component</h3>

      <div v-html="personalHistory.profile"> {{personalHistory.profile}}</div>

      <app-profile @profile="personalHistory.profile=$event">
      </app-profile>
      <app-education></app-education>
      <app-experience></app-experience>
      <app-ability></app-ability>
      <app-language></app-language>
      <app-reference></app-reference>
      <app-hobby></app-hobby>
      <app-course></app-course>
      <app-achievement></app-achievement>
      <app-publication></app-publication>
    </div>
  </div>


</template>
<script>
  import Profile from './history_components/Profile'
  import Education from "./history_components/Education";
  import Experience from "./history_components/Experience";
  import Ability from "./history_components/Ability"
  import Language from "./history_components/Language";
  import Reference from "./history_components/Reference";
  import Hobby from "./history_components/Hobby";
  import Course from "./history_components/Course";
  import Achievement from "./history_components/Achievement";
  import Publications from "./history_components/Publications";

  export default {
    components: {
      appProfile: Profile,
      appEducation: Education,
      appLanguage: Language,
      appHobby: Hobby,
      appAbility: Ability,
      appExperience: Experience,
      appReference: Reference,
      appCourse: Course,
      appAchievement: Achievement,
      appPublication: Publications,

    },
    data() {
      return {
        personalHistory: {
          profile: '',
          education: {},
          hobbies: {},
          language: {},

        }
      }
    }
  }
</script>


<style scoped lang="scss">

  .general {
    width: 100%;
    background-color: #f7f7f7;
    position: relative;
    height: auto;
    z-index: 0;

    &:before {
      content: '';
      width: 100%;
      height: 417px;
      position: absolute;
      background-color: #794bc4;
      background-color: #794bc4;
      top: 0;
      left: 0;
      z-index: -1;
    }

    &:after {
      content: '';
      width: 100%;
      top: 417px;
      position: absolute;
      background-color: #4f0299;
      height: 35px;
      left: 0;
      z-index: -1;
    }

    h3 {
      width: 100%;
      height: 20vh;
      font-weight: 900;
      letter-spacing: .6px;
      color: white;
      font-size: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

    }
  }


</style>
