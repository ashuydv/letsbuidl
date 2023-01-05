import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: JSON.stringify(import.meta.env.REACT_APP_FIREBASE_API_KEY),
    authDomain: JSON.stringify(import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
    projectId: JSON.stringify(import.meta.env.REACT_APP_FIREBASE_PROJECT_ID),
    storageBucket: JSON.stringify(import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
    messagingSenderId: JSON.stringify(import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
    appId: JSON.stringify(import.meta.env.REACT_APP_FIREBASE_APP_ID),
    measurementId: JSON.stringify(import.meta.env.REACT_APP_FIREBASE_MEASUREMENT_ID)
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();