# Estudo sobre o DOM

### a) MDN

- O DOM permite que programas leiam e modifiquem a estrutura, o estilo e o conteúdo dos documentos.
- Elementos são representados como objetos com propriedades e métodos.
- É independente de linguagem, mas normalmente manipulado via **JavaScript**.

---

### b) W3Schools

- O HTML DOM é um padrão **W3C** para acessar e manipular documentos HTML como objetos.
- A manipulação é feita com:
  - **Métodos**: `getElementById()`, `getElementsByTagName()` etc.
  - **Propriedades**: `innerHTML`, `textContent` etc.


---

## 5) Diferença entre `textContent`, `innerText` e `innerHTML`

A principal diferença entre textContent, innerText e innerHTML reside na forma como recuperam e manipulam o conteúdo textual dentro de um elemento HTML. textContent retorna o texto bruto, incluindo espaçamentos e até mesmo texto oculto, sem as tags HTML. innerText retorna o texto que seria visível no navegador, ignorando algumas formatações e tags, e innerHTML retorna o HTML completo, incluindo tags e conteúdo.

---

- `textContent`: Texto bruto.
- `innerText`: Texto visível.
- `innerHTML`: HTML completo com tags.

---

