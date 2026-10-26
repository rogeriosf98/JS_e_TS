try {  // É executado quando não há erros
    console.log( 'Abri um arquivo'); 
    console.log('Manupulei o arquivo e gerou erro');
    console.log('fechei o arquivo')
} catch (e) {  // É executado quando há erros
    console.log('Tratando o erro');
} finally { // Sempre
    
}