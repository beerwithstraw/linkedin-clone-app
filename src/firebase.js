import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC2xrJdWCPvEz1genJZz1yAyv_s5ndu_-w",
    authDomain: "linkedin-clone-ab8b8.firebaseapp.com",
    projectId: "linkedin-clone-ab8b8",
    storageBucket: "linkedin-clone-ab8b8.appspot.com",
    messagingSenderId: "545986430214",
    appId: "1:545986430214:web:e85b70e9a9e51216280a87",
    measurementId: "G-NQXKS76RLB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }