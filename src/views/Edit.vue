<template>
  <div class="about">
    <h1>Dobrodosli na svoj profil</h1>
    <div class="container">
    </div>
    <div class="container">
      <p>Ako zelite promjenti lozinku ispunite formu!</p>
      <form>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            v-model="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="ovo si moram srediti da je non editable i da ima mail u sebi"
          />
        </div>
        <div class="form-group">
          <label for="Opassword">Current Password</label>
          <input
            type="password"
            v-model="opassword"
            class="form-control"
            id="opassword"
            placeholder="Current Password"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <label for="repassword">Repeat password</label>
          <input
            type="password"
            v-model="repassword"
            class="form-control"
            id="repassword"
            placeholder="Repeat Password"
          />
        </div>
        <button type="button" @click="edit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { firebase } from "@/firebase";

export default {
  name: "Edit",
  data() {
    return {
      email: "",
      opassword: "",
      password: "",
      repassword: "",
    };
  },
};
</script>

<style scoped></style>
