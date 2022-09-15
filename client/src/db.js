import firebase from 'firebase/compat';
import 'firebase/compat/database';

// API keys
const config = {
  apiKey: 'AIzaSyAlGypNGCzZtoet1NAMnL882wwIHtCMHwE',
  authDomain: 'chat-box-2a093.firebaseapp.com',
  projectId: 'chat-box-2a093',
  storageBucket: 'chat-box-2a093.appspot.com',
  messagingSenderId: '417070208335',
  appId: '1:417070208335:web:d0514c209b623f9c5ce13a',
};

const db = firebase.initializeApp(config);

export default db;
