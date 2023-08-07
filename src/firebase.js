import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDAoLA6_zN_-sJHKYw0VNV2hnBFKzDCXWY",
    authDomain: "muro-interactivo-67e4e.firebaseapp.com",
    projectId: "muro-interactivo-67e4e",
    storageBucket: "muro-interactivo-67e4e.appspot.com",
    messagingSenderId: "805822977612",
    appId: "1:805822977612:web:af80e3c3cfd5ecdea386e9"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();