let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;
    exibirMensagemInicial()

    function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.2;
        window.speechSynthesis.speak(utterance);
    } else {
        console.log('Web Speech API não suportada');
    }
}
   function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto!');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10.');
   }
    

    function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('h1', `${mensagemTentativas}`);
    exibirTextoNaTela('p', 'Jogue de novo!');
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if( chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor que ' + chute);
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior que ' + chute)
         }
}
        tentativas++;
        limparCampo();
}



  function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
 }

    function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumeroSorteados = [];
}

    if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio()
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
        
    
}

    function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo()
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


