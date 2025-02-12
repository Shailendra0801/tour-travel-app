import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0QBj1DLnGOfswPvNgtWy1qgZBFFnOjjQ",
  authDomain: "sunraj-taxi-services.firebaseapp.com",
  projectId: "sunraj-taxi-services",
  storageBucket: "sunraj-taxi-services.firebasestorage.app",
  messagingSenderId: "224056552819",
  appId: "1:224056552819:web:8976e3309f6dbc7b84a906"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);