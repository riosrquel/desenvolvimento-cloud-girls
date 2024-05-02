const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
const nomesAtualizados = new Set(nomes); //o set é um conjuto que age como um array, mas ele não funciona como um array
//const listaNomesAtualizados = [...nomesAtualizados];
//console.log(nomesAtualizados);
const listaNomesAtualizados = [...new Set(nomes)];// Spread Operator.
console.log (listaNomesAtualizados);