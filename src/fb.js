import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

// import "firebase/firestore";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3RT8cGy3kIXAziTbuNZRzJXbdZQalWVU",
  authDomain: "react-tailwind-firebase-1f8ed.firebaseapp.com",
  projectId: "react-tailwind-firebase-1f8ed",
  storageBucket: "react-tailwind-firebase-1f8ed.appspot.com",
  messagingSenderId: "208692824925",
  appId: "1:208692824925:web:d9e420369e431fd76376b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase
const provider = new GoogleAuthProvider(); // import "firebase/auth";
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
// const fauth = firebase.auth();
// const fstore = firebase.firestore();
export const auth = getAuth();

// export { fauth, fstore, firebase };
