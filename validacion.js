//Haz tú validación en javascript acá
document.getElementById("menu_hamburguesa").addEventListener("click", mostrar_menu);

document.getElementById("Back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("Back_menu");

function mostrar_menu() {
    nav.style.right = "0px";
    background_menu.style.display = "block";
}   

function ocultar_menu() {
    nav.style.right = "-250px";
    background_menu.style.display = "none";
    menu.style.right = "0px";
}


