// Função Construtora -> retorna objetos
// factory function -> objetos
// Construtora -> criaPessoa -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // atributos PRIVADOS - não estão disponíveis fora do corpo do objeto
    const ID = 123456; // por ser const e nao this, não pode acessar por fora do obj

    const metodoInterno = function() { // 

    };
    // atributos ou métodos públicos, acessados por notação de ponto
    this.nome = nome;      //O this representa o objeto que está sendo construído durante a execução 
    this.sobrenome = sobrenome; // da função. Quando utilizamos new, o JavaScript cria um novo 
                         // objeto e faz com que o this faça referência a ele.

    this.metodo = function() { //quando uma função é atribuída a uma propriedade de um objeto, 
        console.log(this.nome + ' : sou um método'); // podemos chamá-la de método.
    };
}                            
   
// ou seja, this nome é criar uma propriedade chamada nome no objeto e atribui o valor recebido em nome.
const p1 = new Pessoa('Rogerio', 'Ferreira');
const p2 = new Pessoa('Ana', 'Carolina');

console.log(p1.nome);
console.log(p1);
console.log(p2);



/* Primeiro estamos declarando uma função chamada PEssoa, que recebe dois Parâmetros
(nome e sobrenome).

O this é uma palavra-chave que faz referência ao objeto associado à execução da função.
Nesse caso, estamos dizendo:
This.nome = nome: crie uma propriedade chamada nome, no objeto e atribua a ela o valor recebido
pelo parametro nome. this.nome = Pessoa.nome
E o mesmo com this.sobrenome

this.nome  -  Propriedade do objeto
nome       -  Parâmetro recebido pela função
this.sobrenome  -  Propriedade do objeto
sobrenome       -  Parâmetro recebido pela função

a principal característica de uma Constructor Function: utilizamos 
a palavra-chave new para chamá-la.


O que o new faz?
Quando utilizamos new Pessoa('João', 'Silva'), o JavaScript realiza algumas operações:
1. Cria um novo objeto vazio.
2. Faz o this apontar para esse novo objeto.
3. Executa o código da função, adicionando as propriedades ao objeto.
4. Retorna automaticamente esse objeto, atribuindo-o à variável pessoa1.

Ou seja, não precisamos escrever return para devolver o objeto 
quando utilizamos essa construção normalmente.
*/