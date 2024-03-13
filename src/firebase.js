// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APP_API_KEY,
  authDomain: "metermate-5b9c4.firebaseapp.com",
  projectId: "metermate-5b9c4",
  storageBucket: "metermate-5b9c4.appspot.com",
  messagingSenderId: "473508686670",
  appId: "1:473508686670:web:eab22604fd34cab37acc1f",
  measurementId: "G-BW7T1T8BVN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
