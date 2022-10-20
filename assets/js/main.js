"strict mode"
import { alterarEstadoDoCabecalho } from "./animacaoCabecalho.js";
import { alterarEstadoDosCartoes } from "./animacaoCartao.js";
import "./animacaoAncoraProjetos.js";

//Função que estipula quantas vezes outra função é chamada.
const debounce = function (func, wait, imediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!imediate) func.apply(context, args);
        };
        const callNow = imediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

//Quando o scroll é ativo -> mostra (ou não) o cabeçalho e os cartões.
window.addEventListener('scroll', debounce(function () {
    alterarEstadoDoCabecalho();
    alterarEstadoDosCartoes();
}, 15));
