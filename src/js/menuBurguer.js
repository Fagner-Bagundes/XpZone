const menu = document.querySelector(".menu-borger")
const contentMenu = document.querySelector(".content-menu")
const deleteIcon = document.querySelector(".delete-ic")

export class MenuBurguer {

    static clickOnBurguer(){
        menu.addEventListener('click',(e)=>{
            let contentClass = contentMenu.classList.contains(`content-menu-active`)

            if (contentClass) {
                contentMenu.classList.remove(`content-menu-active`)
            } else{
                menu.classList.add(`menu-burger-none`)
                contentMenu.classList.add(`content-menu-active`)
                deleteIcon.classList.add(`delete-ic-active`)
            }
        })
    };

    static clickOnDelete(){
        deleteIcon.addEventListener(`click`, (e)=>{
            deleteIcon.classList.remove(`delete-ic-active`)
            menu.classList.remove(`menu-burger-none`)
            contentMenu.classList.remove(`content-menu-active`)
    
    
         
        })

    }
    static abrirMenu(){
        this.clickOnBurguer()
        this.clickOnDelete()

    }
    
}