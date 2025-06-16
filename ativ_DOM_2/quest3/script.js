import {exibirErro} from '../funcoes.js'

document.getElementById('calcularTaxa').addEventListener('click', () => {

    const numeroEngajamento = Number(document.getElementById('numeroInteracoes').value)
    const numeroVisualizacoes = Number(document.getElementById('numeroVisualizacoes').value)

    if (isNaN(numeroEngajamento) || isNaN(numeroVisualizacoes)) {

        exibirErro('Insira numeros numericos validos!', 'mensagemErro')
        return;
    }

    const taxaEngajamento = (numeroEngajamento / numeroVisualizacoes) * 100

    document.getElementById('resultadoTaxaEngajamento').innerText = taxaEngajamento.toFixed(2) + '%';
})