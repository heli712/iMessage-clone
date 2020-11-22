import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDJb27cCi4RmYuicV0-SzSgtaHlv1hzQP4",
    authDomain: "imessage-clone-94be8.firebaseapp.com",
    databaseURL: "https://imessage-clone-94be8.firebaseio.com",
    projectId: "imessage-clone-94be8",
    storageBucket: "imessage-clone-94be8.appspot.com",
    messagingSenderId: "347793974255",
    appId: "1:347793974255:web:bd7a2a08ee3ac33fe64c1a",
    measurementId: "G-5L3PPLGM39"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;