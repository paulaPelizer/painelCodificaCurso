//Calcule a média aritmético de números inseridos até que o usuário digite 0
// Faça a média aritmética de números inseridos até que o usuário digite 0
const prompt = require('prompt-sync')();

let resposta;
let soma = 0;
let contador = 0;

do {
    resposta = Number(prompt('Informe um número (Para calcular a média final, digite 0): '));
    if (resposta !== 0) {
        soma += resposta;
        contador++;
    }
} while (resposta !== 0);

if (contador > 0) {
    let mediaFinal = soma / contador;
    console.log(`A média final é: ${mediaFinal}`);
} else {
    console.log('Nenhum número válido foi inserido.');
}
