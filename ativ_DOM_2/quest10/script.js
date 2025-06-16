
function moverItens(idOrigem,idDestino){

    const origem = document.getElementById(idOrigem)
    const destino = document.getElementById(idDestino)

    const selecionado = Array.from(origem.selectedOptions);


    for(let option of selecionado){
        origem.removeChild(option)
        destino.appendChild(option)
    }

}

document.getElementById('moverParaDireitaBtn').addEventListener('click', () => {
    moverItens('ativosDisponiveis','carteiraInvestimentos')
})

document.getElementById('moverParaEsquerdaBtn').addEventListener('click',() => {
    moverItens('carteiraInvestimentos','ativosDisponiveis')
})
