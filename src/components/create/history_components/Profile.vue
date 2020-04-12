<template>

  <div class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3>Profil </h3>


    <div v-if="saveStatus && profile.content.length>0" class="show-course">
      <ul class="list-group">
        <li class="list-group-item">

          <div class=" float-left">{{profile.content}}</div>
          <div class=" float-right control-panel">
            <button @click="editProfile()" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="formShow">
      <div class="form-row">
        <div class="col-md-12 mb-3">
          <label>Açıklama</label>
          <textarea v-model="profile.content" class="form-control"
                    required></textarea>
        </div>


      </div>
    </form>
    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addProfile()" class="m-3 btn btn-outline-info">Kaydet</button>
      </p>

    </div>
  </div>

</template>


<script>
  export default {
    data() {
      return {
        formShow: true,
        saveStatus: false,
        profile: {
          content: '',
        },
      }
    },
    methods: {
      addProfile() {
        let query = this.profile.content.length > 0;
        if (query) {
          this.saveStatus = true;
          this.formShow = false;
        } else {
          alert('Lütfen Tüm Alanları Doldurduğunuzdan Emin Olun!!!');
        }
      },


      editProfile() {
        this.formShow = true;
        this.saveStatus = false;

      }
    }

  }

</script>

<style scoped>

</style>
