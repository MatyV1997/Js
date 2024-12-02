//Hay dos formas de iterar un arreglo
let animales = ['caballo', 'rana', 'pez', 'hipopótamo'];
for (let animal of animales) {
    console.log(animal);
}

//La otra manera es con un bucle while
console.log('Ahora lo haré con un bucle while');
let i = 0;
while (i < animales.length) {
    console.log(animales[i]);
    i++;
}