let NATURALES = [];

for (let i = 1; i <= 18; i++) {
    NATURALES.push(i);
}

let IMPARES = [];

for (let i = 35; i >= 1; i -= 2) {
    IMPARES.push(i);
}

let RESULTADO = [...NATURALES.slice(0, 3), ...IMPARES.slice(-3)];

console.log(RESULTADO);