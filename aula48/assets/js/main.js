// Primeiramente vamos selecionar os elementos esejados no html;
// Após isso, capturar o evento de clique, no botão (Adicionar nova tarefa.
const inputTarefa = document.querySelector('.input-tarefa'); // campo de texto
const btnTarefa = document.querySelector('.btn-tarefa'); // Botão adicionar
const tarefas = document.querySelector('.tarefas'); // ul 
/* Para testar se capturou o clique, de um console.log(inputTarefa.value);, e veja 
no console do navegador. */

// *3
function criaLi() {
    const li = document.createElement('li');
    return li; // devolve o elemento criado, permitindo outra função trabalhar com ele.
}

// *4
inputTarefa.addEventListener('keypress', function(e) { // enviando e capturando evento com Enter
    if (e.keyCode === 13) {
       if (!inputTarefa.value) return; // isso é para não contar se estiver enviando 'vazio';
    criaTarefa(inputTarefa.value);
    }
});

// *5  - Limpar o imput apos criar uma tarefa, e adiciona ela na função criaTarefa (2)
function limpaInput() {
    inputTarefa.value = ' ';
    inputTarefa.focus();
}

// *6
function criaBotaoApagar(li) {
    li.innerHTML += ''; // adiciona espaço no botao apagar
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    // botaoApaagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar'); // criou a class 'apagar' no botaoApagar
    li.appendChild(botaoApagar);
}

// *2
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput() // *5 coloca essa função no criar tarefa, no final.
    criaBotaoApagar(li); // 6*
}

// *1
btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return; // isso é para não contar se estiver enviando 'vazio';
    criaTarefa(inputTarefa.value);
});

