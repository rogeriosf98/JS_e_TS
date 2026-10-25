const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser'}, // 1
    {tag: 'div', texto: 'Frase 2'}, // 2
    {tag: 'section', texto: 'Frase 3'}, // 3           1) criou o container
    {tag: 'footer', texto: 'Frase 4'}, // 4
];

const container = document.querySelector('.container');
// agora devemos criar o elemento (div) onde vão os elementos acima
const div = document.createElement('div');
// criar a div. cria as tags e joga dentro das divs
for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i]; // associação via desestruturação
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto); // como não tem o html, usa innertext

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);


/* 

Qual é o objetivo?
Seu programa recebe um array contendo quatro objetos. Cada objeto informa 
duas propriedades:
- tag: qual elemento HTML será criado.
- texto: qual conteúdo será inserido nesse elemento.
Em seguida, o JavaScript percorre esse array com um for, cria os elementos 
HTML correspondentes e os adiciona à página.

Temos um array com 4 objetos, e cada objeto representa uma instrução para criar um
elemento HTML

*/