<template>

  <div class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3>Başarılar ({{achievementList.length}})</h3>

    <div v-if="achievementList.length>0" class="show-education">
      <ul class="list-group">
        <li v-for="(ach,index) in achievementList" class="list-group-item">

          <div class=" float-left">{{ach.content}} {{index}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyAchievement(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editAchievement(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="formShow">
      <div class="form-row">
        <div class="col-md-12 mb-3">
          <label>Açıklama</label>
          <textarea v-model="achievement.content" class="form-control"
                    required></textarea>
        </div>


      </div>
    </form>
    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addAchievement()" class="m-3 btn btn-outline-info">Kaydet</button>
      </p>
      <p>
        <button @click="addNewAchievement()" class="btn btn-outline-dark btn-block col-md-8 offset-md-2">Başka Bir
          Başarı Ekle

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
        achievementList: [],
        achievement: {
          content: '',
        },
        isUpdate: {
          status: false,
          index: null
        }

      }
    },
    methods: {
      addAchievement() {
        let query = this.achievement.content.length > 0;
        if (query) {
          if (this.isUpdate.status) {
            this.achievementList[this.isUpdate.index] = this.achievement;
            this.isUpdate = {
              status: false,
              index: null
            };
            this.formShow = false;
            this.setDefaultAchievement();
          } else {
            this.achievementList.push(this.achievement);
            this.formShow = false;
            this.setDefaultAchievement();

          }
        } else {
          alert('Lütfen Tüm Alanları Doldurduğunuzdan Emin Olun!!!');
        }
      },
      setDefaultAchievement() {
        this.achievement = {
          content: '',
        }
      },
      addNewAchievement() {
        this.setDefaultAchievement();
        this.formShow = true;
      },
      destroyAchievement(index) {
        this.achievementList.splice(index, 1);
      },
      editAchievement(index) {
        this.achievement = this.achievementList[index];
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
