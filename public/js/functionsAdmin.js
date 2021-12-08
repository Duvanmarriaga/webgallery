import * as controlador  from '..//controlador/controladorAdmin.js'
/*datosUsers*/
let paisUser = controlador.pais();
let nombreUser = controlador.nombres();
let correoUser = controlador.correos();
let telUser = controlador.telefono();
let departamentoUser = controlador.departamento();
let ciudadUser = controlador.ciudad();
let direccionUser = controlador.direccion();
let codigoPUser = controlador.cPostal()
let docUser = controlador.documento();
/*datosSolicitudesObras*/
let UrlImgObra_solicitud = controlador.urlSolicitud();
let nombreObra_solicitud = controlador.nombreObraSolicitud();
let estiloObra_solicitud = controlador.estiloSolicitud();
let nombreArtista_solicitud = controlador.nombreArtistaSolicitud();
let precioObra_solicitud = controlador.precioSolicitud();
let fechaObra_solicitud = controlador.fechaSolicitud();
let horaObra_solicitud = controlador.horaSolicitud();
let idObra_solicitud = controlador.idSolicitud();
let descripcionObra_solicitud = controlador.descripcionSolicitud();
/*datosVentasObras*/
/*slideshow*/
var triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})
/*botones*/
document.addEventListener('click', event => {
  document.querySelectorAll('.vistaPreviaImg').forEach(item => {
    item.addEventListener('click', event => {

    })
  })
});
// #users
function cargarUserPane(){
  for (let index = 0; index < correoUser.length; index++) {
    document.getElementById('labelNombreUsuario' + (index+1)).innerHTML = nombreUser[index];
    document.getElementById('labelCorreoUsuario' + (index+1)).innerHTML = correoUser[index];
    document.getElementById('filaUserInfo' + (index+1)).hidden = false;
  }
}
cargarUserPane();
// Mostrar info user
document.querySelectorAll('.btn_info_user').forEach(item => {
  item.addEventListener('click', event =>{
    let indexBtnInfo = item.id.substr(13,15) - 1;
    Swal.fire({
      title: 'info de ' + nombreUser[indexBtnInfo],
      width: '80%',
      html: '<table class="table table-responsive-sm ">'+
        '<tbody>'+
          '<tr>'+
            '<th scope="row">Nombre</th>'+
            '<td id="swal_nombre_user" scope="row"></td>'+
          '</tr>'+
          '<tr>'+
            '<th scope="row">Correo</th>'+
            '<td id="swal_correo_user" scope="row"></td>'+
          '</tr>'+
          '<tr>'+
            '<th scope="row">Teléfono</th>'+
            '<td id="swal_tel_user" scope="row"></td>'+
          '</tr>'+
          '<tr>'+
            '<th scope="row">País</th>'+
            '<td id="swal_pais_user" scope="row"></td>'+
          '</tr>'+
          '<tr>'+
            '<th scope="row">Departamento</th>'+
            '<td id="swal_departamento_user" scope="row"></td>'+
          '</tr>'+
          '<tr>'+
            '<th scope="row">Ciudad</th>'+
            '<td id="swal_ciudad_user" scope="row"></td>'+
          '</tr>'+
          '<tr>'+
            '<th scope="row">Dirección</th>'+
            '<td id="swal_direccion_user" class="w-75" scope="row"></td>'+
          '</tr>'+
          '<tr>'+
            '<th scope="row">Código postal</th>'+
            '<td id="swal_cPostal_user" scope="row"></td>'+
          '</tr>'+
          '<tr>'+
            '<th scope="row">Identifiación</th>'+
            '<td id="swal_id_user" scope="row"></td>'+
          '</tr>'+
        '</tbody>'+
      '</table>',
      showCloseButton: true
    })
    document.getElementById('swal_nombre_user').innerHTML = nombreUser[indexBtnInfo];
    document.getElementById('swal_correo_user').innerHTML = correoUser[indexBtnInfo];
    document.getElementById('swal_tel_user').innerHTML = telUser[indexBtnInfo];
    document.getElementById('swal_pais_user').innerHTML = paisUser[indexBtnInfo];
    document.getElementById('swal_departamento_user').innerHTML = departamentoUser[indexBtnInfo];
    document.getElementById('swal_ciudad_user').innerHTML = ciudadUser[indexBtnInfo];
    document.getElementById('swal_direccion_user').innerHTML = direccionUser[indexBtnInfo];
    document.getElementById('swal_cPostal_user').innerHTML = codigoPUser[indexBtnInfo];
    document.getElementById('swal_id_user').innerHTML = docUser[indexBtnInfo];
  })
})
// delete user
document.querySelectorAll('.btn_delete_user').forEach(item => {
  item.addEventListener('click', event =>{
    let indexBtnDel = item.id.substr(16,17) - 1;
    Swal.fire({
      title: 'eliminar ' + nombreUser[indexBtnDel]
    })
  })
})
// #solicitudes
function cargarSolicitudesPane(){
  for (let index = 0; index < nombreObra_solicitud.length; index++) {
    document.getElementById('labelNombreObra_Sol' + (index+1)).innerHTML = nombreObra_solicitud[index];
    document.getElementById('labelNombreAutor_Sol' + (index+1)).innerHTML = nombreArtista_solicitud[index];
    document.getElementById('labelFechaSolicitud' + (index+1)).innerHTML = fechaObra_solicitud[index];
    document.getElementById('filaSolicitudInfo' + (index+1)).hidden = false;
  }
}
cargarSolicitudesPane();
// Mostrar info solicitud
document.querySelectorAll('.btnInfoSolicitud').forEach(item => {
  item.addEventListener('click', event =>{
    let indexBtnSolicitudInfo = item.id.substr(16,17) - 1;
    Swal.fire({
      title: 'info de "' + nombreObra_solicitud[indexBtnSolicitudInfo]+'"',
      width: 'auto',
      html: '<img id="img_obra_info" class="img-thumbnail w-75 h-50"></img>'+
      '<h6 id="swal_id_obra"></h6>'+
      '<table class="table table-responsive-sm ">'+
        '<tbody>'+
          '<tr>'+
            '<th scope="row">Nombre Obra</th>'+
            '<td id="swal_nombre_obra" scope="row"></td>'+
          '</tr>'+
          '<tr>'+
            '<th scope="row">Artista</th>'+
            '<td id="swal_nombre_artista" scope="row"></td>'+
          '</tr>'+
          '<tr>'+
            '<th scope="row">Estilo</th>'+
            '<td id="swal_estilo_obra" scope="row"></td>'+
          '</tr>'+
          '<tr>'+
            '<th scope="row">Precio</th>'+
            '<td id="swal_precio_obra" scope="row"></td>'+
          '</tr>'+
          '<tr>'+
            '<th scope="row">Fecha</th>'+
            '<td id="swal_fecha_obra" scope="row"></td>'+
          '</tr>'+
          '<tr>'+
            '<th scope="row">Descripción</th>'+
            '<td id="swal_descripcion_obra" scope="row"></td>'+
          '</tr>'+
        '</tbody>'+
      '</table>',
      showCloseButton: true
    })
    document.getElementById('img_obra_info').src = UrlImgObra_solicitud[indexBtnSolicitudInfo];
    document.getElementById('swal_id_obra').innerHTML = 'ID: '+idObra_solicitud[indexBtnSolicitudInfo];
    document.getElementById('swal_nombre_obra').innerHTML = nombreObra_solicitud[indexBtnSolicitudInfo];
    document.getElementById('swal_nombre_artista').innerHTML = nombreArtista_solicitud[indexBtnSolicitudInfo];
    document.getElementById('swal_estilo_obra').innerHTML = estiloObra_solicitud[indexBtnSolicitudInfo];
    document.getElementById('swal_precio_obra').innerHTML = precioObra_solicitud[indexBtnSolicitudInfo];
    document.getElementById('swal_fecha_obra').innerHTML = fechaObra_solicitud[indexBtnSolicitudInfo] +' a las '+ horaObra_solicitud[indexBtnSolicitudInfo];
    document.getElementById('swal_descripcion_obra').innerHTML = descripcionObra_solicitud[indexBtnSolicitudInfo];
  })
})
// delete solicitud
document.querySelectorAll('.btnDeleteSolicitud').forEach(item => {
  item.addEventListener('click', event =>{

  })
})