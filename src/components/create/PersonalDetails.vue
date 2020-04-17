<template>
  <div class="container">
    <div class="row">

      <div class="col-10 offset-1 pt-3 mt-5 shadow">
        <form>

          <div class="form-row">
            <div class="card offset-4 col-md-3">
              <div class="card-body tex-center d-flex align-items-center flex-column">
                <img height="128" class="img-responsive text-center mb-3"
                     :src="personalDetails.image == null ? '/src/assets/default.png' : personalDetails.image">
                <input ref="file" type="file" style="display: none;" @change="onChange($event)" class="form-control">
                <button class="btn btn-outline-secondary " type="button" @click="$refs.file.click()">Resim Seç</button>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-6 mb-3">
              <label>İsim</label>
              <input v-model="personalDetails.name" type="text" class="form-control" placeholder="İsmini girin"
                     required>
            </div>
            <div class="col-md-6 mb-3">
              <label>Soyisim</label>
              <input v-model="personalDetails.surname" type="text" class="form-control" placeholder="Soy isminizi girin"
                     required>
            </div>

            <div class="col-md-6 mb-3">
              <label>Telefon</label>

              <input v-model="personalDetails.phoneNumber" class="form-control" type="tel"
                     placeholder="Telefon numaranızı girin">
            </div>
            <div class="col-md-6 mb-3">
              <label>Email</label>

              <input v-model="personalDetails.email" class="form-control" type="email">

            </div>

            <div class="col-md-12 mb-3">
              <label>Adres</label>
              <input v-model="personalDetails.address" type="text" class="form-control">
            </div>
            <div class="col-md-6 mb-3">
              <label>Şehir</label>
              <input v-model="personalDetails.city" type="text" class="form-control">
            </div>

          </div>
        </form>

        <transition name="fade" mode="out-in">

          <form class="" v-if="this.additionalInformationShow">
            <div class="form-row">

              <div class="form-group col-md-6">

                <label>Doğum Tarihi</label><br>
                <div class="float-left col-lg-4 ">
                  <input v-model="birthdayValues.day" placeholder="Day" type="number" class="form-control">
                </div>
                <div class="float-left col-lg-4">
                  <select class="form-control" v-model="birthdayValues.month">
                    <option selected disabled>Month</option>
                    <option
                      v-for="month in birthdayValues.months"> {{month}}
                    </option>
                  </select>
                </div>
                <div class="float-left col-lg-4">
                  <input :maxlength="4" v-model="birthdayValues.year" placeholder="Year" type="number"
                         class="form-control">
                </div>
              </div>
              <div class=" col-md-6 form-group">
                <label>Doğum Yeri</label>
                <input v-model="personalDetails.placeOfBirth" type="text" class="form-control">
              </div>
              <div class="col-md-6 form-group">
                <label>Sürücü Ehliyeti</label>
                <select v-model="personalDetails.drivingLicense" class="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="col-md-6 form-group">
                <label> Cinsiyet Seçiniz</label>
                <select v-model="personalDetails.gender" class="form-control">
                  <option key="erkek">Erkek</option>
                  <option key="kadin">Kadın</option>
                </select>
              </div>

              <div class="form-group col-md-6">
                <label>Medeni Durum</label>
                <input v-model="personalDetails.maritalStatus" type="text" class="form-control">
              </div>
              <div class="col-md-6 form-group">
                <label>İnternet Sitesi</label>
                <input v-model="personalDetails.website" type="url" class="form-control">
              </div>

            </div>


          </form>
        </transition>
        <button @click="additionalInformationChange()"
                class="btn btn-block mb-3 mt-3 btn-outline-secondary">Ek Bilgiler
        </button>
      </div>
    </div>

    <p class="text-center m-3 mt-5">
      {{personalDetails.name}}
      <button @click="setPersonalDetails(personalDetails)" class="col-md-3 btn btn-lg btn-outline-dark">Devamke
      </button>
    </p>
  </div>


</template>

<script>
  import {mapMutations, mapActions, mapGetters} from "vuex";
  import {getPersonalDetails} from "../../store/getters";

  export default {
    data() {
      return {
        additionalInformationShow: false,

      }
    },
    methods: {
      ...mapActions([
          'setPersonalDetails',
        ]
      ),
      onChange(e) {
        const file = e.target.files[0];
        this.personalDetails.image = URL.createObjectURL(file);
      },


      additionalInformationChange() {
        this.additionalInformationShow = !this.additionalInformationShow;
      }
    },
    watch: {
      "birthdayValues.day"() {
        if ((this.birthdayValues.year != null && this.birthdayValues.month != null) && (this.birthdayValues.year)) {
          this.personalDetails.birthday = this.birthdayValues.day + ' ' +
            this.birthdayValues.month + ' ' + this.birthdayValues.year;
        }
      }
      ,
      "birthdayValues.year"(value) {
        if ((this.birthdayValues.day != null && this.birthdayValues.month != null) && (value.length)) {
          this.personalDetails.birthday = this.birthdayValues.day + ' ' +
            this.birthdayValues.month + ' ' + this.birthdayValues.year;
        }
      }
      ,
      "birthdayValues.month"() {
        if ((this.birthdayValues.year != null && this.birthdayValues.day != null) && (this.birthdayValues.year)) {
          this.personalDetails.birthday = this.birthdayValues.day + ' ' +
            this.birthdayValues.month + ' ' + this.birthdayValues.year;
        }
      }
    },
    computed: {
      ...mapGetters({
        personalDetails: 'getPersonalDetails',
        birthdayValues: 'getBirthdayValue',

      }),

    }
  }
</script>


<style scoped>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity .3s ease-out;
  }

  .fade-leave {
  }

  .fade-leave-active {
    transition: opacity .3s ease-out;
    opacity: 0;
  }
</style>
