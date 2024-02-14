// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6H6FL8eNbEFrYtPwV2do861fUyB_taNw",
  authDomain: "quickeats-fa587.firebaseapp.com",
  projectId: "quickeats-fa587",
  storageBucket: "quickeats-fa587.appspot.com",
  messagingSenderId: "817139078762",
  appId: "1:817139078762:web:b9ee1ed7d7c8520f491c13",
  measurementId: "G-8CL5B63TNY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
