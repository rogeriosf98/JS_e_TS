// IEEE 754-2008 - padrão do js para numeros e casas decimais
let num1 = 0.7; // number
let num2 = 0.1; // number

num1 = (num1 * 100) + (num2 * 100) / 100; // 0.8
num1 = (num1 * 100) + (num2 * 100) / 100; // 0.9
num1 = (num1 * 100) + (num2 * 100) / 100; // 1.0


console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2); Assim exibe num1 como string
// num1 = num1.toString(); Mas somente assim para converter o tipo de dado para string
// console.log(num1.toString(2)); assim temos a representação binária do num1
// console.log(num1.toFixed(2)); assim arredonda o número e escolhe as casas decimais
// console.log(Number.isInteger(num1)); aqui se tem um método para vericiação de true or false se o numer oé inteiro.
// console.log(Number.isNaN(temp)); 

