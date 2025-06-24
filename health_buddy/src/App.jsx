import React from 'react';
import { Leaf, Dumbbell, BookOpen, BrainCircuit, Youtube, Twitter, Instagram } from 'lucide-react';

// FONT IMPORT (Asegúrate de agregar esto en tu index.html <head>)
/*
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Poppins', sans-serif;
    }
  </style>
*/

//=========== COMPONENTES ===========//

// --- Componente: Navbar ---
const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
          <Leaf className="text-green-500" size={28} />
          <span>Health Buddy</span>
        </a>
        
        {/* Links de Navegación (para Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-green-500 transition-colors">Características</a>
          <a href="#" className="text-gray-600 hover:text-green-500 transition-colors">Rutinas</a>
          <a href="#" className="text-gray-600 hover:text-green-500 transition-colors">Precios</a>
        </div>
        
        {/* Botones de Acción (para Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-600 hover:text-green-500 transition-colors font-medium">
            Ingresar
          </button>
          <button className="bg-green-500 text-white font-medium px-5 py-2 rounded-full hover:bg-green-600 transition-all shadow-md hover:shadow-lg">
            Regístrate Gratis
          </button>
        </div>
        
        {/* Menú Hamburguesa (para Móvil) */}
        <div className="md:hidden">
            <button className="text-gray-600 hover:text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
      </div>
    </nav>
  );
};

// --- Componente: Hero ---
const Hero = () => {
  return (
    <section className="bg-green-50/50 py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Transforma tu <span className="text-green-500">energía</span>,
          <br />
          transforma tu vida
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Tu compañero de fitness inteligente para crear, seguir y optimizar tus rutinas de ejercicio con la ayuda de IA.
        </p>
        <div className="mt-10">
          <button className="bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-green-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Empieza Gratis Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

// --- Componente: Features ---
const FeatureCard = ({ icon, title, children }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
      <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            ¿Qué puedes hacer con Health Buddy?
          </h2>
          <p className="text-lg text-gray-600 mt-4">Todo lo que necesitas para alcanzar tus metas de fitness.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard icon={<Dumbbell size={32} />} title="Rutinas Personalizadas">
            Crea y guarda tus propias rutinas o deja que nuestra IA diseñe el plan de entrenamiento perfecto para ti basado en tus objetivos.
          </FeatureCard>
          <FeatureCard icon={<BookOpen size={32} />} title="Guía de Ejercicios">
            Accede a una amplia librería de ejercicios con videos y descripciones detalladas para asegurar una técnica correcta y segura.
          </FeatureCard>
          <FeatureCard icon={<BrainCircuit size={32} />} title="Asistente con IA">
            Nuestro asistente inteligente analiza tu progreso, te da feedback y ajusta tus rutinas para que nunca dejes de mejorar.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

// --- Componente: Footer ---
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Columna 1: Logo y descripción */}
          <div>
            <a href="#" className="flex items-center space-x-2 text-2xl font-bold">
              <Leaf className="text-green-400" size={28} />
              <span>Health Buddy</span>
            </a>
            <p className="mt-4 text-gray-400">Tu compañero de fitness inteligente.</p>
          </div>
          
          {/* Columna 2: Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Explorar</h4>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Características</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Rutinas</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Precios</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div>
             <h4 className="font-bold text-lg mb-4">Síguenos</h4>
             <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><Twitter size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Instagram size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Youtube size={24} /></a>
             </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Health Buddy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};


//=========== COMPONENTE PRINCIPAL ===========//

export default function App() {
  return (
    <div className="bg-green-50/50 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Aquí puedes agregar más secciones como "Testimonios", "Planes", etc. */}
      </main>
      <Footer />
    </div>
  )
}
