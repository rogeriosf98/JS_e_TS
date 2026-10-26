function mostrarHora() {
    let data = new Date();

    return data.toLocaleString('pt-BR', {
      hour12: false  
    })
}

// function funcaoDoInterval() {
//     console.log(mostrarHora());
// }

// setInterval(funcaoDoInterval, 1000);  -  1000ms = 1s

// e agora podemos fazer isso tudo direto no setInterval

// setInterval(function () { // função anonima
//   console.log(mostrarHora());
// },  1000);

// você pode colocar isso tudo dentro de uma constante
// e como fazer para parar a execução do código? 

const timer = setInterval(function () { // função anonima
  console.log(mostrarHora());
},  1000);

setTimeout(function() {
  clearInterval(timer);
}, 3000);  // parar em 10s

setTimeout(function() {
    console.log('Olá mundo');
}, 5000);