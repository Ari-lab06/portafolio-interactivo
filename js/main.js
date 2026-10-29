// Oculta el loader de pantalla completa cuando la página termina de cargar
window.addEventListener("load", function () {
    var loader = document.getElementById("loader");
    setTimeout(function () {
        loader.classList.add("oculto");
    }, 900);
});

// Loader dentro del botón: se muestra 2 segundos y se oculta
var btnCargar = document.getElementById("btnCargar");
btnCargar.addEventListener("click", function () {
    var spinner = btnCargar.querySelector(".btn-spinner");
    var etiqueta = btnCargar.querySelector(".btn-label");

    btnCargar.disabled = true;
    spinner.classList.remove("d-none");
    etiqueta.textContent = "Cargando...";

    setTimeout(function () {
        btnCargar.disabled = false;
        spinner.classList.add("d-none");
        etiqueta.textContent = "Cargar novedades";
    }, 2000);
});

// Formulario de contacto: validación simple y mensaje de confirmación
var formulario = document.getElementById("formContacto");
var respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    if (!formulario.checkValidity()) {
        respuesta.textContent = "Completa todos los campos con datos válidos.";
        respuesta.className = "mt-3 mb-0 text-center text-danger";
        return;
    }

    respuesta.textContent = "Mensaje enviado. Te responderemos pronto.";
    respuesta.className = "mt-3 mb-0 text-center text-success";
    formulario.reset();
});

formulario.addEventListener("reset", function () {
    respuesta.textContent = "";
});
