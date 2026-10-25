/**
 Escreva uma função chamada ePaisagem, que recebe dois argumentos,
 largura e altura de uma imagem (number). Retorne true se a imagem
 estiver no modo paisagem. Consequentemente, retorne falso 
 no modo retrato.
 */

 function ePaisagem(largura, altura) {
    if (largura > altura) { 
        return true;
    } else {
        return false;
    }
 }

 console.log(ePaisagem(1800, 500));