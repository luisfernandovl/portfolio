"strict mode"
import { todosProjetos } from "./variaveisPadrao.js";

let somatorioAlturasCartoes = 0;

for (let i = 0; i < todosProjetos.length; i++) {
    somatorioAlturasCartoes += todosProjetos[i].offsetHeight + 32;
}

const mediaAlturaCartoes = somatorioAlturasCartoes / todosProjetos.length;

export function alterarEstadoDosCartoes() {
    for (let i = 1; i < todosProjetos.length + 1; i++) {
        const lado = i % 2 === 1 ? 'esquerda' : 'direita';
        let removeClasse = '';
        let adicionaClasse = '';
        if (window.scrollY >= mediaAlturaCartoes * i - 30) {
            removeClasse = 'invisivel';
            adicionaClasse = 'visivel';
        } else {
            removeClasse = 'visivel';
            adicionaClasse = 'invisivel';
        }

        todosProjetos[i - 1].classList.remove(`cartao--${removeClasse}-${lado}`);
        todosProjetos[i - 1].classList.add(`cartao--${adicionaClasse}-${lado}`);
    }
}
