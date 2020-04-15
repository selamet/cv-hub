<template>
  <div id="profile" class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3> Language ({{languageData.languageList.length}})</h3>

    <div v-if="languageData.languageList.length>0" class="show-education">
      <ul class="list-group">
        <li v-for="(lang,index) in languageData.languageList" class="list-group-item">

          <div class=" float-left">{{lang.name}} {{index}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyLanguage(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editLanguage(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="languageData.formShow">
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label>Dil</label>
          <input v-model="languageData.language.name" type="text" class="form-control" placeholder="Örn. İspanyolca"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label>Seviye</label>
          <select v-model="languageData.language.level" class="form-control ">
            <option disabled selected>Seç</option>
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
            <option :value="4">4</option>
            <option :value="5">5</option>

          </select>
        </div>


      </div>
    </form>
    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addLanguage(languageData.language)" class="m-3 btn btn-outline-info">Kaydet</button>
      </p>
      <p>
        <button @click="addNewLanguage()" class="btn btn-outline-dark btn-block col-md-8 offset-md-2">Başka bir dil
          ekle
        </button>
      </p>
    </div>
  </div>

</template>

<script>
  import {mapGetters, mapMutations} from "vuex"

  export default {

    methods: {
      ...mapMutations([
        'addLanguage',
        'editLanguage',
        'destroyLanguage',
        'addNewLanguage'
      ])
    },
    computed: {
      ...mapGetters({
        languageData: 'getLanguageData'
      }),
    }
  }
</script>

<style scoped>


</style>
