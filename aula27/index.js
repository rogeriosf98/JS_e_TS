// ? :
/* Isso pode encurtar muito seu código em partes que precisa
só de um if else.

Imagine um fórum onde usuários
*/


const pontuacaoUsuario = 1050;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

// Toda essa linha de código acima, é igual esse if else abaixo.
 
// if (pontuacaoUsuario >= 1000) {
//     console.log('usuário VIP');
// } else {
//     console.log('Usuário normal')
// }

const corUsuario = null;
const corPadrao = corUsuario || 'Verde';
console.log(nivelUsuario, corPadrao);

