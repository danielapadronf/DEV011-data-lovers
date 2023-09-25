import data from './data/got/got.js';
// estas funciones son de ejemplo
//const personajes = document.getElementById('Personajes')

const listaPersonajes = data.got;
const contenedorPersonajes = document.querySelector('#root');

const monstrarCartasPersonajes = (list) => {
  const ul = document.createElement('ul');
  list.forEach((personaje) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="personaje-img">
        <img src="${personaje.imageUrl}">
        <p class="personaje-nombre">${personaje.firstName}</p>
      </div>`;
    ul.appendChild(li);
  });

  contenedorPersonajes.appendChild(ul);
};
monstrarCartasPersonajes(listaPersonajes);
