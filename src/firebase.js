// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCChcq-A3JQW83XXvcLurMVX9Wy8RN9js8",
  authDomain: "credit-monitoring-app-12e67.firebaseapp.com",
  projectId: "credit-monitoring-app-12e67",
  storageBucket: "credit-monitoring-app-12e67.appspot.com",
  messagingSenderId: "316402757204",
  appId: "1:316402757204:web:3545a941a0f7ea194b47c1",
  measurementId: "G-C9GHXL4Y48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);
