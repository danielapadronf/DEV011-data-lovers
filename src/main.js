import data from './data/got/got.js';
import { renderItems } from './view.js';
import { sortFamilia, filterBy, mostrarPagina } from './dataFunctions.js';

const listaPersonajes = data.got; 
console.log(listaPersonajes)
let clonData = [...listaPersonajes]
const contenedorPersonajes = document.getElementById('root');
const botonInicio = document.getElementById('boton-inicio');
const botonPersonajes = document.getElementById('boton-personajes');
const sort = document.getElementById("sort-order");
const selectFilter = document.getElementById("select-filter");//cambios
const resetButton = document.getElementById("button-clear");

const ul = renderItems(listaPersonajes);
contenedorPersonajes.appendChild(renderItems(listaPersonajes));

console.log({ul})

document.addEventListener('DOMContentLoaded', function() {

    // Agrega event listeners para cada botón
    botonInicio.addEventListener('click', function() {
        mostrarPagina('pagina1');
    });

    botonPersonajes.addEventListener('click', function() {
        mostrarPagina('pagina2');
    });

    resetButton.addEventListener('click', function() {
        console.log("asdas")
      const ul = renderItems(listaPersonajes);
      contenedorPersonajes.replaceChildren();
      contenedorPersonajes.appendChild(ul)
    });
});

sort && sort.addEventListener("change", function(event) {
    const selectedValue = event.target.value;
    const FamiliaOrdenada = sortFamilia(selectedValue);
    const FamialiaAMostrar = renderItems = data.got; 
    (FamiliaOrdenada)
    contenedorPersonajes.replaceChildren();
    contenedorPersonajes.appendChild(FamiliaAMostrar);
  });

selectFilter.addEventListener("change",(e) => {
    const filtroFamilia = filterBy(listaPersonajes,"family", e.target.value);
    contenedorPersonajes.innerHTML = "";
    clonData = filtroFamilia;
    contenedorPersonajes.appendChild(renderItems(clonData));
});



