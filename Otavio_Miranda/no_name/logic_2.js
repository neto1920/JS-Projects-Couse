/*
    Escreva uma função chamada ePaisagem que recebe dois argumentos
    largura e altura de uma imagem (number)
    Retorne true se a imagem estiver no modo paisagem
*/

const ePaisagem = (altura, largura) => Number(altura >= largura) ? 'Retrato' : 'Paisagem';


console.log(ePaisagem(5, 25))