import {exibirErro} from '../funcoes.js'

const hashtags = []

document.getElementById('botaoAdicionar').addEventListener('click',() => {
    const input = document.getElementById('inputHashtag').value.trim()

        if(!input){
        exibirErro('Escreva uma hashtag!','mensagemErro')
        return;

    }
    
    if(hashtags.includes(input)){
        exibirErro('Hashtag ja existe!','mensagemErro')
        return;
    }
    
    if(input.length < 2){
        exibirErro('Hashtag precisa ter pelo menos 2 caracteres','mensagemErro')
        return
    }

    if(hashtags.length >= 5){
        exibirErro('Limite de 5 hashtags atingido','mensagemErro')
        return
    }

    const option = document.createElement('option')
    option.innerText = input
    option.value = input

    document.getElementById('listaHashtags').appendChild(option)
    hashtags.push(option.value)
    input.value = ''
})