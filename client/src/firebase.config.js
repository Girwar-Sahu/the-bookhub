// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "mern-blog-d1c6e.firebaseapp.com",
  projectId: "mern-blog-d1c6e",
  storageBucket: "mern-blog-d1c6e.appspot.com",
  messagingSenderId: "115596090",
  appId: "1:115596090:web:d259e3a82fcce67e064e03",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
