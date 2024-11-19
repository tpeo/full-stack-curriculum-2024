import { initializeApp } from "firebase/app";
import { getAuth, 
   GoogleAuthProvider 
  } from "firebase/auth";

  // PLEASE REPLACE WITH YOUR OWN
const firebaseConfig = {
  apiKey: "AIzaSyAmQqNpt4rmDYp60YN3zTD3MhU-eb5scf8",
  authDomain: "backend-demo-ee735.firebaseapp.com",
  projectId: "backend-demo-ee735",
  storageBucket: "backend-demo-ee735.firebasestorage.app",
  messagingSenderId: "738400252804",
  appId: "1:738400252804:web:43d9d404eb3bd0b07863d1",
  measurementId: "G-25CWTYXW0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); // Add Google Provider

/*
Firebase is designed for public use in client-side applications. 
The configuration file (firebaseConfig.js) includes an apiKey that is 
safe to share because it is not a secret—it only identifies your project to Firebase. 
Access to your backend is protected by Firebase Security Rules, which enforce who can 
read or write data. However, private credentials like service account keys for 
server-side operations should never be exposed.
*/