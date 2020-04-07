<template>

  <div class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3>Eğitim ve Nitelikler ({{educationList.length}}) </h3>


    <div v-if="educationList.length>0" class="show-education">
      <ul class="list-group">
        <li v-for="(ed,index) in educationList" class="list-group-item">

          <div class=" float-left">{{ed.school}} {{index}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyEducation(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editEducation(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="formShow">
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
              <option disabled selected>Month</option>
              <option :value="'gosterme'">Gösterme</option>

              <option :value="month" v-for="month in months">{{month}}</option>
            </select>
          </div>
          <div class="col-md-6 float-right">
            <select v-model="education.starter_date.year" class="form-control ">
              <option disabled selected>Year</option>
              <option :value="'gosterme'">Gösterme</option>

              <option :value="i" v-for="i in range(1960, 2021)">{{i}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <label class="">Bitiş Tarihi</label>
          <br>
          <div class="col-md-6 float-left">
            <select v-model="education.end_date.month" class="form-control ">
              <option disabled selected>Month</option>
              <option :value="'gosterme'">Gösterme</option>
              <option :value="month" v-for="month in months">{{month}}</option>
            </select>
          </div>
          <div class="col-md-6 float-right">
            <select v-model="education.end_date.year" class="form-control ">
              <option disabled selected>Year</option>
              <option :value="'gosterme'">Gösterme</option>
              <option :value="i" v-for="i in range(1960, 2021)">{{i}}</option>
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
        <button @click="addNewEducation()" class="btn btn-outline-dark btn-block col-md-8 offset-md-2">Başka bir eğitim
          ekle
        </button>
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
        formShow: true,
        isUpdate: {
          status: false,
          index: null
        },
        education: {
          agree: null,
          city: null,
          school: null,
          starter_date: {
            month: 'Month',
            year: 'Year'
          },
          end_date: {
            month: 'Month',
            year: 'Year'
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
      addEducation() {
        let query = this.education.agree != null && this.education.city != null && this.education.school != null
          && this.education.starter_date.month != 'Month' && this.education.starter_date.year != 'Year'
          && this.education.end_date.month != 'Month' && this.education.end_date.year != 'Year';

        if (query) {
          /* Tempalte üzerinde gösterirken bir filter yazılacak!!!!! */

          for (var i in this.education.starter_date) {
            if (this.education.starter_date[i] == 'gosterme') {
              this.education.starter_date[i] = null;
            }
          }
          for (var i in this.education.end_date) {
            if (this.education.end_date[i] == 'gosterme') {
              this.education.end_date[i] = null;
            }
          }
        } else {
          alert("Lütfen Tüm Alanları Doldurunuz !!!!");
        }

        if (this.isUpdate.status) {
          this.educationList[this.isUpdate.index] = this.education;
          this.formShow = false;
          this.isUpdate = {
            status: false,
            index: null
          }
        } else {
          this.educationList.push(this.education);
          this.formShow = false;

        }

      },
      addNewEducation() {
        this.education = {
          agree: null,
          city: null,
          school: null,
          starter_date: {
            month: 'Month',
            year: 'Year'
          },
          end_date: {
            month: 'Month',
            year: 'Year'
          },
        }
        this.formShow = true;

      }
      ,
      editEducation(index) {
        this.education = this.educationList[index];
        this.formShow = true;
        this.isUpdate.status = true;
        this.isUpdate.index = index;
      },
      destroyEducation(index) {
        this.educationList.pop(index);
      }

    }
  }

</script>

<style scoped>

</style>
