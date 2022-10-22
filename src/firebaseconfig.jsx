// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALerfQ8qiE-2ilJB9kLT7SQ0nzO-3NiiM",
  authDomain: "freshcare-a1492.firebaseapp.com",
  projectId: "freshcare-a1492",
  storageBucket: "freshcare-a1492.appspot.com",
  messagingSenderId: "1013416218340",
  appId: "1:1013416218340:web:7fa915daaa930b1b8266f1",
  measurementId: "G-ZZB0DRDERS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);