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
          <label class="label">Açıklama</label>
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

  .profile {
    width: 70%;
    background-color: white;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    padding: 25px 45px;
    -webkit-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.66);
    -moz-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.66);
    box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.15);
    border-radius: 4px;

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
    color: rgba(0,0,0,0.55);
    width: 100px;
    height: 45px;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,0.10);
    //background-color: rgba(0,0,0,0.10);

  }

  .btn-save {
    margin-left: 5px;
    font-family: sans-serif;
    font-weight: 400;
    border: none;
    color: rgba(0,0,0,0.55);
    width: 100px;
    height: 45px;
    border-radius: 4px;
    background-color: rgba(0,0,0,0.09);
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
