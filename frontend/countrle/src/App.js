import React, { useEffect, useRef } from 'react';
import './App.css';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import AcercaDe from './components/AcercaDe';
import Juego from './components/Juego';
import Reglas from './components/Reglas';
import logo from './logo.webp';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  const navbarCollapse = useRef();

  return (
    <Router>
      <div id='contenedor'>
        <div id='menu'>
          <nav id="barra-menu" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img id="logo" src={logo} alt="Logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapse}>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link onClick={() => { if (navbarCollapse.current.classList.contains('show')) navbarCollapse.current.classList.remove('show'); }} className="nav-link" to="/">Inicio</Link>
                  </li>
                  <li className="nav-item">
                    <Link onClick={() => { if (navbarCollapse.current.classList.contains('show')) navbarCollapse.current.classList.remove('show'); }} className="nav-link" to="/reglas">Reglas</Link>
                  </li>
                  <li className="nav-item">
                    <Link onClick={() => { if (navbarCollapse.current.classList.contains('show')) navbarCollapse.current.classList.remove('show'); }} className="nav-link" to="/acercaDe">Acerca de</Link>
                  </li>
                  <li className="nav-item">
                    <Link onClick={() => { if (navbarCollapse.current.classList.contains('show')) navbarCollapse.current.classList.remove('show'); }} className="nav-link" to="/juego">Test juego</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/acercaDe" element={<AcercaDe />} />
            <Route path="/juego" element={<Juego />} />
            <Route path="/reglas" element={<Reglas />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
