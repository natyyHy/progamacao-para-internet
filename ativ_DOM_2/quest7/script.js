import {exibirErro} from '../funcoes.js'

document.getElementById('botaoAdicionar').addEventListener('click',() => {
    const input = document.getElementById('inputHashtag').value.trim()

    if(!input){
        exibirErro('Escreva uma hashtag!','mensagemErro')
        return
    }

    const option = document.createElement('option')
    option.innerText = input
    option.value = input

    document.getElementById('listaHashtags').appendChild(option)
    input.value = ''
})