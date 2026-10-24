// Atribuição via desestruturação (objetos)
const pessoa = {
    nome: 'Rogério',
    sobrenome: 'Ferreira',
    idade: 30,
    endereco: {   // objeto dentro de um objeto
        rua: 'Avenida Armando Farjado',
        numero: 320
    }
};

// console.log(pessoa.nome); -  assim, para selecionar algum item do objeto

// E se eu quiser jogar isso em uma variável?

//  const nome = pessoa.nome;  é uma atribuição normal
//  console.log(nome);

// E agora a Atribuição por desestruturação:

const { nome = 'Não existe', sobrenome, idade } = pessoa; // caso não tenha nome, será
console.log(nome, sobrenome); // Não existe. Isso é para não dar undefined caso não haja.

// dessa forma você extrai do objeto pessoa o nome, e já deixa ela em uma variável