// Queremos prevenir que o formulários seja enviado, para não atualizar a página.
// Seria prevenir o comportamento padrão do navegador.
// function meuEscopo () {        // colocando comandos dentro de uma função. retiramos esses códigos do comando global (navegador)
//  const form = document.querySelector('.form'); // seleciona pelo css (.classe)

//  form.onsubmit = function (evento) {
//    evento.preventDefault();
//    alert(1);
//    console.log('foi enviado');
//  };

// Essa é uma maneira de cancelar a atualização.

function meuEscopo () { 
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  function recebeEventoForm (evento) {
    evento.preventDefault ();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    });

    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}` +
    `${peso.value} ${altura.value}</p>`;
};

form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
