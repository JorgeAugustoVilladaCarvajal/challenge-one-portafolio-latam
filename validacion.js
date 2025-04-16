//Haz tú validación en javascript acá
//Efecto para aparecer y guardar el menu

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

//Efecto para las barras
const spans = document.querySelectorAll("span");

spans.forEach((span) =>{
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
})
//Efecto para los ojos

document.querySelector('body').addEventListener('mousemove',
    eyeball);

    function eyeball() {
        const eye = document.querySelectorAll('.eye');
        eye.forEach(function (eye) {
            let x = (eye.getBoundingClientRect().left) + eye.clientHeight / 2;
            let y = (eye.getBoundingClientRect().top) + eye.clientHeight / 2;

            let radian = Math.atan2(event.pageX - x, event.pageY - y);
            let rotation = (radian * (180 / Math.PI) * -1) + 360;
            eye.style.transform = "rotate(" + rotation + "deg)";
    });
}

//Efecto para el mouse

let lastMouseX = 0;
let lastMouseY = 0;
const separation = 10;

function crearBinario (x, y){
    const binario = document.createElement("div");
    binario.textContent = Math.random() > 0.5 ? "1" : "0";
    binario.classList.add("binario");
    document.body.appendChild(binario);
    binario.style.position = `absolute`;
    binario.style.left = `${x}px`;
    binario.style.top = `${y}px`;

    setTimeout(() => binario.remove(), 3000);
}

document.addEventListener("mousemove", (e) => {
const mouseX = e.clientX + window.scrollX;
const mouseY = e.clientY + window.scrollY;
const distX = Math.abs(mouseX - lastMouseX);
const distY = Math.abs(mouseY - lastMouseY);

if (distX >= separation || distY >= separation) {
    crearBinario(mouseX, mouseY);
    lastMouseX = mouseX;
    lastMouseY = mouseY;
}
})

var cursor = document.querySelector('.cursor');
var cursor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove', function(e) {
    cursor.style.cssText = cursor2.style.cssText = 'left:' + e.clientX + 'px; top:' + e.clientY + 'px;';
});