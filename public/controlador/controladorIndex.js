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
// firebase functions
export async function verificarComprador(email, password){
    var ref = doc(db, "users", email);
    const docSnap = await getDoc(ref);

    if (docSnap.exists()){
        if(password == docSnap.data().password){
            sessionStorage.setItem("UserActive", email);
            location.replace("user.html");
        }else{
            Swal.fire('Error!','Contraseña incorrecta','error');    
        }
    } else {
        verificarVendedor(email, password);
    }   
}
async function verificarVendedor(email, password){
    var ref = doc(db, "artist", email);
    const docSnap = await getDoc(ref);

    if (docSnap.exists()){
        if(password == docSnap.data().password){
            sessionStorage.setItem("UserActive", email);
            location.replace("vendedor.html");
        }else{
            Swal.fire('Error!','Contraseña incorrecta','error');    
        }
    } else {
        verificarAdmin(email, password);
    }   
}
async function verificarAdmin(email, password){
    var ref = doc(db, "admin", email);
    const docSnap = await getDoc(ref);

    if (docSnap.exists()){
        if(password == docSnap.data().password){
            sessionStorage.setItem("UserActive", email);
            location.replace("admin.html");
        }else{
            Swal.fire('Error!','Contraseña incorrecta','error');    
        }
    } else {
        Swal.fire('Error!','Usuario no encontrado','error');
    }   
}
// functions
export function validarLogin(email, password){
    if(validate_email(email)){
        if(validate_password(password)){
            verificarComprador(email,password)
        } else {
            Swal.fire({
                text: 'La contraseña es muy corta, al menos 6 caracteres',
                icon: 'error',
                showConfirmButton: false,
                showCloseButton: true
            });
        }
    } else {
        Swal.fire({
            text: 'Ingrese un correo válido',
            icon: 'error',
            showConfirmButton: false,
            showCloseButton: true
        });
    }
}
function validate_email(email) {
    var expression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if (expression.test(email) == true) {
        // Email is good
        return true
    } else {
        // Email is not good
        return false
    }
}
function validate_password(password) {
// Firebase only accepts lengths greater than 6
if (password.length < 6) {
    return false
} else {
    return true
}
}
function validate_field(field) {
if (field == null) {
    return false
}
if (field.length <= 0) {
    return false
} else {
    return true
}
}
function validate_check(CheckBox){
	if (CheckBox.checked == true){
		return true;
	} else {
		return false;
	}
}
// registro
async function registroUser(email, name, password){
	var ref = doc(db, "users", email);

	const docRef = await setDoc(
		ref, {
			email: email,
			nombre: name,
			password: password
		}
	)
	.then(()=>{
		sessionStorage.setItem("UserActive", email);
        location.replace("user.html");
	})
	.catch((error)=>{
		new Swal.fire('Error!', error, 'error');
	});

}
export async function validarNuevoComprador(email, name, password, checkbox){
	var ref1 = doc(db, "users", email);
	var ref2 = doc(db, "artist", email);
	var ref3 = doc(db, "admin", email);
	const docSnap1 = await getDoc(ref1);
	const docSnap2 = await getDoc(ref2);
	const docSnap3 = await getDoc(ref3);
	if (docSnap1.exists() || docSnap2.exists() || docSnap3.exists()){
		Swal.fire("Atención","Ya existe una cuenta asociada a éste correo","error");
	} else {
		if(validate_email(email)){
            if(validate_field(name)){
                if(validate_password(password)){
                    if(validate_check(checkbox)){
                        registroUser(email, name, password);
                    } else {
                        Swal.fire({
                            text: 'Debe aceptar Términos & Condiciones',
                            icon: 'error',
                            showConfirmButton: false,
                            showCloseButton: true
                        })
                    }
                } else {
                    Swal.fire({
                        text: 'La contraseña es muy corta, al menos 6 dígitos',
                        icon: 'error',
                        showConfirmButton: false,
                        showCloseButton: true
                    })
                }
            } else {
                Swal.fire({
                    text: 'Ingrese un correo válido',
                    icon: 'error',
                    showConfirmButton: false,
                    showCloseButton: true
                })
            }
        } else {
            Swal.fire({
                text: 'Ingrese un nombre válido',
                icon: 'error',
                showConfirmButton: false,
                showCloseButton: true
            })
        }
	}
}
async function registroArtist(email, name, password){
	var ref = doc(db, "artist", email);

	const docRef = await setDoc(
		ref, {
			email: email,
			nombre: name,
			password: password
		}
	)
	.then(()=>{
		sessionStorage.setItem("UserActive", email);
        location.replace("vendedor.html");
	})
	.catch((error)=>{
		Swal.fire('Error!', error, 'error');
	});

}
export async function validarNuevoArtist(email, name, password, checkbox){
	var ref1 = doc(db, "users", email);
	var ref2 = doc(db, "artist", email);
	var ref3 = doc(db, "admin", email);
	const docSnap1 = await getDoc(ref1);
	const docSnap2 = await getDoc(ref2);
	const docSnap3 = await getDoc(ref3);
	if (docSnap1.exists() || docSnap2.exists() || docSnap3.exists()){
		Swal.fire("Atención","Ya existe una cuenta asociada a éste correo","error");
	} else {
		if(validate_email(email)){
            if(validate_field(name)){
                if(validate_password(password)){
                    if(validate_check(checkbox)){
                        registroArtist(email, name, password);
                    } else {
                        Swal.fire({
                            text: "Debe aceptar Términos y condiciones"
                        });
                    }
                } else {
                    Swal.fire({
                        text: "Debe ingresar una contraseña más larga"
                    });
                }
            } else {
                Swal.fire({
                    text: "Debe ingresar un correo válido"
                });
            }
        } else {
            Swal.fire({
                text: "Debe ingresar un nombre válido"
            });
        }
	}
}