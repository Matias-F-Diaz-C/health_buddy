// src/components/Navbar.jsx
import React from 'react';

// Un estilo simple para el navbar, puedes moverlo a un archivo .css después
const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  background: '#f8f8f8',
  borderBottom: '1px solid #ddd',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>Health Buddy</div>
      <div>
        <a href="#features" style={{ margin: '0 1rem' }}>Características</a>
        <a href="#login" style={{ margin: '0 1rem' }}>Ingresar</a>
      </div>
    </nav>
  );
}

export default Navbar;