// funcoes de callback. São executadas quando uma ação ocorre
//pela diferença do tempo para execução, muda a ordem no output

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
console.log(rand());

// Mas como fazer agora para exibir na ordem, sendo que é de forma randomica? 
// Atribuindo callback no atributo
// o settimeout seria para simular atrasos possivels na web
function f1(callback) {
    setTimeout(function() {
    console.log('f1');
    if (callback) callback();  // se houver a função callback, executa
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
    console.log('f2');
    if (callback) callback();  // se houver a função callback, executa
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
    console.log('f3');
    if (callback) callback();  // se houver a função callback, executa
    }, rand());
}
// en vez de chamar cada função em ordem, chama uma função dentro da outra, callback.
//  f1(function() {
//      f2(function() {
//          f3(function(){
//              console.log('Olá, mundo!');
//          });
//      });
//  });
// Mas podemos melhorar essa situação

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo!');
}

/* 
Isso são funções de callback, que e
*/