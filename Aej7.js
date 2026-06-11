let NUM = [3, 8, 1, 10, 5, 0, 9, 7, 2];
let NUEVO = [];

for (let i = 0; i < NUM.length; i++) {
    if (NUM[i] < 8) {
        NUEVO.push(NUM[i]);
    }
}

console.log("NUM:", NUM);
console.log("NUEVO:", NUEVO);