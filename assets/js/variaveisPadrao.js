"strict mode"
import './criarCartoes.js';

export const cabecalho = document.querySelector('#cabecalho');
export const botoesNavegacao = document.querySelectorAll('.navegacao__item');
export const coresDaNavegacao = ['navegacao__item--ativo-web', 'navegacao__item--ativo-mobile', 'navegacao__item--ativo-desktop', 'navegacao__item--ativo-design'];
export const secaoApresentacao = document.querySelector('#secao-apresentacao');
export const secaoProjetos = document.querySelector('#secao-projetos');
export const todosProjetos = document.querySelectorAll('.cartao');
export const projetosWeb = document.querySelectorAll('.cartao--web');
export const projetosMobile = document.querySelectorAll('.cartao--mobile');
export const projetosDesktop = document.querySelectorAll('.cartao--desktop');
export const projetosDesign = document.querySelectorAll('.cartao--design');
export const rodape = document.querySelector('#rodape');

export const tamanhoCabecalhoEMargem = cabecalho.offsetHeight + 32;

export const inicioSecaoProjetos = secaoProjetos.offsetTop;
export const fimSecaoProjetos = secaoProjetos.offsetTop + secaoProjetos.offsetHeight;

export const posicoes = [
    inicioSecaoProjetos - tamanhoCabecalhoEMargem + 32,
    projetosMobile[0].offsetTop - tamanhoCabecalhoEMargem,
    projetosDesktop[0].offsetTop - tamanhoCabecalhoEMargem,
    projetosDesign[0].offsetTop - tamanhoCabecalhoEMargem,
    fimSecaoProjetos - tamanhoCabecalhoEMargem
]


export const botaoAncoraProjetos = document.querySelector('#link-aconra-projetos');