<template>

  <div class="achievement">
    <h3 class="achievement-title">Başarılar ({{achievementData.achievementList.length}})</h3>

    <div v-if="achievementData.achievementList.length>0" class="achievement-summary">
      <ul class="list-group achievement-summary-list">
        <li v-for="(ach,index) in achievementData.achievementList" class="list-group-item">

          <div class=" float-left">{{ach.content}} {{index}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyAchievement(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editAchievement(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form class="col-md-12 p-0 m-0" v-if="achievementData.formShow">
      <div class="form-row">
        <div class="col-md-12 mb-3">
          <label class="sm-title">Açıklama</label>
          <vue-editor v-model="achievementData.achievement.content" :editor-toolbar="customToolbar"></vue-editor>
        </div>
      </div>
    </form>

    <div id="buttons">
      <div class="buttons-block">
        <button class="achievement-button-remove">Sil</button>
        <button @click="addAchievement(achievementData.achievement)" class="achievement-button-save">Kaydet</button>
      </div>
      <div class="others-block">
        <button @click="addNewAchievement()" class="achievement-button-other">Başka Bir
          Başarı Ekle

        </button>
      </div>
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

  .select-div {
    width: 100%;
    padding-left: 0px;
    margin-left: 0px;
  }

  .select-option {
    padding: 0px;
    display: flex;
    width: 100%;
    justify-content: flex-start;

  }

  //----------------------------------

  .achievement {
    width: 70%;
    background-color: white;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    padding: 45px 45px;
    -webkit-box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.66);
    -moz-box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.66);
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    margin-top: 100px;

    &-title {
      font-size: 22px;
      letter-spacing: .6px;
      color: rgb(0, 0, 0, 0.8);
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
