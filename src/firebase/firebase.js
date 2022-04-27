// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaGfcS2PSsjDZ76lxMTgYx-X9Ah7Q1Wyo",
  authDomain: "phoneb-eaf25.firebaseapp.com",
  projectId: "phoneb-eaf25",
  storageBucket: "phoneb-eaf25.appspot.com",
  messagingSenderId: "346206945319",
  appId: "1:346206945319:web:5da62728c94ca884230e02",
  measurementId: "G-2ZKSDLHB0S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// // const analytics = getAnalytics(app);
export const auth = getAuth(app);
