<template>

  <div class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3>Kurslar ({{courseList.length}}) </h3>


    <div v-if="courseList.length>0" class="show-course">
      <ul class="list-group">
        <li v-for="(crs,index) in courseList" class="list-group-item">

          <div class=" float-left">{{crs.name}} {{index}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyCourse(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editCourse(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="formShow">
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label>Kurs</label>
          <input v-model="course.name" type="text" class="form-control"
                 placeholder="Örn. Python İle Backend Programlama"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label>Kurum</label>
          <input v-model="course.institution" type="text" class="form-control" placeholder="Örn. Udemy"
                 required>
        </div>

        <div class="col-md-6 mb-3">
          <label class="">Başlangıç Tarihi</label>
          <br>
          <div class="col-md-6 float-left">
            <select v-model="course.starter_date.month" class="form-control ">
              <option disabled selected>Month</option>
              <option :value="'gosterme'">Gösterme</option>

              <option :value="month" v-for="month in months">{{month}}</option>
            </select>
          </div>
          <div class="col-md-6 float-right">
            <select v-model="course.starter_date.year" class="form-control ">
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
            <select v-model="course.end_date.month" class="form-control ">
              <option disabled selected>Month</option>
              <option :value="'gosterme'">Gösterme</option>
              <option :value="month" v-for="month in months">{{month}}</option>
            </select>
          </div>
          <div class="col-md-6 float-right">
            <select v-model="course.end_date.year" class="form-control ">
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
        <button @click="addCourse()" class="m-3 btn btn-outline-info">Kaydet</button>
      </p>
      <p>
        <button @click="addNewCourse()" class="btn btn-outline-dark btn-block col-md-8 offset-md-2">Başka Bir Kurs
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
        course: {
          name: null,
          institution: null,
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
        courseList: [],
      }
    },
    methods: {
      range: function (start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
      },
      addCourse() {
        let query = this.course.name != null && this.course.institution != null
          && this.course.starter_date.month != 'Month' && this.course.starter_date.year != 'Year'
          && this.course.end_date.month != 'Month' && this.course.end_date.year != 'Year';
        console.log(this.course.name, this.course.institution, this.course.starter_date.month, this.course.starter_date.year, this.course.end_date.month, this.course.end_date.year)
        if (query) {
          /* Tempalte üzerinde gösterirken bir filter yazılacak!!!!! */
          for (var i in this.course.starter_date) {
            if (this.course.starter_date[i] == 'gosterme') {
              this.course.starter_date[i] = null;
            }
          }
          for (var i in this.course.end_date) {
            if (this.course.end_date[i] == 'gosterme') {
              this.course.end_date[i] = null;
            }
          }
          if (this.isUpdate.status) {
            this.courseList[this.isUpdate.index] = this.course;
            this.formShow = false;
            this.isUpdate = {
              status: false,
              index: null
            };
            this.setDefaultCourse();
          } else {
            this.courseList.push(this.course);
            this.formShow = false;
            this.setDefaultCourse();
          }
        } else {
          alert("Lütfen Tüm Alanları Doldurunuz !!!!");
        }
      },
      addNewCourse() {
        this.setDefaultCourse();
        this.formShow = true;
      }
      ,
      editCourse(index) {
        this.course = this.courseList[index];
        this.formShow = true;
        this.isUpdate.status = true;
        this.isUpdate.index = index;
      },
      destroyCourse(index) {
        this.courseList.splice(index, 1);
      },
      setDefaultCourse() {
        this.course = {
          agree: null,
          city: null,
          starter_date: {
            month: 'Month',
            year: 'Year'
          },
          end_date: {
            month: 'Month',
            year: 'Year'
          },
        };
      }
    }
  }
</script>

<style scoped>
</style>
