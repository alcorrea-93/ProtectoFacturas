// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Login from './Login.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Determinar si el usuario está autenticado o no
const isAuthenticated = false; // Establecer este valor según la lógica de tu aplicación

root.render(
  <React.StrictMode>
    {isAuthenticated ? <App /> : <Login />}
  </React.StrictMode>
);
