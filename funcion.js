// Función para procesar el voto
function procesarVoto(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener el valor seleccionado
    const seccion = document.getElementById('seccion').value;
    const resultadoDiv = document.getElementById('resultado');
    
    // Determinar el mensaje basado en la selección usando switch
    let mensaje;
    switch (seccion) {
        case 'norte':
            mensaje = 'Seleccionaste la sección Norte. ';
            break;
        case 'sur':
            mensaje = 'Seleccionaste la sección Sur. ';
            break;
        case 'centro':
            mensaje = 'Seleccionaste la sección Centro. ';
            break;
        default:
            mensaje = 'Opción no válida.';
            break;
    }
    
    // Mostrar el resultado
    resultadoDiv.textContent = mensaje;
}

// Añadir el evento al formulario
document.getElementById('votoForm').addEventListener('submit', procesarVoto);
