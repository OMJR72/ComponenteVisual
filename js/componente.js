export class Carrusel {
    constructor(idImagen, imagenes){
        this.imagen = document.getElementById(idImagen);
        this.imagenes = imagenes;
        this.indice = 0;
        this.mostrar();
    }

    mostrar(){
        this.imagen.src = this.imagenes[this.indice];
    }

    siguiente(){
        this.indice++;
        if(this.indice >= this.imagenes.length){
            this.indice = 0;
        }
        this.mostrar();
    }

    anterior(){
        this.indice--;
        if(this.indice < 0){
            this.indice = this.imagenes.length - 1;
        }
        this.mostrar();
    }

    agregarImagen(imagen){
        this.imagenes.push(imagen);
        this.mostrar();
    }
}