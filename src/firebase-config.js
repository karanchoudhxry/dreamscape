import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAT3f8CWU2otweuqs13kw8kRb7CAtrXQRU",
    authDomain: "dreamscape-nw.firebaseapp.com",
    projectId: "dreamscape-nw",
    storageBucket: "dreamscape-nw.appspot.com",
    messagingSenderId: "773163218540",
    appId: "1:773163218540:web:aeca8179afafe9c4ea4a49",
    measurementId: "G-KW6C1NEKYZ"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);