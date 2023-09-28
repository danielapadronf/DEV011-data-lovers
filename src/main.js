import data from './data/got/got.js';
import { mostrarCartasPersonajes } from './view.js';
const listaPersonajes = data.got;
const contenedorPersonajes = document.querySelector('#root');


const ul = mostrarCartasPersonajes(listaPersonajes);
contenedorPersonajes.appendChild(ul);









