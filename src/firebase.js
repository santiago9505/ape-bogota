import firebase from "firebase";
import database from "firebase/database";
import auth from "firebase/auth";

const config = firebase.initializeApp({
  apiKey: "AIzaSyBznDNVeCEkc91tQUJgior0BvC2Edhg6-E",
  authDomain: "ape-bogota-react.firebaseapp.com",
  databaseURL: "https://ape-bogota-react-default-rtdb.firebaseio.com",
  projectId: "ape-bogota-react",
  storageBucket: "ape-bogota-react.appspot.com",
  messagingSenderId: "88664962859",
  appId: "1:88664962859:web:b0e84dd83ef5d4559b776e",
  measurementId: "G-YXQP1M6B81",
});

export default config;
