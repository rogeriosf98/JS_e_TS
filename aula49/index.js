 // Declaração de função (function hoisting)
 falaOi(); // chamando função
function falaOi() {
    console.log('oi');
}

// First-class objetcs (objetos de primeira classe).
// Function expression - criar uma variável, e jogar um finção dentro dessa variável
const souUmDado = function () {
    console.log('Sou um dado.')
};
souUmDado();  // chamando função

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow(); // chamando função

// Dentro de um objeto

const obj = {
    falar: function() { // você ainda pode remover o a palavra function, caso ache melhor
        console.log('estou falando');
    }
};
obj.falar(); // chamando função