// Escreva uma função que recebe 2 numeros e retorne o maior deles
function maiorNumero(x, y) {
    if (x > y) {  // você pode apagar o else.
    return x;     // o if em uma condição, pode remover as chaves abertas
    } else {      // por fim, 
    return y;
    }
}
 console.log(maiorNumero(1, 2));

 console.log('###################')
 console.log('Dessa forma, fica assim até o momento:')

 function max(x, y) {
    if (x > y) return x;  // Mas para simplificar mais, podemos usar condição ternária
    return y;             // Checa uma condição, se não for um, é o outro
 }

 console.log(max(5, 10))

 console.log('##################')
 console.log('Dessa forma, em condição ternária, fica assim:')

  function maximo(x, y) {
    return x > y ? x : y; // Se X > y , retorne x, se não, y.         
 }

 console.log(maximo(10, 20));;

 console.log('#################');
 console.log('Ainda pode simplificar mais fazendo com arrow function. Fica dessa forma:');

const max2 = (x, y) => {
    return x > y ? x : y;
}

console.log(max2(50, 100));

console.log('################');
console.log('Caso queir simplifica mais podemos remover o return e chaver, pois é uma condição na função');

const max13 = (x, y) => x > y ? x : y;
console.log(max13(13, 12));