/*
Escreva um função que recebe um número e retorne o seguinte:
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número não é divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número
Use a função com números de 0 a 100
*/

function fizzBuzz(numero) {

    // Verifica se o valor é número válido
    if (typeof numero !== 'number' || Number.isNaN(numero)) {
        return 'Numero inválido';}
    
    // verifica se é divisível por 3 e por 5
    // Para saber se é divisível, é pelo resto da divisão
    if (numero % 3 === 0 && numero % 5 === 0) {
        return 'FizzBuzz';
    }

    // Verifica se é divisível por 3
    if (numero % 3 === 0) {
        return 'Fizz';
    }

    // Verifica se é divisível por 5
    if (numero % 5 === 0) {
        return 'Buzz';
    }

    // Se nenhuma condição for atendida, retorna o próprio número
    return numero;
}
    // Teste a funçãp com números de 0 a 100
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}
