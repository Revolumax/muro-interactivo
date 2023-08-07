import React from 'react';
import ReactDOM from 'react-dom'; // Importa ReactDOM correctamente
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app';
import 'firebase/auth'; // Importa los módulos que necesitas


const firebaseConfig = {
  apiKey: "AIzaSyDAoLA6_zN_-sJHKYw0VNV2hnBFKzDCXWY",
  authDomain: "muro-interactivo-67e4e.firebaseapp.com",
  projectId: "muro-interactivo-67e4e",
  storageBucket: "muro-interactivo-67e4e.appspot.com",
  messagingSenderId: "805822977612",
  appId: "1:805822977612:web:af80e3c3cfd5ecdea386e9"
};
// Inicializa Firebase con la configuración
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);