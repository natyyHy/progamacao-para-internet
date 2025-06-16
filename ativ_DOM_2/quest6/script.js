import { exibirErro } from '../funcoes.js'


document.getElementById('enviarBtn').addEventListener('click', () => {
    const checkboxes = document.getElementsByName('redesSociais')

    const caixas = []
    for(let i = 0; i < checkboxes.length;i++){
        if(checkboxes[i].checked){
            caixas.push(checkboxes[i].value)
        }
    }

    const resultado = document.getElementById('redesSelecionadas')

    if(caixas.length === 0){
        exibirErro('Selecione pelo menos uma rede social.','mensagemErro')

    }else {
        resultado.innerText = 'Redes selecionadas: ' + caixas.join(', ');
    }
})