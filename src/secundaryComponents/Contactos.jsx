//Componente Contacto.js
import React from 'react';
import email from './imagenes/email.png';
import ubicacion from './imagenes/ubicacion.png';
import llamada from './imagenes/llamada.png';

function Contactos() {
  return (
    <section className="contactos">
      <h1>Contactos</h1>
      <div className="contacto">
      <img src={email} alt="correo" /> 
        <span>soporterecepcion@modulorec.com</span>
      </div>
      <div className="contacto">
      <img src={ubicacion} alt="ubicación" /> 
        <span>Bogotá D.C. - Carrera 51 #135-56 sur</span>
      </div>
      <div className="contacto">
      <img src={llamada} alt="correo" /> 
        <span>(601) 789 65 65 - (+57) 314 356 5696</span>
      </div>
    </section>
  );
}

export default Contactos;
