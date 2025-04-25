// Exércicio 4: definam faixas etárias para crianças, adolescentes e adultos e com switch apresentem na tela se a pessoa que informou a idade está em uma e qual a faixa etária

const prompt = require('prompt-sync')();

const idade = parseInt(prompt('Informe a idade: '));

let faixaEtaria;

if (isNaN(idade) || idade < 0) {
    faixaEtaria = 'Idade inválida';
} else {
    switch (true) {
        case (idade >= 0 && idade <= 12):
            faixaEtaria = 'Criança';
            break;
        case (idade >= 13 && idade <= 17):
            faixaEtaria = 'Adolescente';
            break;
        case (idade >= 18):
            faixaEtaria = 'Adulto';
            break;
        default:
            faixaEtaria = 'Idade não reconhecida';
    }
}

console.log('Faixa etária: ' + faixaEtaria);
