/*// Exercício 02 
Parte 01 - Criando um array esparso
const arrayEsparso = [];

// Atribuindo valores a alguns elementos do array
arrayEsparso[1] = 'Elemento 1';
arrayEsparso[3] = 'Elemento 3';
arrayEsparso[7] = 'Elemento 7';

// Imprimindo os resultados
console.log(arrayEsparso);
console.log(arrayEsparso.length);*/

/*//Parte 02 - add valor na primeira posição
// Inicializando o array com cinco elementos
let meuArray = [10, 20, 30, 40, 50];

// Exibindo o array antes da alteração
console.log("Array antes da alteração: ", meuArray);

// Atribuindo um novo valor para a primeira posição (índice 0) do array
meuArray[0] = 5;

// Exibindo o array depois da alteração
console.log("Array depois da alteração: ", meuArray);*/


/*//Parte 03 - meu array

let meuArrey = [10,30,50];
console.log("Array antes da alteração ", meuArrey);

meuArray[0] = meuArray[0] * 2;
console.log("Meu Arrey após a alteração", meuArrey);*/

/*//Parte 04 - add número inteiros nos array.

let meuArray = [];

meuArray.push(5);
meuArray.push(10);
meuArray.push(15);

console.log("Galera após add", meuArray);*/

//Parte 05 - clínica add dos bichinhos 

clinica = [];
clinica.push('jacaré', clinica);
clinica.push('cobra', clinica);
clinica.push('tamanduá', clinica);

console.log("Chegaram três elementos", clinica);

clinica.pop();
clinica.pop();
clinica.pop();

console.log('Quantos animais estão na clínica?', clinica);
