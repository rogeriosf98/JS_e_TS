// string, number, undefined, null, boolean - dados primitivos em JS
const nome = 'Rogerio'; // String - dado primitivo
const nome1 = "Rogerio"; // String
const nome2 = `Rogerio`; // String
const num1 = 10; // number
const num2 = 20.54; // number
let nomeAluno; // undefined = não aponta para local nenhum na memória
let SobrenomeAluno = null; // Nulo -> Não aponta para local nenhum na memória. 
// o null é utilizado apra quando o programador quer desconfigurar uma variável, deixar ela como nula.
// EX: Deixar uma parte de uma site onde o usuário pode escolher a cor de fundo de uma página. Se ele não colocar, você explicita que é nula (Usuário nao escolheu)
// quando o usuário escolhe a cor de fundo, a variável tem valor atribuido, "red", por exemplo
const aprovado = true; // tipo booleano. Imagine um sistema de alunos com uma flag de estar ou não aprovado. Nesse caso, com duas possibilidades de valor, usa-se boolean
// Se está aprovado = true; se não, o aprovado agora é false.

console.log(typeof nome, nome);
// let a = 2;
// let b = a;
// para perceber valroes e referencia, o valor de b aponta para o mesmo local na memoria que a. Em let a = 2; let b = a;, nesse caso cada um tem o seu valor mesmo, e segue a logica de valores independentes.
const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);

