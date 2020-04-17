<template>

  <div class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3>Başarılar ({{achievementData.achievementList.length}})</h3>

    <div v-if="achievementData.achievementList.length>0" class="show-education">
      <ul class="list-group">
        <li v-for="(ach,index) in achievementData.achievementList" class="list-group-item">

          <div class=" float-left">{{ach.content}} {{index}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyAchievement(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editAchievement(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="achievementData.formShow">
      <div class="form-row">
        <div class="col-md-12 mb-3">
          <label>Açıklama</label>
          <vue-editor v-model="achievementData.achievement.content" :editor-toolbar="customToolbar"></vue-editor>
        </div>


      </div>
    </form>
    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addAchievement(achievementData.achievement)" class="m-3 btn btn-outline-info">Kaydet</button>
      </p>
      <p>
        <button @click="addNewAchievement()" class="btn btn-outline-dark btn-block col-md-8 offset-md-2">Başka Bir
          Başarı Ekle

        </button>
      </p>
    </div>
  </div>

</template>


<script>
  import {mapMutations, mapGetters} from "vuex"
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
        'addAchievement',
        'addNewAchievement',
        'setDefaultAchievement',
        'destroyAchievement',
        'editAchievement',

      ]),


    },
    computed: {
      ...mapGetters({
        achievementData: 'getAchievementData'
      })
    }

  }

</script>

<style scoped>

</style>
