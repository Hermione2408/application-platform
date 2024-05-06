// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxC8aU2S0q-IO1tSeXrjze0vJjXlhWfA8",
  authDomain: "applicationplatform-a7a1a.firebaseapp.com",
  projectId: "applicationplatform-a7a1a",
  storageBucket: "applicationplatform-a7a1a.appspot.com",
  messagingSenderId: "205511150849",
  appId: "1:205511150849:web:31a7846db8054d628c1f00",
  measurementId: "G-241Q361KES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);