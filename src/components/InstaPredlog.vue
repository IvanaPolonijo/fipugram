<template>
    <div class="container">
  <div class="row pt-2 pb-2">
    <div class="col-3 ">
      <!-- sliku nekako krivo prenosim (URL mi se krivo formira)
      PORUCI kako ISPRAVNO povuci internal urls!! -->
      <img :src= "slika.url" class="img-fluid" >
    </div>
    <div class="col-7 ">
      <p class="text-left"> {{slika.redni}}</p>
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