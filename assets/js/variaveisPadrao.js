"strict mode"
//#region Cabeçalho
export const cabecalho = document.querySelector('#cabecalho');
export const tamanhoCabecalhoEMargem = cabecalho.offsetHeight + 24;
//#endregion

//#region Navegação
export const botoesNavegacao = document.querySelectorAll('.navegacao__item');
export const coresDaNavegacao = ['navegacao__item--ativo-web', 'navegacao__item--ativo-mobile', 'navegacao__item--ativo-desktop', 'navegacao__item--ativo-design'];
//#endregion

//#region Seção apresentação
export const secaoApresentacao = document.querySelector('#secao-apresentacao');
export const botaoAncoraProjetos = document.querySelector('#link-aconra-projetos');
//#endregion

//#region Seção projetos
export const secaoProjetos = document.querySelector('#secao-projetos');
export const inicioSecaoProjetos = secaoProjetos.offsetTop;
import './criarCartoes.js';
export const todosProjetos = document.querySelectorAll('.cartao');
export const projetosWeb = document.querySelectorAll('.cartao--web');
export const projetosMobile = document.querySelectorAll('.cartao--mobile');
export const projetosDesktop = document.querySelectorAll('.cartao--desktop');
export const projetosDesign = document.querySelectorAll('.cartao--design');
export const fimSecaoProjetos = secaoProjetos.offsetTop + secaoProjetos.offsetHeight;
export const posicoes = [
    inicioSecaoProjetos - tamanhoCabecalhoEMargem + 32,
    projetosMobile[0].offsetTop - tamanhoCabecalhoEMargem,
    projetosDesktop[0].offsetTop - tamanhoCabecalhoEMargem,
    projetosDesign[0].offsetTop - tamanhoCabecalhoEMargem,
    fimSecaoProjetos - tamanhoCabecalhoEMargem
]
let somatorioAlturasCartoes = 0;
for (let i = 0; i < todosProjetos.length; i++) {
    somatorioAlturasCartoes += todosProjetos[i].offsetHeight + 32;
}
export const mediaAlturaCartoes = somatorioAlturasCartoes / todosProjetos.length;
//#endregion

//#region Rodapé
export const rodape = document.querySelector('#rodape');
//#endregion
