/* Primeiramente vamos ter que capturar esses eventos de cliques
nos botões do relógio. Eventos de iniciar, pausar, e zerar */

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', { //formatar a data
        hour12: false, 
        timeZone: 'GMT'  // ajusta o timezone, e vai para meia noite 00
    }); 
}
console.log(criaHoraDosSegundos(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;  // precisamos criar uma variável que mantenha os segundos
let timer; // declarei o timer fora da função para não ficar protegida, e poder usar dnv 
// os segundos se mantem no timer, pois so estamos manipulando os eventos relativos à ela
function iniciaRelogio() {
      timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}
// abaixo, adicionando evento do click para iniciar
iniciar.addEventListener('click', function(event) {
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event) {
  clearInterval(timer);
});

zerar.addEventListener('click', function(event) {
  clearInterval(timer);  
  relogio.innerHTML = '00:00:00';
  segundos = 0; // se não, quando após zerar, e iniciar novamente, começa de onde zerou
});