let i = 2;
console.log('Resultado del bucle while');
while (i < 2) {
    if (i % 2 === 0) {
        console.log('Número par', i);
    }
    i++
}
console.log('Resultado del bucle do-while');
do {
    if (i % 2 === 0) {
        console.log('Número par', i);
        i++;
    }
} while (i < 2);