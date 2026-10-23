# Função `setResultado()`

## Código

``` javascript
function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = msg;
}
```

## Por que fazer isso?

Essa função foi criada para **receber uma informação e exibi-la em um
elemento da página**. Assim, sempre que for necessário mostrar um
resultado, podemos chamar `setResultado()` e passar o conteúdo desejado.

## Explicação linha por linha

``` javascript
function setResultado(msg) {
```

Cria a função `setResultado`. O parâmetro `msg` recebe o conteúdo que
queremos mostrar.

``` javascript
const resultado = document.querySelector('#resultado');
```

Procura no HTML o elemento com `id="resultado"` e guarda sua referência
na constante `resultado`.

``` javascript
resultado.innerHTML = msg;
```

Altera o conteúdo interno do elemento `#resultado`, colocando nele o
valor recebido em `msg`.

``` javascript
}
```

Finaliza a função.

### Fluxo

`setResultado('Olá!') → msg recebe 'Olá!' → encontra #resultado → innerHTML recebe msg → conteúdo aparece na página`
