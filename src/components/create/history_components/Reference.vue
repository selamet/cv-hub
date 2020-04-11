<template>
  <div class="col-10 offset-1 pt-3  mt-5 shadow ">

    <h3>Referanslar ({{referenceList.length}})</h3>


    <div v-if="referenceList.length>0" class="show-education">
      <ul class="list-group">
        <li v-for="(ref,index) in referenceList" class="list-group-item">

          <div class=" float-left">{{ref.person}} {{index}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyReference(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editReference(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>


    <form v-if="formShow">
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label>Şirket Adı</label>
          <input v-model="reference.company" type="text" class="form-control"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label>İletişim Kişisi</label>
          <input v-model="reference.person" type="text" class="form-control"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label>Telefon Numarası</label>
          <input v-model="reference.telephone" type="text" class="form-control"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label>E-posta Adresi</label>
          <input v-model="reference.email" type="text" class="form-control"
                 required>
        </div>
      </div>
    </form>


    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addReference()" class="m-3 btn btn-outline-info">Kaydet</button>
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
  export default {
    data() {
      return {
        formShow: true,
        isUpdate: {
          status: false,
          index: null
        },
        reference: {
          company: '',
          person: '',
          telephone: '',
          email: '',

        },
        referenceList: [],
      }
    },
    methods: {
      addReference() {
        let query_1 = this.reference.company.length > 0 || this.reference.person.length > 0;
        let query_2 = this.reference.telephone.length > 0 || this.reference.email.length > 0;

        if (query_1 && query_2) {
          if (this.isUpdate.status) {
            /*update*/

            this.referenceList[this.isUpdate.index] = this.reference;
            this.formShow = false;
            this.setDefaultReference();
            this.isUpdate = {
              status: false,
              index: null
            }
          } else {
            /*create*/
            this.referenceList.push(this.reference);
            this.formShow = false;
            this.setDefaultReference();
          }
        } else {
          alert('Şirket veya Kişi Seçiniz ve En az Bir İletişim Şekil Giriniz.')
        }

      },
      addNewReference() {
        this.setDefaultReference();
        this.formShow = true;
      },
      destroyReference(index) {
        this.referenceList.splice(index, 1);
      },
      editReference(index) {
        this.reference = this.referenceList[index];
        this.formShow = true;
        this.isUpdate = {
          status: true,
          index: index
        }
      },
      setDefaultReference() {
        this.reference = {
          company: '',
          person: '',
          telephone: '',
          email: '',

        }
      },

    }
  }
</script>
