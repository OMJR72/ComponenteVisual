import { Carrusel } from './componente.js';

const imagenes = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg'];

const carruselIzq = new Carrusel('imgIzq', imagenes);
const carruselCentro = new Carrusel('imgCentro', imagenes);
const carruselDer = new Carrusel('imgDer', imagenes);

carruselIzq.indice = imagenes.length - 1;
carruselIzq.mostrar();

carruselDer.indice = 1;
carruselDer.mostrar();

document.getElementById('siguiente').addEventListener('click', () => {
    carruselIzq.siguiente();
    carruselCentro.siguiente();
    carruselDer.siguiente();
});

document.getElementById('anterior').addEventListener('click', () => {
    carruselIzq.anterior();
    carruselCentro.anterior();
    carruselDer.anterior();
});