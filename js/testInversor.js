// Obtener las respuestas almacenadas en localStorage (si existen)
let respuestas = JSON.parse(localStorage.getItem('respuestas')) || [];

// Obtener referencia al formulario
let formulario = document.getElementById("formulario");

// Agregar un controlador de eventos para el evento "submit"
formulario.addEventListener("submit", processForm);

// Función para procesar el formulario al enviarlo
function processForm(event) {
    event.preventDefault();

    // Obtener las respuestas seleccionadas por el usuario
    const conocimientoInput = document.querySelector('input[name="conocimiento"]:checked').value;
    const experienciaInput = document.querySelector('input[name="experiencia"]:checked').value;
    const ahorrosInput = document.querySelector('input[name="ahorros"]:checked').value;
    const inversionInput = document.querySelector('input[name="inversion"]:checked').value;
    const tiempoInput = document.querySelector('input[name="tiempo"]:checked').value;
    const objetivoInput = document.querySelector('input[name="objetivo"]:checked').value;
    const actitudInput = document.querySelector('input[name="actitud"]:checked').value;

    // Agregar las respuestas al array
    respuestas = [parseInt(conocimientoInput), parseInt(experienciaInput), parseInt(ahorrosInput), parseInt(inversionInput), parseInt(tiempoInput), parseInt(objetivoInput), parseInt(actitudInput)];

    // Almacenar las respuestas en localStorage
    localStorage.setItem('respuestas', JSON.stringify(respuestas));

    // Función para cargar las respuestas almacenadas desde localStorage
    function cargarRespuestas() {
    const respuestasGuardadas = localStorage.getItem('respuestas');
    if (respuestasGuardadas) {
        respuestas = JSON.parse(respuestasGuardadas);
    }}

    // Llamar a la función para cargar las respuestas almacenadas al cargar la página
    cargarRespuestas();

    // Calcular la suma de las respuestas
    const sum = respuestas.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    // console.log(sum);

    // Objeto que contiene los datos sobre cada tipo de inversor
    const perfiles = [
        {
            inversor: "conservador",
            rentaVariable: 10,
            rentaFija: 90
        },
        {
            inversor: "conservador/moderado",
            rentaVariable: 25,
            rentaFija: 75
        },
        {
            inversor: "moderado",
            rentaVariable: 50,
            rentaFija: 50
        },
        {
            inversor: "moderado/arriesgado",
            rentaVariable: 75,
            rentaFija: 25
        },
        {
            inversor: "arriesgado",
            rentaVariable: 90,
            rentaFija: 10
        }
    ];

    // Función para mostrar el resultado y ocultar el formulario
    function mensaje() {
        let perfil;

        if (sum >= 5 && sum <= 11) {
            perfil = findPerfil("conservador");
        } else if (sum > 11 && sum <= 17) {
            perfil = findPerfil("conservador/moderado");
        } else if (sum > 17 && sum <= 23) {
            perfil = findPerfil("moderado");
        } else if (sum > 23 && sum <= 29) {
            perfil = findPerfil("moderado/arriesgado");
        } else if (sum > 29 && sum <= 35) {
            perfil = findPerfil("arriesgado");
        } else {
            alert("Debes ingresar respuestas válidas");
            return;
        }
        // console.log(perfil);

        document.getElementById("resultado").innerHTML = `Eres un inversor ${perfil.inversor}.\nTu portfolio debería tener un ${perfil.rentaVariable}% de renta variable y un ${perfil.rentaFija}% de renta fija.`;
    }

    // Función para encontrar el perfil del inversor
    function findPerfil(inversor) {
        return perfiles.find(p => p.inversor === inversor);
    }
    mensaje(sum);
    
    
    // Ocultar el formulario y mostrar el resultado
    let cajaResultado = document.getElementById("cajaResultado");
    cajaResultado.classList.remove("oculto");
    formulario.classList.add("oculto");
}


