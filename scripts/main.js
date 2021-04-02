import {$menuItems,mostrarMenu,$btnMenu} from "../scripts/modulos.js";


const $inicio = document.getElementById("inicio");
const $fotos = document.getElementById("fotos");
const $osito = document.getElementById("osito");
const $audio = document.getElementById("audio");
const $btnAudio = document.getElementById("btn-audio");
const $audioFeliz = document.getElementById("audio-feliz");


$osito.addEventListener("click", () => {
    $audio.play();
})

$btnAudio.addEventListener("click", ()=>{
    $audioFeliz.play();
})

$inicio.addEventListener("click", () => {
    location.href = "index.html"
});

$fotos.addEventListener("click", () =>{
    location.href = "fotos.html"
});


$btnMenu.onclick = mostrarMenu;



