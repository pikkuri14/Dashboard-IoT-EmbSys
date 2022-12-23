// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuCpqZuFt-NiggloQFiJDbfk2KKx_kjjY",
  authDomain: "coba111-d9d08.firebaseapp.com",
  databaseURL: "https://coba111-d9d08-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "coba111-d9d08",
  storageBucket: "coba111-d9d08.appspot.com",
  messagingSenderId: "268487076226",
  appId: "1:268487076226:web:7a45d6d253846ea102079b",
  measurementId: "G-FW19MJ0NS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)