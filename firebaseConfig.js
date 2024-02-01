
//Firebase configuration
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';

//TODO: use env files
const firebaseConfig = {
  apiKey: "AIzaSyCfd0Vf6gqIElNV2fV7YkzfVavGjJOYtZA",
  authDomain: "kabeli-challenge.firebaseapp.com",
  projectId: "kabeli-challenge",
  storageBucket: "kabeli-challenge.appspot.com",
  messagingSenderId: "775859872560",
  appId: "1:775859872560:web:e108c70c442d0692595ef5"
};


// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig)
export const firestore = getFirestore()

