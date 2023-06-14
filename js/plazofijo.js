// CALCULADORA DE PLAZO FIJO
// Enviar el formulario
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", processForm);
function processForm(event) {
    event.preventDefault(); // Evita el envío del formulario
    const section = document.getElementById("resultado");
    section.scrollIntoView({ behavior: 'smooth' });

// Evento para poder presionar enter
let submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    formulario.dispatchEvent(new Event('submit')); 
  }
});
// Obtén los valores de los campos del formulario
let capital = document.getElementById('capital').value;
let meses = document.getElementById('meses').value;
let tasa = document.getElementById('tasa').value;

// Realiza las acciones deseadas con los valores capturados
// console.log('Capital inicial:', capital);
// console.log('Cantidad de meses:', meses);
// console.log('Tasa de interés:', tasa);

// calculo la tasa de interés mensual
let tasaMensual = parseFloat(tasa / 100 / 365 * 30);
// console.log(tasaMensual.toFixed(4));

// funcion if porque la variable meses no puede ser inferior a 1
if (meses < 1){
    alert("La inversión no puede ser menor a 1 mes");
} else {
// Iteración para capitalizar mes a mes los intereses
    for(let i = 1; i <= meses; i++){
        capital = capital * (tasaMensual + 1);
        // console.log(capital.toLocaleString("es-AR", {style: "currency", currency: "ARS"}));
}}
document.getElementById("resultado").innerHTML = capital.toLocaleString("es-AR", {style: "currency", currency: "ARS"});
}

let cajaResultado = document.getElementById("cajaResultado");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  ocultarForm();
  mostrarResultado();
});

// muestra el resultado y oculta el formulario
function ocultarForm() {
  formulario.classList.add("oculto");
}

function mostrarResultado() {
  cajaResultado.classList.remove("oculto");
}