import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Parrafo from './components/Parrafo.jsx';
import Navbar from './components/Navbar.jsx';
import Lista from './components/Lista.jsx';
import Card from './components/Card.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Quienessomos from './components/Quienessomos';
import Descuentos from './components/Descuentos';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <nav>
        <Link to="/" className="btn btn-dark">Inicio</Link>
        <Link to="/contacto" className="btn btn-dark">Contacto</Link>
        <Link to="/quienessomos" className="btn btn-dark">Productos</Link>
        <Link to="/descuentos" className="btn btn-dark">Descuentos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/quienessomos" element={<Quienessomos />} />
        <Route path="/descuentos" element={<Descuentos />} />
      </Routes>
    </Router>
  );
}

export default App;