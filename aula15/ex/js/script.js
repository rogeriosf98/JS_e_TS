let numero = Number(prompt('Digite um número')); // number para converter o tipo de dado
// numero = Number(numero); outra forma de converter o numero digitado para tipo number, para as contas funcionarem. 

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = ''; // tem que zerar o texto, para nao sobrescrever e dar erro no código.

texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5} /p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)} /p>`;
texto.innerHTML += `<p>Arredondando para Baixo: ${Math.floor(numero)} /p>`;
texto.innerHTML += `<p>Arredondando para Cima: ${Math.ceil(numero)} /p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)} /p>`;


