const menu = document.querySelector(".menu-borger")
const contentMenu = document.querySelector(".content-menu")


export class MenuBurguer {
    static abrirMenu(){
        menu.addEventListener('click',(e)=>{
            if (contentMenu.classList.contains(`content-menu-active`)) {
                contentMenu.classList.remove(`content-menu-active`)
            } else{
                
                contentMenu.classList.add(`content-menu-active`)
            }
        })
    }
    
}