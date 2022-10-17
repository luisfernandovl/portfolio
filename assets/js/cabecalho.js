"strict mode"
//#region Constantes (elementos: cabeçalho e navegação).
export const cabecalho = document.querySelector('.cabecalho');
const cabecalhoLogo = document.querySelector('.cabecalho__logo');
const todosItensDaNavegacao = document.querySelectorAll('.navegacao__item');
const coresDaNavegacao = ['navegacao__item--ativo-web','navegacao__item--ativo-mobile','navegacao__item--ativo-desktop','navegacao__item--ativo-design'];
export const secoesDeProjeto = document.querySelectorAll('.secao-projetos');
//#endregion

//#region Funções de navegação (ao clicar -> reposicionar o scroll da tela).
cabecalhoLogo.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({top: 0, behavior: 'smooth'});
});

for(let i = 0; i < todosItensDaNavegacao.length; i++){
    todosItensDaNavegacao[i].children[0].addEventListener('click', (e) => e.preventDefault());
    todosItensDaNavegacao[i].onclick = () => window.scroll({top: (secoesDeProjeto[i].offsetTop - cabecalho.offsetHeight + 1), behavior: 'smooth'});
}
//#endregion

//Função do cabecalho/navegação (ficar visível e com cor referente a seção).
export function alterarEstadoDoCabecalho(){
    //Scroll muito antes das seções de projeto? Se sim -> não mostrar cabeçalho.
    if(window.scrollY < secoesDeProjeto[0].offsetTop - cabecalho.offsetHeight){
        cabecalho.classList.remove('cabecalho--visivel');
        for(let i=0; i < todosItensDaNavegacao.length; i++){
            todosItensDaNavegacao[i].classList.remove(coresDaNavegacao[i]);
        }
        return;
    }

    //Está nas seções de projeto -> Ficar visível e com cores temas das seções.
    for (let i = 0; i < secoesDeProjeto.length; i++) {
        const posicaoInicialSecao = secoesDeProjeto[i].offsetTop - cabecalho.offsetHeight;
        const posicaoFinalSecao = (secoesDeProjeto[i].offsetTop + secoesDeProjeto[i].offsetHeight) - cabecalho.offsetHeight;

        if (window.scrollY >= posicaoInicialSecao && window.scrollY < posicaoFinalSecao) {
            for(let j=0; j < secoesDeProjeto.length; j++){
                todosItensDaNavegacao[j].classList.remove(coresDaNavegacao[j])
            }
            
            cabecalho.classList.add('cabecalho--visivel');
            todosItensDaNavegacao[i].classList.add(coresDaNavegacao[i])
        }
    }
}
