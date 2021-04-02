import {mostrarMenu,$btnMenu} from "../scripts/modulos.js";


const $inicio = document.getElementById("inicio");
const $fotos = document.getElementById("fotos");
const $osito = document.getElementById("osito");
const $audio = document.getElementById("audio");


$osito.addEventListener("click", () => {
    $audio.play();
})

$inicio.addEventListener("click", () => {
    location.href = "index.html"
});

$fotos.addEventListener("click", () =>{
    location.href = "fotos.html"
});


$btnMenu.onclick = mostrarMenu;