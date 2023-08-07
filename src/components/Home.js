import React, { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Home = () => {

  const [posts, setPosts] = useState([]);

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



  return (
<div className='Home'>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
<a class="navbar-brand" href="3"></a>
<a class="navbar-brand" href="3">Muro Interactivo</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarColor01">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
</ul>
</div>
</div>
</nav>

<div className="image-container">
        <div className="dark-overlay"></div>
        <img src="/amigos.jpg" alt="logo" className="image-style" />
      </div>



  <div class="px-4 py-5  text-center">
<h1 class="display-5 fw-bold">Bienvenido a nuestra comunidad!!</h1>
<div class="col-lg-6 mx-auto">
<p class="lead mb-4">
Unete y crea tus publicaciones en este maravilloso grupo de personas
</p>
<div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
<Link to="/Registrate">
<button type="button" class="btn btn-primary btn-lg px-4 gap-3">Crear Cuenta</button>
</Link>
<Link to="/Login">
<button type="button" class="btn btn-outline-secondary btn-lg px-4">Iniciar Sesion</button>
</Link>
</div>
</div>
</div>

<br/>
<br/>
<br/>
<h1 class="display-5 fw-bold">Publicaciones</h1>

<div class="album py-5 bg-light">
<div class="container">
<div class="row">


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
    
  )
}

export default Home