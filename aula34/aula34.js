// Estruturas de rpetição FOR  -  Clássico

// for (let i = 200; i <= 500; i++) {
//     console.log(i);
// }

// par ou impar
// for (let i = 0; i <= 10; i++) {
//     const par = i % 2 === 0 ? 'par' : 'impar'; // com estrutura ternária
//     console.log(i, par);                   // realmente mais simples que um if no meio
// }

// Percorrer um array com for.
//                   1          2         3       4        5         6         7
const  frutas = ['banana', 'morango', 'limão', 'maçã', 'abacaxi', 'manga', 'tomate', ];

for (let i = 0; i < frutas.length; i++) {
//  console.log(frutas);
    console.log(`Índice ${i}`, frutas[i]);
}