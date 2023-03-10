'use strict'

window.addEventListener('load', () => {
    var boton = document.querySelector('#btn-share');   
    flotante.style.visibility ="hidden";

    boton.addEventListener('click', () => {
        var flotante = document.querySelector('#flotante');
        var evento = flotante.style.visibility;
        if(evento == "hidden"){
            document.querySelector('#flotante').style.visibility ="visible";
        }else{
            document.querySelector('#flotante').style.visibility ="hidden";
        }
    });
});