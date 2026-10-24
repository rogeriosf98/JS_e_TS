 // Função construtura
// const treHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + treHoras + umDia);

//01/01/1970 - Timestamp unix ou epoca unix

// const data = new Date(2019, 3, 20, 15, 14, 27, 1000); //Ano mes dia hr min...

// const data = new Date('2019-04-20 20:20:59');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth()); // Mês comça do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // e é domingo, . é sábado
// console.log(data.toString());

// Agora criar uma função que formata datas

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);