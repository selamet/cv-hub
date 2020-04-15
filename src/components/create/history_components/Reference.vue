<template>
  <div class="col-10 offset-1 pt-3  mt-5 shadow ">

    <h3>Referanslar ({{referenceData.referenceList.length}})</h3>


    <div v-if="referenceData.referenceList.length>0" class="show-education">
      <ul class="list-group">
        <li v-for="(ref,index) in referenceData.referenceList" class="list-group-item">

          <div class=" float-left">{{ref.person}} {{index}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyReference(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editReference(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>


    <form v-if="referenceData.formShow">
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label>Şirket Adı</label>
          <input v-model="referenceData.reference.company" type="text" class="form-control"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label>İletişim Kişisi</label>
          <input v-model="referenceData.reference.person" type="text" class="form-control"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label>Telefon Numarası</label>
          <input v-model="referenceData.reference.telephone" type="text" class="form-control"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label>E-posta Adresi</label>
          <input v-model="referenceData.reference.email" type="text" class="form-control"
                 required>
        </div>
      </div>
    </form>


    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addReference(referenceData.reference)" class="m-3 btn btn-outline-info">Kaydet</button>
      </p>
      <p>
        <button @click="addNewReference()" class="btn btn-outline-dark btn-block col-md-8 offset-md-2">Başka Bir
          Referans
          Ekle
        </button>
      </p>
    </div>

  </div>

</template>

<script>
  import {mapMutations, mapGetters} from "vuex"

  export default {

    methods: {
      ...mapMutations([
        'addReference',
        'addNewReference',
        'destroyReference',
        'editReference'
      ]),
    },
    computed: {
      ...mapGetters({
        referenceData: 'getReferenceData'
      })
    }
  }
</script>
