"strict mode"
import { todosProjetos, mediaAlturaCartoes } from "./variaveisPadrao.js";

export function alterarEstadoDosCartoes() {
    for (let i = 1; i < todosProjetos.length + 1; i++) {
        if (window.scrollY >= mediaAlturaCartoes * i - 30){
            todosProjetos[i-1].classList.add('cartao--visivel');
        }else{
            todosProjetos[i-1].classList.remove('cartao--visivel');
        }
    }
}
