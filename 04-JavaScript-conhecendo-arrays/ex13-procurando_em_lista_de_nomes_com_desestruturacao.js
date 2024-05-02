const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const media = [10, 8, 7.5, 9];
const lista =  [alunos, media];
function exibeNomeENota(aluno){
    if(lista[0].includes(aluno)){ // Este método verifica se determinado dado, informação, string, um array, um número, está contido dentro daquele array.
    const [alunos, media] = lista     
    const indice = alunos.indexOf(aluno); // método indexof =Ele vai retornar o índice da primeira ocorrência do valor fornecido
    const mediaAluno = media[indice];
    console.log(`${aluno} tem média ${mediaAluno}`);
    }  
    else{
        console.log("Este aluno não está matriculado nesta disciplina");
    }  
}
exibeNomeENota ('João');
exibeNomeENota ('Raquel');