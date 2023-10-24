$(document).ready(function () {
    // Inicializa el datepicker
    $('#datepicker').datepicker({
    format: 'dd MM yyyy', // Establece el formato deseado
    language: 'es' // Cambia el idioma del datepicker a español
    });

    // Obtiene la fecha actual
    var today = new Date();

    // Establece la fecha actual en el datepicker
    $('#datepicker').datepicker('setDate', today);
});

//Cambiar el alto del form de forma dinamica
$('#myTextarea').on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

$('#myTextarea2').on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

// Obtén una referencia al ícono y agrega un evento de clic
const icons = document.querySelectorAll(".toggle-icon");

function toggleIcon(event) {
    const icon = event.target;
    const taskId = icon.getAttribute("data-task");
    const taskElement = document.getElementById(taskId);

    if (icon.classList.contains("fa-times-circle")) {
        icon.classList.remove("fa-times-circle", "text-danger");
        icon.classList.add("fa-check-circle", "text-success");
    } else {
        icon.classList.remove("fa-check-circle", "text-success");
        icon.classList.add("fa-times-circle", "text-danger");
    }
}

// Agrega un listener para alternar el ícono cuando se hace clic en cualquier ícono
icons.forEach((icon) => {
    icon.addEventListener("click", toggleIcon);
});