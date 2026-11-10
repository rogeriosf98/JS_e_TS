/*Exercício 3 — Par ou ímpar
Criar uma função chamada verificarPar que receba um número e retorne:
- "Par" se o número for divisível por 2.
- "Ímpar" caso contrário. */

function verificarPar (numero) {
    if (numero % 2 === 0) {
        return 'Par';
    } else {
        return 'Impar';
    };
}

console.log(verificarPar(3));