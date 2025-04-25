//Tabuada
const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Digite o número para ver a tabuada: '));

if (isNaN(numero)) {
    console.log('Valor inválido. Por favor, digite um número.');
} else {
    console.log(`Tabuada do ${numero}:`);
    let i = 1;
    while (i <= 10) {
        console.log(`${numero} x ${i} = ${numero * i}`);
        i++;
    }
}
