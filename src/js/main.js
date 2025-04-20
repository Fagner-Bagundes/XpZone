const compreTxt = document.querySelector(`#compre`)
const ghost = document.querySelector(`.ghost-gif`)
const baloes = document.querySelector(`.baloes-gif`)
const pl = [`Venda`, `Troque`, `Compre`]
let i = 0


function subirDescer(valor) {
    let bottom = getComputedStyle(ghost).marginBottom
    let top = getComputedStyle(baloes).marginTop
    
    

    ghost.style.marginBottom = valor
    baloes.style.marginTop = `0px`

    
    if (bottom === valor ) ghost.style.marginBottom = `0px`
    if (top < valor ) baloes.style.marginTop = valor
    console.log(baloes);
    
    
}
const trocaDePalavras = setInterval(() => {
    compreTxt.innerHTML = pl[i]
    i < 2 ? i++  : i = 0
}, 1000);


setInterval(() => subirDescer(`200px`), 2000);

