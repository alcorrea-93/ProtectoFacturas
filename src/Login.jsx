//Componente de loggeo
import React, { useState } from 'react';
import './Login.css';
import App from './App';


function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar el inicio de sesión
  const [error, setError] = useState(false); // Estado para manejar errores de inicio de sesión

  const handleSubmit = (event) => {
    event.preventDefault();
    const usuario = event.target.usuario.value;
    const password = event.target.password.value;


  fetch(`http://localhost:8080/usuarios?usuario=${usuario}&contrasena=${password}`) 
  .then(response => response.text())
  .then(data => {
    if (data=='valido'){
      setIsLoggedIn(true);
      setError(false);
    }else {
      // Si las credenciales son incorrectas, establece el estado de error como verdadero
      setError(true);
    }
  }).catch(error => setError(true)); 
  };

  if (isLoggedIn) {
    return <App/>;
  }

  return (
    <section className="login">
      <div className="titulo">
        <h2>Bienvenido</h2>
      </div>
      <form id="derecho" onSubmit={handleSubmit}>
        <div className="input-text">
          <span>Usuario</span>
          <input id="usuario" type="text" name="usuario" placeholder="usuario@example.com" required />
        </div>
        <div className="input-text">
          <span>Contraseña</span>
          <input id="password" type="password" placeholder="********" name="password" required />
        </div>
        {error && <p className="error">Credenciales incorrectas. Por favor, inténtalo de nuevo.</p>}
        <button type="submit">Iniciar Sesión</button>

        <div className="opcion">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
      </form>
    </section>
  );
}

export default Login;