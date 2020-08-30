import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAChmZAw4nNB_GqrkD-n-MQn0G6TpxyzV0",
  authDomain: "messenger-clone-3c841.firebaseapp.com",
  databaseURL: "https://messenger-clone-3c841.firebaseio.com",
  projectId: "messenger-clone-3c841",
  storageBucket: "messenger-clone-3c841.appspot.com",
  messagingSenderId: "523238347922",
  appId: "1:523238347922:web:ce8f83b60d185731cb424b",
  measurementId: "G-D64ZCKMHNQ",
});
// Initialize Firebase

const db = firebaseApp.firestore();

export default db;
