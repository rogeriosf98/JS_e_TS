// Atribuição via desestruturação (arrays)
// let a = 'A'; // B 
// let b = 'B'; // C
// let c = 'C'; // A
// essa é a atribuição por desestruturação
// o [a, b, c] é a desestruturação. Cria as variáveis a, b, c e reatribui o valor
// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);
//                0     1     2     3     4     5     6     7     8   - indice
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const primeiroNumero = numeros[0];
// console.log(primeiroNumero);
const [um, dois, tres, ...resto] = numeros; // ... mostra o restante rest operator
console.log(um, dois, tres);
console.log(resto);
// ...rest, ...spread. Um para o resto, outro para espalhamento
