<template>

  <div class="experience">
    <h3 class="experience-title">İş Deneyimi ({{data.experienceList.length}}) </h3>


    <div class="experience-summary" v-if="data.experienceList.length>0">
      <ul class="list-group experience-summary-list">
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
          <label class="sm-title">İş Unvanı</label>
          <input v-model="data.experience.jobTitle" type="text" class="form-input"
                 placeholder="Örn. Satış Yöneticisi"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label class="sm-title">Şehir</label>
          <input v-model="data.experience.city" type="text" class="form-input" placeholder="Örn. İstanbul"
                 required>
        </div>
        <div class="col-md-12 mb-3">
          <label class="sm-title">İşveren</label>
          <input v-model="data.experience.employer" type="text" class="form-input" placeholder="Örn. GreatCode"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label class="sm-title">Başlangıç Tarihi</label>
          <br>
          <div class="col-md-6 float-left select-option">
            <select v-model="data.experience.starter_date.month" class="form-select ">
              <option disabled selected>Month</option>
              <option :value="'gosterme'">Gösterme</option>

              <option :value="month" v-for="month in data.months">{{month}}</option>
            </select>
          </div>
          <div class="col-md-6 float-right">
            <select v-model="data.experience.starter_date.year" class="form-select ">
              <option disabled selected>Year</option>
              <option :value="'gosterme'">Gösterme</option>

              <option :value="i" v-for="i in range(1960, 2021)">{{i}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <label class="sm-title">Bitiş Tarihi</label>
          <br>
          <div class="col-md-6 float-left select-option">
            <select v-model="data.experience.end_date.month" class="form-select ">
              <option disabled selected>Month</option>
              <option :value="'gosterme'">Gösterme</option>
              <option :value="month" v-for="month in data.months">{{month}}</option>
            </select>
          </div>
          <div class="col-md-6 float-right">
            <select v-model="data.experience.end_date.year" class="form-select ">
              <option disabled selected>Year</option>
              <option :value="'gosterme'">Gösterme</option>
              <option :value="i" v-for="i in range(1960, 2021)">{{i}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-12 mb-3">
          <label class="sm-title">Açıklama</label>
          <vue-editor v-model="data.experience.content" :editor-toolbar="customToolbar"></vue-editor>
        </div>

      </div>
    </form>

    <div id="buttons">
      <div class="buttons-block">
        <button class="experience-button-remove">Sil</button>
        <button @click="addExperience(data.experience)" class="experience-button-save">Kaydet</button>
      </div>

      <div class="others-block">
        <button @click="addNewExperience" class="experience-button-other">Başka Bir İş
          Deneyimi
          Ekle
        </button>
      </div>
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

<style lang="scss" scoped>
  //---------------------------------

  a, button, input, select, option {
    outline: none;
    font-family: sans-serif;
  }

  select {
    //-webkit-appearance: none;
    //-moz-appearance: none;
    //text-indent: 5px;
    //text-overflow: '';
    position: center;

  }

  body {
    font-family: 'Muli', sans-serif;
  }
  //---------------------------------

  .sm-title {
    color: #9aa4ae;
    font-family: sans-serif;
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
  }

  .form-input {
    padding-left: 15px;
    width: 100%;
    height: 45px;
    border: 1.4px solid #eaeaea;
    border-radius: 4px;

    &:focus {
      border: 2px solid #eaeaea;
    }
  }

  .form-select {
    appearance: none;
    background-color: transparent;
    width: 100%;
    height: 45px;
    border: 1.4px solid #eaeaea;
    border-radius: 4px;
  }

  .select-option {
    padding: 0px;

  }

  //---------------------------------

  .experience {
    width: 70%;
    background-color: white;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    padding: 45px 45px;
    -webkit-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.66);
    -moz-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.66);
    box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.15);
    border-radius: 4px;
    margin-top: 100px;
    //border-top: 3px solid #3d64ff;

    &-title {
      font-size: 22px;
      letter-spacing: .6px;
      color: rgb(0,0,0,0.8);
    }

    &-summary {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 20px;

      &-list {
        width: 100%;
      }
    }

    #buttons {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .buttons-block {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      .others-block {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    }

    &-button-remove {

      margin-right: 5px;
      font-weight: 400;
      border: none;
      font-size: 15px;
      color: #565a74;
      width: 85px;
      height: 40px;
      border-radius: 4px;
      background-color: #ecf1f5;
      transition: all .3s;

      &:hover {
        background-color: transparent;
        font-weight: 700;
        cursor: pointer;
        border: none;

      }
    }

    &-button-save {

      margin-left: 5px;
      font-weight: 400;
      border: none;
      color: white;
      width: 85px;
      height: 40px;
      font-size: 15px;
      border-radius: 4px;
      background-color: #3d64ff;
      transition: all .3s;

      &:hover {
        background-color: transparent;
        font-weight: 700;
        cursor: pointer;
        color: #565a74;
      }
    }

    &-button-other {

      border: none;
      background-color: #ecf1f5;
      width: auto;
      border-radius: 4px;
      padding-left: 22.5px;
      padding-right: 22.5px;
      height: 40px;
      font-size: 15px;
      font-weight: 400;
      color: #565a74;

      transition: all .3s;

      &:hover {
        background-color: transparent;
        cursor: pointer;
        color: #565a74;
      }
    }
  }
</style>
