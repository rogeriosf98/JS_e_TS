/* Exercício 5 — Conversor de temperatura
Crie uma função chamada celsiusParaFahrenheit que:
1. Receba uma temperatura em Celsius como parâmetro.
2. Converta essa temperatura para Fahrenheit.
3. Retorne o resultado.
A fórmula é:
\[
F = (C \times 1.8) + 32

*/

function celciusParaFahrenheit(temp) {
    return (temp * 1.8) + 32;
}

console.log(celciusParaFahrenheit(30));