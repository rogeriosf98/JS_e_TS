/*
Exercício 7 — Média de números com arguments
Crie uma função chamada calcularMedia que:
1. Receba três ou mais números.
2. Utilize arguments para acessar os valores recebidos.
3. Calcule a média dos números.
4. Retorne o resultado.
*/

function calcularMedia() {
    let soma = 0; // acumula os numeros recebidos

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i]; // soma = soma + arguments[i] - armazena a soma
    }

    return soma / arguments.length;
}

console.log(calcularMedia(10, 8, 15));

/* arguments é um objeto disponivel dentro de funcoes tradicionais que 
permite acessar os argumentos recebidos mesmo quando não declaramos
*/