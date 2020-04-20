<template>

  <div class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3>Profil </h3>


    <div v-if="profile.saveStatus" class="show-course">
      <ul class="list-group">
        <li class="list-group-item">

          <div class=" float-left">{{profile.values.content}}</div>
          <div class=" float-right control-panel">
            <button @click="editProfile" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="profile.formShow">
      <div class="form-row">
        <div class="col-md-12 mb-3">
          <p class="font-weight-light text-black-50"> <span class="fa fa-info-circle m-2">  </span>Kendinizden, hedeflerinizden ve başarılarınızdan bu kısımda bahsedin. Kendinizi en iyi ifade edeceğiniz kısım Profil kısmıdır. </p>
          <label>Açıklama</label>
          <vue-editor v-model="profile.values.content" :editor-toolbar="customToolbar"></vue-editor>
        </div>


      </div>
    </form>
    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addProfile(profile.values.content)" class="m-3 btn btn-outline-info">Kaydet</button>
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

<style scoped>

</style>
