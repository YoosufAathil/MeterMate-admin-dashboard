// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN9RjSh8t4uU6ADHlzIomh5TzEyDymT_o",
  authDomain: "metermate-5b9c4.firebaseapp.com",
  projectId: "metermate-5b9c4",
  storageBucket: "metermate-5b9c4.appspot.com",
  messagingSenderId: "473508686670",
  appId: "1:473508686670:web:eab22604fd34cab37acc1f",
  measurementId: "G-BW7T1T8BVN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
