// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiLqQQqojug2Z4GG1BInQ1PEVCY3PoQn4",
  authDomain: "chat-application-ab22d.firebaseapp.com",
  projectId: "chat-application-ab22d",
  storageBucket: "chat-application-ab22d.firebasestorage.app",
  messagingSenderId: "79805031755",
  appId: "1:79805031755:web:d46046b7ca69d78faf34ce",
  measurementId: "G-WVD8S7PPRQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);
