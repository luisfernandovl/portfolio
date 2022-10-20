import { projetos } from "./conexao.js";
const secaoProjetos = document.querySelector('.secao-projetos');

for (let i = 0; i < projetos.length; i++) {
    secaoProjetos.innerHTML += criarCartao(projetos[i]);
}

function criarCartao(projeto) {
    return (`
    <div class="cartao cartao--${projeto.id}">
        <ul class="cartao__tecnologias cartao__tecnologias--${projeto.id}" role="list">
            ${projeto.tecnologias.map(tecnologia => `<li class="cartao__tecnologias-item" role="listitem">${tecnologia}</li>`).join("")}
        </ul>
        <div class="cartao__informacoes">
            <h3 class="cartao__informacoes-titulo">${projeto.titulo}</h3>
            <p class="cartao__informacoes-descricao">${projeto.descricao}</p>
            <ul class="cartao__informacoes-lista-links" role="list">
                ${projeto.botoes.map(botoes => `<li role="listitem"><a class="botao botao--${projeto.id} cartao__informacoes-link" href="${botoes.link}" target="_blank"><span class="icone icone-${botoes.icone} icone--margem-direita">${botoes.texto}</span></a></li>`).join("")}
            </ul>
        </div>
     </div>
     `);
}
