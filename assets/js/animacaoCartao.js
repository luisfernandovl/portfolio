"strict mode"
import { todosProjetos, mediaAlturaCartoes } from "./variaveisPadrao.js";

//Se a posição do scroll possuir valor maior que a altura de N cartões -> Mostrar N cartões. Senão -> Não mostrar.
export function alterarEstadoDosCartoes() {
    for (let i = 1; i < todosProjetos.length + 1; i++) {
        if (window.scrollY >= mediaAlturaCartoes * i) {
            todosProjetos[i - 1].classList.add('cartao--visivel');
        } else {
            todosProjetos[i - 1].classList.remove('cartao--visivel');
        }
    }
}
