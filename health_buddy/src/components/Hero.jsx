// src/components/Hero.jsx
import React from 'react';

const heroStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '4rem 2rem',
};

const buttonStyle = {
  marginTop: '2rem',
  padding: '0.8rem 1.5rem',
  fontSize: '1rem',
  cursor: 'pointer',
  background: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
};

function Hero() {
  return (
    <section style={heroStyle}>
      <h1>Tu Asistente de Ejercicio Inteligente</h1>
      <p>Crea rutinas, entiende cada ejercicio y recibe recomendaciones personalizadas con IA.</p>
      <button style={buttonStyle}>Empezar Ahora</button>
    </section>
  );
}

export default Hero;