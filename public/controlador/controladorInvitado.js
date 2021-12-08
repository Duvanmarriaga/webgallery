
    if(sessionStorage.getItem("UserActive") == null){
        document.getElementById('navHomeUser').hidden = true;
        document.getElementById('navMisComprasUser').hidden = true;
        document.getElementById('navCarritoUser').hidden = true;
        document.getElementById('navContactoUser').hidden = true;
        document.getElementById('home').hidden = true;
        document.getElementById('menu1').setAttribute('class','active');
        document.getElementById('menu3').hidden = true;
        document.getElementById('menu2').hidden = true;
        document.getElementById('menu4').hidden = true;
        document.getElementById('linkToIndex').hidden = false;
        document.getElementById('labelNombreUser').hidden = true;
        document.getElementById('btnCerrarSesion').hidden = true;
    }
