<template>

  <div class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3>İş Deneyimi ({{data.experienceList.length}}) </h3>


    <div v-if="data.experienceList.length>0">
      <ul class="list-group">
        <li v-for="(ex,index) in data.experienceList" class="list-group-item">

          <div class=" float-left">{{ex.jobTitle}}>>{{ex.employer}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyExperience(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editExperience(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="data.formShow">
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label>İş Unvanı</label>
          <input v-model="data.experience.jobTitle" type="text" class="form-control"
                 placeholder="Örn. Satış Yöneticisi"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label>Şehir</label>
          <input v-model="data.experience.city" type="text" class="form-control" placeholder="Örn. İstanbul"
                 required>
        </div>
        <div class="col-md-12 mb-3">
          <label>İşveren</label>
          <input v-model="data.experience.employer" type="text" class="form-control" placeholder="Örn. GreatCode"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label class="">Başlangıç Tarihi</label>
          <br>
          <div class="col-md-6 float-left">
            <select v-model="data.experience.starter_date.month" class="form-control ">
              <option disabled selected>Month</option>
              <option :value="'gosterme'">Gösterme</option>

              <option :value="month" v-for="month in data.months">{{month}}</option>
            </select>
          </div>
          <div class="col-md-6 float-right">
            <select v-model="data.experience.starter_date.year" class="form-control ">
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
            <select v-model="data.experience.end_date.month" class="form-control ">
              <option disabled selected>Month</option>
              <option :value="'gosterme'">Gösterme</option>
              <option :value="month" v-for="month in data.months">{{month}}</option>
            </select>
          </div>
          <div class="col-md-6 float-right">
            <select v-model="data.experience.end_date.year" class="form-control ">
              <option disabled selected>Year</option>
              <option :value="'gosterme'">Gösterme</option>
              <option :value="i" v-for="i in range(1960, 2021)">{{i}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-12 mb-3">
          <label>Açıklama</label>
          <vue-editor v-model="data.experience.content" :editor-toolbar="customToolbar"></vue-editor>
        </div>

      </div>
    </form>

    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addExperience(data.experience)" class="m-3 btn btn-outline-info">Kaydet</button>
      </p>
      <p>
        <button @click="addNewExperience" class="btn btn-outline-dark btn-block col-md-8 offset-md-2">Başka Bir İş
          Deneyimi
          Ekle
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
      ...mapMutations([
        'addExperience',
        'destroyExperience',
        'editExperience',
        'addNewExperience'


      ]),
      range: function (start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
      },
    },
    computed: {
      ...mapGetters({
        data: 'getExperienceData',
      }),
    }
  }
</script>

<style scoped>
</style>
