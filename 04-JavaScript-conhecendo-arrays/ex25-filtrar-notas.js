const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [7, 5, 7.5, 3];
//const tamanhoNome = alunos.filter((alunos)=>{
// return alunos.length < 4; //retirado para a inclusão do indice media. 
const reprovados = alunos.filter((alunos, indice)=>{
       return medias[indice] < 7;
});
console.log(reprovados);