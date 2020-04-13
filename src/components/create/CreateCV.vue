<template>
  <div>
    {{personalDetails.name}}
    {{personalDetails.surname}}
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
