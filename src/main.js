import data from './data/got/got.js';
import { mostrarCartasPersonajes } from './view.js';
import { mostrarPagina} from './dataFunctions.js';
import { sortFamilia } from './dataFunctions.js';
const listaPersonajes = data.got; 
const contenedorPersonajes = document.querySelector('#root');
const botonInicio = document.getElementById('boton-inicio');
const botonPersonajes = document.getElementById('boton-personajes');
const sort = document.getElementById("sort-order");

const ul = mostrarCartasPersonajes(listaPersonajes);
contenedorPersonajes.appendChild(ul);

console.log({ul})

document.addEventListener('DOMContentLoaded', function() {

    // Agrega event listeners para cada botón
    botonInicio.addEventListener('click', function() {
        mostrarPagina('pagina1');
    });

    botonPersonajes.addEventListener('click', function() {
        mostrarPagina('pagina2');
    });

    Limpiar.addEventListener('click', function() {
        mostrarPagina('pagina2');
    });
});

sort && sort.addEventListener("change", function(event) {
    const selectedValue = event.target.value;
    const a = sortFamilia(selectedValue);
    const b = mostrarCartasPersonajes(a)
    contenedorPersonajes.replaceChildren();
    contenedorPersonajes.appendChild(b);
});


