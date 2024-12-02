let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;
let personaje = {
    nombre,
    anime,
    edad,
};
//Esta es la forma de borrar una propiedad de un objeto
delete personaje.nombre;
//Esta es la forma de mostrar en consola las propiedades que tiene mi objeto
console.log(personaje);
//Esta es una de las forma de mostrar una propiedad de mi objeto como edad
console.log(personaje.edad);
//Esta es la otra forma de mostrar una propiedad de mi objeto como anime
console.log(personaje["anime"]);
//Esta es la manera de cambiar el valor de mi propiedad en mi objeto
personaje.edad = 13;
console.log(personaje["edad"]);

