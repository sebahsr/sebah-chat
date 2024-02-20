// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQkpmJO-7EWcMP5zOlZN8c3SJyPhctjgg",
  authDomain: "chat-box-26761.firebaseapp.com",
  projectId: "chat-box-26761",
  storageBucket: "chat-box-26761.appspot.com",
  messagingSenderId: "412369822201",
  appId: "1:412369822201:web:e10520bb0764b225845d28",
  measurementId: "G-PJZC5SLZF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
