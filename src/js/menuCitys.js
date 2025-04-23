const selecaoArea = document.querySelector(`.box-city`)
const boxTxt = document.querySelector(`.box-txt`)
const citys = document.querySelector(`.citys`)
const city = document.querySelectorAll(`.city`)
const cetaBottom = document.querySelector(`.ceta-bottom`)



export class MenuCitys {

    static clickForOpen(){
        selecaoArea.addEventListener(`click`, ()=>{
            let citysClass = citys.classList.contains(`citys-active`)
            if (citysClass) {
                citys.classList.remove(`citys-active`)
                cetaBottom.classList.remove(`ceta-bottom-active`)
            } else{
                citys.classList.add(`citys-active`)
                city.forEach(element => {
                    element.classList.add(`city-active`)
                });
    
                cetaBottom.classList.add(`ceta-bottom-active`)
            }
        })
    };

    static addCity(){
        city.forEach(element => {
            element.addEventListener(`click`, ()=>{
            boxTxt.innerHTML = element.textContent
        })

        });
        
    };

    static AbrirMenu(){
        this.clickForOpen()
        this.addCity()
    }
}

// export function caixaSelecao() {
//     selecaoArea.addEventListener(`click`, ()=>{
//         let citysClass = citys.classList.contains(`citys-active`)
//         if (citysClass) {
//             citys.classList.remove(`citys-active`)
//             cetaBottom.classList.remove(`ceta-bottom-active`)
//         } else{
//             citys.classList.add(`citys-active`)
//             city.forEach(element => {
//                 element.classList.add(`city-active`)
//             });

//             cetaBottom.classList.add(`ceta-bottom-active`)

//         }
//     })


//     city.forEach(element => {
//         element.addEventListener(`click`, ()=>{
//         boxTxt.innerHTML = element.textContent
//     })

//     });

// }