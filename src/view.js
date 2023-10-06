export const renderItems = (data) => {
  const ul = document.createElement('ul');
  ul.classList.add('contenedor');
  data.forEach((personaje) => {
    const li = document.createElement('li');
    li.classList.add("contenedor-con-degradado")
    li.innerHTML = `
        <div class="card" itemprop="character">
          <div class="card-inner">
            <div class="card-front">
              <img class="imagen-cartaA" src="${personaje.imageUrl}" alt="${personaje.fullName}" itemprop="image">
              <p class="nombre-carta" itemprop="fullName">${personaje.fullName}</p>
            </div>
            <div class="card-back">
              <p class="familia-cartaB">
                <dt itemprop="family">Familia:</dt>${personaje.family.replace(/house/gi, '')}
              </p>
              <p itemprop="title">
                <dt>Titulo:</dt>${personaje.title}
              </p> 
              <p itemprop="born">
                <dt>Año:</dt>${personaje.born}
              </p> 
            </div>
          </div>
        </div>
    `;

    ul.appendChild(li);
  });
  return ul;
}