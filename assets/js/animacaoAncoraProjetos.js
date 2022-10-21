import { botaoAncoraProjetos, posicoes } from "./variaveisPadrao.js";

//Ao clicar no botão "Projetos" -> Muda a posição do scroll para a seção de projetos
botaoAncoraProjetos.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: posicoes[0], behavior: 'smooth' });
});
