import {exibirErro} from '../funcoes.js'


function atualizarBotoes(){

    const ativos = document.getElementById('ativosDisponiveis')
    const carteira = document.getElementById('carteiraInvestimentos')

    if(ativos.options.length === 0){
        document.getElementById('moverParaDireitaBtn').disabled = true
    }else{
        document.getElementById('moverParaDireitaBtn').disabled = false

    }

    if(carteira.options.length === 0){
        document.getElementById('moverParaEsquerdaBtn').disabled = true
    }else{
        document.getElementById('moverParaEsquerdaBtn').disabled = false
    }
}


function moverItens(idOrigem,idDestino){

    const origem = document.getElementById(idOrigem)
    const destino = document.getElementById(idDestino)

    const selecionado = Array.from(origem.selectedOptions);

    
    if(selecionado.length === 0){
        exibirErro('Selecione pelo menos 1 ativo!','mensagemErro')
        return;
    }

    for(let option of selecionado){
        origem.removeChild(option)
        destino.appendChild(option)
    }

    atualizarBotoes()

}

document.getElementById('moverParaDireitaBtn').addEventListener('click', () => {
    moverItens('ativosDisponiveis','carteiraInvestimentos')
})

document.getElementById('moverParaEsquerdaBtn').addEventListener('click',() => {
    moverItens('carteiraInvestimentos','ativosDisponiveis')
})

document.addEventListener('DOMContentLoaded',atualizarBotoes())
