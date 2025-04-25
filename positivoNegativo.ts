const prompt = require('prompt-sync')();

// Função para verificar se o número é positivo, negativo ou zero
function positivoNegativo() {
    const num1 = parseFloat(prompt('Digite um número: '));

    if (isNaN(num1)) {
        console.log('Valor inválido. Por favor, digite um número.');
        return;
    }

    if (num1 > 0) {
        console.log('Número positivo');
    } else if (num1 < 0) {
        console.log('Número negativo');
    } else {
        console.log('Zero');
    }
}

positivoNegativo();
