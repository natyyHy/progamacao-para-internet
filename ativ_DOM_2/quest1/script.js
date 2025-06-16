import {exibirErro} from '../funcoes.js'


document.getElementById('botaoErro').addEventListener('click', () => {
    exibirErro('teste mensagem erro', 'mensagemErro');
})