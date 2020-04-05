<template>
  <div id="center">

    <h3 class="text-center m-3">Personal History Component</h3>
    <div v-html="personalHistory.profile">    {{personalHistory.profile}}
    </div>
    <app-profile @profile="personalHistory.profile=$event">
    </app-profile>

  </div>


</template>
<script>
  import Profile from './history_components/Profile'

  export default {
    components: {
      appProfile: Profile
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
