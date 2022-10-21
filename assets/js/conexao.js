"strict mode"
//"Conecta" com o "banco de dados" -> Lê o JSON com os projetos e exporta a resposta.
const resposta = await fetch('../../db.json');
export const projetos = await resposta.json();
