// Estruturas condicionais if/else em JavaScript

// A estrutura if/else permite executar diferentes blocos de código com base em uma condição.

// Sintaxe básica:

if (condicao) {
    // Código a ser executado se a condição for verdadeira
  } else {
    // Código a ser executado se a condição for falsa
  }
  
  // Exemplo 1: Verificar se um número é par ou ímpar
  
  let numero = 10;
  
  if (numero % 2 === 0) {
    console.log(numero + " é um número par.");
  } else {
    console.log(numero + " é um número ímpar.");
  }
  
  // Exemplo 2: Verificar se uma pessoa é maior de idade
  
  let idade = 17;
  
  if (idade >= 18) {
    console.log("Você é maior de idade.");
  } else {
    console.log("Você é menor de idade.");
  }
  
  // Usando else if para múltiplas condições
  
  // É possível encadear várias condições usando else if.
  
  // Exemplo 3: Classificar um aluno com base na sua nota
  
  let nota = 85;
  
if (nota >= 90) {
    console.log("Conceito A");
} else if (nota >= 80) {
    console.log("Conceito B");
} else if (nota >= 70) {
    console.log("Conceito C");
} else {
    console.log("Conceito D");
}
  
  // Observações importantes:
  
  // - A condição dentro do if deve ser uma expressão que resulta em um valor booleano (true ou false).
  // - As chaves {} são opcionais se o bloco de código tiver apenas uma linha, mas é recomendado usá-las sempre para melhor legibilidade.
  // - É possível usar operadores lógicos (&&, ||, !) para combinar condições.
  // - O else é opcional, pode haver apenas um if sem else.
  // - A estrutura if/else é fundamental para controlar o fluxo de execução do código e tomar decisões com base em diferentes situações.