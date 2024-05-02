//1 - Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
/*function imprimeElementos(arr) {
    for (let elemento of arr) {
        console.log(elemento); // Imprime cada elemento do array
    }
}

const meuArray = ['a', 'b', 'c'];
imprimeElementos(meuArray);*/

/*//Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
const listinha = ['banana', 'vinho', 'brócolis'];

function imprimeIndiceEElemento(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`índice ${i}, elemento ${arr[i]}`);
  }
}
imprimeIndiceEElemento(listinha);*/

/*//3-Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
const numeros = [5, 8, 6, 10, 7];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log("A soma dos números é:", soma);

const listaNumeros = [10, 11, 12, 10, 11, 12, 10, 11, 12, 10, 11, 12];

function soma(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(soma(listaNumeros));*/

/*//4- Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
const arrMenoresMaiores = [1, 2, 0.33, 4 ,55 ,6 ,7 ,8 ,9, 10];

function imprimirMaiorMenor (arr){

    let maior = 0;
    let menor = 0;
        
    for(i=0; i<arr.length; i++){
       if( arr[i] > maior){
        maior = arr[i];
       }
       if(arr[i] < menor){
        menor = arr[i];
       }     
    }
    return `O maior deles é: ${maior}. e o menor é ${menor}`
}

console.log(imprimirMaiorMenor(arrMenoresMaiores));*/

/*//Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
console.log('Números pares do array:');

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
}*/

//Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
const notas = [10, 8.5, 5, 6.5, 8, 7.5];
let somaDasNotas = 0;

for(let nota of notas){
    somaDasNotas += nota;
}
const media = somaDasNotas / notas.length;
console.log (`A média das notas é ${media}`);