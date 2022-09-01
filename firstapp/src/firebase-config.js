// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKqgyNdNGkdf-6opTPNJPm8lGfJ_79EFs",
  authDomain: "internship-7fb44.firebaseapp.com",
  projectId: "internship-7fb44",
  storageBucket: "internship-7fb44.appspot.com",
  messagingSenderId: "862560846543",
  appId: "1:862560846543:web:401bc87abaf9b83672adba",
  measurementId: "G-P5M0V8LY9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export  const db=getFireStore(app);