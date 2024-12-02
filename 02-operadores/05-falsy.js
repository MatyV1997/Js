//short-circuit
/* 
falso:
false
''
null
0
undefined
NaN */
let nombre = '';
let nombreUsuarrio = nombre || "Maty"; 
//El operador or toma como verdadero el primer valor que ve verdadero.
console.log(nombreUsuarrio);

let apellido = 'Vanella';
let userName = apellido && "Maty1997"; 
//El operador and toma como verdadero el último valor que ve verdadero, mientras los dos sean verdaderos
console.log(userName);