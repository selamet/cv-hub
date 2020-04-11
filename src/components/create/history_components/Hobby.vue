<template>

  <div id="hobby" class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3>İlgi Alanları ({{hobbyList.length}})</h3>

    <div v-if="hobbyList.length>0" class="show-education">
      <ul class="list-group">
        <li v-for="(hobby,index) in hobbyList" class="list-group-item">

          <div class=" float-left">{{hobby.name}} {{index}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyHobby(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editHobby(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="formShow">
      <div class="form-row">
        <div class="col-md-12 mb-3">
          <label>Hobi</label>
          <input v-model="hobby.name" type="text" class="form-control" placeholder="Örn. Balık Tutmak"
                 required>
        </div>


      </div>
    </form>
    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addHobby()" class="m-3 btn btn-outline-info">Kaydet</button>
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
  export default {
    data() {
      return {
        formShow: true,
        hobbyList: [],
        hobby: {
          name: '',
        },
        isUpdate: {
          status: false,
          index: null
        }

      }
    },
    methods: {
      addHobby() {
        let query = this.hobby.name.length > 0;
        if (query) {
          if (this.isUpdate.status) {
            this.hobbyList[this.isUpdate.index] = this.hobby;
            this.isUpdate = {
              status: false,
              index: null
            };
            this.formShow = false;
            this.setDefaultHobby();
          } else {
            this.hobbyList.push(this.hobby);
            this.formShow = false;
            this.setDefaultHobby();

          }
        } else {
          alert('Lütfen Tüm Alanları Doldurduğunuzdan Emin Olun!!!');
        }
      },
      setDefaultHobby() {
        this.hobby = {
          name: '',
        }
      },
      addNewHobby() {
        this.setDefaultHobby();
        this.formShow = true;
      },
      destroyHobby(index) {
        this.hobbyList.splice(index, 1);
      },
      editHobby(index) {
        this.hobby = this.hobbyList[index];
        this.formShow = true;
        this.isUpdate = {
          status: true,
          index: index

        }
      }
    }

  }

</script>

<style scoped>

</style>
