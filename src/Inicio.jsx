// Inicio.js
import React from 'react';
import inicio from './imagenes/inicio.png';

function Inicio() {
  return (
    <section className="inicio">
      <h1>Bienvenidos</h1>
      <img src={inicio} alt="Bienvenidos" /> 
    </section>
  );
}

export default Inicio;
