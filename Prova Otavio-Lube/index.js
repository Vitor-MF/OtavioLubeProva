function verificarNumeroPrimo() {
    // Gerar um número aleatório entre 1 e 1000
    const numero = Math.floor(Math.random() * 1000) + 1;
  
    // Verifica se o numero é primo
    const resultado = isPrime(numero);
  
    // Mostra o resultado no html
    const elementoResultado = document.getElementById("hacker");
    if (resultado) {
      elementoResultado.textContent = numero + " é primo.";
    } else {
      elementoResultado.textContent = numero + " não é primo.";
    }
  }
  
  function isPrime(numero) {
    if (numero <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }

    function verificarSenha() {
    // Obtem a senha digitada por um usuário 
    const senhaInput = document.getElementById("senha");
    const senha = senhaInput.value;
  
    // Verifica se a senha é valida por atingir os critérios
    const resultado = validarSenha(senha);
  
    // Mostra o resultado no html
    const elementoResultado = document.getElementById("shodan");
    elementoResultado.textContent = resultado;
  }
  
  function validarSenha(senha) {
    if (senha.length < 8) {
      return "A senha deve ter pelo menos 8 caracteres.";
    }
  
    if (!/[A-Z]/.test(senha) || !/[a-z]/.test(senha) || !/[0-9]/.test(senha)) {
      return "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número.";
    }
  
    return "A senha é válida.";
  }

  function calcularFatorial() {
    // Obtem o numero digitado por um usario
    const numeroInput = document.getElementById("cidadel");
    const numero = parseInt(numeroInput.value);
  
    // Calcula o fatorial desse numero digitado
    const resultado = fatorial(numero);
  
    // Mostra o resultado no html
    const elementoResultado = document.getElementById("energy");
    elementoResultado.textContent = `O fatorial de ${numero} é ${resultado}.`;
  }
  
  function fatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
      resultado *= i;
    }
  
    return resultado;
  }
  function verificarQuadradoPerfeito() {
    // Obter o número digitado pelo usuário
    const numeroInput = document.getElementById("unatco");
    const numero = parseInt(numeroInput.value);
  
    // Verificar se é um quadrado perfeito
    const resultado = isQuadradoPerfeito(numero);
  
    // Exibir o resultado na página HTML
    const elementoResultado = document.getElementById("ambrosia");
    if (resultado) {
      elementoResultado.textContent = `${numero} é um quadrado perfeito.`;
    } else {
      elementoResultado.textContent = `${numero} não é um quadrado perfeito.`;
    }
  }
  
  function isQuadradoPerfeito(numero) {
    const raiz = Math.sqrt(numero);
  
    // Verificar se a raiz quadrada é um número inteiro
    return Number.isInteger(raiz);
  }
  
  function validarNumero(valor) {
    if (isNaN(valor)) {
      console.log("O valor não é um número válido.");
      return false;

    }console.log("O valor é um número válido.");
    return true;
  }


  function validarNumero(valor) {
    if (isNaN(valor)) {
      document.getElementById("mensagem").textContent = "O valor não é um número válido.";
      return false;
    }
  
    document.getElementById("mensagem").textContent = "O valor é um número válido.";
    return true;
}

