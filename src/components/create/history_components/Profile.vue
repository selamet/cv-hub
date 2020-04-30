<template>

  <div class="profile">
      <h3 class="profile-title">Profil </h3>


      <div v-if="profile.saveStatus" class="show-course">
        <ul class="list-group">
          <li class="list-group-item">

            <div class=" float-left" v-html="profile.values.content">{{profile.values.content}}</div>
            <div class=" float-right control-panel">
              <button @click="editProfile" class=" btn btn-sm">D</button>
            </div>
          </li>
        </ul>
      </div>

      <form class="profile-section" v-if="profile.formShow">
        <p class="p-style"> Kendinizden, hedeflerinizden ve başarılarınızdan bu kısımda bahsedin. Kendinizi en iyi ifade edeceğiniz kısım Profil kısmıdır. </p>
        <div class="profile-section-editor">
          <label class="sm-title">Açıklama</label>
          <vue-editor v-model="profile.values.content" :editor-toolbar="customToolbar"></vue-editor>
        </div>


      </form>
      <div id="buttons" style="margin-top: 20px">
        <p class="text-right">
          <button class="btn-remove">Sil</button>
          <button @click="addProfile(profile.values.content)" class="btn-save">Kaydet</button>
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
      ...mapMutations({
        addProfile: 'addProfile',
        editProfile : 'editProfile'
      }),
    },
    computed: {
      ...mapGetters({
        profile: 'getProfile',

      })
    }

  }

</script>

<style lang="scss" scoped>

  a, button, input, select, option {
    outline: none;
  }

  body {
    font-family: 'Muli', sans-serif;
  }

  .sm-title {
    color: #9aa4ae;
    font-family: sans-serif;
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
  }

  .profile {
    width: 70%;
    background-color: white;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    padding: 45px 45px;
    -webkit-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.66);
    -moz-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.66);
    box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.15);
    border-radius: 4px;
    //border-top: 3px solid #3d64ff;

    &-title {
      font-size: 22px;
      letter-spacing: .6px;
      color: rgb(0,0,0,0.8);
    }

  }

  .btn-remove {
    margin-right: 5px;
    font-family: sans-serif;
    font-weight: 400;
    border: none;
    font-size: 15px;
    color: #565a74;
    width: 85px;
    height: 40px;
    border-radius: 4px;
    background-color: #ecf1f5;
    transition: all 0s;

    &:hover {
      background-color: transparent;
      font-weight: 700;
      cursor: pointer;
      border: none;
    }

  }

  .btn-save {
    margin-left: 5px;
    font-family: sans-serif;
    font-weight: 400;
    border: none;
    color: white;
    width: 85px;
    height: 40px;
    font-size: 15px;
    border-radius: 4px;
    background-color: #3d64ff;
    transition: all 0s;

    &:hover {
      background-color: transparent;
      font-weight: 700;
      cursor: pointer;
    }
  }

  .p-style {
    font-family: sans-serif;
    font-weight: 400;
    color: rgba(0,0,0,0.5);
  }

  .label {
    color: rgba(0,0,0,0.7);
    font-weight: 400;
  }

</style>
