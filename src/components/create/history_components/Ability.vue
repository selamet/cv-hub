<template>
  <div id="ability" class="col-10 offset-1 pt-3  mt-5 shadow ">

    <h3>Yetenekler ({{abilityData.abilityList.length}})</h3>

    <div v-if="abilityData.abilityList.length>0" class="show-education">
      <ul class="list-group">
        <li v-for="(ab,index) in abilityData.abilityList" class="list-group-item">

          <div class=" float-left">{{ab.name}} {{index}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyAbility(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editAbility(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="abilityData.formShow">
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label>Beceri</label>
          <input v-model="abilityData.ability.name" type="text" class="form-control" placeholder="Örn. Microsoft Word"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label>Seviye</label>
          <select v-model="abilityData.ability.level" class="form-control ">
            <option disabled selected>Seç</option>
            <option :value="key" v-for="(level,key) in abilityData.abilityLevel">{{level}}</option>


          </select>
        </div>


      </div>
    </form>
    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button :disabled="saveEnabled" @click="addAbility(abilityData.ability)" class="m-3 btn btn-outline-info">Kaydet</button>
      </p>
      <p>
        <button @click="addNewAbility()" class="btn btn-outline-dark btn-block col-md-8 offset-md-2">Başka bir beceri
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
        'addNewAbility',
        'destroyAbility',
        'editAbility',
        'addAbility'

      ]),


    },
    computed: {
      ...mapGetters({
        abilityData: 'getAbilityData'
      }),

      // ---------------------------  u  g  i  --------------------
      saveEnabled () {
        if (this.abilityData.ability.name.length > 0 && this.abilityData.ability.level > 0){
          return false;
        }
        else {
          return true;
        }
      }
      // ----------------------------------------------------------
    }
  }

</script>

<style scoped>


</style>
