<template>

  <div id="hobby" class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3>İlgi Alanları ({{hobbyData.hobbyList.length}})</h3>

    <div v-if="hobbyData.hobbyList.length>0" class="show-education">
      <ul class="list-group">
        <li v-for="(hobby,index) in hobbyData.hobbyList" class="list-group-item">

          <div class=" float-left">{{hobby.name}} {{index}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyHobby(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editHobby(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="hobbyData.formShow">
      <div class="form-row">
        <div class="col-md-12 mb-3">
          <label>Hobi</label>
          <input v-model="hobbyData.hobby.name" type="text" class="form-control" placeholder="Örn. Balık Tutmak"
                 required>
        </div>


      </div>
    </form>
    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addHobby(hobbyData.hobby)" class="m-3 btn btn-outline-info">Kaydet</button>
      </p>
      <p>
        <button @click="addNewHobby()" class="btn btn-outline-dark btn-block col-md-8 offset-md-2">Başka bir hobi
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
        'addHobby',
        'addNewHobby',
        'destroyHobby',
        'editHobby'
      ]),

    },
    computed: {
      ...mapGetters({
        hobbyData: 'getHobbyData'
      }),
    }

  }

</script>

<style scoped>

</style>
