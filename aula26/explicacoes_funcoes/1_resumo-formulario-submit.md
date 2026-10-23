# Formulário e evento `submit`

## Código

``` javascript
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('evento prevenido');
});
```
## Por que fazer isso?

Esse código permite que o JavaScript **detecte quando o formulário é
enviado e controle o que acontecerá depois**, em vez de deixar somente o
comportamento padrão do navegador acontecer.

## Explicação linha por linha

``` javascript
const form = document.querySelector('#formulario');
```

Procura no HTML o elemento com `id="formulario"` e guarda sua referência
na constante `form`.

``` javascript
form.addEventListener('submit', function (e) {
```

Adiciona um ouvinte ao formulário. Quando ocorrer o evento `submit`, a
função será executada. O parâmetro `e` recebe o objeto que representa
esse evento.

``` javascript
e.preventDefault();
```

Impede o comportamento padrão do `submit`, permitindo que o JavaScript
controle o envio do formulário.

``` javascript
console.log('evento prevenido');
```

Mostra uma mensagem no console para confirmar que a função foi
executada.

``` javascript
});
```

Fecha a função e a chamada do `addEventListener()`.

### Fluxo

`formulário enviado → submit → função executada → comportamento padrão impedido → restante do código executado`
