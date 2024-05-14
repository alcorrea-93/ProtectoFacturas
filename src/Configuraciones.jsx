//Componente Configuraciones.js
import React from 'react';

function Configuraciones() {
  return (
    <section className="configuraciones">
      <h1>Modificar Usuario</h1>
      <form action="#">
        <div className="entrada">
          <span>Usuario</span>
          <input type="text" />
        </div>
        <div className="entrada">
          <span>Correo Electrónico</span>
          <input type="text" />
        </div>
        <div className="entrada">
          <span>Contraseña</span>
          <input type="password" />
        </div>
        <button>Guardar Cambios</button>
      </form>
    </section>
  );
}

export default Configuraciones;
