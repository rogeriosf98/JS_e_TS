/*
Exercício 6 — Função com parâmetro padrão
Agora vamos trabalhar com parâmetros padrão (default parameters).

Crie uma função chamada saudacao que:
1. Receba dois parâmetros: nome e periodo.
2. O parâmetro periodo deve ter o valor padrão "Bom dia".
3. Retorne uma mensagem utilizando os dois parâmetros.
*/

function saudacao(nome, periodo = 'Bom dia ') {
    return periodo + nome + '!';
}

console.log(saudacao('Rogerio'));


// nesse caso, se atualizar o parametro, ele é substituido

console.log(saudacao('Rogerio', 'Boa noite '));

// podemos observar no output