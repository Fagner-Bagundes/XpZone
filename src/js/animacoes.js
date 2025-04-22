const card = document.querySelector(`#card`)
let valorAnimacao = 0
let i = 0

export function trocaDePalavras() {
    setInterval(() => {
        const compreTxt = document.querySelector(`#compre`)
        const palavras = [`Venda`, `Troque`, `Compre`]
        compreTxt.innerHTML = palavras[i]
        i < 2 ? i++  : i = 0
    }, 1000);
}

export class AnimacaoGifs {
    static subirDescerGhost(valor) {
        const ghost = document.querySelector(`.ghost-gif`)
        setInterval(() => {
            let bottom = getComputedStyle(ghost).marginBottom
            ghost.style.marginBottom = valor
            if (bottom === valor ) ghost.style.marginBottom = `0px`
        }, 2000);

   
    };

    static subirDescerBaloes(valor) {
        const baloes = document.querySelector(`.baloes-gif`)
        setInterval(() => {
            let Top = getComputedStyle(baloes).marginTop
            baloes.style.marginTop = valor
            if (Top === valor ) baloes.style.marginTop = `0px`     
        }, 2000);
       
    }


}

export class AnimacaoCard {
    static inicia(){
        this.subindo()
    };

    static addValor() {
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