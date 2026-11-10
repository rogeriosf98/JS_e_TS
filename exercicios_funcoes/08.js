/*
Exercício 8 — Encontrar o maior número
Crie uma função chamada encontrarMaior que:
1. Não receba parâmetros declarados.
2. Utilize arguments para acessar os números recebidos.
3. Percorra os argumentos utilizando um for.
4. Identifique o maior número.
5. Retorne esse número.
*/

function encontrarMaior() { // Agora, o for percorre os argumentos. A cada repetição, o if verifica:
    let maior = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > maior) {
            maior = arguments[i];
        }
    }

    return maior;
}

console.log(encontrarMaior(10, 25, 8, 40));

/*
Guarde esta ideia: o for percorre os valores; o if verifica 
se o valor atual é maior; e a variável maior guarda o maior 
número encontrado até aquele momento.
*/