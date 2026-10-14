const produtosFemininos = ['brinco', 'brincoArgola', 'brincoPontoLuz', 'trioArgola', 
    'correnteVeneziana','gargantilha', 'choker', 'colar', 'colarPersonalizado', 
    'relicario', 'pingente', 'anelSolitario', 'aliança','pulseiraElo', 'outrosFeminino'];

const produtosMasculinos = ['correnteEloPortugues', 'correnteGourmet', 'CorrenteCubana', 
    'Escapulario', 'pingenteMinimalista', 'anel', 'anelretangular', 'braceleteMinimalista', 
    'correnteFina', 'outrosMasculino'];

produtosMasculinos[0] = 'correnteElo';  // Modificar produto pelo índice 0.
produtosMasculinos[4] = 'pingenteMinimal'; // Modificar produto pelo índice 4.

produtosMasculinos.push('aliançaCompromissoPrata'); // INDICE 11
produtosMasculinos.push('aliançaCompromissoOuro'); // INDICE 12

// Caso Algum produto esgote, mas querendo manter seu local no array, podemos deletar, mantendo empty item.
// A loja teve estoque novo de alianças para presente, mas os aneis masculinos acabaram.

delete produtosMasculinos[5]; // deletei o anel no array, mas mantive seu indice, podendo ser observado no console.log

// console.log(produtosFemininos);
console.log(produtosMasculinos);

console.log(produtosMasculinos.length);

