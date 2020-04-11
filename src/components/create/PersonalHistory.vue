<template>
  <div id="center">

    <h3 class="text-center m-3">Personal History Component</h3>
    <div v-html="personalHistory.profile"> {{personalHistory.profile}}
    </div>
    <app-profile @profile="personalHistory.profile=$event">
    </app-profile>
    <app-education></app-education>
    <app-language></app-language>
    <app-hobby></app-hobby>
    <app-ability></app-ability>
    <app-experience></app-experience>
    <app-reference></app-reference>
    <app-course></app-course>
    <app-achievement></app-achievement>
    <app-publication></app-publication>
  </div>


</template>
<script>
  import Profile from './history_components/Profile'
  import Education from "./history_components/Education";
  import Language from "./history_components/Language";
  import Hobby from "./history_components/Hobby";
  import Ability from "./history_components/Ability"
  import Experience from "./history_components/Experience";
  import Reference from "./history_components/Reference";
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
      appPublication: Publications

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


<style scoped>


</style>
