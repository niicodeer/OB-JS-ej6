//Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["Leche","Huevo","Arroz","Fideo","Pan"];

//Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop()
console.log(listaCompra);

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFav = [
    {
        titulo: "13 horas: los soldados secretos de Bengasi",
        director: "Michael Bay",
        fecha: new Date(2016,1,18)//.toLocaleString(),
    },
    {
        titulo: "Misión de rescate",
        director: "Sam Hargrave",
        fecha: new Date(2020,3,24)//.toLocaleString(),
    },
    {
        titulo: "Iron Man",
        director: "Jon Favreau",
        fecha: new Date(2008,3,30)//.toLocaleString(),
    },
]
console.log(peliculasFav);

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasFav2 = peliculasFav.filter(pelicula => pelicula.fecha > new Date(2010,0,1))//.toLocaleString())

console.log(peliculasFav2);

//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directores = peliculasFav.map(pelicula => pelicula.director);
console.log(directores);

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculasFav.map(pelicula => pelicula.titulo);
console.log(titulos);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const conca = directores.concat(titulos)
console.log(conca);

const conca2 = [...directores, ...titulos]
console.log(conca2);