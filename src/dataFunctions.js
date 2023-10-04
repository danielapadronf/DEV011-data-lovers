import data from './data/got/got.js';

const personajes = document.getElementById('personajes');

// export const cargarImagenes = () => {
//   console.log('La funcion se ejecuta')
//     const images = data.got.map((item) => {
//         const img = document.createElement('img'); 
//         img.src = item.imageUrl;
//         img.alt = item.fullName;
//         img.width = 100;
//         img.height = 100;
//         return img;
//     });

//     images.forEach((image) => personajes.appendChild(image));
// };

export const mostrarPagina = (pagina) => {
  const paginas = document.querySelectorAll('.pagina');
  paginas.forEach(p => p.classList.remove('pagina-activa'));
  
  const paginaSeleccionada = document.getElementById(pagina);
  paginaSeleccionada.classList.add('pagina-activa');
}
export const sortFamilia = (value) => {
  const familia = data.got;

  if (value === "desc") {
    familia.sort((a, b) => b.family.localeCompare(a.family));
  }

  if (value === "asc") {
    familia.sort((a, b) => a.family.localeCompare(b.family));
  }

  return familia; // Devuelve la lista ordenada
}
// Función para filtrar la lista de personajes
export const filterBy = ((data, filterBy, value) =>{
  console.log(data)
  const arrayFamily = data.filter(family => {
    if (family [filterBy] === value){
      return family;
    }
  })
  return arrayFamily
});

