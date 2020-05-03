<template>

  <div class="course">
    <h3 class="course-title">Kurslar ({{courseData.courseList.length}}) </h3>


    <div v-if="courseData.courseList.length>0" class="course-summary">
      <ul class="list-group course-summary-list">
        <li v-for="(crs,index) in courseData.courseList" class="list-group-item">

          <div class=" float-left">{{crs.name}} {{index}}</div>
          <div class=" float-right control-panel">
            <button @click="destroyCourse(index)" class=" btn btn-outline-dar btn-sm">X</button>
            <button @click="editCourse(index)" class=" btn btn-outline-dar btn-sm">D</button>
          </div>
        </li>
      </ul>
    </div>

    <form class="select-div" v-if="courseData.formShow">
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label class="sm-title">Kurs</label>
          <input v-model="courseData.course.name" type="text" class="form-input"
                 placeholder="Örn. Python İle Backend Programlama"
                 required>
        </div>
        <div class="col-md-6 mb-3">
          <label class="sm-title">Kurum</label>
          <input v-model="courseData.course.institution" type="text" class="form-input" placeholder="Örn. Udemy"
                 required>
        </div>

        <div class="col-md-6 mb-3">
          <label class="sm-title">Başlangıç Tarihi</label>
          <br>
          <div class="col-md-6 float-left pl-0">
            <select v-model="courseData.course.starter_date.month" class="form-select ">
              <option disabled selected>Month</option>
              <option :value="'gosterme'">Gösterme</option>

              <option :value="month" v-for="month in courseData.months">{{month}}</option>
            </select>
          </div>
          <div class="col-md-6 float-right pl-0">
            <select v-model="courseData.course.starter_date.year" class="form-select ">
              <option disabled selected>Year</option>
              <option :value="'gosterme'">Gösterme</option>

              <option :value="i" v-for="i in range(1960, 2021)">{{i}}</option>
            </select>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <label class="sm-title">Bitiş Tarihi</label>
          <br>
          <div class="col-md-6 float-left pl-0">
            <select v-model="courseData.course.end_date.month" class="form-select ">
              <option disabled selected>Month</option>
              <option :value="'gosterme'">Gösterme</option>
              <option :value="month" v-for="month in courseData.months">{{month}}</option>
            </select>
          </div>
          <div class="col-md-6 float-right pr-0">
            <select v-model="courseData.course.end_date.year" class="form-select ">
              <option disabled selected>Year</option>
              <option :value="'gosterme'">Gösterme</option>
              <option :value="i" v-for="i in range(1960, 2021)">{{i}}</option>
            </select>
          </div>

        </div>
        <div class="col-md-12 mb-3">
          <label class="sm-title">Açıklama</label>
          <vue-editor v-model="courseData.course.content" :editor-toolbar="customToolbar"></vue-editor>
        </div>
      </div>
    </form>

    <div id="buttons">
      <div class="buttons-block">
        <button class="course-button-remove">Sil</button>
        <button @click="addCourse(courseData.course)" class="course-button-save">Kaydet</button>
      </div>
      <div class="others-block">
        <button @click="addNewCourse()" class="course-button-other">Başka Bir Kurs
          Ekle
        </button>
      </div>
    </div>

  </div>

</template>


<script>
  import {mapMutations, mapGetters} from "vuex"
  import { VueEditor } from "vue2-editor";

  export default {

    components: {
      VueEditor
    },

    data () {
      return {
        customToolbar: [
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ]
      }
    },

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

<style lang="scss" scoped>
  //---------------------------------

  a, button, input, select, option {
    outline: none;
    font-family: sans-serif;
  }

  select {
    //-webkit-appearance: none;
    //-moz-appearance: none;
    //text-indent: 5px;
    //text-overflow: '';
    position: center;

  }

  body {
    font-family: 'Muli', sans-serif;
  }
  //---------------------------------

  .sm-title {
    color: #9aa4ae;
    font-family: sans-serif;
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
  }

  .form-input {
    padding-left: 15px;
    width: 100%;
    height: 45px;
    border: 1.4px solid #eaeaea;
    border-radius: 4px;

    &:focus {
      border: 2px solid #eaeaea;
    }
  }

  .form-select {
    appearance: none;
    background-color: transparent;
    width: 100%;
    height: 45px;
    border: 1.4px solid #eaeaea;
    border-radius: 4px;
  }

  .select-div {
    width: 100%;
    padding-left: 0px;
    margin-left: 0px;
  }

  .select-option {
    padding: 0px;
    display: flex;
    width: 100%;
    justify-content: flex-start;

  }

  //----------------------------------

  .course {
    width: 70%;
    background-color: white;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    padding: 45px 45px;
    -webkit-box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.66);
    -moz-box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.66);
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    margin-top: 100px;

    &-title {
      font-size: 22px;
      letter-spacing: .6px;
      color: rgb(0, 0, 0, 0.8);
    }

    &-summary {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-top: 10px;
      margin-bottom: 20px;

      &-list {
        width: 100%;
      }
    }

    #buttons {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .buttons-block {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      .others-block {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    }

    &-button-remove {

      margin-right: 5px;
      font-weight: 400;
      border: none;
      font-size: 15px;
      color: #565a74;
      width: 85px;
      height: 40px;
      border-radius: 4px;
      background-color: #ecf1f5;
      transition: all .3s;

      &:hover {
        background-color: transparent;
        font-weight: 700;
        cursor: pointer;
        border: none;

      }
    }

    &-button-save {

      margin-left: 5px;
      font-weight: 400;
      border: none;
      color: white;
      width: 85px;
      height: 40px;
      font-size: 15px;
      border-radius: 4px;
      background-color: #3d64ff;
      transition: all .3s;

      &:hover {
        background-color: transparent;
        font-weight: 700;
        cursor: pointer;
        color: #565a74;
      }
    }

    &-button-other {

      border: none;
      background-color: #ecf1f5;
      width: auto;
      border-radius: 4px;
      padding-left: 22.5px;
      padding-right: 22.5px;
      height: 40px;
      font-size: 15px;
      font-weight: 400;
      color: #565a74;

      transition: all .3s;

      &:hover {
        background-color: transparent;
        cursor: pointer;
        color: #565a74;
      }
    }
  }
</style>
