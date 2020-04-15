<template>

  <div class="col-10 offset-1 pt-3  mt-5 shadow ">
    <h3>Kurslar ({{courseData.courseList.length}}) </h3>


    <div v-if="courseData.courseList.length>0" class="show-course">
      <ul class="list-group">
        <li v-for="(crs,index) in courseData.courseList" class="list-group-item">

          <div class=" float-left">{{crs.name}} {{index}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyCourse(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editCourse(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form v-if="courseData.formShow">
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label>Kurs</label>
          <input v-model="courseData.course.name" type="text" class="form-control"
                 placeholder="Örn. Python İle Backend Programlama"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label>Kurum</label>
          <input v-model="courseData.course.institution" type="text" class="form-control" placeholder="Örn. Udemy"
                 required>
        </div>

        <div class="col-md-6 mb-3">
          <label class="">Başlangıç Tarihi</label>
          <br>
          <div class="col-md-6 float-left">
            <select v-model="courseData.course.starter_date.month" class="form-control ">
              <option disabled selected>Month</option>
              <option :value="'gosterme'">Gösterme</option>

              <option :value="month" v-for="month in courseData.months">{{month}}</option>
            </select>
          </div>
          <div class="col-md-6 float-right">
            <select v-model="courseData.course.starter_date.year" class="form-control ">
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
            <select v-model="courseData.course.end_date.month" class="form-control ">
              <option disabled selected>Month</option>
              <option :value="'gosterme'">Gösterme</option>
              <option :value="month" v-for="month in courseData.months">{{month}}</option>
            </select>
          </div>
          <div class="col-md-6 float-right">
            <select v-model="courseData.course.end_date.year" class="form-control ">
              <option disabled selected>Year</option>
              <option :value="'gosterme'">Gösterme</option>
              <option :value="i" v-for="i in range(1960, 2021)">{{i}}</option>
            </select>
          </div>

        </div>
        <div class="col-md-12 mb-3">
          <label>Açıklama</label>
          <textarea v-model="courseData.course.content" class="form-control"
                    required></textarea>
        </div>
      </div>
    </form>

    <div id="buttons">
      <p class="text-right">
        <button class="m-3 btn btn-outline-danger">Sil</button>
        <button @click="addCourse(courseData.course)" class="m-3 btn btn-outline-info">Kaydet</button>
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
  import {mapMutations, mapGetters} from "vuex"

  export default {

    methods: {
      range: function (start, end) {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
      },
      ...mapMutations([
        'addCourse',
        'addNewCourse',
        'setDefaultCourse',
        'destroyCourse',
        'editCourse'
      ])

    },
    computed: {
      ...mapGetters({
        courseData: 'getCourseData'
      })
    }
  }
</script>

<style scoped>
</style>
