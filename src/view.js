import data from './data/got/got.js';
// estas funciones son de ejemplo
//const personajes = document.getElementById('Personajes')

const listaPersonajes = data.got;
const contenedorPersonajes = document.querySelector('#root');

const monstrarCartasPersonajes = (list) => {
  const ul = document.createElement('ul');
  ul.classList.add('contenedor');
  list.forEach((personaje) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <dl itemscope itemtype="got"> 
        <div class="carta">
          <img class="imagen-cartaA" src="${personaje.imageUrl}">
          <dt>Name:</dt>  
          <dd class="nombre-cartaA" itemprop="fullName">${personaje.fullName}</dd>
        
        </div>
      </dl>`;
    ul.appendChild(li);
  });

  contenedorPersonajes.appendChild(ul);
};
monstrarCartasPersonajes(listaPersonajes);
