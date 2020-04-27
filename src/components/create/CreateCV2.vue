<template>
  <div class="inclusive">

    <div id="lorem" class="container">
      <div class="personal">


        <div class="personal-collective personal-image">

          <img class="personal-image-img" :src="personalDetails.image" alt="">

        </div>


        <div class="personal-collective personal-contact">
          <h2 class="personal-title"><i class="fa fa-user"></i> Contact</h2>

          <div class="personal-contact-list">

            <div class="personal-contact-list-item">
              <i class="fa fa-phone"></i>
              <span class="phone">0533 333 3333</span>
            </div>

            <div class="personal-contact-list-item">
              <i class="fa fa-phone"></i>
              <span>selametsamli</span>
            </div>

            <div class="personal-contact-list-item">
              <i class="fa fa-phone"></i>
              <span>selamet.github.com</span>
            </div>

            <div class="personal-contact-list-item">
              <i class="fa fa-phone"></i>
              <span>Silikon Valley</span>
            </div>

          </div>

        </div>


        <div class="personal-collective personal-education">
          <h2 class="personal-title"><i class="fa fa-book"></i> Education</h2>

          <div class="personal-education-list">

            <div class="personal-education-list-item">
              <h3>Lorem ipsum dolor.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>

            <div class="personal-education-list-item">
              <h3>Lorem ipsum dolor.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>


          </div>
        </div>


        <div class="personal-collective personal-skills">
          <h2 class="personal-title"><i class="fa fa-globe"></i> Skills</h2>

          <div class="personal-skills-list">
            <div class="personal-skills-list-item">
              <h3>HTML / CSS</h3>
            </div>
            <div class="personal-skills-list-item">
              <h3>Javascript</h3>
            </div>
            <div class="personal-skills-list-item">
              <h3>Vue</h3>
            </div>
            <div class="personal-skills-list-item">
              <h3>React</h3>
            </div>
            <div class="personal-skills-list-item">
              <h3>Photoshop</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="general">
        <div class="general-name-title">
          <h1>Selamet Şamlı</h1>
          <h3>Software Developer</h3>
        </div>

        <div class="general-work">
          <h2 class="general-work-heading">Work Experience</h2>
          <div class="general-work-title">

            <div class="general-work-title-company">
              <h3 class="general-work-title-company-name">Great Code</h3>
              <h3 class="general-work-title-company-position">Software Developer</h3>
            </div>

            <div class="general-work-title-date">
              <p>25 March, 2019</p>
            </div>

          </div>


          <div class="general-work-title">

            <div class="general-work-title-company">
              <h3 class="general-work-title-company-name">Nasa</h3>
              <h3 class="general-work-title-company-position">Python Developer</h3>
            </div>

            <div class="general-work-title-date">
              <p>22 August, 2018</p>
            </div>

          </div>

        </div>


        <div class="general-achievements">
          <h2 class="general-achievements-heading">Achievements</h2>
          <div class="general-achievements-title">

            <div class="general-achievements-title-organization">
              <h3 class="general-achievements-title-organization-name">Django Girls</h3>
              <h3 class="general-achievements-title-organization-position">Software Trainer</h3>
            </div>

            <div class="general-achievements-title-location">
              <p>Trabzon</p>
            </div>

          </div>

          <div class="general-achievements-title">

            <div class="general-achievements-title-organization">
              <h3 class="general-achievements-title-organization-name">PyErzurum</h3>
              <h3 class="general-achievements-title-organization-position">Speaker</h3>
            </div>

            <div class="general-achievements-title-location">
              <p>Erzurum</p>
            </div>

          </div>
        </div>


        <div class="general-language">
          <h2 class="general-language-heading">Language</h2>
          <div class="general-language-title">

            <div class="general-language-title-organization">
              <h3 class="general-language-title-organization-name">ingilizce</h3>
            </div>

            <div class="general-language-title-location">
              <p>3</p>
            </div>

          </div>


        </div>


      </div>

    </div>

    <button @click="createPDF()">PDF</button>

  </div>

</template>


