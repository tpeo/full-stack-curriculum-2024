import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

function App() {

  // 1. Set-up stuff. Create firebase project and web app. Copy firebaseConfig file from setttings 2. Enable authentication for email and password 
  const [image, setImage] = useState(false); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in with Email and Password");
      setImage(true);
    } catch (error) {
      console.error("Error logging in with email and password", error);
    }
  };

  const handleEmailPasswordSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created with Email and Password");
      setImage(true);
    } catch (error) {
      console.error("Error creating user with email and password", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
      setImage(false);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <div className="App">
      {image && <img src={logo} className="App-logo" alt="logo" />}
      <div className="button-container">
        <form onSubmit={handleEmailPasswordLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login with Email and Password</button>
        </form>

        <form onSubmit={handleEmailPasswordSignup}>
          <input 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up with Email and Password</button>
        </form>
        {image && <button onClick={handleSignOut}>Sign Out</button>}
      </div>
    </div>
  );
}

export default App;



