//Calendario en español
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

$('#myTextarea3').on('input', function () {
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

//Toggle dinamico con el checkbox
document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.form-check-input');
    const toggleIcons = document.querySelectorAll('.toggle-icon');

    checkboxes.forEach(function (checkbox, index) {
        // Ocultar el icono por defecto
        toggleIcons[index].style.display = 'none';

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                // Si se marca el checkbox, muestra el icono
                toggleIcons[index].style.display = 'inline';
            } else {
                // Si se desmarca el checkbox, oculta el icono
                toggleIcons[index].style.display = 'none';
            }
        });
    });
});

//Agregar filas a la tabla de incidencias de forma dinamica
$(document).ready(function() {
    $("#agregarFila").on("click", function() {
        // Crea una nueva fila y agrega dos celdas (nombre y edad)
        const nuevaFila = $("<tr>");
        nuevaFila.html(
            '<td><textarea class="form-control" rows="1" oninput="autoGrow(this)"></textarea></td>'
            /**/ 
            +
            '<td style="max-width: 50%;"><img id="image" src="placeholder.jpg" alt="Imagen" style="max-width: 100%; height: auto;"><input type="file" id="imageUpload" style="display: none;" accept="image/*"><button onclick="document.getElementById(\'imageUpload\').click();">Subir Imagen</button></td>'
            /*<td style="max-width: 50%;"><img id="image" src="placeholder.jpg" alt="Imagen" style="max-width: 100%; height: auto;"><input type="file" id="imageUpload" style="display: none;" accept="image/*"><button onclick="document.getElementById('imageUpload').click();">Subir Imagen</button></td>*/
            
        );

        // Agrega la nueva fila a la tabla
        $("#tablaBody").append(nuevaFila);
    });
});

//Aumenta el tamaño del textArea dentro de la tabla de forma dinamica
function autoGrow(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = (textarea.scrollHeight) + "px";
}

// Función para manejar la carga de imagen
document.getElementById('imageUpload').addEventListener('change', function (event) {
    const imageElement = document.getElementById('image');
    const file = event.target.files[0];

    if (file) {
        // Validar que se haya seleccionado un archivo de imagen
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function(e) {
                // Actualizar la imagen en la tabla
                imageElement.src = e.target.result;
            };

            reader.readAsDataURL(file);
        } else {
            alert('Por favor, selecciona un archivo de imagen válido.');
        }
    }
});