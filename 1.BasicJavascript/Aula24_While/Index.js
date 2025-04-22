/**
 * ESTRUTURAS DE REPETIÇÃO E CONTROLE DE FLUXO EM JAVASCRIPT
 * 
 * Este arquivo contém exemplos e explicações sobre:
 * 1. While e Do While - Estruturas de repetição
 * 2. Break e Continue - Controle de fluxo
 * 3. Exercício prático
 */


// =====================================================
// 1. WHILE E DO WHILE - ESTRUTURAS DE REPETIÇÃO
// =====================================================

/**
 * WHILE
 * 
 * A estrutura while executa um bloco de código enquanto uma condição
 * específica for verdadeira. A condição é verificada ANTES de executar o bloco.
 * 
 * Sintaxe:
 * while (condição) {
 *     // código a ser executado
 * }
 */

console.log("=== Exemplo de While ===");

// Exemplo 1: Contagem regressiva
let contador = 5;

console.log("Contagem regressiva:");
while (contador > 0) {
    console.log(contador);
    contador--;  // Decrementa o contador
}
console.log("Lançamento!");

// Exemplo 2: Somando números até um limite
let soma = 0;
let numero = 1;
const limite = 10;

console.log(`\nSomando números de 1 até ${limite}:`);
while (numero <= limite) {
    soma += numero;  // Adiciona o número atual à soma
    console.log(`Adicionando ${numero}: soma parcial = ${soma}`);
    numero++;  // Incrementa o número
}
console.log(`Soma total: ${soma}`);


/**
 * DO WHILE
 * 
 * A estrutura do-while é similar ao while, mas a condição é verificada
 * APÓS executar o bloco. Isso garante que o bloco seja executado pelo
 * menos uma vez, mesmo que a condição seja falsa desde o início.
 * 
 * Sintaxe:
 * do {
 *     // código a ser executado
 * } while (condição);
 */

console.log("\n=== Exemplo de Do While ===");

// Exemplo 1: Gerando um número aleatório até obter um valor específico
let numeroAleatorio;

console.log("Gerando números aleatórios até obter um valor maior que 0.8:");
do {
    numeroAleatorio = Math.random();  // Gera um número entre 0 e 1
    console.log(`Número gerado: ${numeroAleatorio.toFixed(2)}`);
} while (numeroAleatorio <= 0.8);
console.log(`Conseguimos um número maior que 0.8: ${numeroAleatorio.toFixed(2)}`);

// Exemplo 2: Validação de entrada (simulada)
let senha = "";
let tentativa = 1;

console.log("\nSimulação de validação de senha:");
do {
    // Em um caso real, isto seria um prompt para o usuário
    senha = tentativa === 1 ? "senha123" : "correta";
    
    console.log(`Tentativa ${tentativa}: Senha digitada: ${senha}`);
    tentativa++;
    
} while (senha !== "correta" && tentativa <= 3);

if (senha === "correta") {
    console.log("Acesso concedido!");
} else {
    console.log("Número máximo de tentativas excedido!");
}


/**
 * DIFERENÇAS ENTRE WHILE E DO WHILE
 * 
 * 1. No while, a condição é verificada antes da execução do bloco.
 *    Se a condição for falsa desde o início, o bloco nunca será executado.
 * 
 * 2. No do-while, o bloco é executado pelo menos uma vez, e depois
 *    a condição é verificada para determinar se o loop continua.
 */

console.log("\n=== Comparação entre While e Do While ===");

// Exemplo com condição falsa desde o início
let x = 10;

console.log("While com condição falsa desde o início:");
while (x < 5) {
    console.log(`Este bloco nunca será executado! x = ${x}`);
    x++;
}
console.log(`Após o while: x = ${x}`);

// Resetando o valor de x
x = 10;

console.log("\nDo-While com condição falsa desde o início:");
do {
    console.log(`Este bloco será executado uma vez! x = ${x}`);
    x++;
} while (x < 5);
console.log(`Após o do-while: x = ${x}`);


// =====================================================
// 2. BREAK E CONTINUE - CONTROLE DE FLUXO
// =====================================================

/**
 * BREAK
 * 
 * A instrução break termina imediatamente o loop atual (ou um loop específico
 * quando usado com rótulos) e transfere o controle para a próxima instrução
 * após o loop.
 */

console.log("\n=== Exemplo de Break ===");

// Exemplo 1: Encontrando um número divisível por 7 em uma sequência
console.log("Encontrando o primeiro número divisível por 7 entre 1 e 20:");
for (let i = 1; i <= 20; i++) {
    console.log(`Verificando ${i}...`);
    
    if (i % 7 === 0) {
        console.log(`Encontrado! ${i} é divisível por 7.`);
        break;  // Sai do loop ao encontrar o primeiro número divisível por 7
    }
}

// Exemplo 2: Buscando em um array
const frutas = ["maçã", "banana", "pera", "uva", "laranja", "abacaxi"];
const frutaBuscada = "uva";

console.log(`\nBuscando "${frutaBuscada}" no array de frutas:`);
for (let i = 0; i < frutas.length; i++) {
    console.log(`Verificando posição ${i}: ${frutas[i]}`);
    
    if (frutas[i] === frutaBuscada) {
        console.log(`Encontrado! "${frutaBuscada}" está na posição ${i}.`);
        break;  // Sai do loop ao encontrar a fruta
    }
}


/**
 * CONTINUE
 * 
 * A instrução continue pula a iteração atual do loop e continua com a
 * próxima iteração. Ao contrário do break, o loop não é terminado.
 */

console.log("\n=== Exemplo de Continue ===");

// Exemplo 1: Imprimindo apenas números ímpares
console.log("Imprimindo apenas números ímpares de 1 a 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} é par, pulando...`);
        continue;  // Pula para a próxima iteração se o número for par
    }
    
    console.log(`${i} é ímpar!`);
}

// Exemplo 2: Filtrando valores em um array
const numeros = [10, 15, 20, 25, 30, 35, 40];
let somaImpares = 0;

console.log("\nSomando apenas números ímpares do array:");
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`${numeros[i]} é par, ignorando...`);
        continue;  // Pula para a próxima iteração se o número for par
    }
    
    console.log(`${numeros[i]} é ímpar, adicionando à soma.`);
    somaImpares += numeros[i];
}
console.log(`Soma dos números ímpares: ${somaImpares}`);