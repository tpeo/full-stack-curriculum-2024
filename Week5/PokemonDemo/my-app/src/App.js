import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import PokemonCardEnlarged from './PokemonCardEnlarged';

function App() {
   
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/enlarged" element={<PokemonCardEnlarged />} />
      </Routes>
  </Router>
  );
}

export default App;