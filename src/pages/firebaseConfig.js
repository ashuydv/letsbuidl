import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import Axios from "axios";

const firebaseConfig = {
    apiKey: "AIzaSyC8DvNUl6nUU5lVhWupqsPOAsR4LnyK48o",
    authDomain: "commbuidl-3ccf5.firebaseapp.com",
    projectId: "commbuidl-3ccf5",
    storageBucket: "commbuidl-3ccf5.appspot.com",
    messagingSenderId: "584066631162",
    appId: "1:584066631162:web:b87b9c19330d488d269043",
    measurementId: "G-22VJCCDELC",
};

firebase.initializeApp(config);

const db = firebase.firestore();
export { Axios, db };