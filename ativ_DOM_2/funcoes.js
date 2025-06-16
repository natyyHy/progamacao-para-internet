
export function exibirErro(mensagem, idComponente){

    const elemento = document.getElementById(idComponente)
    elemento.innerText = mensagem
    elemento.style.display = 'block'

    setTimeout(() => {
        elemento.style.display = 'none'
    }, 3000)
}