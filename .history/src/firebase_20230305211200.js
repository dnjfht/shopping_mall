// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFenCmVlhzUjcGq80ItCxrCRBfE_MQQrc",
  authDomain: "shopping-mall-954c5.firebaseapp.com",
  databaseURL:
    "https://shopping-mall-954c5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shopping-mall-954c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const authService = getAuth(app);
