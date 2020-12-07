<template>
  <div class="row">
    <div class="col-8">
      <div style="min-width: 100%">
        <instagram-card v-for="card in cards" :key="card" :info="card" />
      </div>
    </div>
    <div class="col-4">
      <div class="card pb-3">
        <div class="card-body">Mi vam predlažemo</div>
        <insta-predlog v-for="card in slikeO" :key="card" :slika="card" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InstagramCard from "../components/InstagramCard.vue";
import InstaPredlog from "../components/InstaPredlog";

let cards = [
  "https://picsum.photos/id/1/800/800",
  "https://picsum.photos/id/2/800/800",
  "https://picsum.photos/id/3/800/800"
];

let slikeO = [
  "/man1.jpg",
  "C:\Users\ivana\OneDrive\Fakultet\Programsko_inženjerstvo\test\fipugram\src\assets\man2.jpg",
  "C:\Users\ivana\OneDrive\Fakultet\Programsko_inženjerstvo\test\fipugram\src\assets\man3.jpg",
];

//to tek eksperimentiram
// let brojanje = [
//   "First",
//   "Second",
//   "Third",
// ];

export default {
  name: "Home",
  data: function () {
    return {
      cards: cards,
      slikeO: slikeO,
    };
  },
  components: {
    InstagramCard,
    InstaPredlog,
  },
};
</script>
