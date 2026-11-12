/* Vamos supor num sistema de cadastro de produtos, no caso de celulares. E um problema é que 
sempre que precisa cadastrar outro no sistema, mas sempre precisa copiar e colar várias vezes,
uma vez para cada produto cadastrado.
    Para resolver isso temos as factory functions. Ela vai encapsular essa informação dentro de um
método que cria objetos.  */

// Primeiro temos esse objeto que cria oa celular no sistema
// Devemos criar uma função e colocar esse objeto dentro da função
const celular = {
        marcaCelular: 'ASUS',
        tamanhoTela: {
            vertical: 155,
            horizontal: 75
        },
        capacidadeBateria: 5000,
        ligar: function() {
            console.log('Fazendo ligação...')
        }
    }
// que fica dessa seguinte forma: 
function criarCelular() {
    const celular = {
        marcaCelular: 'ASUS',
        tamanhoTela: {
            vertical: 155,
            horizontal: 75
        },
        capacidadeBateria: 5000,
        ligar: function() {
            console.log('Fazendo ligação...')
        }
    }
    return celular;  // mas em vez de retorna o celular, podemos colocar isso tudo no return...
}

// que fica da seguinte forma: 
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) { // além disso, devemos colocar os parametros podermos definir os atributos
    return {
        marcaCelular: marcaCelular,
        tamanhoTela: tamanhoTela,
        capacidadeBateria: capacidadeBateria,
        ligar: function() {
            console.log('Fazendo ligação...')
        }
    }
 
}
// Para simplificar mais, podemos fazer dessa forma:
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) { 
    return {
        marcaCelular,  // Quando a chave e o valor tem o mesmo nome valor, pode deixar um só.
        tamanhoTela,
        capacidadeBateria,
        ligar() {  // pode-se remover function também 
            console.log('Fazendo ligação...')
        }
    }
}

const celular1 = criarCelular('Xiomi', 5.5, 5500);
console.log(celular1);

// O método facilita a criação denovos celulares, bastando somente criar a constante com o novo produto
// facilita a manutenção 