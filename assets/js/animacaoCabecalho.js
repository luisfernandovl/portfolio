"strict mode"
import {cabecalho, posicoes, botoesNavegacao, coresDaNavegacao} from './variaveisPadrao.js';

cabecalho.children[0].addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({top: 0, behavior: 'smooth'});
});

for(let i = 0; i < botoesNavegacao.length; i++){
    botoesNavegacao[i].children[0].addEventListener('click', (e) => e.preventDefault());
    botoesNavegacao[i].onclick = () => window.scroll({top: (posicoes[i]), behavior: 'smooth'});
}

function alterarCoresNavegacao(indice) {
    for (let i = 0; i < botoesNavegacao.length; i++) {
        botoesNavegacao[i].classList.remove(coresDaNavegacao[i])
    }

    botoesNavegacao[indice].classList.add(coresDaNavegacao[indice]);
}

export function alterarEstadoDoCabecalho() {
    if (window.scrollY < posicoes[0]) {
        cabecalho.classList.remove('cabecalho--visivel');
    }
    else{
        cabecalho.classList.add('cabecalho--visivel');

        for(let i=0; i < posicoes.length; i++){
            if (window.scrollY >= posicoes[i] && window.scrollY < posicoes[i+1]) {
                alterarCoresNavegacao(i);
            }
        }
    }
}
