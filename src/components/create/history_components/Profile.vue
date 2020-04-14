<template>

  <div class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3>Profil </h3>


    <div v-if="profile.saveStatus" class="show-course">
      <ul class="list-group">
        <li class="list-group-item">

          <div class=" float-left">{{profile.values.content}}</div>
          <div class=" float-right control-panel">
            <button @click="editProfile" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="profile.formShow">
      <div class="form-row">
        <div class="col-md-12 mb-3">
          <label>Açıklama</label>
          <textarea v-model="profile.values.content" class="form-control"
                    required></textarea>
        </div>


      </div>
    </form>
    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addProfile(profile.values.content)" class="m-3 btn btn-outline-info">Kaydet</button>
      </p>

    </div>
  </div>

</template>


<script>
  import {mapMutations, mapActions, mapGetters} from "vuex";

  export default {

    methods: {
      ...mapMutations({
        addProfile: 'addProfile',
        editProfile : 'editProfile'
      }),
    },
    computed: {
      ...mapGetters({
        profile: 'getProfile',

      })
    }

  }

</script>

<style scoped>

</style>
