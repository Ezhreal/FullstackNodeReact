/*
  Comparação de loops em JavaScript: for clássico, for...in, for...of e forEach

  Objetivo:
    Demonstrar as diferenças entre os diferentes tipos de loops em JavaScript, 
    com exemplos de uso para cada um.

  Loops abordados:
    - for clássico: loop com contador, ideal para iterar sobre arrays com controle 
      total sobre o índice.
    - for...in: loop para iterar sobre as propriedades de um objeto.
    - for...of: loop para iterar sobre elementos iteráveis (arrays, strings, maps, sets).
    - forEach: método de array que executa uma função callback para cada elemento.
*/


// Array de exemplo
const frutas = ['maçã', 'banana', 'laranja', 'uva'];

// Objeto de exemplo
const pessoa = {
  nome: 'João',
  idade: 30,
  profissao: 'Desenvolvedor'
};


// 1. for clássico
// Usado para iterar sobre arrays ou objetos, com controle total sobre o índice/chave.

console.log('--- for clássico ---');

// Iterando sobre o array 'frutas'
for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}

// Iterando sobre as propriedades do objeto 'pessoa'
for (let i = 0; i < Object.keys(pessoa).length; i++) {
  const chave = Object.keys(pessoa)[i];
  console.log(`${chave}: ${pessoa[chave]}`);
}


// 2. for...in
// Usado para iterar sobre as propriedades enumeráveis de um objeto.

console.log('\n--- for...in ---');

for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}


// 3. for...of
// Usado para iterar sobre elementos iteráveis (arrays, strings, maps, sets, etc.).

console.log('\n--- for...of ---');

for (let fruta of frutas) {
  console.log(`Fruta: ${fruta}`);
}

// Iterando sobre os caracteres de uma string
const nome = 'Maria';
for (let letra of nome) {
  console.log(`Letra: ${letra}`);
}


// 4. forEach
// Método de array que executa uma função callback para cada elemento do array.

console.log('\n--- forEach ---');

frutas.forEach((fruta, indice) => {
  console.log(`Fruta ${indice + 1}: ${fruta}`);
});


/*
  Exemplo de forEach com callback em JavaScript

  Objetivo:
    Demonstrar o uso do método forEach com uma função callback para realizar 
    operações em cada elemento de um array.

  Cenário:
    Temos um array de números e queremos calcular o quadrado de cada número 
    e armazenar os resultados em um novo array.
*/

console.log('\n--- forEach outros exemplos ---');
// Array de números
const numeros = [1, 2, 3, 4, 5];

// Array para armazenar os quadrados dos números
const quadrados = [];

// Função callback que calcula o quadrado de um número
function calcularQuadrado(numero) {
  return numero * numero;
}

// Usando forEach para iterar sobre o array 'numeros'
numeros.forEach(numero => {
  // Chama a função callback 'calcularQuadrado' para cada número
  const quadrado = calcularQuadrado(numero);

  // Adiciona o quadrado ao array 'quadrados'
  quadrados.push(quadrado);
});

// Exibe o array 'quadrados' no console
console.log(quadrados); // Saída: [1, 4, 9, 16, 25]


// Outro exemplo com forEach e função callback nomeada

// Função callback que exibe uma mensagem personalizada para cada número
function exibirMensagem(numero, indice) {
  console.log(`O número ${numero} está no índice ${indice} do array.`);
}

// Usando forEach para iterar sobre o array 'numeros'
numeros.forEach(exibirMensagem); 

/* Saída:
  O número 1 está no índice 0 do array.
  O número 2 está no índice 1 do array.
  O número 3 está no índice 2 do array.
  O número 4 está no índice 3 do array.
  O número 5 está no índice 4 do array.
*/