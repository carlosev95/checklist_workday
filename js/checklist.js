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
const taskElement = document.getElementById("task");

function toggleIcon() {
    if (taskElement.classList.contains("fa-times-circle")) {
        // Cambia a icono de check y establece el color a verde
        taskElement.classList.remove("fa-times-circle", "text-danger");
        taskElement.classList.add("fa-check-circle", "text-success");
    } else {
        // Cambia a icono de tachita y establece el color a rojo
        taskElement.classList.remove("fa-check-circle", "text-success");
        taskElement.classList.add("fa-times-circle", "text-danger");
    }
}

// Agrega un listener para alternar el icono cuando se hace clic
taskElement.addEventListener("click", toggleIcon);

// Llama a la función para establecer el icono inicial
toggleIcon();