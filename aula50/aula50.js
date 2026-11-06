/*Parâmetros da função
variável arguments */

function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


function funcaoDois(a, b) {
    a = a || 0;  // caso não tenha nenhum de entrada, assuma zero; 
    b = b || 0;
    console.log(a + b);
}
funcaoDois('', 2);

// desestruturação de objeto na função...

function funcaoTres( { nome, sobrenome, idade } ) {
    console.log(nome, sobrenome, idade);
}
funcaoTres( { 
    nome: 'Rogério', 
    sobrenome: 'Ferreira', 
    idade: 20} 
); 
// abaixo como ficaria sem desconstrução...
function funcaoTres(usuario) {
    console.log(usuario.nome);
    console.log(usuario.sobrenome);
    console.log(usuario.idade);
}

funcaoTres({
    nome: 'Rogério',
    sobrenome: 'Ferreira',
    idade: 20
});

// perceba que náo é mecessário a criação parametro usuário, já desconstroi ele com os argumentos,
// que viram os parâmetros do objeto. 

// agora desestruturação em array

function funcaoQuatro ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcaoQuatro(['Rogério Silva', 'Ferreira', 27]);

// no operador envia algum operador matemático ( + - * /)
// no acumulador mando um valor inicial para fazer uma acumulação
// numeros com rest operator (...), ou seja, todo o resto depois do acumulador, vai para dentro do array
// no terminal fica visivel

function conta(operador, acumulador, ...numeros) { // rest sempre no ultimo parametro, se nao da erro
    for(let numero of numeros) { // let of, voce quer os valores de numeros, numero de numeros
      if (operador === '+') acumulador += numero;
      if (operador === '-') acumulador -= numero;
      if (operador === '/') acumulador /= numero;
      if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50); // só alterar o operador, que muda a conta 