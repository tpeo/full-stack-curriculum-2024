import React, { useState } from 'react';
import './App.css';

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  
} from "firebase/auth";
import { auth, googleProvider } from './firebaseConfig';

function App() {
  // Separate state variables for login and signup
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [user, setUser] = useState(null); // Holds the currently logged-in user object.

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setUser(userCredential.user);
      console.log("Logged in:", userCredential.user);
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
      setUser(userCredential.user);
      console.log("Account created:", userCredential.user);
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      setUser(userCredential.user);
      console.log("Google Sign-In successful:", userCredential.user);
    } catch (error) {
      console.error("Google Sign-In error:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("Logged out");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Firebase Authentication Demo</h1>
        {!user ? (
          <>
            <form onSubmit={handleLogin}>
              <h3>Login</h3>
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
            </form>

            <form onSubmit={handleSignup}>
              <h3>Sign Up</h3>
              <input
                type="email"
                placeholder="Email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
              />
              <button type="submit">Sign Up</button>
            </form>

            <button onClick={handleGoogleSignIn}>Sign Up with Google</button>
          </>
        ) : (
          <div>
            <p>Welcome, {user?.displayName || user?.email}</p>
            <button onClick={handleLogout}>Sign Out</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;