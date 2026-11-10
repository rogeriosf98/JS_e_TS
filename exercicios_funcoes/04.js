/*Exercício 4 — Maior número.
Crie uma função chamada maiorNumero que receba dois números como parâmetros.

A função deverá:
- Retornar o maior número entre os dois.
- Se os números forem iguais, retornar "Os números são iguais". */

function maiorNumero(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return 'Os números são iguais';
    };
}

console.log(maiorNumero(5, 5));