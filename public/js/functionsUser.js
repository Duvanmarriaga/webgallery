import * as controlador from '../controlador/controladorUser.js'
/*Likes*/
let indexObraActual = 0;
let likes = [16,23,18,4,70,48];
let dislikes = [5,2,7,12,9,0];
/*datosUsers*/
let nombreUser = ['Ana','Andrés','Carlos','Cesar','Laura','Samuel'];
let correoUser = ['ana@correo.com','andres@correo.com','carlos@correo.com','cesar@correo.com','laura@correo.com','samuel@correo.com'];
let telUser = ['1234567890','1234567890','1234567890','1234567890','1234567890','1234567890'];
let paisUser = [1,2,3,2,2,4];
let departamentoUser = ['Magdalena','Magdalena','Magdalena','Magdalena','Magdalena','Magdalena'];
let ciudadUser = ['Santa Marta','Santa Marta','Santa Marta','Santa Marta','Santa Marta','Santa Marta'];
let direccionUser = ['calle 4 #5-67','calle 4 #5-67','calle 4 #5-67','calle 4 #5-67','calle 4 #5-67','calle 4 #5-67'];
let codigoPUser = ['470002','470002','470002','470002','470002','470002'];
let docUser = ['1234567890','1234567890','1234567890','1234567890','1234567890','1234567890'];
/*datosObras*/
let UrlImgObra = ['./imagenes/Pinturas/van-gohg1.jpg','./imagenes/Pinturas/arbol.jpg','./imagenes/Pinturas/avignon_picasso.jpg','./imagenes/Pinturas/familia_botero.jpg','./imagenes/Pinturas/pareja_botero.jpg','./imagenes/Pinturas/preview.jpg'];
let nombreObra = ['Noche Estrellada','Arbol','Señoritas de Avignon','Familia','Pareja','Pinturas'];
let nombreArtista = ['Van Gohg','Pepe','Picasso','Fernando Botero','Fernando Botero','Maria'];
let precioObra = ['$1.000.000','1.000.000','1.000.000','1.000.000','1.000.000','1.000.000'];
/**/
let datosRecientes = controlador.obrasRecientes();
let datosMejores = controlador.obrasMejores();

/*slideshow*/
var triggerTabList = [].slice.call(document.querySelectorAll('#myTab button'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)
  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})
/*obras recientes*/
for(let i = 0 ; i < datosRecientes.length ; i++){
  let aux = i + 1;
  document.getElementById('imgContenedorRecientes'+aux).src = datosRecientes[i];
}
for(let i = 0 ; i < datosMejores.length ; i++){
  let aux = i + 1;
  document.getElementById('imgObrasMejorValoradas'+aux).src = datosMejores[i];
}
/*botones*/
let configBtn = document.getElementById('btnSetting');
let cancelBtn = document.getElementById('cancelarDatosUsuario');
let btnCerrarSesion = document.getElementById('btnCerrarSesion');

/*EventosBtn*/
configBtn.addEventListener('click', function(){mostrarPanel('contenedorInputsActualizar')});
cancelBtn.addEventListener('click', function(){document.getElementById('contenedorInputsActualizar').hidden = true;limpiarActualizar();});
btnCerrarSesion.addEventListener('click', function(){controlador.cerrarSesion()}); 

function mostrarPanel(panelID){
  if(document.getElementById(panelID).hidden == true){
    document.getElementById(panelID).hidden = false;
    llenarActualizar();
  } else {
    document.getElementById(panelID).hidden = true;
    limpiarActualizar();
  }
}
function limpiarActualizar(){
  document.getElementById('nombreUsuario').value = null;
  document.getElementById('emailUsuario').value = null;
  document.getElementById('telefonoUsuario').value = null;
  document.getElementById('selectPais').value = 0;
  document.getElementById('departamentoUsuario').value = null;
  document.getElementById('ciudadUsuario').value = null;
  document.getElementById('direccionUsuario').value = null;
  document.getElementById('codigoPostalUsuario').value = null;
  document.getElementById('documentoUsuario').value = null;
}
let userIdx = 3;
function llenarActualizar(){
  document.getElementById('nombreUsuario').value = nombreUser[userIdx];
  document.getElementById('emailUsuario').value = correoUser[userIdx];
  document.getElementById('telefonoUsuario').value = telUser[userIdx];
  document.getElementById('selectPais').value = paisUser[userIdx];
  document.getElementById('departamentoUsuario').value = departamentoUser[userIdx];
  document.getElementById('ciudadUsuario').value = ciudadUser[userIdx];
  document.getElementById('direccionUsuario').value = direccionUser[userIdx];
  document.getElementById('codigoPostalUsuario').value = codigoPUser[userIdx];
  document.getElementById('documentoUsuario').value = docUser[userIdx];
}
// vista previa

  document.querySelectorAll('.vistaPreviaImg').forEach(item => {
    item.addEventListener('click', event => {
      //small
      indexObraActual = item.id.substr(14,15)-1;
      if(document.documentElement.scrollWidth < 1300){
        Swal.fire({
          title: item.id,
          width: '80%',
          imageUrl: item.src,
          imageWidth: '90%',
          html: '<a id="addLikeBtn" href="#" class="btn btn-success mx-1">'+likes[indexObraActual]+' '+'<img src="./node_modules/bootstrap-icons/icons/hand-thumbs-up.svg"></img></a>'+
                '<a id="addDislikeBtn" href="#" class="btn btn-danger mx-1">'+dislikes[indexObraActual]+' '+'<img src="./node_modules/bootstrap-icons/icons/hand-thumbs-down.svg"></img></a>',
          confirmButtonText: 'Agregar al carrito',
          showCloseButton: true,
          showDenyButton: true,
          denyButtonText:'Cancelar',
        })
      }
      //full
      if(document.documentElement.scrollWidth >= 1300){
        Swal.fire({
          title: item.id,
          width: '50%',
          imageUrl: item.src,
          imageWidth: '470',
          html: '<a id="addLikeBtn" href="#" class="btn btn-success mx-1">'+likes[indexObraActual]+' '+'<img src="./node_modules/bootstrap-icons/icons/hand-thumbs-up.svg"></img></a>'+
                '<a id="addDislikeBtn" href="#" class="btn btn-danger mx-1">'+dislikes[indexObraActual]+' '+'<img src="./node_modules/bootstrap-icons/icons/hand-thumbs-down.svg"></img></a>',
          confirmButtonText: 'Agregar al carrito',
          showCloseButton: true,
          showDenyButton: true,
          denyButtonText:'Cancelar',
        })
      }
      document.getElementById("addLikeBtn").addEventListener('click', function() {
        likes[indexObraActual] += 1;
        document.getElementById("addLikeBtn").innerHTML = likes[indexObraActual]+' '+'<img src="./node_modules/bootstrap-icons/icons/hand-thumbs-up.svg"></img>';
      })
      document.getElementById("addDislikeBtn").addEventListener('click', function() {
        dislikes[indexObraActual] += 1;
        document.getElementById("addDislikeBtn").innerHTML = dislikes[indexObraActual]+' '+'<img src="./node_modules/bootstrap-icons/icons/hand-thumbs-down.svg"></img>';
      })
    })
  })


/*user fin*/

