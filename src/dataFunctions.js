import data from './data/got/got.js';
const root = document.getElementById('root')

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

export const getAgeAverage = () => {
  const allTheBornDate = data.got.reduce((prev, current) => {
    const bornString = current?.born || '0'; // Si es null o undefined, se convierte en '0'
    const bornNumber = parseInt(bornString.replace(/[^0-9]/g, ''), 10);
    return prev + bornNumber;
  }, 0);  

  const totalOfCharts = data.got.length

  const average = allTheBornDate / totalOfCharts

  const averageRounded = average.toFixed(2); // Limitar a dos decimales

  const averageTag = document.createElement("p") 
  averageTag.textContent = `el año promedio es: ${averageRounded}, del total de personas: ${totalOfCharts}`

  root.appendChild(averageTag)
  return root 
} 

getAgeAverage()
