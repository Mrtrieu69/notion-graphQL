// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCk5TpO5xHN3gsTtskbMFJ0pAOiS4C_D8",
    authDomain: "notion-graphql.firebaseapp.com",
    projectId: "notion-graphql",
    storageBucket: "notion-graphql.appspot.com",
    messagingSenderId: "160078995321",
    appId: "1:160078995321:web:e25a08422c471a5d5919a8",
    measurementId: "G-KPR3M9H6GK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
