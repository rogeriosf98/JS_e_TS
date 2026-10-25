// Primeiro vamos selecionar a div do html
// const paragrafos = document.querySelector('.paragrafos');  COMENTADO PARA CONTINUAR NO EXERCICIO ABAIXO
/*
Uma questão é que o query selector, ele é ótimo noesse caso onde só há uma div, pois
ele seleciona somente um item, ou o primeiro item que deseja selecionar. se fosse 
os parágrafos, que são 4, apareceria somente o primeiro. Assim, devemos utilizar
outro meio para fazer a seleção de parágrafos, nesse caso, slecionando todos.

e agora selecionar os parágrafos dentro da div.
*/
// const ps = paragrafos.querySelectorAll('p');   COMENTADO PARA CONTINUAR NO EXERCICIO ABAIXO

/*
No console f12, no navegador, podemos ver que ao requerir ps, é retornado uma 
Nodelist. [p, p, p, p].   -  NÃO É ARRAY, mas se comporta de forma similar
*/

// for (let p of ps) { 
//     console.log(p);     COMENTADO PARA CONTINUAR NO EXERCICIO ABAIXO
// }

/*
EXERCICIO  -  Agora, como pegar a cor de background da página 
e colocar de background no parágrafo?

1) Devemos pegar os estilos computáveis do css no body
*/

const paragrafos = document.querySelector('.paragrafos'); // seleciona div paragrafos
const ps = paragrafos.querySelectorAll('p'); // procura os p dentro da div

const estilosBody = window.getComputedStyle(document.body); // pega os estilos calculados no body
const backgroundColorBody = estilosBody.backgroundColor; // Pega somente background color

console.log(backgroundColorBody);

for (let p of ps) {  // Para cada elemento 'p' que existe dentro de 'ps', faça...
    p.style.backgroundColor = backgroundColorBody; // faça isso Mude a background color de 'p', para a backgroundColor do Body
    p.style.color = 'white';  // mudei a cor da letra para branco
}                                             

/*
Caso quiser somente alterar a core da letra. é só declara ra variável para paragrafo 'ps'
const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

for (let p of ps) { Para cada elemento 'p' que existe dentro de 'ps', faça...
    p.stule.color = "white";
}
*/

