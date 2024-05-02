/*// 1-Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator. Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).
function concatArrays(...arrays) { // sempre que for para retornar apenas um array usa o concatenar 
    return [].concat(...arrays); // operador spread para concatenar os arrays
}

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const arraysConcatenados = concatArrays(arr1, arr2, arr3);
console.log(arraysConcatenados); // Saída: [1, 2, 3, 4, 5, 6]*/

/*//Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

const valores = [2, 6, 8, 10, 9, 4, 7];

    const somaDosValores = valores.reduce((acumulador, valor)=> acumulador + valor,0);
   
    console.log(somaDosValores);*/

/*// 3- Considere duas listas de cores:const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'] const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'] Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const coresUnicas = [...new Set([...coresLista1, ...coresLista2])];
console.log('Cores sem repetir: ', coresUnicas);*/

/*//4- Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
function filtraNumerosPares(arr) {
    return arr.filter(num => num % 2 === 0); // Filtra apenas os números pares
}

const numArray = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
const listaNumerosPares = filtraNumerosPares(numArray);
console.log(listaNumerosPares); // Saída: [2, 4, 6]*/

/*//5- Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

function filtro (arr){
    return arr.filter(num => num % 3 === 0 && num > 5);

}
const numArray = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
const filtros = filtro(numArray);
console.log(filtros);*/

//6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.
function somaElementosDoArray(arr) {
    return arr.reduce((acum, atual) => acum + atual, 0); // Soma os elementos do array
  }
  
  const listaNumeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
  const somaTotal = somaElementosDoArray(listaNumeros);
  console.log(somaTotal); // Saída: 76
