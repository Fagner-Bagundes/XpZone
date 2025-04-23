import { AnimacaoGifs } from "../js/animacoes.js";
import { AnimacaoCard } from "../js/animacoes.js";
import { trocaDePalavras } from "../js/animacoes.js";
import { MenuBurguer } from "../js/menuBurguer.js";
import { MenuCitys } from "../js/menuCitys.js";
// header

// nav
MenuBurguer.abrirMenu() 

// content
trocaDePalavras()

// box-selecao

MenuCitys.AbrirMenu()
// hero 4
AnimacaoGifs.subirDescerGhost(`200px`)
AnimacaoGifs.subirDescerBaloes(`150px`)

// hero5
AnimacaoCard.inicia()
