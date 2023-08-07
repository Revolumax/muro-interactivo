import React, { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom';

function Formulario() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const auth = getAuth();
  const [user] = useAuthState(auth);


  useEffect(() => {
    const fetchPosts = async () => {
      const db = getFirestore();
      const postsCollection = collection(db, 'posts');
      const postsSnapshot = await getDocs(postsCollection);
      const postsData = postsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(postsData);
    };

    fetchPosts();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = getFirestore();
    const postsCollection = collection(db, 'posts');

    const newData = {
      title: title,
      content: content,
    };

    await addDoc(postsCollection, newData);
    console.log('Datos enviados a Firebase');
    window.location.href = '/Login/Publicaciones/AgregarPublicacion';
    
    // Limpiar los campos después de enviar los datos
    setTitle('');
    setContent('');


  };

  return (
<div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
<a class="navbar-brand" href="3"></a>
<a class="navbar-brand" href="">Muro Interactivo</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarColor01">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
</ul>
</div>
</div>
</nav>

<div class="pantalla">
<div class="container" className="container custom-container">
  <h1 class="mt-5 text-start">Bienvenido!   {user && <p>{user.email}</p>}</h1>
  <p class="lead text-start">Este es tu perfil de usuario, aqui tendras acceso a publicar tus post publicos</p>
  <p class="text-start">Usa este enlace para cerrar sesion y volver a iniciar sesion <Link to="/Login"><a href="/docs/5.3/examples/sticky-footer-navbar/">Muro Interactivo</a></Link> Nuestra comunidad esta creciendo!</p>
  <p class="lead text-start">Agrega una publicacion en el formulario ------------------ &#62;</p>
</div>

<div class="container2" className="container2">
<form onSubmit={handleSubmit}>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Titulo de la publicacion</label>
    <input type="text" value={title}   onChange={(e) => setTitle(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">Nunca compartiremos su datos con nadie más C:</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Descripcion de la publicacion</label>
    <textarea value={content} onChange={(e) => setContent(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
</div>
</div>
<br/>
<br/>
<br/>
<br/>

<div class="px-3 py-2 text-bg-dark border-bottom">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
          </a>

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <h1 href="#" class="nav-link text-white" className="titulo">
                Zona Publica
              </h1>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="album py-5 bg-light">
<div class="container">
<div class="row">
<h1>Comunidad</h1>

       {posts.map((post) => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
              </div>
            </div>
          </div>
        ))}
   







</div>
</div>
</div>
    






</div>
  );
}

export default Formulario;