<script>

  import {mapMutations, mapActions, mapGetters} from "vuex";

  import jsPDF from 'jspdf'
  import * as html2canvas from "html2canvas"


  export default {
    methods: {
      createPDF() {
        var divHeight = document.getElementById('lorem').clientHeight;
        var divWidth = document.getElementById('lorem').clientWidth;
        var ratio = divHeight / divWidth;

        html2canvas(document.querySelector("#lorem")).then(canvas => {
          document.body.appendChild(canvas);


        });
        const input = document.getElementById('lorem');
        html2canvas(input, {
          height: divHeight,
          width: divWidth,
          scrollX: 0,
          scrollY: -window.scrollY,
          scale: 2,
          dpi: 144
        }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF("p", "mm", "a4");
          var width = pdf.internal.pageSize.getWidth();
          var height = pdf.internal.pageSize.getHeight();
          height = ratio * width;


          console.log(width, height);
          pdf.addImage(imgData, 'PNG', 0, 0, width, height - 10);
          window.open(pdf.output('bloburl'), '_blank');

          //  pdf.save("download.pdf");
        });


      },
    },

    computed: {
      ...mapGetters({
        education: 'getEducationData',
        personalDetails: 'getPersonalDetails',
        language: 'getLanguageData',
        profile: 'getProfile',
        experience: 'getExperienceData',
        ability: 'getAbilityData',
        achievement: 'getAchievementData',
        course: 'getCourseData'
      }),


    }
  }

</script>


