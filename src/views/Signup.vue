<template>
  <div class="about">
    <h1>This is a Sign up page</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="ime">Ime</label>
              <input
                type="ime"
                v-model="ime"
                class="form-control"
                id="ime"
                placeholder="Ime"
              />
            </div>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                v-model="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
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
            <button type="button" @click="signup" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase";

export default {
    name:"SignUp",
  data() {
    return {
      ime: "",
      email: "",
      password: "",
      repassword: "",
    };
  },
 methods: {
		signup() {
            if(this.password != this.repassword){
                alert("The password does not match!");
            };
			firebase
                .auth()
				.createUserWithEmailAndPassword(this.email, this.password)
				.then(function () {
					console.log("Uspješna registracija"); //ovo si još uvijek provjeravam 
				})
				.catch(function (error) {
					console.error("Došlo je do greške: ", error);
					if (error.message) {
						alert(error.message);
					}
				});
		},
	},
};
</script>

// Mene ce tu zanimati kako spremati same korisnike...to je tema koja pretpostavljam slijedi 
// s DB dijelom 