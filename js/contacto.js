let respuestas = JSON.parse(localStorage.getItem('datos-de-contacto')) || [];

let formulario = document.getElementById("formulario-contacto");

formulario.addEventListener("submit", processForm);

function processForm(event) {
event.preventDefault();

const nombre = document.querySelector('input[id="nombre"]').value;
const correo = document.querySelector('input[id="correo"]').value;
const pais = document.querySelector('select[id="pais"]').value;
const mensaje = document.querySelector('textarea[id="mensaje"]').value;

// Verifica que se haya ingresado un valor para cada campo
if (!nombre) {
Swal.fire('Error', 'Por favor, ingresa tu nombre', 'error');
return;
}
if (!correo) {
Swal.fire('Error', 'Por favor, ingresa tu correo', 'error');
return;
}
if (pais === 'Tu país') {
Swal.fire('Error', 'Por favor, selecciona tu país', 'error');
return;
}
if (!mensaje) {
Swal.fire('Error', 'Por favor, déjanos tu mensaje', 'error');
return;
}

// Envía el formulario o realiza alguna acción adicional
Swal.fire('¡Formulario enviado!', 'Los datos han sido enviados correctamente', 'success');
;

let datosContacto = {
nombre,
correo,
pais,
mensaje
};

respuestas.push(datosContacto);

// Almacenar las respuestas en localStorage
localStorage.setItem('datos-de-contacto', JSON.stringify(respuestas));
}

