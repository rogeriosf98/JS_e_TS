// try catch e throw
try {
console.log(naoExisto); // captura o erro
} catch(err) {
    console.log('naoExisto não existe');
    console.log(err); // o console de erro vai para a variável
}

console.log('###################');
console.log('Throw - lançar o erro: Soma de valores que não são numéricos.');
// checamos se x e x são números, se não da um erro
function soma(x, y) {
  if (typeof x !== 'number' || 
     typeof y !== 'number') {
     throw new Error('x e y precisam ser números'); // new error função construtora do js
  }                                              // ela lança o erro com todos parametros

  return x + y;
}
// assim, com throw, lançamos, e agora, com try, podemos tratar o erro acima
  try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
  } catch(error) {
    console.log(error);
  }

  // Mas lembrando, nunca lançe erro par o usuário. Lançe alerta ou algo assim, NUNCA Erro