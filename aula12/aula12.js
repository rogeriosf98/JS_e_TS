let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

/*Podemos notar que para a solução do problema proposto, não pode simplesmente declarar que as variáveis
recebem as outras, pois, uma vez o valor de varA = varB, você acaba de "tirar" o valor inicial da varA = 'A'.
Por isso o B C B.

Ao criar uma const varATemp, recebendo varA, basta declarar essa variável temporária no final da resolução.
Essa é uma maneira antiga de resolver.

Outra maneira, mais adequada é:
 */

let varD = 'D'; // E
let varE = 'E'; // F
let varF = 'F'; // D

[varD, varE, varF] = [varE, varF, varD]

console.log(varD, varE, varF);
