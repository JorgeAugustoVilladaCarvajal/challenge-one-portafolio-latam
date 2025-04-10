//Haz tú validación en javascript acá
document.getElementById("menu_hamburguesa").addEventListener("click", mostrar_menu);

document.getElementById("cerrar_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("Back_menu");

function mostrar_menu() {
    nav.style.left = "0px";
    background_menu.style.display = "block";
}   

function ocultar_menu() {
    nav.style.left = "-320px";
    background_menu.style.display = "none";
}

const spans = document.querySelectorAll("span");

spans.forEach((span) =>{
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
})

