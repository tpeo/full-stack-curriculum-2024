import logo from './logo.svg';
import './App.css';
import { GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { auth } from './firebaseConfig'
import { useState } from 'react';

function App() {
  const [image, setImage] = useState(false); 


  const handleGoogleSignIn = async (e) => {
      const provider = await new GoogleAuthProvider();
      signInWithPopup(auth, provider).then(async (result) => {
        setImage(true); 
      })
  }

  const handleGoogleSignOut = async () => {
    try {
      await signOut(auth); 
      setImage(false); 
    } catch (error) {
      console.log("Error signing out:", error);
      throw error;
    }
  };

  return (
    <div className="App">
     {image && <img src={logo} className="App-logo" alt="logo" />}
      <div className="button-container">
        <button onClick={handleGoogleSignIn}>Login with Google</button>
        <button onClick={handleGoogleSignOut}>Logout with Google</button>
      </div>
    </div>
  );
}

export default App;
