// alert('Com a nossa mensagem');
// window.confirm('Deseja apagar?'); // retornar boolean - true or false
// window.prompt('Digite ai');

// let confirma = confirm('Realmente deseja apagar?');

// let num1 = prompt('Digite um número'); // no console, ao verificar num1, veremos que
                                       // num = "500" - recebeu o valor digitado pelo usuário.
                                       // Esse valor fica salvo na memoria. no caso, como STRING.

// Ou seja, tudo que o usuário digitar na função Prompt, o JS lê como STRING!!!
// Portanto, num1 + num2 = 50010. - Deve-se converter para number.

// num1 = parsefloar(num1);
// num1 = 500 - sem aspas, indica number.

// o que for retornado, você vai fazer alguma conta, de +, que pode dar problema, visto a conversa~ode numeros, pode dar concatenação.

// const resultado = num1 + num2/
// alert ('Oresultado foi ' = asasdasd);

let num1 = prompt('Digite um número');
let num2 = prompt('Digite outro número');

num1 = Number(num1);
num2 = Number(num2);

alert(`O resultado da soma foi ${num1 + num2}`);