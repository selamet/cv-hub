<template>

  <div class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3>Yayınlar ({{publicationData.publicationList.length}})</h3>

    <div v-if="publicationData.publicationList.length>0" class="show-education">
      <ul class="list-group">
        <li v-for="(pbl,index) in publicationData.publicationList" class="list-group-item">

          <div class=" float-left">{{pbl.content}} {{index}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyPublication(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editPublication(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="publicationData.formShow">
      <div class="form-row">
        <div class="col-md-12 mb-3">
          <label>Açıklama</label>
          <vue-editor v-model="publicationData.publication.content" :editor-toolbar="customToolbar"></vue-editor>
        </div>


      </div>
    </form>
    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addPublication(publicationData.publication)" class="m-3 btn btn-outline-info">Kaydet</button>
      </p>
      <p>
        <button @click="addNewPublication()" class="btn btn-outline-dark btn-block col-md-8 offset-md-2">Başka Bir
          Yayın Ekle

        </button>
      </p>
    </div>
  </div>

</template>


<script>
  import {mapGetters, mapMutations} from "vuex"
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
        'addPublication',
        'addNewPublication',
        'setDefaultPublication',
        'destroyPublication',
        'editPublication',
      ]),




    },
    computed: {
      ...mapGetters({
        publicationData: 'getPublicationData'
      })
    }}

</script>

<style scoped>

</style>
