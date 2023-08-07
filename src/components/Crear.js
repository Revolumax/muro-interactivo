import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Importa la función de Firebase para registrar usuarios
import { getAuth, updateProfile } from 'firebase/auth'; // Importa las funciones necesarias
import { Link } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore'; 

function Crear() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastName, setLastName] = useState('');

  const auth = getAuth(); // Obtén la instancia de autenticación
  const firestore = getFirestore();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Registra al usuario utilizando Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;

      // Agrega campos adicionales al perfil del usuario
      await setDoc(doc(firestore, 'users', newUser.uid), {
        username: user,
        lastName: lastName,
        // Otros campos personalizados aquí
      });

      console.log('Usuario registrado:', newUser);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  // ...

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
<form class="form-signin" onSubmit={handleSignup}>
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Registra una nueva cuenta!</h1>
        <p>Ingresa correctamente los datos para inscribirte en la comunidad</p>
      </div>

      <div class="form-label-group">
      <label for="inputEmail">Usuario</label>
        <input type="text" value={email} id="inputEmail" class="form-control" placeholder="Ingresa tu correo electronico"  onChange={(e) => setEmail(e.target.value)}  required="" />
      </div>
<br/>
      <div class="form-label-group">
      <label for="inputPassword">Crea una contraseña</label>
        <input type="password" value={password} id="inputPassword" class="form-control" placeholder="Ingresa tu clave nombre" onChange={(e) => setPassword(e.target.value)} required="" />
      </div>

      <br/>

      <div class="form-label-group">
      <label for="inputApellido">Apellido</label>
        <input type="text" value={lastName} id="inputPassword" class="form-control" placeholder="Ingresa tu apellido" onChange={(e) => setLastName(e.target.value)} required="" />
</div>

      <div class="checkbox mb-3"></div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Registrarme </button>
      <p class="mt-5 mb-3 text-muted text-center"></p>
    </form>
    </div>
    </div>
    </div>

  );
}

export default Crear;