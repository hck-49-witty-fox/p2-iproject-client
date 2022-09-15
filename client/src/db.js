import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyD-aH-_KeQbgoNBxwo2IFb-Uu0GO2ijH4U",
  authDomain: "chatipro.firebaseapp.com",
  databaseURL:
    "https://chatipro-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatipro",
  storageBucket: "chatipro.appspot.com",
  messagingSenderId: "347476096492",
  appId: "1:347476096492:web:3516c526a7e26a367cbcc9",
};

const db = firebase.initializeApp(firebaseConfig);
export default db;
