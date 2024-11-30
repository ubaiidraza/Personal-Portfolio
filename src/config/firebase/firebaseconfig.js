
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAF3R49vPkglt__uThT9xTXlh5Oi-pBHmE",
    authDomain: "personal-portfolio-c24ca.firebaseapp.com",
    projectId: "personal-portfolio-c24ca",
    storageBucket: "personal-portfolio-c24ca.appspot.com",
    messagingSenderId: "37006091740",
    appId: "1:37006091740:web:81311fed8aef0810bddb19",
    measurementId: "G-RP73RZ2HK4"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
