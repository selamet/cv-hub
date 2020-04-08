<template>
  <div class="">
    <div class="col-md-12">
      <div id="ayicik" class="float-left col-md-2">
        <img src="../assets/tenor.gif" alt="">

      </div>

      <div id="brolar" class="float-left col-md-8">
        <h3 class="m-3 page-header text-center">İyi doğdun qNq</h3>
        <p class="text-center">
          <img class="m-2" src="../assets/1h.jpg" alt=""><br>

          <img class="m-2" src="../assets/2h.jpg" alt="">
        </p>
      </div>
      <div id="ayicik" class="float-left col-md-2">
        <img src="../assets/tenor.gif" alt="">

      </div>
    </div>

    <audio id="my_audio" controls="controls">
      <source src="http://atarocketfile.me/media/documents/omrum.mp3" type="audio/mp3">
    </audio>


    <button id="linkid" type="button" onclick="window.open('https://www.youtube.com/watch?v=4G2g4uxY_Ew', '_blank');">Song</button>

  </div>

</template>


<script type="text/javascript">
  window.onload=function(){
    document.getElementById("linkid").click();
  };
</script>

<style scoped>
  #brolar img {
    height: 300px;

  }

  #ayicik {
    margin-top: 40vh;
  }


</style>
