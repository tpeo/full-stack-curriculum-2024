import React, { createContext, useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

// Create a Context for the user
const UserContext = createContext();

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="content">
      <h1>Welcome to the Home Page</h1>
      <p>Current User: {user.name}</p>

      {/* Fixed height example */}
      <div className="fixed-height">
        <p>Fixed Height Box</p>
      </div>

      {/* Responsive height example */}
      <div className="responsive-height">
        <p>Responsive Height Box</p>
      </div>
    </div>
  );
};

const About = () => (
  <div className="content">
    <h1>About Us</h1>
    <p>This is a demo about responsive design and routing.</p>
  </div>
);

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  const changeName = () => {
    setUser({ ...user, name: "John Doe" });
  };

  return (
    <div className="content">
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

function App() {
  const [user, setUser] = useState({ name: "Vincent" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="App">
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
