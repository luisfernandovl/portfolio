"strict mode"
import { cabecalho, posicoes, botoesNavegacao, coresDaNavegacao } from './variaveisPadrao.js';

//Ao clicar na logo -> Muda a posição do scroll para o topo da página
const logo = cabecalho.children[0];
logo.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: 'smooth' });
});

//Ao clicar nos "botões" da navegação -> Muda a posição do scroll para a categoria referente
for (let i = 0; i < botoesNavegacao.length; i++) {
    botoesNavegacao[i].children[0].addEventListener('click', (e) => e.preventDefault());
    botoesNavegacao[i].onclick = () => window.scroll({ top: (posicoes[i]), behavior: 'smooth' });
}

function alterarCoresNavegacao(indice) {
    for (let i = 0; i < botoesNavegacao.length; i++) {
        botoesNavegacao[i].classList.remove(coresDaNavegacao[i])
    }

    botoesNavegacao[indice].classList.add(coresDaNavegacao[indice]);
}

//Se a posição do scroll estiver fora da seção de projetos -> Esconde cabeçalho/navegação. Senão -> Mostra cabecalho e com cor referente a categoria dos cartões
export function alterarEstadoDoCabecalho() {
    if (window.scrollY < posicoes[0]) {
        cabecalho.classList.remove('cabecalho--visivel');
    }
    else {
        cabecalho.classList.add('cabecalho--visivel');

        for (let i = 0; i < posicoes.length; i++) {
            if (window.scrollY >= posicoes[i] && window.scrollY < posicoes[i + 1]) {
                alterarCoresNavegacao(i);
            }
        }
    }
}
