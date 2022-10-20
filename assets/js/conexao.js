"strict mode"
const resposta = await fetch('../../db.json');
export const projetos = await resposta.json();
