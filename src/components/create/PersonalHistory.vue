<template>
  <div id="center">

    <h3 class="text-center m-3">Personal History Component</h3>
    <div v-html="personalHistory.profile">    {{personalHistory.profile}}
    </div>
    <app-profile @profile="personalHistory.profile=$event">
    </app-profile>
    <app-education></app-education>

  </div>


</template>
<script>
  import Profile from './history_components/Profile'
  import Education from "./history_components/Education";
  export default {
    components: {
      appProfile: Profile,
      appEducation: Education
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
