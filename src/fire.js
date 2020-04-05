import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyBlE_HAJ32yjCB7tipbq7BdImmopR5kQwA",
  authDomain: "snake-d390c.firebaseapp.com",
  databaseURL: "https://snake-d390c.firebaseio.com",
  storageBucket: "snake-d390c.appspot.com",
  messagingSenderId: "153498567525"
};
var fire = firebase.initializeApp(config);
export default fire;