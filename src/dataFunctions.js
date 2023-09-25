//import data from './data/got/got.js';

function mostrarPagina(nombrePagina) {
    // Oculta todas las páginas
    const paginas = document.querySelectorAll('.pagina');
    for (var i = 0; i < paginas.length; i++) {
      paginas[i].classList.remove('pagina-activa');
    }
    // Muestra la página seleccionada
    const pagina = document.getElementById(nombrePagina);
    if (pagina) {
      pagina.classList.add('pagina-activa');
    }
  };