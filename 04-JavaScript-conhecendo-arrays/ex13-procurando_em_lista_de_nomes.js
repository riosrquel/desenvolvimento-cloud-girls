const media = [10, 8, 7.5, 9];
const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const lista =  [alunos, media];
function exibeNomeENota(aluno){
    if(lista[0].includes(aluno)){ // Este método verifica se determinado dado, informação, string, um array, um número, está contido dentro daquele array.
        const indice = lista[0].indexOf(aluno); // método indexof =Ele vai retornar o índice da primeira ocorrência do valor fornecido
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem média ${mediaAluno}`);
    }  
    else{
        console.log("Este aluno não está matriculado nesta disciplina");
    }  
}
exibeNomeENota ('Caio');
exibeNomeENota ('Raquel');