/* funcoes imediatas - IIFE Imediatly invoked function expression

Quando estamos trabalhando no brewser, queremos fugir do escopo global, por
poderem ser alteradas, por efeitos de bibliotecas, e a poluição dela com
funcoes, variáveis e etc. Como fugit do escopo global?
*/

function qualquerCoisa() { // essa função toca no escopo global. 
   console.log(11123455);  // QUeremos uma função sem nome
}
qualquerCoisa();
// Queremos uma função sem nome. Para isso. cria uma função anonima dentro de parenteses.

(function(idade, peso, altura) {

    const sobrenome = 'Ferreira';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Rogerio'));
    }

    console.log(123456);
    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);// aqui chama eunção e ja da os parametros idade peso e altura

// Tudo que está dentro está executando protegido das variáveis globais. Pelo parenteses 

// estrutura básica
(function(){

})();