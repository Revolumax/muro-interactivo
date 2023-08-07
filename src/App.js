import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Crear from './components/Crear';
import PostList from './components/PostList';
import AgregarPost from './components/AgregarPost';
import './App.css';
import './components/Home.css';
import './components/Agregar.css';



function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrate" element={<Crear />} />
        <Route path="/Login/Publicaciones" element={<PostList />} />
        <Route path="/Login/Publicaciones/AgregarPublicacion" element={<AgregarPost />} />
        </Routes>      
      </div>
    </Router>
  );
}

export default App;