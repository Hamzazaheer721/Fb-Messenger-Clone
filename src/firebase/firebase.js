import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAWpn9-VL_kozQ53OqbUlhHFGeG2gxvJig",
    authDomain: "fb-clone-e7fd3.firebaseapp.com",
    databaseURL: "https://fb-clone-e7fd3.firebaseio.com",
    projectId: "fb-clone-e7fd3",
    storageBucket: "fb-clone-e7fd3.appspot.com",
    messagingSenderId: "336131231675",
    appId: "1:336131231675:web:158cd96b85c786bea27e9e",
    measurementId: "G-RN34PK8CDY"
});

const db = firebaseApp.firestore();
export default db;
