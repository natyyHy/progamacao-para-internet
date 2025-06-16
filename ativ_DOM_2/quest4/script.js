

document.getElementById('botao').addEventListener('click', () => {
    const uploadFile = document.getElementById('uploadImagem')
    const arquivoSelecionado = uploadFile.files[0]

    const img = document.createElement('img')

    img.src = URL.createObjectURL(arquivoSelecionado)

    const lista = document.getElementById('resultado')

    lista.appendChild(img)
})
