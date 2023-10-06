import data from './data/got/got.js';

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
  const arrayFamily = data.filter(family => {
    if (family [filterBy] === value){
      return family;
    }
  })
  return arrayFamily
});

const getAgeAverage = () => {
  const allTheBornDate = data.got.reduce((prev, current) => (
    prev + current && current?.born?.replace(/[^0-9]/g, '') || 0
  ), 0)

  const totalOfCharts = data.got.length

  const average = allTheBornDate / totalOfCharts

  console.log("el average es: ", average, "del total de personas: ", average)
}

getAgeAverage()