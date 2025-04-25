//Calcule a média aritmético de números inseridos até que o usuário digite 0

function calcularMedia(event) {
    event.preventDefault();
    
    let soma = 0;
    let contador = 0;
    let numero;

    // Coleta os números do usuário até ele digitar 0
    while (true) {
      numero = parseFloat(document.getElementById('media-num').value);
      
      if (numero === 0) {
        break; // Sai do loop quando o número for 0
      }

      soma += numero;
      contador++;

      // Reseta o input após cada número inserido
      document.getElementById('media-num').value = '';
    }

    // Calcula a média
    const output = document.getElementById('media-output');
    if (contador > 0) {
      const media = soma / contador;
      output.textContent = `A média dos números é: ${media.toFixed(2)}`;
    } else {
      output.textContent = "Nenhum número válido foi inserido.";
    }
  }