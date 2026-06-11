let ORIGEN =[];
let DESTINO=[];

//carga manual
for(let i =0; i<5; i++){
    ORIGEN.push(prompt("Ingrese un valor"));
}
// inversa

for( let i= ORIGEN.length - 1; i >=0 ;i-- ){
    DESTINO.push(ORIGEN[i]);
}

console.log("ORIGEN:", ORIGEN);
console.log("DESTINO:", DESTINO);
