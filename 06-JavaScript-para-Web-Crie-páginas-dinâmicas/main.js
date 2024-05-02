function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    if( elemento && elemento.localName === 'audio'){
        elemento.play();
    }   
    else {
        console.log('Elemento não encontrado');
    }
};
//document.querySelector('.tecla_pom').onclick = tocaSomPom;
const listaDeTeclas = document.querySelectorAll('.tecla'); // aqui o document.querySelectorAll seleciona todos os botão no html tem uma lista de elementos que portam a mesma  classe a classe tecla
//listaDeTeclas[0].onclick = tocaSomPom;
//let contador = 0; //let é um referência variável
for(contador=0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // template string
    // console.log(instrumento);
    tecla.onclick = function () {   
        tocaSom(idAudio);
    }
    tecla.onkeydown = function (evento){
        if(evento.code === "Space" || evento.code === "Enter") {
        tecla.classList.add('ativa');
    }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }
    }
}