<style lang="scss">

  $orange-background: rgb(232 153 103);
  $dark-color: rgb(49 49 49);
  $light-color: #dddddd;
  $x-light-color: #ededed;

  .inclusive {
    background-color: #1d1133;
    padding: 0px;
    width: 100%;
    height: 1684px;
  }

  .container {
    margin-top: 0px;
    height: calc(1684px);
    background-color: $x-light-color;
    padding: 0px;
    display: flex;
    width: 1190px;

    border-radius: 10px;

    /* ------------ Personal Section ------------ */
    .personal {
      width: 25%;
      padding-left: 5%;
      padding-right: 5%;
      height: 1684px;
      background-color: rgba(232, 153, 103, 0.4);
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      -webkit-box-shadow: 3px 0px 7px 1px rgba(14, 62, 94, 0.10);
      -moz-box-shadow: 3px 0px 7px 1px rgba(14, 62, 94, 0.10);
      box-shadow: 3px 0px 7px 1px rgba(14, 62, 94, 0.10);

      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;

      &-collective {
        height: 25%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        padding-top: 0px;
      }

      &-title {
        border-radius: 1px;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 4px;
        font-family: "LiHei Pro";
        background-color: $dark-color;
        padding-left: 5%;
        width: 100%;
        font-weight: 400;
        padding-top: 10px;
        padding-bottom: 10px;
        color: $light-color;
        display: block;

      }


      &-image {

        display: flex;
        justify-content: center;
        width: 100%;
        align-items: center;

        &-img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 5px solid $x-light-color;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;

        }
      }


      &-contact {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: flex-start;
        font-size: 13px;

        &-list {
          padding-top: 10px;

          &-item {
            margin-bottom: 5px;

            span.phone {
              font-size: 11.5px;
            }
          }

          &-item:last-child {
            margin-bottom: 0px;
          }
        }
      }


      &-education {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: flex-start;
        font-size: 13px;
        align-items: center;

        &-list {
          padding-top: 10px;

          &-item {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 0px;

            h3 {
              font-size: 11px;
              font-weight: 900;
              font-family: sans-serif;
              text-transform: uppercase;
              margin-bottom: 2px;
            }

            p {
              font-size: 10px;
            }
          }

        }
      }


      &-skills {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: flex-start;
        font-size: 13px;
        align-items: flex-start;

        &-list {
          padding-top: 10px;

          &-item {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            padding-top: 5px;
            padding-bottom: 5px;

            h3 {
              font-size: 11px;
              font-weight: 900;
              font-family: sans-serif;
              text-transform: uppercase;
              margin-bottom: 2px;
            }
          }

          &-item:first-child {
            padding-top: 0px;
          }
        }
      }
    }


    /* ------------ General Section ------------ */
    .general {
      width: 75%;
      padding-left: 0%;
      padding-right: 0%;
      height: 1684px;
      background-color: transparent;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;

      &-name-title {
        height: calc(25% - 30px);
        text-transform: uppercase;
        width: calc(100% - 20%);
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        background-color: rgb(203, 208, 218);
        border-radius: 4px;
        -webkit-box-shadow: 0px 3px 15px 1px rgba(14, 62, 94, 0.10);
        -moz-box-shadow: 0px 3px 15px 1px rgba(14, 62, 94, 0.10);
        box-shadow: 0px 3px 15px 1px rgba(14, 62, 94, 0.10);
        margin-top: 20px;
        margin-bottom: 10px;
        margin-left: 10%;
        margin-right: 10%;
        justify-content: center;
        align-items: center;
        padding-top: 0px;

        h1 {
          font-size: 30px;
          font-weight: 700;
          letter-spacing: 0px;
          opacity: 0.85;
        }

        h3 {
          font-size: 13px;
          font-weight: 400;
          opacity: 0.85;
          letter-spacing: 2.5px;
        }
      }

      &-work {
        height: 25%;
        text-transform: uppercase;
        width: calc(100% - 20%);
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        border-radius: 4px;
        margin-left: 10%;
        margin-right: 10%;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 5px;

        &-heading {
          color: $dark-color;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 2px;
          border-bottom: 2px solid rgba(0, 0, 0, 0.3);
          padding-bottom: 5px;
          margin-bottom: 15px;
          width: 100%;
        }

        &-title {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 20px;
          padding-left: 15px;
          border-left: 5px solid rgba(232, 153, 103, 0.4);
          height: 40px;


          &-company {
            width: 75%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 100%;

            &-name {
              width: 100%;
              padding: 0px;
              margin: 0px;
              margin-bottom: 2.5px;
              font-weight: 900;
              text-transform: uppercase;
              font-size: 14px;
              letter-spacing: .5px;
            }

            &-position {
              width: 100%;
              padding: 0px;
              margin: 0px;
              margin-top: 5px;
              font-weight: 400;
              font-size: 12px;
              letter-spacing: 1px;

            }
          }

          &-date {
            width: 25%;
            background-color: gray;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-color: rgb(203, 208, 218);
            border-radius: 2px;
            height: 40px;

            p {
              margin: 0px;
              padding: 0px;
              color: $dark-color;
              font-weight: 400;
              font-size: 14px;
            }
          }
        }

        &-title:nth-child(2) {
          margin-top: 5px;
        }
      }

      &-achievements {
        height: 25%;
        text-transform: uppercase;
        width: calc(100% - 20%);
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        margin-left: 10%;
        margin-right: 10%;
        justify-content: center;
        align-items: center;
        padding-top: 0px;

        &-heading {
          color: $dark-color;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 2px;
          border-bottom: 2px solid rgba(0, 0, 0, 0.3);
          padding-bottom: 5px;
          margin-bottom: 15px;
          width: 100%;
        }

        &-title {
          width: 100%;
          height: 40px;
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 20px;
          padding-left: 15px;
          border-left: 5px solid rgba(232, 153, 103, 0.4);


          &-organization {
            width: 75%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 100%;

            &-name {
              width: 100%;
              padding: 0px;
              margin: 0px;
              margin-bottom: 2.5px;
              font-weight: 900;
              text-transform: uppercase;
              font-size: 14px;
              letter-spacing: .5px;
            }

            &-position {
              width: 100%;
              padding: 0px;
              margin: 0px;
              margin-top: 5px;
              font-weight: 400;
              font-size: 12px;
              letter-spacing: 1px;

            }
          }

          &-location {
            width: 25%;
            height: 40px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-color: rgb(203, 208, 218);
            border-radius: 2px;

            p {
              margin: 0px;
              padding: 0px;
              color: $dark-color;
              font-weight: 400;
              font-size: 14px;
            }
          }
        }

        &-title:nth-child(2) {
          margin-top: 5px;
        }
      }

      &-language {
        height: 25%;
        text-transform: uppercase;
        width: calc(100% - 20%);
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        margin-left: 10%;
        margin-right: 10%;
        justify-content: center;
        align-items: center;
        padding-top: 0px;

        &-heading {
          color: $dark-color;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 2px;
          border-bottom: 2px solid rgba(0, 0, 0, 0.3);
          padding-bottom: 5px;
          margin-bottom: 15px;
          width: 100%;
        }

        &-title {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 20px;
          padding-left: 15px;
          height: 40px;
          background-color: $dark-color;
          border-radius: 3px;


          &-organization {
            width: 75%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;

            &-name {
              width: 100%;
              padding: 0px;
              margin: 0px;
              font-weight: 900;
              text-transform: uppercase;
              font-size: 14px;
              letter-spacing: .5px;
              color: $light-color;
            }

            &-position {
              width: 100%;
              padding: 0px;
              margin: 0px;
              font-weight: 400;
              font-size: 12px;
              letter-spacing: 1px;

            }
          }

          &-location {
            width: 25%;
            height: 40px;
            background-color: gray;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-color: $dark-color;
            border-top-right-radius: 2px;
            border-bottom-right-radius: 2px;


            p {
              margin: 0px;
              padding: 0px;
              color: $light-color;
              font-weight: 900;
              background-color: $light-color;
              color: $dark-color;
              opacity: 0.6;
              width: 30px;
              display: flex;
              text-align: center;
              justify-content: center;
              align-items: center;
              height: 30px;
              font-size: 16px;
              border-radius: 50%;
            }
          }
        }

        &-title:nth-child(2) {
          margin-top: 5px;
        }
      }
    }

  }


</style>
