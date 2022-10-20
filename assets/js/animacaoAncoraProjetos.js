import { botaoAncoraProjetos, posicoes } from "./variaveisPadrao.js";

botaoAncoraProjetos.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: posicoes[0], behavior: 'smooth' });
});
