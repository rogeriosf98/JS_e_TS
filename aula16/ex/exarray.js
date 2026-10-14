const produtosFemininos = [, 'brincoArgola', 'brincoPontoLuz', 'trioArgola', 'brinco', 
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

delete produtosMasculinos[5]; // deletei o anel no array, mas mantive seu indice, podendo ser observado no console.log.

// Foi solicitado a lista dos produtos antes da adesão das alianças. Use Slice 
 
const produtosMasculinosAntigos = produtosMasculinos.slice(0, -2); // assim, cria-se uma constante para atribuir os valores antigos
console.log('Lista antiga de produtos masculinos',produtosMasculinosAntigos)


console.log('Lista nova de produtos masculinos:', produtosMasculinos);

// console.log(produtosMasculinos.length);

// LISTA FEMININA - LISTA DE DEMANDAS

/*  
os Choker acabaram - remova do estoque
Novo produto, tornozeleira. Adicionar no array
Adicionar todos os brincos somente em brinco - sem segurar o indice
Apresentar lista de itens removidos
Apresentar lista atualizada de podutos

Tentar e verificar qual a melhor ordem pra cobrir essa demanda no arrau acima.

- o que eu acho - 
- primeiro, remover choker
- depois adicionar novo produto
- remover categorias de brinco
- criar variavel para guardar esses produtos
- exibir lista de produtos removidos
- exibir lista atualizada do array
*/ 

// delete produtosFemininos[6];

produtosFemininos.push('Tornozeleira');

// delete produtosFemininos[1];
// delete produtosFemininos[2];   SUBSTRITUI TODOS OS DELET, PARA JÁ
// delete produtosFemininos[3];   GUARDAR NA CONST E EXIBIR EM SEGUIDA.

const removidos = [];

removidos.push(produtosFemininos.splice(6, 1)[0]);
removidos.push(produtosFemininos.splice(3, 1)[0]);
removidos.push(produtosFemininos.splice(2, 1)[0]);
removidos.push(produtosFemininos.splice(1, 1)[0]);

console.log('Itens removidos:', removidos);



console.log('Lista atualizada de produtos femininos:', produtosFemininos);



