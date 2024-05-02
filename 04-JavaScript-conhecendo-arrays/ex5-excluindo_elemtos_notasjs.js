const notas = [10, 6, 8, 5.5, 10];
notas.pop(); //excluir o valor no final do array como sendo o último elemente
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media.toFixed(2)); 