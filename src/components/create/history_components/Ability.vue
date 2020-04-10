<template>
  <div id="ability" class="col-10 offset-1 pt-3  mt-5 shadow ">

    <h3>Yetenekler ({{abilityList.length}})</h3>

    <div v-if="abilityList.length>0" class="show-education">
      <ul class="list-group">
        <li v-for="(ab,index) in abilityList" class="list-group-item">

          <div class=" float-left">{{ab.name}} {{index}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyAbility(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editAbility(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="formShow">
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label>Beceri</label>
          <input v-model="ability.name" type="text" class="form-control" placeholder="Örn. Microsoft Word"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label>Seviye</label>
          <select v-model="ability.level" class="form-control ">
            <option disabled selected>Seç</option>
            <option :value="key" v-for="(level,key) in abilityLevel">{{level}}</option>


          </select>
        </div>


      </div>
    </form>
    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addAbility()" class="m-3 btn btn-outline-info">Kaydet</button>
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
  export default {
    data() {
      return {
        abilityLevel: ['Acemi', 'Başlangıç', 'Yetenekli', 'Deneyimli', 'Uzman'],
        formShow: true,
        abilityList: [],
        ability: {
          name: null,
          level: 'Seç'
        },
        isUpdate: {
          status: false,
          index: null
        }
      }
    },
    methods: {
      setDefaultAbility() {
        this.ability = {
          name: null,
          level: 'Seç'
        }
      },
      addAbility() {
        let query = this.ability.name != null && this.ability.level != 'Seç';
        if (query) {
          if (this.isUpdate.status) {
            /* update */
            this.abilityList[this.isUpdate.index] = this.ability;
            this.formShow = false;
            this.isUpdate = {
              status: false,
              index: null
            };
            this.setDefaultAbility();


          } else {
            /* create */
            this.abilityList.push(this.ability);
            this.formShow = false;
            this.setDefaultAbility();
          }


        } else {
          alert('Lütfen Tüm Alanları Doldurduğunuza Emin Olun')
        }
      },

      addNewAbility() {
        this.setDefaultAbility();
        this.formShow = true
      },
      destroyAbility(index) {
        this.abilityList.splice(index, 1);
      },
      editAbility(index) {
        this.ability = this.abilityList[index];
        this.formShow = true;
        this.isUpdate = {
          status: true,
          index: null
        }
      },

    }
  }

</script>

<style scoped>


</style>
