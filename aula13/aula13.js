//     Expressões regulares
let umaString = "Um texto";

console.log(umaString.charAt(4));

console.log(umaString.indexOf('texto'));

console.log(umaString.replace('Um', 'Outra'));

console.log(umaString.slice(2)); //Slice é bem isso mesmo, fatia uma palavra, só indicar o indice(inicio). indice 2, segunda palavras.

console.log(umaString.slice(-3)); // assim, considera o tamanho (length) total da string, - 3. Inicia a partir dela. Total 8, inicia da 5.

console.log(umaString.slice(5)); // seriam a mesma coisa. Veja no terminal