import * as controlador from '../controlador/controladorIndex.js'
// login
let btnInicio = document.getElementById('btnSesion');
let inputEmailSesion = document.getElementById('mailSesion');
let inputPasswordSesion = document.getElementById('passwordSesion');
// registro comprador
let btnRegistroUser = document.getElementById('btnRegistroUser');
let registroUserName = document.getElementById('nameRegistroUser');
let registroUserMail = document.getElementById('mailRegistroUser');
let registrouserPassword = document.getElementById('passwordRegistroUser');
let registroUserCheck = document.getElementById('checkRegistroUser');
// registro artista
let btnRegistroArtist = document.getElementById('btnRegistroArtist');
let registroArtistName = document.getElementById('nameRegistroArtist');
let registroArtistMail = document.getElementById('mailRegistroArtist');
let registroArtistPassword = document.getElementById('passwordRegistroArtist');
let registroArtistCheck = document.getElementById('checkRegistroArtist');

document.getElementById('btn1').addEventListener('click', function(){
    document.getElementById('boxInicio').hidden = true;
    document.getElementById('boxRegistroUser').hidden = false;
})
document.getElementById('btn2').addEventListener('click', function(){
    document.getElementById('boxInicio').hidden = true;
    document.getElementById('boxRegistroUser').hidden = true;
    document.getElementById('boxRegistroArtist').hidden = true;
    document.getElementById('boxInicioSesion').hidden = false;
})
document.getElementById('RegistoArtista').addEventListener('click', function(){
    document.getElementById('boxInicio').hidden = true;
    document.getElementById('boxRegistroUser').hidden = true;
    document.getElementById('boxRegistroArtist').hidden = false;

    document.getElementById('nameRegistroUser').value = '';
    document.getElementById('mailRegistroUser').value = '';
    document.getElementById('passwordRegistroUser').value = '';
    document.getElementById('checkRegistroUser').checked = false;
})
document.getElementById('RegistoCliente').addEventListener('click', function(){
    document.getElementById('boxInicio').hidden = true;
    document.getElementById('boxRegistroUser').hidden = false;
    document.getElementById('boxRegistroArtist').hidden = true;

    document.getElementById('nameRegistroArtist').value = '';
    document.getElementById('mailRegistroArtist').value = '';
    document.getElementById('passwordRegistroArtist').value = '';
    document.getElementById('checkRegistroArtist').checked = false;
})
document.getElementById('cerrarRegistroUser').addEventListener('click', function(){
    document.getElementById('boxInicio').hidden = false;
    document.getElementById('boxRegistroUser').hidden = true;
    document.getElementById('boxRegistroArtist').hidden = true;

    document.getElementById('nameRegistroUser').value = '';
    document.getElementById('mailRegistroUser').value = '';
    document.getElementById('passwordRegistroUser').value = '';
    document.getElementById('checkRegistroUser').checked = false;

    document.getElementById('nameRegistroArtist').value = '';
    document.getElementById('mailRegistroArtist').value = '';
    document.getElementById('passwordRegistroArtist').value = '';
    document.getElementById('checkRegistroArtist').checked = false;
})
document.getElementById('cerrarRegistroArtist').addEventListener('click', function(){
    document.getElementById('boxInicio').hidden = false;
    document.getElementById('boxRegistroUser').hidden = true;
    document.getElementById('boxRegistroArtist').hidden = true;

    document.getElementById('nameRegistroUser').value = '';
    document.getElementById('mailRegistroUser').value = '';
    document.getElementById('passwordRegistroUser').value = '';
    document.getElementById('checkRegistroUser').checked = false;

    document.getElementById('nameRegistroArtist').value = '';
    document.getElementById('mailRegistroArtist').value = '';
    document.getElementById('passwordRegistroArtist').value = '';
    document.getElementById('checkRegistroArtist').checked = false;
})
document.getElementById('btncerrarSesion').addEventListener('click', function(){
    document.getElementById('boxInicio').hidden = false;
    document.getElementById('boxRegistroUser').hidden = true;
    document.getElementById('boxRegistroArtist').hidden = true;
    document.getElementById('boxInicioSesion').hidden = true;

    document.getElementById('nameRegistroUser').value = '';
    document.getElementById('mailRegistroUser').value = '';
    document.getElementById('passwordRegistroUser').value = '';
    document.getElementById('checkRegistroUser').checked = false;

    document.getElementById('nameRegistroArtist').value = '';
    document.getElementById('mailRegistroArtist').value = '';
    document.getElementById('passwordRegistroArtist').value = '';
    document.getElementById('checkRegistroArtist').checked = false;

    document.getElementById('mailSesion').value = '';
    document.getElementById('passwordSesion').value = '';
})

btnInicio.addEventListener('click', () => {
    controlador.validarLogin(inputEmailSesion.value,inputPasswordSesion.value)
})
btnRegistroUser.addEventListener('click', () => {
    if(registroUserMail.value.length == 0){
        Swal.fire({
            text: 'Debe ingresar un correo',
            icon: 'error',
            showConfirmButton: false,
            showCloseButton: true
        })
    } else {
        controlador.validarNuevoComprador(registroUserMail.value, registroUserName.value,registrouserPassword.value,registroUserCheck)
    }
})
btnRegistroArtist.addEventListener('click', () => {
    if(registroArtistMail.value.length == 0){
        Swal.fire({
            text: 'Debe ingresar un correo',
            icon: 'error',
            showConfirmButton: false,
            showCloseButton: true
        })
    } else {
        controlador.validarNuevoArtist(registroArtistMail.value, registroArtistName.value,registroArtistPassword.value,registroArtistCheck)
    }
})