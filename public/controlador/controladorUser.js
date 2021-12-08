import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyDO2H_6tlK4WK21G-mi-cbgaE8cGPh29yM",
    authDomain: "b-i-x-o.firebaseapp.com",
    projectId: "b-i-x-o",
    storageBucket: "b-i-x-o.appspot.com",
    messagingSenderId: "764963837374",
    appId: "1:764963837374:web:428145ff78fa8cd217d5ef"
  };
// Initialize Firebase
  const app = initializeApp(firebaseConfig);
//firestore
import {
    getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, query, where, getDocs
}
from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"
const db = getFirestore();
if(sessionStorage.getItem('UserActive') != null){
  var refUserActive = doc(db, "users", sessionStorage.getItem('UserActive'));
const docSnapUserActive = await getDoc(refUserActive);
document.getElementById('labelNombreUser').innerHTML = docSnapUserActive.data().nombre;
document.getElementById('boxMenuNombreUser').innerHTML = docSnapUserActive.data().nombre;
}
// firebase functions
export function cerrarSesion(){
    sessionStorage.removeItem("UserActive");
    location.replace("index.html");
}
let recientes = ['./imagenes/Pinturas/avignon_picasso.jpg','./imagenes/Pinturas/avignon_picasso.jpg','./imagenes/Pinturas/avignon_picasso.jpg','./imagenes/Pinturas/avignon_picasso.jpg','./imagenes/Pinturas/avignon_picasso.jpg'];
export function obrasRecientes(){
  let array = recientes;
  return array;
}
let mejores = ['./imagenes/Pinturas/van-gohg1.jpg','./imagenes/Pinturas/van-gohg1.jpg','./imagenes/Pinturas/van-gohg1.jpg','./imagenes/Pinturas/van-gohg1.jpg','./imagenes/Pinturas/van-gohg1.jpg'];
export function obrasMejores(){
  let array = mejores;
  return array;
}