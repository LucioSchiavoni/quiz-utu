import Home from './Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Cambia a BrowserRouter

import Ubicacion from './Ubicacion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
