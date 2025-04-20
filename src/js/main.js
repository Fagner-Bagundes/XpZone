const compreTxt = document.querySelector(`#compre`)
const ghost = document.querySelector(`.ghost-gif`)
const baloes = document.querySelector(`.baloes-gif`)
const card = document.querySelector(`#card`)

const palavras = [`Venda`, `Troque`, `Compre`]
let valorAnimacao = 0
let i = 0

function trocaDePalavras() {
    compreTxt.innerHTML = palavras[i]
    i < 2 ? i++  : i = 0
}

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


function animacaoCard(params) { 
    function addValor(params) {
        card.style.paddingTop = `${valorAnimacao.toString()}px`
    }
    
    function descendo() {
        let descer = setInterval(() => {
            if (valorAnimacao< 20) {
                ++valorAnimacao
                addValor()
            } else{
                clearInterval(descer)
                subindo()
            }
            }, 80);
    }
    
    function subindo() {
        let subir = setInterval(() => {
            if (valorAnimacao> 0) {
                --valorAnimacao
                addValor()
            } else{
                clearInterval(subir)
                descendo()
            }
            }, 80);
    }
    descendo()
}


setInterval(trocaDePalavras, 1000);
setInterval(() => subirDescerGhost(`200px`), 2000);
setInterval(() => subirDescerBaloes(`150px`), 2000);
animacaoCard()
