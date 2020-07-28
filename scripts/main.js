//Cambia la imagen al clickear
let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/goku.png'){
        miImage.setAttribute('src','images/vegueta.png');
    } else{
        miImage.setAttribute('src','images/goku.png');
    }
}
//Agrega nombre al titulo
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario(){
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = 'Mozilla is genial, ' + miNombre;
    }
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}