// Definimos las criptomonedas que nos interesan
const criptomonedas = ['bitcoin', 'ethereum', 'ripple', 'litecoin'];

// Función para obtener el último precio de una criptomoneda
async function obtenerUltimoPrecio(criptomoneda) {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${criptomoneda}&vs_currencies=usd`);
    const data = await response.json();
    const precio = data[criptomoneda].usd;
    return precio;
  } catch (error) {
    console.log('Error al obtener el precio de', criptomoneda, ':', error);
  }
}

// Función para mostrar los precios en la página
async function mostrarPrecios() {
  for (const criptomoneda of criptomonedas) {
    const precio = await obtenerUltimoPrecio(criptomoneda);
    const elementoPrecio = document.getElementById(criptomoneda);
    elementoPrecio.textContent = `$${precio}`;
  }
}

// Llamamos a la función para mostrar los precios cuando la página se cargue completamente
window.addEventListener('load', mostrarPrecios);
