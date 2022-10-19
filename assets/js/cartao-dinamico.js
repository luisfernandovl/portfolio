var requestURL = 'https://luisfernandovl.github.io/portfolio/db.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    var projetos = request.response;

    for (let i = 0; i < projetos.length; i++) {
        let cartao = criarCartao(projetos[i])

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

const secaoWeb = document.querySelector('#secao-web');
const secaoMobile = document.querySelector('#secao-mobile');
const secaoDesktop = document.querySelector('#secao-desktop');
const secaoDesign = document.querySelector('#secao-design');

function criarCartao(projeto) {
    let tecnologias = [];
    let links = [];

    for (let i = 0; i < projeto.tecnologias.length; i++) {
        tecnologias.push(`<li class="cartao__tecnologias-item" role="listitem">${projeto.tecnologias[i]}</li>`);
    }

    for (let i = 0; i < projeto.links.length; i++) {
        links.push(`<li role="listitem"><a class="botao botao--${projeto.id} cartao__informacoes-link" href="${projeto.links[i]}"><span class="icone icone-${projeto.icones[i]} icone--margem-direita">${projeto.botoes[i]}</span></a></li>`);
    }


    let l = projeto.links.map(links => `<li role="listitem"><a class="botao botao--${projeto.id} cartao__informacoes-link" href="${links}"><span class="icone icone-${links} icone--margem-direita">${links}</span></a></li>`).join();

    console.log(l);

    return (`
    <div class="cartao cartao--${projeto.id}">
        <ul class="cartao__tecnologias cartao__tecnologias--${projeto.id}" role="list">
            ${projeto.tecnologias.map(tecnologia => `<li class="cartao__tecnologias-item" role="listitem">${tecnologia}</li>`).join("")}
        </ul>
        <div class="cartao__informacoes">
            <h3 class="cartao__informacoes-titulo">${projeto.titulo}</h3>
            <p class="cartao__informacoes-descricao">${projeto.descricao}</p>
            <ul class="cartao__informacoes-lista-links" role="list">
                ${links.join("")}
            </ul>
        </div>
     </div>
     `);
}
