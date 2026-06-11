let NUM = [3, 8, 1, 10, 5, 8, 2, 7];
let SECUNDARIO = [];

for (let i = 0; i < NUM.length; i++) {
    if (NUM[i] != 8) {
        SECUNDARIO.push(NUM[i]);
    }
}

console.log("NUM:", NUM);
console.log("SECUNDARIO:", SECUNDARIO);