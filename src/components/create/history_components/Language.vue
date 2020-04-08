<template>
  <div id="profile" class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3> Language ({{languageList.length}})</h3>

    <div v-if="languageList.length>0" class="show-education">
      <ul class="list-group">
        <li v-for="(lang,index) in languageList" class="list-group-item">

          <div class=" float-left">{{lang.name}} {{index}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyLanguage(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editLanguage(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="formShow">
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label>Dil</label>
          <input v-model="language.name" type="text" class="form-control" placeholder="Örn. İspanyolca"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label>Seviye</label>
          <select v-model="language.level" class="form-control ">
            <option disabled selected>Seç</option>
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
            <option :value="4">4</option>
            <option :value="5">5</option>

          </select>
        </div>


      </div>
    </form>
    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addLanguage()" class="m-3 btn btn-outline-info">Kaydet</button>
      </p>
      <p>
        <button @click="addNewLanguage()" class="btn btn-outline-dark btn-block col-md-8 offset-md-2">Başka bir dil
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
        formShow: true,
        languageList: [],
        language: {
          name: null,
          level: 'Seç',
        },
        isUpdate: {
          status: false,
          index: null
        }
      }
    },
    methods: {
      addLanguage() {
        let query = this.language.name != null && this.language.level != 'Seç';
        if (query) {
          if (this.isUpdate.status) {
            this.languageList[this.isUpdate.index] = this.language;
            this.formShow = false;
            this.isUpdate = {
              status: false,
              index: null
            };
            this.setDefaultLanguage();
          } else {
            this.languageList.push(this.language);
            this.formShow = false;
            this.setDefaultLanguage();
          }

        } else {
          alert('Tüm kısımları doldurduğunuzdan emin olun!!!');
        }
      },
      destroyLanguage(index) {
        this.languageList.splice(index,1);
      },
      editLanguage(index) {
        this.language = this.languageList[index];
        this.formShow = true;
        this.isUpdate.status = true;
        this.isUpdate.index = index;
      },
      addNewLanguage() {
        this.setDefaultLanguage();
        this.formShow = true;

      },
      setDefaultLanguage(){
        this.language = {
          name: null,
          level: 'Seç',
        };
      }

    }
  }
</script>

<style scoped>


</style>
