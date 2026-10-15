/*  const nome1 = 'Rogerio';
const sobrenome1 = 'Ferreira';
const idade1 = 27;

const nome2 = 'Ana Carolina';
const sobrenome2 = 'Reis';
const idade2 = 26;

Podemos observar que, caso fosse necessário ter mais pessoas nessas listas com informações básicas, teríamos muito trabalho 
para escrever toda a sequencia de códigos iguais aos dois exemplos acima. Para isso, podemos fazer um objeto: 
*/

/*
const pessoa1 = {
  nome: 'Rogerio',
  sobrenome: 'Ferreira',
  idade: 27
};

console.log(pessoa1.nome);

Nesse caso, vemos que precisamos mudar agora, copiando e alterando para pessoa2, mantendo a estrutura de nome, sobrenome e idade. 
Podemos notar também que, ainda da um trabalho  significadivo para um cenário hipotético de um volume grande de informações seguindo
essa idéia acima.

Para isso, podemos criar uma função que crie esses objetos.
*/

function criaPessoa (nome, sobrenome, idade) {
    return {                                    
        nome, sobrenome, idade                       // esse tipo de função é uma factory, ela fabrica objetos
        
    };
}

const pessoa1 = criaPessoa('Rogério', 'Ferreira', 27);
const pessoa2 = criaPessoa('Ana Carolina', 'Reis', 26);      // Desse modo, vemos como fica mais simples criar essas pessoas
const pessoa3 = criaPessoa('Roberto', 'Silva', 54);
const pessoa4 = criaPessoa('Rodrigo', 'Moreira', 15);
const pessoa5 = criaPessoa('Roberval', 'Assis', 88);

console.log(pessoa1.nome, pessoa2.nome);