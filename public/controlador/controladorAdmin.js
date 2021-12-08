//firebase
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
// variables
var refUserActive = doc(db, "admin", sessionStorage.getItem('UserActive'));
const docSnapUserActive = await getDoc(refUserActive);
document.getElementById('labelNombreAdmin').innerHTML = docSnapUserActive.data().name;
/*users*/
let paisUserC = [];
let nombreUserC = [];
let correoUserC = [];
let telefonoUserC = [];
let departamentoUserC = [];
let ciudadUserC = [];
let direccionUserC = [];
let codigoPUserC = [];
let documentoUserC = [];
/*vendedores*/
let paisVendedorC = [];
let nombreVendedorC = [];
let correoVendedorC = [];
let telefonoVendedorC = [];
let departamentoVendedorC = [];
let ciudadVendedorC = [];
let direccionVendedorC = [];
let codigoPVendedorC = [];
let documentoVendedorC = [];
/*solicitudes*/
let UrlImgObra_solicitudC = [];
let nombreObra_solicitudC = [];
let estiloObra_solicitudC = [];
let nombreArtista_solicitudC = [];
let precioObra_solicitudC = [];
let fechaObra_solicitudC = [];
let horaObra_solicitudC = [];
let descripcionObra_solicitudC = [];
let idObra_solicitudC = [];
/*obras*/
let UrlImgObra_obraC = [];
let nombreObra_obraC = [];
let estiloObra_obraC = [];
let nombreArtista_obraC = [];
let precioObra_obraC = [];
let fechaObra_obraC = [];
let horaObra_obraC = [];
let descripcionObra_obraC = [];
let idObra_obraC = [];
/*ventas*/
let venta_comprador = [];
let venta_vendedor = [];
let venta_nombre_obra = [];
let venta_fecha = [];
let venta_precio = [];
let venta_id = [];
let venta_url = [];
// funciones
let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});
//firebase users
const q = query(collection(db, "users"), where("email", "!=", ''));
const querySnapshot = await getDocs(q);
var cont = -1;
    querySnapshot.forEach((doc) => {
        cont += 1;
        correoUserC[cont] = doc.data().email;
        nombreUserC[cont] = doc.data().nombre;
        documentoUserC[cont] = doc.data().documento;
        telefonoUserC[cont] = doc.data().telefono;
        paisUserC[cont] = doc.data().pais;
        departamentoUserC[cont] = doc.data().departamento;
        ciudadUserC[cont] = doc.data().ciudad;
        direccionUserC[cont] = doc.data().direccion;
        codigoPUserC[cont] = doc.data().codigoPostal;
    });
//firebase vendedores
const r = query(collection(db, "artist"), where("email", "!=", ''));
    const querySnapshot3 = await getDocs(r);
    var cont2 = -1;
        querySnapshot3.forEach((doc) => {
            cont2 += 1;
            correoVendedorC[cont2] = doc.data().email;
            nombreVendedorC[cont2] = doc.data().nombre;
            documentoVendedorC[cont2] = doc.data().documento;
            telefonoVendedorC[cont2] = doc.data().telefono;
            paisVendedorC[cont2] = doc.data().pais;
            departamentoVendedorC[cont2] = doc.data().departamento;
            ciudadVendedorC[cont2] = doc.data().ciudad;
            direccionVendedorC[cont2] = doc.data().direccion;
            codigoPVendedorC[cont2] = doc.data().codigoPostal;
        });
// firebase solicitudes
const p = query(collection(db, "solicitudes"), where("id", "!=", ''));
    const querySnapshot2 = await getDocs(p);
    var cont1 = -1;
        querySnapshot2.forEach((doc) => {
            cont1 += 1;
            idObra_solicitudC[cont1] = doc.data().id;
            nombreObra_solicitudC[cont1] = doc.data().nombreObra;
            nombreArtista_solicitudC[cont1] = doc.data().nombreArtista;
            estiloObra_solicitudC[cont1] = doc.data().estilo;
            precioObra_solicitudC[cont1] = dollarUS.format(doc.data().precio);
            UrlImgObra_solicitudC[cont1] = doc.data().url;
            fechaObra_solicitudC[cont1] = doc.data().fecha;
            horaObra_solicitudC[cont1] = doc.data().hora;
            descripcionObra_solicitudC[cont1] = doc.data().descripcion;
        });
