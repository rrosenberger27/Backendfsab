// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvZPm093-tULhkFw1SDVEjvBgrDjJ7i8M",
  authDomain: "bootcamp-5832b.firebaseapp.com",
  projectId: "bootcamp-5832b",
  storageBucket: "bootcamp-5832b.appspot.com",
  messagingSenderId: "477779233762",
  appId: "1:477779233762:web:3694d4b89c030317de87bb",
  measurementId: "G-XGBDR57X71"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
