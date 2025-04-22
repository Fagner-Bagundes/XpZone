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


class AnimacaoGifs {
    constructor(parameters) {
        
    }

    static subirDescerGhost(valor) {
        let bottom = getComputedStyle(ghost).marginBottom
        ghost.style.marginBottom = valor
        if (bottom === valor ) ghost.style.marginBottom = `0px`
    };

    static subirDescerBaloes(valor) {
        let Top = getComputedStyle(baloes).marginTop
        baloes.style.marginTop = valor
        if (Top === valor ) baloes.style.marginTop = `0px`
    }


}

class AnimacaoCard {
    constructor(parameters) {
    }
    static inicia(){
        this.subindo()
    };

    static addValor(params) {
        card.style.paddingTop = `${valorAnimacao.toString()}px`
    }

    static descendo() {
        let descer = setInterval(() => {
            if (valorAnimacao< 20) {
                ++valorAnimacao
                this.addValor()
            } else{
                clearInterval(descer)
                this.subindo()
            }
            }, 80);
    };

    static subindo() {
        let subir = setInterval(() => {
            if (valorAnimacao> 0) {
                --valorAnimacao
                this.addValor()
            } else{
                clearInterval(subir)
                this.descendo()
            }
            }, 80);
    };
}



setInterval(trocaDePalavras, 1000);
setInterval(() => AnimacaoGifs.subirDescerGhost(`200px`), 2000);
setInterval(() => AnimacaoGifs.subirDescerBaloes(`150px`), 2000);
AnimacaoCard.inicia()
