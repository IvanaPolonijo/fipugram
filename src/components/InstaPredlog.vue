<template>
    <div class="container">
  <div class="row pt-2 pb-2">
    <div class="col-3 ">
      <!-- sliku nekako krivo prenosim (URL mi se krivo formira)
      PORUCI kako ISPRAVNO povuci internal urls!! -->
      <img :src= "slika" class="img-thumbnail" >
    </div>
    <div class="col-7 ">
      <p class="text-left"> First lovely person...</p>
    </div>
    <div class="col-2 ">
      <a href="#" class="badge badge-light">Link</a>
    </div>
  </div>
</div>  
</template>


<script>
export default {
    props: ["slika"],
    name: "InstaPredlog",
};
</script>