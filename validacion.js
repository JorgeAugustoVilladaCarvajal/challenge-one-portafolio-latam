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

//cambio de idioma
const toggleBtn = document.getElementById("languageToggle");

// Elementos de texto que cambiarán
const traducciones = {
    es: {
        saludo: "Hola, mi nombre es Jorge Augusto Villada Carvajal y construyo paginas web",
        subtitulo: "Soy formado en Analisis y Desarrollo de Sistemas de Informacion y actualmente estoy participando del proyecto Oracle ONE en Alura Latam.",
        contacto: "¿Quieres contactarme?",
        formulario: "Complete el siguiente formulario y me pondré en contacto con usted lo antes posible.",
        boton: "Enviar mensaje",
        sobreMi: "Sobre mi",
        skills: "Habilidades",
        hobbies: "Pasatiempos",
        formacion: "Formación",
        xp:"Proyectos",
        tituloSobreMi1: "Sobre mí",
        parrafo: "Soy estudiante de Ingeniería de Sistemas, busco oportunidad para adquirir experiencia en el área del desarrollo web con FlutterFlow versión 3.19.1, JavaScript, HTML5, Css3, Git y GitHub u otras tecnologías donde pueda desarrollar mis conocimientos técnicos y crecer junto a la empresa y a mis compañeros de trabajo también poseo conocimiento en manejo de bases de datos como Firebase y plataformas como Slack, Figma, Mural y Jira para metodologías Scrum.",
        parrafo1:"Soy una persona curiosa y me gusta resolver problemas. Aprender hace parte de mí día a día y los desafíos me motivan a encontrar las mejores soluciones.",
        parrafo2:"Busco siempre trabajar en equipo, cooperando con todos y apoyando de la mejor manera posible, con grande satisfacción en aprender y enseñar.",
        titulodehabilidades: "Habilidades",
        titulodepasatiempos: "Pasatiempos",
        tituloformacionacademica: "Formación académica",
        subtituloformacionacademica: "Tecnologo en Análisis y Desarrollo de Sistemas de Informacion",
        titulodeformacionacademica1: "Pregrado en Ingenieria de Sistemas",
        parrafodeformacionacademica1: "En curso - UNAD",
        experiencia: "Experiencia Profesional",
        experiencia1: "Experiencia Profesional",
        experiencetitle1: "CRM para empresa de Productos organicos",
        experiencedetitle: "Calendario de agendamiento",
        botonrepositorio: "Repositório",
        botonverrepositorio: "Ver demo",
        titulodeformulario: "Contacto",
        nombreformulario:"Nombre:",
        emailformulario:"Correo electrónico:",
        asuntoformulario:"Asunto:",
        mensajeformulario:"Mensaje:",
        footerclas:"Desarrollado por Jorge Augusto Villada Carvajal",
       
    },
    en: {
        saludo: "Hi, my name is Jorge Augusto Villada Carvajal and I build websites",
        subtitulo: "I graduated in Systems Information Analysis and Development and I am currently part of the Oracle ONE project at Alura Latam.",
        contacto: "Do you want to contact me?",
        formulario: "Fill out the form below and I will get in touch with you as soon as possible.",
        boton: "Send message",
        sobreMi: "About me",
        skills: "Skills",
        hobbies: "Hobbies",
        formacion: "Training",
        xp:"Projects",
        tituloSobreMi1: "About me",
        parrafo: "I am a Systems Engineering student, looking for an opportunity to gain experience in the area of ​​​​web development with FlutterFlow version 3.19. 1, JavaScript, HTML5, Css3, Git and GitHub or other technologies where I can develop my technical knowledge and grow together with the company and my coworkers. I also have knowledge in managing databases such as Firebase and platforms such as Slack, Figma, Mural and Jira for Scrum methodologies..",
        parrafo1:"I'm a curious person and I like to solve problems. Learning is part of my daily life, and challenges motivate me to find the best solutions.",
        parrafo2:"I always seek to work as a team, cooperating with everyone and supporting them in the best way possible, with great satisfaction in learning and teaching.",
        titulodehabilidades: "Skills",
        titulodepasatiempos: "Hobbies",
        tituloformacionacademica: "Academic training",
        subtituloformacionacademica: "Technologist in analysis and development of information Systems",
        titulodeformacionacademica1: "Undergraduate in Systems Engineering",
        parrafodeformacionacademica1: "En curso - UNAD",
        experiencia: "Professional Experience",
        experiencia1: "Professional Experience",
        experiencetitle1: "CRM for an organic products company",
        experiencedetitle: "Scheduling calendar",
        botonrepositorio: "Repository",
        botonverrepositorio: "See demo",
        titulodeformulario: "Contact",
        nombreformulario:"Name:",
        emailformulario:"Email:",
        asuntoformulario:"Affair:",
        mensajeformulario:"Message:",
        footerclas:"Developed by Jorge Augusto Villada Carvajal",
    }
};

