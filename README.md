# ComponenteVisual

<img width="1920" height="1080" alt="LibreríaVisual" src="https://github.com/user-attachments/assets/8780612c-1b47-4636-b181-50adb945cd91" />

# Instituto Tecnológico de Oaxaca

# Actividad 3 - Componente Visual para JavaScript

## Docente
**Martinez Nieto Adelina**

## Alumno
**Jarquin Rivera Orlando Miguel**

## Materia
**Programación Web**

## Descripción

Esta librería implementa un carrusel de imágenes en JavaScript utilizando una clase llamada Carrusel, la cual permite mostrar y administrar una colección de imágenes de forma sencilla. Su funcionamiento consiste en recibir el identificador de un elemento <img> y un arreglo con las rutas de las imágenes, mostrando inicialmente la primera de ellas. Además, proporciona métodos para avanzar a la siguiente imagen, regresar a la anterior y agregar nuevas imágenes al carrusel dinámicamente, actualizando automáticamente la imagen visible. Gracias a su diseño orientado a objetos, es una solución reutilizable y fácil de integrar en cualquier página web desarrollada con HTML, CSS y JavaScript.

##Importacion
# Instalación
El componente de carrusel consta de solo una clase con metodos, este es un carrusel y se importa de la siguiente manera:
```
import { Carrusel } from './componente.js';
```

# Uso
El primer metodo es el constructor que es de la forma:
```
constructor(idImagen, imagenes){
        this.imagen = document.getElementById(idImagen);
        this.imagenes = imagenes;
        this.indice = 0;
        this.mostrar();
    }

Se crea de la siguiente manera
img es la imagen inicial y imagenes es el arreglo de imagenes
    const carruselIzq = new Carrusel('img', imagenes);
```
Mostrar
El metodo de mostrar toma la imagen que esta en el indice seleccionado y la pone en la imagen
```
mostrar(){
        this.imagen.src = this.imagenes[this.indice];
    }

Se utiliza de la siguiente manera:
carrusel.mostrar();
```
Siguiente toma el indice y lo cambia hacia la siguiente imagen en el carrusel
```
siguiente(){
        this.indice++;
        if(this.indice >= this.imagenes.length){
            this.indice = 0;
        }
        this.mostrar();
    }

Se utiliza de la siguiente manera:
carrusel.siguiente();
```
Anterior hace lo mismo pero hacia atras
```
anterior(){
        this.indice--;
        if(this.indice < 0){
            this.indice = this.imagenes.length - 1;
        }
        this.mostrar();
    }
Se utiliza de la siguiente manera:
carrusel.anterior();
```

Agregar imagen solo agrega una imagen al arreglo, asi se pueden ir agregando varias
```
    agregarImagen(imagen){
        this.imagenes.push(imagen);
        this.mostrar();
    }
Se utiliza de la siguiente manera:
carrusel.agregarImagen(img1);
```

#Capturas
<img width="1774" height="1136" alt="image" src="https://github.com/user-attachments/assets/850eded1-eeea-4b55-ad50-5ab54df498e1" />

<img width="1360" height="1048" alt="image" src="https://github.com/user-attachments/assets/0a9d5392-7c6b-4f6d-90f4-c29e35380e41" />

<img width="1214" height="1032" alt="image" src="https://github.com/user-attachments/assets/b5982951-9787-42cc-8ce6-5f341449c441" />

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
