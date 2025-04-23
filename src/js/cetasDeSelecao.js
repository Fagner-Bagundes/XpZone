const selecaoArea = document.querySelector(`.box-city`)
const citys = document.querySelector(`.citys`)
const city = document.querySelectorAll(`.city`)

export function caixaSelecao() {
    selecaoArea.addEventListener(`click`, ()=>{
        citys.classList.add(`citys-active`)
        city.forEach(element => {
            element.classList.add(`city-active`)
            
        });

    })
}