import data from './data/got/got.js';
const imagenes = document.getElementById('imagenes')
const personajes = document.getElementById('Personajes')


export const data = () => {
    const images = data.got.map((item) => {
        const element = document.createElement(img);
        img.src = item.imageUrl;
        img.alt = item.fullName;
        img.width = 100;
        img.heigth = 100;
        return img;

    })
    imagesMovies.map((image) => allMovies.appendChild(image));

};
