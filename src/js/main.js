const compreTxt = document.querySelector(`#compre`)
const ghost = document.querySelector(`.ghost-gif`)
const baloes = document.querySelector(`.baloes-gif`)
const pl = [`Venda`, `Troque`, `Compre`]
let i = 0


function subirDescerGhost(valor) {
    let bottom = getComputedStyle(ghost).marginBottom
    ghost.style.marginBottom = valor
    if (bottom === valor ) ghost.style.marginBottom = `0px`
}

function subirDescerBaloes(valor) {
    let Top = getComputedStyle(baloes).marginTop
    baloes.style.marginTop = valor
    if (Top === valor ) baloes.style.marginTop = `0px`
}
const trocaDePalavras = setInterval(() => {
    compreTxt.innerHTML = pl[i]
    i < 2 ? i++  : i = 0
}, 1000);


setInterval(() => subirDescerGhost(`200px`), 2000);
setInterval(() => subirDescerBaloes(`150px`), 2000);

