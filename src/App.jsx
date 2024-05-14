import React, { useState } from 'react';
import './App.css';

// Se importan componentes de sección aquí
import Login from './Login';
import Inicio from './Inicio';
import Ayuda from './Ayuda';
import Contactos from './Contactos';
import Configuraciones from './Configuraciones';
import Facturas from './Facturas';

 //front

function App() {
  const [section, setSection] = useState('Inicio');

  // Función para cambiar la sección
  const cambiarContenido = (sectionName) => {
    setSection(sectionName);
  };

  const renderContenido = () => {
    switch (section) {
      case 'Login':
  return <Login />;
      case 'inicio':
        return <Inicio />;
      case 'ayuda':
        return <Ayuda />;
      case 'contactos':
        return <Contactos />;
      case 'configuraciones':
        return <Configuraciones />;
      case 'facturas':
        return <Facturas />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="cabecera">
        {/* Botones para cambiar la sección */}
        <button onClick={() => cambiarContenido('inicio')}>Inicio</button>
        <button onClick={() => cambiarContenido('ayuda')}>Ayuda</button>
        <button onClick={() => cambiarContenido('contactos')}>Contactos</button>
      </header>
      <nav className='lateral'>
        {/* Navegación fija */}
        <h3>Módulo Recepción</h3>
        <h4>Menu</h4>
        <div className='lateralBoton'>
        <button onClick={() => cambiarContenido('configuraciones')}>Configuraciones</button>
        <button onClick={() => cambiarContenido('facturas')}>Facturas</button>
        <button><a href="Login.jsx">Cerrar Sesión</a></button>
        </div>
      </nav>
      <main className="contenido">
        {/* Renderiza el contenido según la sección actual */}
        {renderContenido()}
      </main>
    </div>
  );
}

export default App;

