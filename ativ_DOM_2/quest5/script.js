


document.getElementById('seletorImagens').addEventListener('change', function() {

    const img = document.createElement('img')
    img.src = this.value
    img.alt = "Imagem selecionada";
    img.style.maxwidth = '100px'

    const lista = document.getElementById('imagemSelecionada')
    lista.innerHTML = ""; 
    lista.appendChild(img)
})
