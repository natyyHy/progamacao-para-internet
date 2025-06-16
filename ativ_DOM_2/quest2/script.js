import {exibirErro} from '../funcoes.js'

document.getElementById('botaoExibir').addEventListener('click', () => {
    const conteudo = document.getElementById('caixaDeTexto').value.trim();
    
    const erroEl = document.getElementById('mensagemErro');
    erroEl.style.display = 'none';
    erroEl.innerText = '';

    if (!conteudo) {
        exibirErro('Campo não pode ser vazio!', 'mensagemErro');
        return;
    }

    document.getElementById('conteudo').innerHTML = conteudo;
});
