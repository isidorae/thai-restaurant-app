// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWMQHulREE3wfx20cYMw488MTYKX1LFbE",
  authDomain: "reserva-restaurant-9e0ac.firebaseapp.com",
  projectId: "reserva-restaurant-9e0ac",
  storageBucket: "reserva-restaurant-9e0ac.appspot.com",
  messagingSenderId: "495585921378",
  appId: "1:495585921378:web:9512b21e3efc8a93fe443b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
