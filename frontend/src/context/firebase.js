import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTT2N7fvinE2I3k2P2RUsEes7zsCXpKn8",
  authDomain: "tour-83b52.firebaseapp.com",
  projectId: "tour-83b52",
  storageBucket: "tour-83b52.firebasestorage.app",
  messagingSenderId: "137270436255",
  appId: "1:137270436255:web:6a202d25dfa22bf0831daa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
