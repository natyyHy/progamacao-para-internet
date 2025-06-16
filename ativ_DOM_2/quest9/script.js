import {exibirErro} from '../funcoes.js'

let hashtags = []

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


document.getElementById('botaoRemover').addEventListener('click', () => {
    const select = document.getElementById('listaHashtags')

    const selecionado = select.selectedOptions[0]

    if (!selecionado) {
        exibirErro('Selecione uma hashtag para remover','mensagemErro')
        return;
    }

    select.removeChild(selecionado)

    hashtags = hashtags.filter(tag => tag !== selecionado.value)

    console.log(hashtags)
})