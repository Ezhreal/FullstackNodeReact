//JavaScript
// Strings em JavaScript

// Criando strings
const nome = "Maria"; // Usando aspas duplas
const cidade = 'São Paulo'; // Usando aspas simples
const frase = `Olá, ${nome}!`; // Template literal com interpolação de variáveis

// Propriedades e métodos de strings

// length: Retorna o comprimento da string.
console.log(nome.length); // Saída: 5

// toUpperCase(): Converte a string para maiúsculas.
console.log(nome.toUpperCase()); // Saída: MARIA

// toLowerCase(): Converte a string para minúsculas.
console.log(cidade.toLowerCase()); // Saída: são paulo

// charAt(): Retorna o caractere na posição especificada.
console.log(nome.charAt(0)); // Saída: M

// indexOf(): Retorna a posição da primeira ocorrência de um caractere ou substring.
console.log(cidade.indexOf("Paulo")); // Saída: 4

// substring(): Extrai uma parte da string.
console.log(cidade.substring(4)); // Saída: Paulo
console.log(cidade.substring(0, 3)); // Saída: São

// split(): Divide a string em um array de substrings.
const palavras = frase.split(" ");
console.log(palavras); // Saída: ["Olá,", "Maria!"]

// replace(): Substitui uma substring por outra.
const novaFrase = frase.replace("Maria", "João");
console.log(novaFrase); // Saída: Olá, João!

// trim(): Remove espaços em branco do início e do fim da string.
const stringComEspacos = "  Olá, mundo!  ";
console.log(stringComEspacos.trim()); // Saída: Olá, mundo!

// includes(): Verifica se a string contém uma determinada substring.
console.log(frase.includes("Maria")); // Saída: true

// startsWith(): Verifica se a string começa com uma determinada substring.
console.log(frase.startsWith("Olá")); // Saída: true

// endsWith(): Verifica se a string termina com uma determinada substring.
console.log(frase.endsWith("!")); // Saída: true

// Concatenação de strings
const nomeCompleto = nome + " " + "Silva";
console.log(nomeCompleto); // Saída: Maria Silva

// Template literals
const idade = 30;
const mensagem = `Olá, ${nome}! Você tem ${idade} anos.`;
console.log(mensagem); // Saída: Olá, Maria! Você tem 30 anos.

// Regras e usos:

// - Strings são imutáveis, ou seja, seus valores não podem ser alterados após a criação.
// - Utilize os métodos de string para manipular e transformar strings.
// - Template literals permitem interpolação de variáveis e expressões.
// - Consulte a documentação para obter informações detalhada