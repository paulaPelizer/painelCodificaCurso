//Exercício 3: verificar é bissexto
const prompt = require('prompt-sync')();

const ano = parseInt(prompt('Digite um ano: '));

if (isNaN(ano)) {
    console.log('Valor inválido. Por favor, digite um ano.');
} else if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log(ano + ' é um ano bissexto.');
} else {
    console.log(ano + ' não é um ano bissexto.');
}
