// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwod6kJl3hevhHsp7261drDVdnIqJDufo",
  authDomain: "tpeo-eng-dmo.firebaseapp.com",
  projectId: "tpeo-eng-dmo",
  storageBucket: "tpeo-eng-dmo.appspot.com",
  messagingSenderId: "247457105939",
  appId: "1:247457105939:web:2d2b927842e6f8a27dd7e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export default app; 