let NATURALES = [];
let N = parseInt(prompt("Ingrese la cantidad de números:"));
let suma = 0;

// Carga ascendente
for (let i = 1; i <= N; i++) {
    NATURALES.push(i);
}

// Suma acumulativa
for (let i = 0; i < NATURALES.length; i++) {
    suma += NATURALES[i];
}

console.log("Arreglo:", NATURALES);
console.log("Suma total:", suma);