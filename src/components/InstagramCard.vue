<template>
  <div class="card text-left">
    <div class="card-header">{{info.description}} </div>
    <div class="card-body p-0">
      <img :src="info.url" class="img-fluid" />
    </div>
    <div class="card-footer text-muted">{{info.time}}</div>
  </div>
</template>

<script>
export default {
  props: ["info"],
  
  name: "InstagramCard",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
.card {
  margin-bottom: 30px;
}
</style>