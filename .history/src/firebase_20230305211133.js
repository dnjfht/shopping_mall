// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFenCmVlhzUjcGq80ItCxrCRBfE_MQQrc",
  authDomain: "shopping-mall-954c5.firebaseapp.com",
  databaseURL:
    "https://shopping-mall-954c5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shopping-mall-954c5",
  storageBucket: "shopping-mall-954c5.appspot.com",
  messagingSenderId: "1055766893475",
  appId: "1:1055766893475:web:6e37873c0172dcecc38016",
  measurementId: "G-H7HWKBTPR7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const authService = getAuth(app);
