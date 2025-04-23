const selecaoArea = document.querySelector(`.box-city`)


export function caixaSelecao() {
    selecaoArea.addEventListener(`click`, ()=>{
        selecaoArea.style.height = `1000px`
    })
}