import data from './data/got/got.js';

const personajes = document.getElementById('personajes');

export const cargarImagenes = () => {
  console.log('La funcion se ejecuta')
    const images = data.got.map((item) => {
        const img = document.createElement('img'); 
        img.src = item.imageUrl;
        img.alt = item.fullName;
        img.width = 100;
        img.height = 100;
        return img;
    });

    images.forEach((image) => personajes.appendChild(image));
};
