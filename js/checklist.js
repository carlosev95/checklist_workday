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