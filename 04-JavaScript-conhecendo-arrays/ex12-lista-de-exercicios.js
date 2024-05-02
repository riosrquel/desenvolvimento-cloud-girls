
//1-Crie uma função que receba dois arrays e os concatene em um único array.
function concatenateArrays(original, original2) {
    return original.concat(original2); // Concatena os dois arrays
}
const original = [520, 650, 780];
const original2 = [820, 90, 100];

const concatenatedArray = concatenateArrays(original, original2);
console.log(concatenatedArray); // Saída: [1, 2, 3, 4, 5, 6]

//2- Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parteNumeros = numeros.slice(3, 8);
    console.log('Parte dos números:', parteNumeros);

 // 3- Dado o array frutas contendo frutas que desejamos comprar na feira:const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'] Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

frutas.splice(2,2,'kiwi','Pessêgo');
console.log(frutas); 

//4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.

const menuPrincipal = ['Temaki', 'Hossomaki', 'Joy', 'Huramaki', 'Hot Filadélfia'];
const menuDeSobremesa = ['Ferreiro Roche', 'Rafaello', 'Nutella'];

const menuCompleto = menuPrincipal.concat(menuDeSobremesa);
console.log('Veja o Menu completo:',menuCompleto);

// 5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.Dicas:comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;você pode resolver usando um for dentro de outro for.

const matriz = [];
let valorInicial = 1;
for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
      linha.push(valorInicial++);
    }
    matriz.push(linha);
  }
  console.log('Matriz de duas dimensões:');
  console.log(matriz);
  matriz.forEach(row => console.log(row)); // visualização em linhas e colunas

  //6 - Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.

  //console.log('Elemento na segunda linha e terceira coluna:', matriz[1][2]);

  //7 - Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.

  matriz[2][1] = 15;
  console.log('Matriz após adição de elemento:', matriz);
