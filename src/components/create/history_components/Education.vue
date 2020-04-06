<template>

  <div class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3>Eğitim ve Nitelikler</h3>

    <form>
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label>Derece</label>
          <input v-model="education.agree" type="text" class="form-control" placeholder="Örn. Fen Fakültesi Diploması"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label>Şehir</label>
          <input v-model="education.city" type="text" class="form-control" placeholder="Örn. İstanbul"
                 required>
        </div>
        <div class="col-md-12 mb-3">
          <label>Okul</label>
          <input v-model="education.school" type="text" class="form-control" placeholder="Örn. University of Ataturk"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label class="">Başlangıç Tarihi</label>
          <br>
          <div class="col-md-6 float-left">
            <select v-model="education.starter_date.month" class="form-control ">
              <option value="" selected>Month</option>
              <option value="" v-for="month in months">{{month}}</option>
            </select>
          </div>
          <div class="col-md-6 float-right">
            <select v-model="education.starter_date.year" class="form-control ">
              <option value="" selected>Year</option>
              <option value="" v-for="i in range(1960, 2021)">{{i}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <label class="">Bitiş Tarihi</label>
          <br>
          <div class="col-md-6 float-left">
            <select v-model="education.end_date.month" class="form-control ">
              <option value="" selected>Month</option>
              <option value="" v-for="month in months">{{month}}</option>
            </select>
          </div>
          <div class="col-md-6 float-right">
            <select v-model="education.end_date.year" class="form-control ">
              <option value="" selected>Year</option>
              <option value="" v-for="i in range(1960, 2021)">{{i}}</option>
            </select>
          </div>
        </div>

      </div>
    </form>

    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addEducation()" class="m-3 btn btn-outline-info">Kaydet</button>
      </p>
      <p>
        <button class="btn btn-outline-dark btn-block col-md-8 offset-md-2">Başka bir eğitim ekle</button>
      </p>
    </div>

  </div>

</template>


<script>

  export default {

    data() {
      return {
        months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
        ,
        education: {
          agree: null,
          city: '',
          school: '',
          starter_date: {
            month: '',
            year: ''
          },
          end_date: {
            month: '',
            year: ''
          },
          content: '',
        },
        educationList: [],
      }
    },
    methods: {
      range: function (start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
      },
      addEducation(){

      }


    }
  }

</script>

<style scoped>

</style>
