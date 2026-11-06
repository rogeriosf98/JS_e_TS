//Escopo lexico

/*
A função tem ciencia do que está dentro dela e do que está fora (vizinho)
Por exemplo essa função abaixo, onde ao executar, retorna roggério. Mas 
ao adicionar um const nome dentro da função, ela executa e retorna Lucas.

Isso, pos ela sabe identificar o posicionamento das outras estruturas 
*/

const nome = 'Rogerio';

function falaNome() {
 //  const nome = 'Lucas';
    console.log(nome);
}

function usaFalaNome() {
    falaNome();
}
usaFalaNome();