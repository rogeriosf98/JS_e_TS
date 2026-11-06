// return
// Retorna uma valor
// Termina a função

function soma(a, b) {
    return a + b;
}
console.log(soma(2, 5));
// a função abaixo é inutil, pois só exibe. A de cima soma e depois exibe. sacou?
function soma2(a, b) {
    console.log(a + b);
}

soma2(5, 2)

// Por exemplo, essa função executa uma ação, mas não precisa de valor para ser retornado.
// Depende do contexto que está sendo utulizada.

/////////////////////////////////////
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Rogério', 'Ferreira');
const p2 = {
    nome:'Lucas', 
    sobrenome: 'Silva'};

console.log(typeof p1);
console.log(p2);

//

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + '' + resto;
    }
    
    return falaResto;
}

const olaMundo = falaFrase('Olá');

console.log(olaMundo(' mundo!'));
