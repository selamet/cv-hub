<template>
  <div class="container">
    <div class="row">
      <div class="col-10 offset-1 pt-3 mt-5 shadow">

        <div class="card-body">
          <h3 class="text-center m-3">Personal Details Component</h3>
          <hr>
          <div class="form-group">
          <label>İsim</label>
          <input v-model="personalDetails.name" type="text" class="form-control" placeholder=" Adınızı giriniz..">
        </div>
          <div class="form-group">
            <label>Soy isim</label>
            <input v-model="personalDetails.surname" type="text" class="form-control" placeholder="Soyadınızı giriniz..">
          </div>



          <hr>
          <button class="btn btn-primary" :disabled="saveEnabled" @click="saveProduct">Kaydet</button>
        </div>
      </div>
    </div>


  </div>


</template>

<script>
  export default {

    data() {
      return {
        personalDetails: {
          name: '',
          surname: '',
          phoneNumber: '',
          email: '',
          address: '',
          city: ''

        },
        additionalInformation: {

          birthday: null,
          placeOfBirth: '',
          drivingLicense: '',
          gender: null,
          maritalStatus: '',
          website: ''

        }

      }
    }
  }

</script>


<style scoped>


</style>
