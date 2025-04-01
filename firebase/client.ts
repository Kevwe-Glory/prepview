// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCGM5V3NpbRtj75oMoCPhQax8bePyCfY7Q",
  authDomain: "preepview.firebaseapp.com",
  projectId: "preepview",
  storageBucket: "preepview.firebasestorage.app",
  messagingSenderId: "801794701351",
  appId: "1:801794701351:web:ac4fac34031c73ec5eb602",
  measurementId: "G-F4RPV6QRGP"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);