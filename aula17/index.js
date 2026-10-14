// function soma(x, y) {  1 - Quero criar uma finção chamada soma, e ela precisa receber dois valores (x, y).
//     const resultado = x + y;   3 - pega os valroes recebidos e faz o processamento.
//     return resultado;  4 - Termine a função e devolva o valor armazenado em resultado.
// }

// console.log(soma(2, 2));  2 - Chama a função passando 2 e 2 como argumentos: x = 2, y =2.


// ----------------------------------------------


// Nesse caso, atribuimos x = 1, e y = 2, como valores, caso não seja inserido nenhum argumento, ou só um dos dois. Assim, o Js atribui o valor ou valores restantes como = 1.

// function soma (x =1, y =2) { 
//    const resultado = x + y;
//    return resultado;
// } 

// const resultado = soma (4, 2);
// console.log(resoltado);



// -----------------------------------------------

// Agora vamos ver a criação de uma função dentro de uma variável. Função anonima.
// como é uma variável, precisa de ponto e virgula no final. 
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));


// ----------------------------------------------

// atualmente existe uma forma mais moderna de utilizar afunction que é por meio de arrow function =>

// basicamente remove o nome function, e depois coloca o simbolo =>.
const raizz = (n) => {
    return n ** 0.5;
};

console.log(raizz(9));
console.log(raizz(16));
console.log(raizz(25));

// além disso, exite uma forma mais simplificada ainda

const raizzz = n => n ** 0.5;  // você pode remover {}, os parenteses do (n), remover o return. Isso caso haja um parametro em um function simplificada.
;

console.log(raizz(9));
console.log(raizz(16));
console.log(raizz(25));








