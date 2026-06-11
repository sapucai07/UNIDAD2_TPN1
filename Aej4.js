let ORIGEN = [];
let DESTINO = [];

// Carga con prompt
for (let i = 0; i < 5; i++) {
    ORIGEN.push(prompt("Ingrese un valor:"));
}

// Traspaso a DESTINO
for (let i = 0; i < ORIGEN.length; i++) {
    DESTINO.push(ORIGEN[i]);
}

console.log("ORIGEN:", ORIGEN);
console.log("DESTINO:", DESTINO);