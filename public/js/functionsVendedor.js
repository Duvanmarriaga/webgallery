import * as controlador from '../controlador/controladorVendedor.js'

/*user inicio*/

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
let configBtn = document.getElementById('btnSetting');

/*EventosBtn*/
configBtn.addEventListener('click', function(){mostrarPanel('contenedorInputsActualizar'), limpiarActualizar()});

function mostrarPanel(panelID){
  if(document.getElementById(panelID).hidden == true){
    document.getElementById(panelID).hidden = false;
  } else {
    document.getElementById(panelID).hidden = true;
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
document.addEventListener('click', event => {
  document.querySelectorAll('.vistaPreviaImg').forEach(item => {
    item.addEventListener('click', event => {
      Swal.fire({
        title: item.id,
        width: '56%',
        imageUrl: item.src,
        imageWidth: '460',
        html: '<a href="#" class="btn btn-success m-1"><img src="./node_modules/bootstrap-icons/icons/hand-thumbs-up.svg"></img></a>' +
              '<a href="#" class="btn btn-danger m-1"><img src="./node_modules/bootstrap-icons/icons/hand-thumbs-down.svg"></img></a>',
        confirmButtonText: 'Cerrar',
        showCloseButton: true
      })
    })
  })
});
document.addEventListener('click', event => {
  document.querySelectorAll('.vistaPreviaMisImg').forEach(item => {
    item.addEventListener('click', event => {
      Swal.fire({
        title: item.id,
        width: '56%',
        imageUrl: item.src,
        imageWidth: '460',
        confirmButtonText: 'Cerrar',
        showCloseButton: true
      })
    })
  })
});





/*user fin*/

