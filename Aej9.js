let IMPARES = [];
let N = parseInt(prompt("Ingrese la cantidad de números impares:"));

// Carga de impares descendentes
for (let i = 0; i < N; i++) {
    IMPARES.push((N * 2 - 1) - (i * 2));
}

// Intercambio del primero con el último
let aux = IMPARES[0];
IMPARES[0] = IMPARES[IMPARES.length - 1];
IMPARES[IMPARES.length - 1] = aux;

console.log(IMPARES);