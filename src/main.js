import data from './data/got/got.js';
import { renderItems } from './view.js';
import { sortFamilia, filterBy, mostrarPagina, getAgeAverage } from './dataFunctions.js';

const listaPersonajes = data.got; 
let clonData = [...listaPersonajes]
const contenedorPersonajes = document.getElementById('root');
const botonInicio = document.querySelector('.boton-inicio');
const botonPersonajes = document.querySelector('.botonPersonajes'); 
const sort = document.getElementById("sort-order");
const selectFilter = document.querySelector("#select-filter");//cambios
const resetButton = document.querySelector(".button-clear");


const ul = renderItems(listaPersonajes);

contenedorPersonajes.appendChild(renderItems(listaPersonajes));

document.addEventListener('DOMContentLoaded', function() {

  // Agrega event listeners para cada botón
  botonInicio.addEventListener('click', function() {
    mostrarPagina('pagina1');
  });

  botonPersonajes.addEventListener('click', function() {
    mostrarPagina('pagina2');
    getAgeAverage()
  });

  resetButton.addEventListener('click', function() {
    
    contenedorPersonajes.replaceChildren();
    contenedorPersonajes.appendChild(ul)
  });
});


sort && sort.addEventListener("change", function(event) {
  const selectedValue = event.target.value;
  const FamiliaOrdenada = sortFamilia(selectedValue);
  const ul = renderItems(FamiliaOrdenada); 
  contenedorPersonajes.replaceChildren();
  contenedorPersonajes.appendChild(ul);
});

selectFilter.addEventListener("change",(e) => {
  const filtroFamilia = filterBy(listaPersonajes,"family", e.target.value);
  contenedorPersonajes.innerHTML = "";
  clonData = filtroFamilia;
  contenedorPersonajes.appendChild(renderItems(clonData));
});





