<template>
  <div class="row">
    <div class="col-8">
      <div style="min-width: 100%">
        <instagram-card
          v-for="card in filteredCards"
          :key="card"
          :info="card"
        />
      </div>
    </div>
    <div class="col-4">
      <div class="card pb-3">
        <div class="card-body">Mi vam predlažemo</div>
        <insta-predlog v-for="slike in slikeO" :key="slike" :slika="slike" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store";
import InstagramCard from "../components/InstagramCard.vue";
import InstaPredlog from "../components/InstaPredlog";

let cards = [
  {
    url: "https://picsum.photos/id/1/800/800",
    description: "laptop",
    time: "about now",
  },
  {
    url: "https://picsum.photos/id/2/800/800",
    description: "office",
    time: "few minutes ago",
  },
  {
    url: "https://picsum.photos/id/3/800/800",
    description: "working",
    time: "yesterday",
  },
];

let slikeO = [
  { url: "https://picsum.photos/id/1001/300/300", redni: "Prva krasna osoba" },
  { url: "https://picsum.photos/id/1004/300/300", redni: "Druga krasna osoba" },
  { url: "https://picsum.photos/id/1003/300/300", redni: "Treća krasna osoba" },
];

export default {
  name: "Home",
  data: function () {
    return {
      cards,
      store,
      slikeO: slikeO,
    };
  },
  computed: {
    //logika koja cita kartice
    filteredCards() {
      
      let termin = this.store.searchTerm;
      let newCards = [];
     
      for (let card of this.cards) {
        if (card.description.indexOf(termin) >= 0) {
          newCards.push(card);
          console.log(newCards)
        }
      }
      return newCards;
    },
  },

  components: {
    InstagramCard,
    InstaPredlog,
  },
};
</script>
