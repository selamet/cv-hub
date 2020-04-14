<template>
  <div>
    <p v-for="i in personalDetails">{{i}}</p>
  </div>

</template>

<script>
  export default {


    computed: {
      personalDetails() {
        return this.$store.getters.getPersonalDetails;
      }
    }
  }

</script>


<style scoped>

</style>
