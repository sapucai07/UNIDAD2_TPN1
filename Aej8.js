let NUM = [0, 3, 8, 1, 10, 5, 4, 9, 7, 2];
let FILTRADO = [];

for (let i = 0; i < NUM.length; i++) {
    if (NUM[i] > 2 && NUM[i] < 8) {
        FILTRADO.push(NUM[i]);
    }
}

console.log("FILTRADO:", FILTRADO);