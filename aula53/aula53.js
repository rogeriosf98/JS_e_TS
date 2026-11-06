// Closures  é a habilidade da função de acessar o seu escopo lexico

function retornaFuncao() {
    const nome = 'Rogerio'; // closure
    return function () {   // funcão anonima
        return nome;
    };
}
// no caso, a função recebe uma função anonima
const funcao = retornaFuncao();
console.log(funcao);

// agora observe o caso abaixo:

function retornaFuncao(nome) { // nome 1 closure
    return function () {   
        return nome; // nome 2 closure
    };
}

const funcao2 = retornaFuncao('Rogerio');
const funcao3 = retornaFuncao('Lucas');
console.log(funcao2);
console.dir(funcao3);

/*  no caso acima, ao colocar o nome como parametro e o outro no return, 
da segunda função, fechamos dous closures. Cada um referente ao seu. 
Assim, alteramos o escopo lexico. Cada funcao com seu closure
*/