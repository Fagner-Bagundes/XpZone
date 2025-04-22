import { AnimacaoGifs } from "../js/animacoes.js";
import { AnimacaoCard } from "../js/animacoes.js";
import { trocaDePalavras } from "../js/animacoes.js";
import { MenuBurguer } from "../js/menuBurguer.js";
import { caixaSelecao } from "../js/cetasDeSelecao.js";
// header

// nav
MenuBurguer.abrirMenu() 

// content
trocaDePalavras()

// box-selecao
caixaSelecao()
// hero 4
AnimacaoGifs.subirDescerGhost(`200px`)
AnimacaoGifs.subirDescerBaloes(`150px`)

// hero5
AnimacaoCard.inicia()
