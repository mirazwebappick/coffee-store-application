// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6oNRKf5O3w1efX_ln7q1l9tOmDjcEBk0",
  authDomain: "coffee-store-application-6f525.firebaseapp.com",
  projectId: "coffee-store-application-6f525",
  storageBucket: "coffee-store-application-6f525.firebasestorage.app",
  messagingSenderId: "1015036511154",
  appId: "1:1015036511154:web:23e3aa560889b62990daab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
