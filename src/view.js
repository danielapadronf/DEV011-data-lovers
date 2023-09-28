import data from './data/got/got.js';
// estas funciones son de ejemplo
//const personajes = document.getElementById('Personajes')

//const listaPersonajes = data.got;
//const contenedorPersonajes = document.querySelector('#root');

export function mostrarCartasPersonajes(list) {
  const ul = document.createElement('ul');
  ul.classList.add('contenedor');
  list.forEach((personaje) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <dl itemscope itemtype="got"> 
        <div class="carta">
          <img class="imagen-cartaA" src="${personaje.imageUrl}">  
          <dd class="nombre-carta" itemprop="fullName">${personaje.fullName}</dd>
        <div class="carta">
          <dd class="familia-cartaB" itemprop="family">${personaje.family}</dd>

        
        </div>
      </dl>`;
      ul.appendChild(li);
    });
    return ul;
  };