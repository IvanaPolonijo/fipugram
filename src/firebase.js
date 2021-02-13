// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

//sa https://firebase.google.com/docs/web/setup#using-module-bundlers

var firebaseConfig = {
    apiKey: "AIzaSyCUjUxQ7dNi94f9AtfOZD-_nX1QDQ5MyMg",
    authDomain: "fipugram-a8112.firebaseapp.com",
    projectId: "fipugram-a8112",
    storageBucket: "fipugram-a8112.appspot.com",
    messagingSenderId: "412706339699",
    appId: "1:412706339699:web:d5b8415ef7ad9cb4cbe306"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  let db = firebase.firestore();

  export {
      firebase,
      db
  };