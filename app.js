let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemIncial() {
    exibirTextoTela('h1','Jogo no número secreto');
    exibirTextoTela('p','Escolha um número entre 1 e 10');
    
}

exibirMensagemIncial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
      exibirTextoTela('h1','Acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      exibirTextoTela('p','Você descobriu o número secreto com ' + tentativas + ' '+ palavraTentativa+ ' !');  
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoTela('p','O número secreto é menor ');
    }else{
        exibirTextoTela('p','O número secreto é maior ');
    }
    tentativas++;
    limparCampo();    
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosLista = listaDeNumerosSorteados.length;

    if(quantidadeDeNumerosLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo;
    tentativas = 1;
    exibirMensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
}