<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-7">
      <instagram-card />
    </div>
    <div class="col-4">
      <div class="card">
        <div class="card-body">Mi vam predlažemo</div>
        <!-- ovo ce u neki loop -->
        <insta-predlog />
        <insta-predlog />
        <insta-predlog /> 
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InstagramCard from "../components/InstagramCard.vue";
import InstaPredlog from "../components/InstaPredlog";

export default {
  name: "Home",
  components: {
    InstagramCard,
    InstaPredlog,
  },
};
</script>
