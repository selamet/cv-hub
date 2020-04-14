<template>
  <div>
    <p v-for="i in personalDetails">{{i}}</p>
    <p>{{education.educationList[0]}}</p>
  </div>

</template>

<script>
  import {mapMutations, mapActions, mapGetters} from "vuex";

  export default {
    computed: {
      ...mapGetters({
        education: 'getEducationData',
        personalDetails: 'getPersonalDetails',
      }),
    }
  }

</script>


<style scoped>

</style>
