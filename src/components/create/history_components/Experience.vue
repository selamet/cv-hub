<template>

  <div class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3>İş Deneyimi ({{experienceList.length}}) </h3>


    <div v-if="experienceList.length>0">
      <ul class="list-group">
        <li v-for="(ex,index) in experienceList" class="list-group-item">

          <div class=" float-left">{{ex.jobTitle}}>>{{ex.employer}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyExperience(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editExperience(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="formShow">
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label>İş Unvanı</label>
          <input v-model="experience.jobTitle" type="text" class="form-control"
                 placeholder="Örn. Satış Yöneticisi"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label>Şehir</label>
          <input v-model="experience.city" type="text" class="form-control" placeholder="Örn. İstanbul"
                 required>
        </div>
        <div class="col-md-12 mb-3">
          <label>İşveren</label>
          <input v-model="experience.employer" type="text" class="form-control" placeholder="Örn. GreatCode"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label class="">Başlangıç Tarihi</label>
          <br>
          <div class="col-md-6 float-left">
            <select v-model="experience.starter_date.month" class="form-control ">
              <option disabled selected>Month</option>
              <option :value="'gosterme'">Gösterme</option>

              <option :value="month" v-for="month in months">{{month}}</option>
            </select>
          </div>
          <div class="col-md-6 float-right">
            <select v-model="experience.starter_date.year" class="form-control ">
              <option disabled selected>Year</option>
              <option :value="'gosterme'">Gösterme</option>

              <option :value="i" v-for="i in range(1960, 2021)">{{i}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <label class="">Bitiş Tarihi</label>
          <br>
          <div class="col-md-6 float-left">
            <select v-model="experience.end_date.month" class="form-control ">
              <option disabled selected>Month</option>
              <option :value="'gosterme'">Gösterme</option>
              <option :value="month" v-for="month in months">{{month}}</option>
            </select>
          </div>
          <div class="col-md-6 float-right">
            <select v-model="experience.end_date.year" class="form-control ">
              <option disabled selected>Year</option>
              <option :value="'gosterme'">Gösterme</option>
              <option :value="i" v-for="i in range(1960, 2021)">{{i}}</option>
            </select>
          </div>
        </div>

      </div>
    </form>

    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addExperience()" class="m-3 btn btn-outline-info">Kaydet</button>
      </p>
      <p>
        <button @click="addNewExperience()" class="btn btn-outline-dark btn-block col-md-8 offset-md-2">Başka Bir İş Deneyimi
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
        months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
        ,
        formShow: true,
        isUpdate: {
          status: false,
          index: null
        },
        experience: {
          jobTitle: null,
          city: null,
          employer: null,
          starter_date: {
            month: 'Month',
            year: 'Year'
          },
          end_date: {
            month: 'Month',
            year: 'Year'
          },
          content: '',
        },
        experienceList: [],
      }
    },
    methods: {
      range: function (start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
      },
      addExperience() {
        let query = this.experience.jobTitle != null && this.experience.city != null && this.experience.employer != null
          && this.experience.starter_date.month != 'Month' && this.experience.starter_date.year != 'Year'
          && this.experience.end_date.month != 'Month' && this.experience.end_date.year != 'Year';
        if (query) {
          /* Tempalte üzerinde gösterirken bir filter yazılacak!!!!! */
          for (var i in this.experience.starter_date) {
            if (this.experience.starter_date[i] == 'gosterme') {
              this.experienceexperience.starter_date[i] = null;
            }
          }
          for (var i in this.experience.end_date) {
            if (this.experience.end_date[i] == 'gosterme') {
              this.experience.end_date[i] = null;
            }
          }
          if (this.isUpdate.status) {
            this.experienceList[this.isUpdate.index] = this.experience;
            this.formShow = false;
            this.isUpdate = {
              status: false,
              index: null
            };
            this.setDefaultExperience();
          } else {
            this.experienceList.push(this.experience);
            this.formShow = false;
            this.setDefaultExperience();
          }
        } else {
          alert("Lütfen Tüm Alanları Doldurunuz !!!!");
        }
      },
      addNewExperience() {
        this.setDefaultExperience();
        this.formShow = true;
      }
      ,
      editExperience(index) {
        this.experience = this.experienceList[index];
        this.formShow = true;
        this.isUpdate.status = true;
        this.isUpdate.index = index;
      },
      destroyExperience(index) {
        this.experienceList.splice(index, 1);
      },
      setDefaultExperience() {
        this.experience = {
          jobTitle: null,
          city: null,
          employer: null,
          starter_date: {
            month: 'Month',
            year: 'Year'
          },
          end_date: {
            month: 'Month',
            year: 'Year'
          },
          content: '',
        }
      }
    }
  }
</script>

<style scoped>
</style>
