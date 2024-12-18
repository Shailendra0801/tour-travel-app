import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALYeAjq9NYYrjWa106cf7n2xCP6xGNSS0",
  authDomain: "tourstravels-495be.firebaseapp.com",
  projectId: "tourstravels-495be",
  storageBucket: "tourstravels-495be.firebasestorage.app",
  messagingSenderId: "764145143612",
  appId: "1:764145143612:web:3d34ed0600c3f86e559839"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);