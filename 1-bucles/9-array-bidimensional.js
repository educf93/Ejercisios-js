
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
    [],
    [],
    []
]

for(var i =0;i<=2;i++){
    matriz[0].push(i)
}
for(var j=10;j<=12;j++){
    matriz[1].push(j)
}
for(var k=20;k<=22;k++){
    matriz[2].push(k)
}
console.log(matriz);