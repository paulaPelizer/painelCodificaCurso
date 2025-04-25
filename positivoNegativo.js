//Exercício 2: verificar se um número é positivo, negativo ou zero
//Exercício 3: verificar é bissexto
//Exércicio 4: definam faixas etárias para crianças, adolescentes e adultos e com switch apresentem na tela se a pessoa que informou a idade está em uma e qual a faixa etária

const prompt = require('prompt-sync')();

const num1 = parseFloat(prompt('Digite um número: '));

if (isNaN(num1)) {
    console.log('Valor inválido. Por favor, digite um número.');
} else if (num1 > 0) {
    console.log('Número positivo');
} else if (num1 < 0) {
    console.log('Número negativo');
} else {
    console.log('Zero');
}
