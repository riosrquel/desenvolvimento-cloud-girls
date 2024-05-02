const notas1 = [10, 8.5, 5, 6.5, 8, 7.5];
const notas2 = [5, 8, 3, 6,];
const notas3 = [4, 7, 3];
let somaDasNotas = [notas1, notas2, notas3];
let media = 0;
for(let i = 0; i < somaDasNotas.length; i++){
    for(j=0; j < somaDasNotas[i].length; j++){
        media += somaDasNotas[i][j]/ somaDasNotas[i].length;
    }
}
media = media/somaDasNotas.length;
console.log (media);