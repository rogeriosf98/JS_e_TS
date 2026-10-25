/*
Break e continue  -  Funcionam para todos os tipo de laços
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// e se que quiser pular o numero 2, como faço?
// o 'continue' vai para a próximo iteração do laço
for (let numero of numeros) {
    if (numero === 2 || numero === 5) { // faz uma condição, onde continua 
        continue;        // para o próximo laço
    }

    if (numero === 7) {
        break;
    }

    console.log(numero);
}