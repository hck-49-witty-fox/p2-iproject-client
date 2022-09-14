// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";
import 'firebase/compat/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMZYZzgkzXRe_Uq85KwgnBDZ8aeMG_Sqg",
  authDomain: "iproject-hck8-49.firebaseapp.com",
  projectId: "iproject-hck8-49",
  storageBucket: "iproject-hck8-49.appspot.com",
  messagingSenderId: "1079445495110",
  appId: "1:1079445495110:web:e615070fdbd65939741947",
  measurementId: "G-L65RTKTCJM",
  databaseURL: "https://iproject-hck8-49-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export default db;