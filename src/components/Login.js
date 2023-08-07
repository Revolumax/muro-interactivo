import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';





function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Inicializa el hook useHistory
  const auth = getAuth();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuario inició sesión exitosamente');
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      window.location.href = '/Login/Publicaciones/AgregarPublicacion'; // Puedes redirigir al usuario a la página que desees después del inicio de sesión
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setShowErrorMessage(true);
      setErrorMessage('Error al iniciar sesión: ' + error.message); // Capturar y mostrar el mensaje de error
      setShowSuccessMessage(false); // Ocultar el mensaje de éxito si hubo un error
    }
  };
  
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
<a class="navbar-brand" href="3"></a>
<Link to="/">
<a class="navbar-brand" href="3">Muro Interactivo</a>
</Link>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarColor01">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
</ul>
</div>
</div>
</nav>

<br/>
<br/>
<br/>


<div className="d-flex justify-content-center align-items-center vh-200  ">
      <div className="p-4 rounded" style={{ width: '400px', backgroundColor: 'rgb(90, 90, 90)',  color: 'white' }}>
<form class="form-signin"  onSubmit={handleLogin}>
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Iniciar Sesion</h1>
        <p>Ingresa tus credenciales para acceder</p>
      </div>

      <div class="form-label-group">
      <label for="inputEmail">Correo Electronico</label>
        <input type="email" id="inputEmail" value={email} class="form-control" placeholder="Ingresa tu correo electronico" onChange={(e) => setEmail(e.target.value)} required="" autofocus="" />
        
      </div>
<br/>
      <div class="form-label-group">
      <label for="inputPassword">Contraseña</label>
        <input type="password" id="inputPassword" value={password} class="form-control" placeholder="Ingresa tu contraseña"  onChange={(e) => setPassword(e.target.value)} required="" />
    
      </div>

      <div class="checkbox mb-3"></div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Iniciar Sesion</button>
      <p class="mt-5 mb-3 text-muted text-center"></p>
    </form>
    </div>
    </div>
    <Link to="/">
    <button type="button" class="btn btn-success" className='boton'>Regresar a la pagina principal</button>
    </Link>

    </div>
  );
}

export default Login;