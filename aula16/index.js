// indice    012345678910
//  const nome= 'Luiz Otávio';

//  indice        0        1       2          3        4
const alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo

// console.log(typeof alunos);  ARRAY É UM OBJETO, MAS INDEXADO AUTOMATICAMENTE.
// console.log(alunos instanceof Array); PARA TER CERTEZA QUE É UMA INSTANCIA DE ARRAY (QUE É UM ARRAY). INSTANCEOF ARRAY

// alunos.push('Luiza');
// alunos.push('Eduardo');

// console.log(alunos.slice(0, -2)); MESMO FATIAMENTO DE STRINGS, DO 0 AO 3, CORTA ATÉ O DOIS. 0 A -2, ELIMINA OS DOIS ULTIMOS.

// console.log(alunos[50]); ASSIM DA UNDEFINED

// delete alunos[1];  DELETA MAS SEL ALTERAR O INDICE, FICA 'empty item'.

// alunos.shift(); REMOVE DO INICIO DO ARRAY
// const removido = alunos.shift(); ADICIONA OS REMOVIDOS NUMA CONST E PODE EXIBIR DEPOIS

// alunos.pop(); REMOVE ELEMENTO DO FINAL DO ARRAY
// const removido = alunos.pop(); ASSIM VOCÊ ADICIONA OS ELEMENTOS REMOVIDOS EM UMA VARIÁVEL. dEPOIS PODE EXIBIR REMOVIDOS E RESTANTES

// alunos.unshift('Ricardo'); ADICIONA NO COMEÇO DO ARRAY


// alunos.push('Pingo');  PARA ADICIONAR ELEMENTO NO ARRAY NO FINAL DIRETAMENTE
// alunos.push('Wesley'); 


// alunos[alunos.length] = 'Mario'; ADICIONA ELEMENTO NO ARRAY, LUXANDO PELO SEU TAMANHO.
// alunos[alunos.length] = 'Rodrigo';
// alunos[alunos.length] = 'Nicolas';

// alunos[0] = 'Rogerio'; ALTERA O ELEMENTO DO ARRAY
// alunos[3] = 'Carol'; CRIA ELEMENTO NO ARRAY, INDICE INICIAL ATÉ 2. ASSIM, CRIA INDICE 3


// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[1]);
