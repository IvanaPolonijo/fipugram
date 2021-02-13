<template>
  <div class="row">
    <div class="col-8">
      <div style="min-width: 100%">
        <form @submit.prevent="postNewImage" class="form-inline mb-5">
          <div class="form-group">
            <label for="imageUrl">Image URL</label>
            <input
              v-model="newImageUrl"
              type="text"
              class="form-control "
              placeholder="Enter the image URL"
              id="imageUrl"
            />
          </div>
          <div class="form-group">
            <label for="imageDescription">Description</label>
            <input
              v-model="newImageDescription"
              type="text"
              class="form-control"
              placeholder="Enter the image description"
              id="imageDescription"
            />
          </div>
          <button
            @click.prevent="postNewImage"
            type="submit"
            class="btn btn-primary ml-2"
          >
            Post image
          </button>
        </form>
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
import { db } from "@/firebase";
import InstagramCard from "../components/InstagramCard.vue";
import InstaPredlog from "../components/InstaPredlog";

let slikeO = [
  { url: "https://picsum.photos/id/1001/300/300", redni: "Prva krasna osoba" },
  { url: "https://picsum.photos/id/1004/300/300", redni: "Druga krasna osoba" },
  { url: "https://picsum.photos/id/1003/300/300", redni: "Treća krasna osoba" },
];

export default {
  name: "Home",
  data: function() {
    return {
      cards: [],
      store,
      slikeO: slikeO,
      newImageUrl: "", // <-- url nove slike
      newImageDescription: "", // <-- opis nove slike
    };
  },
  mounted() {
    this.getPosts();
    // this.postNewImage(); --> ovo mi nije potrebno da se zove za cijeli vue jer ga se zove kad se slika dodaje
  },
  computed: {
    //logika koja cita kartice
    filteredCards() {
      let termin = this.store.searchTerm.toLowerCase(); //bacam u lowercase da smanjim osjetljivost
      let newCards = [];
      // Kasnije još pokušaj doraditi tako da je i sam card propery case insensitive
      for (let card of this.cards) {
        if (
          card.description.indexOf(termin) >= 0 ||
          card.owner.indexOf(termin) >= 0
        ) {
          newCards.push(card);
        }
      }
      return newCards;
    },
  },
  methods: {
    postNewImage() {
      if (this.newImageUrl === "" || this.newImageDescription === "")
        alert("Oba polja moraju biti ispunjena!");
      else {
        db.collection("posts")
          .add({
            url: this.newImageUrl,
            email: store.currentUser,
            posted_at: Date.now(),
            desc: this.newImageDescription,
          })
          .then((doc) => {
            console.log("Spremljeno", doc);
            this.newImageDescription = "";
            this.newImageUrl = "";
          })
          .catch((e) => {
            console.error(e);
          });
      }
    },
    getPosts() {
      console.log("dohvat iz firebase");
      db.collection("posts")
      .orderBy('posted_at', 'desc')
      .limit(10)
      .get()
      .then((query)=> {
        this.cards = []
        query.forEach((doc) => {
          const data = doc.data()
          this.cards.push({
            id: doc.id,
            time: data.posted_at,
            description: data.desc,
            url: data.url,
            owner: data.email,
          })  
        });
      })
      .catch();
    },
  },
  components: {
    InstagramCard,
    InstaPredlog,
  },
};
</script>
