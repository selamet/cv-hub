<template>

  <div class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3>Yayınlar ({{PublicationList.length}})</h3>

    <div v-if="PublicationList.length>0" class="show-education">
      <ul class="list-group">
        <li v-for="(pbl,index) in PublicationList" class="list-group-item">

          <div class=" float-left">{{pbl.content}} {{index}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyPublication(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editPublication(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="formShow">
      <div class="form-row">
        <div class="col-md-12 mb-3">
          <label>Açıklama</label>
          <textarea v-model="publication.content" class="form-control"
                    required></textarea>
        </div>


      </div>
    </form>
    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addPublication()" class="m-3 btn btn-outline-info">Kaydet</button>
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
  export default {
    data() {
      return {
        formShow: true,
        PublicationList: [],
        publication: {
          content: '',
        },
        isUpdate: {
          status: false,
          index: null
        }

      }
    },
    methods: {
      addPublication() {
        let query = this.publication.content.length > 0;
        if (query) {
          if (this.isUpdate.status) {
            this.PublicationList[this.isUpdate.index] = this.publication;
            this.isUpdate = {
              status: false,
              index: null
            };
            this.formShow = false;
            this.setDefaultPublication();
          } else {
            this.PublicationList.push(this.publication);
            this.formShow = false;
            this.setDefaultPublication();

          }
        } else {
          alert('Lütfen Tüm Alanları Doldurduğunuzdan Emin Olun!!!');
        }
      },
      setDefaultPublication() {
        this.publication = {
          content: '',
        }
      },
      addNewPublication() {
        this.setDefaultPublication();
        this.formShow = true;
      },
      destroyPublication(index) {
        this.PublicationList.splice(index, 1);
      },
      editPublication(index) {
        this.publication = this.PublicationList[index];
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
