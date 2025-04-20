const compreTxt = document.querySelector(`#compre`)

const pl = [`Venda`, `Troque`, `Compre`]
let i = 0


const trocaDePalavras = setInterval(() => {
    compreTxt.innerHTML = pl[i]
    i < 2 ? i++  : i = 0
}, 1000);

