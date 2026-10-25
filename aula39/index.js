/*  While e do while, serve para quando não sabemos quantas 
repetições devemos ter até que o laço termine  */

// let i = 0;  // cria a variável
// 
// while (i <= 10) { // Checa a condição, entra no bloco
//     console.log(i); // Executa a ação
//     i++; // Atualiza a variável de controle
// }
//    --------------------------------------------------------------------

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
} 

const min = 1;
const max = 50;
let rand = random(min, max);
// agora suponho que eu quero achar um número aléatório, 10, por exemplo

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

// o do while é faça e depois cheque a condição
 console.log('##########################');
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);