// firebase obras
const a = query(collection(db, "obras"), where("id", "!=", ''));
    const querySnapshot4 = await getDocs(a);
    var cont3 = -1;
        querySnapshot4.forEach((doc) => {
            cont3 += 1;
            idObra_obraC[cont3] = doc.data().id;
            nombreObra_obraC[cont3] = doc.data().nombreObra;
            nombreArtista_obraC[cont3] = doc.data().nombreArtista;
            estiloObra_obraC[cont3] = doc.data().estilo;
            precioObra_obraC[cont3] = dollarUS.format(doc.data().precio);
            UrlImgObra_obraC[cont3] = doc.data().url;
            fechaObra_obraC[cont3] = doc.data().fecha;
            horaObra_obraC[cont3] = doc.data().hora;
            descripcionObra_obraC[cont3] = doc.data().descripcion;
        });
// firebase ventas
const o = query(collection(db, "ventas"), where("id", "!=", ''));
    const querySnapshot9 = await getDocs(o);
    var cont4 = -1;
        querySnapshot9.forEach((doc) => {
            cont4 += 1;
            venta_id[cont4] = doc.data().id;
            venta_comprador[cont4] = doc.data().comprador;
            venta_vendedor[cont4] = doc.data().vendedor;
            venta_precio[cont4] = doc.data().precio;
            venta_fecha[cont4] = doc.data().fecha;
            venta_nombre_obra[cont4] = doc.data().nombreObra;
            venta_url[cont4] = doc.data().url;
        });

// export users
export function correos(){    let correos = correoUserC;    return correos;}
export function nombres(){    let nombres = nombreUserC;    return nombres;}
export function pais(){    let pais = paisUserC;    return pais;}
export function departamento(){    let departamento = departamentoUserC;    return departamento;}
export function telefono(){    let telefonos = telefonoUserC;    return telefonos;}
export function ciudad(){    let ciudad = ciudadUserC;    return ciudad;}
export function direccion(){    let direccion = direccionUserC;    return direccion;}
export function cPostal(){    let cPostal = codigoPUserC;    return cPostal;}
export function documento(){    let docs = documentoUserC;    return docs;}
// export vendedores
export function correos2(){    let Acorreos = correoVendedorC;    return Acorreos;}
export function nombres2(){    let Anombres = nombreVendedorC;    return Anombres;}
export function pais2(){    let Apais = paisVendedorC;    return Apais;}
export function departamento2(){    let Adepartamento = departamentoVendedorC;    return Adepartamento;}
export function telefono2(){    let Atelefonos = telefonoVendedorC;    return Atelefonos;}
export function ciudad2(){    let Aciudad = ciudadVendedorC;    return Aciudad;}
export function direccion2(){    let Adireccion = direccionVendedorC;    return Adireccion;}
export function cPostal2(){    let AcPostal = codigoPVendedorC;    return AcPostal;}
export function documento2(){    let Adocs = documentoVendedorC;    return Adocs;}
// export solicitudes
export function urlSolicitud(){    let URLimg = UrlImgObra_solicitudC;    return URLimg}
export function nombreObraSolicitud(){    let nombre = nombreObra_solicitudC;    return nombre;}
export function estiloSolicitud(){    let estilo = estiloObra_solicitudC;    return estilo}
export function nombreArtistaSolicitud(){    let nombre = nombreArtista_solicitudC;    return nombre}
export function precioSolicitud(){    let precio = precioObra_solicitudC;    return precio;}
export function fechaSolicitud(){    let fecha = fechaObra_solicitudC;    return fecha;}
export function descripcionSolicitud(){    let descripcion = descripcionObra_solicitudC;    return descripcion;}
export function horaSolicitud(){    let hora = horaObra_solicitudC;    return hora;}
export function idSolicitud(){    let id = idObra_solicitudC;    return id;}
// export obras
export function urlObra(){    let URLimg = UrlImgObra_obraC;    return URLimg}
export function nombreObraObra(){    let nombre = nombreObra_obraC;    return nombre;}
export function estiloObra(){    let estilo = estiloObra_obraC;    return estilo}
export function nombreArtistaObra(){    let nombre = nombreArtista_obraC;    return nombre}
export function precioObra(){    let precio = precioObra_obraC;    return precio;}
export function fechaObra(){    let fecha = fechaObra_obraC;    return fecha;}
export function descripcionObra(){    let descripcion = descripcionObra_obraC;    return descripcion;}
export function horaObra(){    let hora = horaObra_obraC;    return hora;}
export function idObra(){    let id = idObra_obraC;    return id;}
// export ventas
export function ventaId(){    let ID = venta_id;    return ID;}
export function ventaComprador(){    let comprador = venta_comprador;    return comprador;}
export function ventaVendedor(){    let vendedor = venta_vendedor;    return vendedor;}
export function ventaFecha(){    let fecha = venta_fecha;    return fecha;}
export function ventaPrecio(){    let precio = venta_precio;    return precio;}
export function ventaNombre(){    let nombreObra = venta_nombre_obra;    return nombreObra;}
export function ventaUrl(){    let url = venta_url;    return url;}
//------------------------------ Actualizar tablas ------------------------------------------------
