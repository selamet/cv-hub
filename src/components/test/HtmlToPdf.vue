<template>
  <div>
    <div class="row">
      <div class="col-md-12">

        <div id="lorem" class="test-cv mt-5">
          <h3 class="text-center page-header">CV SeLAMET ŞAMLI</h3>
          <div class="col-md-12">
            <div id="left-area" class="float-left col-md-2">
              <br><br>
              <p> name : Selamet </p>
              <p> name : Selamet </p>
              <p> name : Selamet </p>
              <p> name : Selamet </p>
              surname :Şamlı
            </div>
            <div class="float-left col-md-10">
              <h4>Profile: </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto aspernatur atque dolor eum
                illo nemo nihil nisi, nostrum obcaecati, officiis, quidem quisquam reiciendis reprehenderit saepe
                sapiente suscipit ut vel.</p>
            </div>
          </div>
        </div>


      </div>
      <button @click="createPDF">Click Me!!</button>
    </div>


  </div>
</template>

<script>
  import * as html2canvas from "html2canvas";
  import jsPDF from "jspdf";

  export default {
    methods: {
      createPDF() {
        html2canvas(document.querySelector("#lorem")).then(canvas => {
          document.body.appendChild(canvas);
        });

        const input = document.getElementById('lorem');
        html2canvas(input, {
          width: 1190,
          height: 1684,
          scrollX: 0,
          scrollY: -window.scrollY,
          scale: 2,
          dpi: 144

        }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          window.open(imgData, "_blank");
          const pdf = new jsPDF();

          pdf.addImage(imgData, 'PNG', 0, 0, 210, 300);
          window.open(pdf.output('bloburl'), '_blank');
          pdf.save('lorem.pdf')
        });


      },
    }
  }
</script>

<style scoped>

  #lorem {
    width: 1190px;
    height: 1684px;
    background-color: wheat;
  }

  #left-area {
    background-color: #1d1133;

  }

</style>
