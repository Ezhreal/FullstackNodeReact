// Tipos Primitivos em JavaScript

// number: Representa números inteiros e de ponto flutuante (decimais).
const idade = 30; // Número inteiro
const preco = 99.99; // Número decimal
const temperatura = -5; // Número negativo

// string: Representa texto, sempre entre aspas simples ou duplas.
const nome = "Maria"; // String com aspas duplas
const cidade = 'São Paulo'; // String com aspas simples

// boolean: Representa valores lógicos verdadeiro ou falso.
const ligado = true; // Valor verdadeiro
const desligado = false; // Valor falso

// null: Representa a ausência intencional de um valor.
let valorNulo = null; // Inicialmente nulo

// undefined: Representa uma variável que foi declarada, mas não teve um valor atribuído.
let valorIndefinido; // Valor indefinido

// symbol (ES6): Representa um valor único e imutável.
const id = Symbol('id'); // Símbolo único

// bigint (ES6): Representa números inteiros de precisão arbitrária.
const numeroGrande = 12345678901234567890n; // BigInt


// Tipos de Declarações em JavaScript

// var: Declara uma variável com escopo global ou de função.
var x = 10; // Variável global

// let: Declara uma variável com escopo de bloco.
let y = 20; // Variável com escopo de bloco

// const: Declara uma constante, cujo valor não pode ser reatribuído.
const PI = 3.14159; // Constante

// Regras e usos:

// - Use const para valores que não serão reatribuídos.
// - Use let para variáveis com escopo de bloco.
// - Evite usar var, pois pode causar problemas de escopo.
// - Escolha o tipo primitivo adequado para cada dado.
// - Utilize comentários para explicar o código e sua lógica.




let imc;
let anoNascimento;

let resultadoIMC = peso / (altura * altura)
const resultadoIMCArredondado = Math.round(resultadoIMC)
if (resultadoIMC)
anoNascimento = new Date (Date.now()).getFullYear() - idade
console.log(nome, sobreNome, 'tem', idade ,'anos e pesa', peso , 'kg. Tem', altura , 'de altura. O Seu IMC é de', resultadoIMCArredondado,'.', nome, 'nasceu em', anoNascimento )