let idioma = "es";

toggleBtn.addEventListener("click", () => {
    idioma = idioma === "es" ? "en" : "es";

    document.querySelector(".title__bio").textContent = traducciones[idioma].saludo;
    document.querySelector(".title__subsection").textContent = traducciones[idioma].subtitulo;
    document.querySelector(".formcontato__subtext").textContent = traducciones[idioma].contacto;
    document.querySelector(".formcontato__subtexte").textContent = traducciones[idioma].formulario;
    document.querySelector(".formcontato__botao").textContent = traducciones[idioma].boton;
    document.getElementById("tituloSobreMi").textContent = traducciones[idioma].sobreMi;
    document.getElementById("tituloSkills").textContent = traducciones[idioma].skills;
    document.getElementById("tituloHobbies").textContent = traducciones[idioma].hobbies;
    document.getElementById("tituloFormacion").textContent = traducciones[idioma].formacion;
    document.getElementById("tituloProyectos").textContent = traducciones[idioma].xp;
    document.getElementById("tituloSobreMi1").textContent = traducciones[idioma].tituloSobreMi1;
    document.getElementById("parrafo").textContent = traducciones[idioma].parrafo;
    document.getElementById("parrafo1").textContent = traducciones[idioma].parrafo1;
    document.getElementById("parrafo2").textContent = traducciones[idioma].parrafo2;
    document.getElementById("titulodehabilidades").textContent = traducciones[idioma].titulodehabilidades;
    document.getElementById("titulodepasatiempos").textContent = traducciones[idioma].titulodepasatiempos;
    document.getElementById("tituloformacionacademica").textContent = traducciones[idioma].tituloformacionacademica;
    document.getElementById("subtituloformacionacademica").textContent = traducciones[idioma].subtituloformacionacademica;
    document.getElementById("titulodeformacionacademica1").textContent = traducciones[idioma].titulodeformacionacademica1;
    document.getElementById("parrafodeformacionacademica1").textContent = traducciones[idioma].parrafodeformacionacademica1;
    document.getElementById("Experiencia").textContent = traducciones[idioma].experiencia;
    document.getElementById("Experiencia1").textContent = traducciones[idioma].experiencia1;
    document.getElementById("experiencetitle1").textContent = traducciones[idioma].experiencetitle1;
    document.getElementById("experiencedetitle").textContent = traducciones[idioma].experiencedetitle;
    document.getElementById("titulodeformulario").textContent = traducciones[idioma].titulodeformulario;
    document.getElementById("nombreformulario").textContent = traducciones[idioma].nombreformulario;
    document.getElementById("emailformulario").textContent = traducciones[idioma].emailformulario;
    document.getElementById("asuntoformulario").textContent = traducciones[idioma].asuntoformulario;
    document.getElementById("mensajeformulario").textContent = traducciones[idioma].mensajeformulario;
    document.getElementById("footerclas").textContent = traducciones[idioma].footerclas;
    document.querySelector("botonrepositorio").textContent = traducciones[idioma].botonrepositorio;
    document.querySelector("botonverrepositorio").textContent = traducciones[idioma].botonverrepositorio;
    

});