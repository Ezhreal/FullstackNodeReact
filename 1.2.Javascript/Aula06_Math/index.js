// Propriedades

// Math.PI: Retorna o valor de Pi (aproximadamente 3.14159).
console.log(Math.PI); // Saída: 3.141592653589793


// Métodos

// Math.abs(x): Retorna o valor absoluto de um número.
console.log(Math.abs(-5)); // Saída: 5
console.log(Math.abs(5));  // Saída: 5

// Math.ceil(x): Arredonda um número para cima para o inteiro mais próximo.
console.log(Math.ceil(4.2));  // Saída: 5
console.log(Math.ceil(-4.2)); // Saída: -4

// Math.floor(x): Arredonda um número para baixo para o inteiro mais próximo.
console.log(Math.floor(4.8));  // Saída: 4
console.log(Math.floor(-4.8)); // Saída: -5

// Math.round(x): Arredonda um número para o inteiro mais próximo.
console.log(Math.round(4.4));  // Saída: 4
console.log(Math.round(4.5));  // Saída: 5
console.log(Math.round(-4.4)); // Saída: -4
console.log(Math.round(-4.5)); // Saída: -5

// Math.max(x, y, ...): Retorna o maior número entre os argumentos.
console.log(Math.max(1, 2, 3, 4, 5)); // Saída: 5

// Math.min(x, y, ...): Retorna o menor número entre os argumentos.
console.log(Math.min(1, 2, 3, 4, 5)); // Saída: 1

// Math.pow(x, y): Retorna a base `x` elevada à potência `y`.
console.log(Math.pow(2, 3)); // Saída: 8 (2 * 2 * 2)

// Math.sqrt(x): Retorna a raiz quadrada de um número.
console.log(Math.sqrt(16)); // Saída: 4

// Math.random(): Retorna um número pseudo-aleatório entre 0 (inclusive) e 1 (exclusive).
console.log(Math.random()); // Saída: um número aleatório entre 0 e 1

// Exemplo de uso: Gerar um número inteiro aleatório entre 1 e 10 (inclusive)
function getRandomInt(min, max) {
  // Arredonda o mínimo para cima para garantir que o mínimo seja incluído no intervalo
  min = Math.ceil(min);
  // Arredonda o máximo para baixo para garantir que o máximo seja incluído no intervalo
  max = Math.floor(max);
  // Gera um número aleatório entre 0 (inclusive) e 1 (exclusive)
  // Multiplica pelo intervalo (max - min + 1) para obter um número entre 0 e o intervalo
  // Soma o mínimo para deslocar o intervalo para o intervalo desejado
  // Arredonda para baixo para obter um número inteiro
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 20)); // Saída: um número inteiro aleatório entre 1 e 10