import data from './data/got/got.js';
const listaPersonajes = data.got;
const contenedorPersonajes = document.querySelector('#root');
// estas funciones son de ejemplo
const personajes = document.getElementById('Personajes')


export function mostrarCartasPersonajes(list) {
  const ul = document.createElement('ul');
  ul.classList.add('contenedor');
  list.forEach((personaje) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <div class="contenedor-con-degradado">
    <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <img class="imagen-cartaA" src="${personaje.imageUrl}" alt="${personaje.fullName}">
        <p class="nombre-carta" itemprop="fullName">${personaje.fullName}</p>
      </div>
      <div class="card-back">
        <p class="familia-cartaB" itemprop=<dt>Familia:</dt>${personaje.family.replace(/house/gi, '')}</p>
        <p itemprop=<dt>Titulo:</dt>${personaje.title}</p> 
        <p itemprop=<dt>Año:</dt>${personaje.born}</p> 
      </div>
    </div>
`;
    ul.appendChild(li);
  });
  return ul;
}