// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-879df.firebaseapp.com",
  projectId: "mern-estate-879df",
  storageBucket: "mern-estate-879df.appspot.com",
  messagingSenderId: "89994470493",
  appId: "1:89994470493:web:e59dbb49176a2ff0ab59b4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);