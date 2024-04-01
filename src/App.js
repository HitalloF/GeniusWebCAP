import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componentes/Login';
import Cadastro from './componentes/Cadastro';
import About from './componentes/About';
import Home from './componentes/Home';



function App() {
  return (
 <Router>
      <div>
       <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
