// src/components/Footer.jsx
import React from 'react';

const footerStyle = {
  textAlign: 'center',
  padding: '2rem',
  marginTop: '4rem',
  background: '#333',
  color: 'white',
};

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={footerStyle}>
      <p>&copy; {currentYear} Health Buddy. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;