// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTItPp5NTyP2Uv4OUrqmlQWn4Ylp_AXgw",
  authDomain: "shoppricerandomizer.firebaseapp.com",
  projectId: "shoppricerandomizer",
  storageBucket: "shoppricerandomizer.appspot.com",
  messagingSenderId: "923865913512",
  appId: "1:923865913512:web:f1fb5f9817a587a17c8a9d",
  measurementId: "G-GXT95EZEM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);