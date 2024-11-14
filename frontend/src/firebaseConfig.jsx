import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDNESq6WdEF4gB-PLdLSSdjxGqKJGCFZcg",
    authDomain: "tour-travel-app-31f4e.firebaseapp.com",
    projectId: "tour-travel-app-31f4e",
    storageBucket: "tour-travel-app-31f4e.firebasestorage.app",
    messagingSenderId: "65026425044",
    appId: "1:65026425044:web:9460cb57e29707cd0b3b41"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firestore
export const db = getFirestore(app);

// Initialize firebase auth
export const auth = getAuth(app);