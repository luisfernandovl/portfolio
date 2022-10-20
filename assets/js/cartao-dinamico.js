const secaoWeb = document.querySelector('#secao-web');
const secaoMobile = document.querySelector('#secao-mobile');
const secaoDesktop = document.querySelector('#secao-desktop');
const secaoDesign = document.querySelector('#secao-design');

const requestURL = '../../db.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    var projetos = request.response;

    for (let i = 0; i < projetos.length; i++) {
        let cartao = criarCartao(projetos[i])

        // secaoWeb.innerHTML += cartao;

        if(projetos[i].id === 'web'){
            secaoWeb.innerHTML += cartao;
        }
        else if(projetos[i].id === 'mobile'){
            secaoMobile.innerHTML += cartao;
        }
        else if(projetos[i].id === 'desktop'){
            secaoDesktop.innerHTML += cartao;
        }
        else{
            secaoDesign.innerHTML += cartao;
        }
    }
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
