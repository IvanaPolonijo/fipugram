<template>
  <div class="card text-left">
    <div class="card-header">{{ info.description }} by {{ info.owner }}</div>
    <div class="card-body p-0">
      <img :src="info.url" class="img-fluid" />
    </div>
    <div class="card-footer text-muted">{{ postedFromNow }}</div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: ["info"],
  name: "InstagramCard",
  computed: {
    postedFromNow() {
      return moment(this.info.time).fromNow();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
.card {
  margin-bottom: 30px;
}
</style>
