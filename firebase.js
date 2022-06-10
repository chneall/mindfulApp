// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdgiExg7owTquvKf6i2aCKmFXXIPlPlSs",
  authDomain: "mindful-d1dfd.firebaseapp.com",
  databaseURL: "https://mindful-d1dfd-default-rtdb.firebaseio.com",
  projectId: "mindful-d1dfd",
  storageBucket: "mindful-d1dfd.appspot.com",
  messagingSenderId: "65335210666",
  appId: "1:65335210666:web:4ef65bb79b9e47a86596d3",
  measurementId: "G-7895Z5XJT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);