<template>

  <div class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3>Eğitim ve Nitelikler ({{educationData.educationList.length}}) </h3>


    <div v-if="educationData.educationList.length>0" class="show-education">
      <ul class="list-group">
        <li v-for="(ed,index) in educationData.educationList" class="list-group-item">

          <div class=" float-left">{{ed.school}} {{index}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyEducation(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editEducation(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="educationData.formShow">
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label>Derece</label>
          <input v-model="educationData.education.agree" type="text" class="form-control"
                 placeholder="Örn. Fen Fakültesi Diploması"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label>Şehir</label>
          <input v-model="educationData.education.city" type="text" class="form-control" placeholder="Örn. İstanbul"
                 required>
        </div>
        <div class="col-md-12 mb-3">
          <label>Okul</label>
          <input v-model="educationData.education.school" type="text" class="form-control"
                 placeholder="Örn. University of Ataturk"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label class="">Başlangıç Tarihi</label>
          <br>
          <div class="col-md-6 float-left">
            <select v-model="educationData.education.starter_date.month" class="form-control ">
              <option disabled selected>Month</option>
              <option :value="'gosterme'">Gösterme</option>

              <option :value="month" v-for="month in educationData.months">{{month}}</option>
            </select>
          </div>
          <div class="col-md-6 float-right">
            <select v-model="educationData.education.starter_date.year" class="form-control ">
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
            <select v-model="educationData.education.end_date.month" class="form-control ">
              <option disabled selected>Month</option>
              <option :value="'gosterme'">Gösterme</option>
              <option :value="month" v-for="month in educationData.months">{{month}}</option>
            </select>
          </div>
          <div class="col-md-6 float-right">
            <select v-model="educationData.education.end_date.year" class="form-control ">
              <option disabled selected>Year</option>
              <option :value="'gosterme'">Gösterme</option>
              <option :value="i" v-for="i in range(1960, 2021)">{{i}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-12 mb-3">
          <label>Açıklama</label>
          <vue-editor v-model="educationData.education.content" :editor-toolbar="customToolbar"></vue-editor>
        </div>

      </div>
    </form>

    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addEducation(educationData.education)" class="m-3 btn btn-outline-info">Kaydet</button>
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
  import {mapMutations, mapActions, mapGetters} from "vuex";
  import { VueEditor } from "vue2-editor";

  export default {

    components: {
      VueEditor
    },

    data () {
      return {
        customToolbar: [
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ]
      }
    },

    methods: {
      range: function (start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
      },
      ...mapMutations([
        'addEducation',
        'addNewEducation',
        'destroyEducation',
        'editEducation',
      ]),


    },
    computed: {
      ...mapGetters({
        educationData: 'getEducationData',
      })
    }
  }

</script>

<style scoped>

</style>
