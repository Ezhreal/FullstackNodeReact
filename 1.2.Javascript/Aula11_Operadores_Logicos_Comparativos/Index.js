// Operadores de Comparação

// Igualdade (==): Verifica se os valores são iguais, mesmo se de tipos diferentes.
console.log(5 == "5"); // true

// Igualdade estrita (===): Verifica se os valores e tipos são iguais.
console.log(5 === "5"); // false

// Desigualdade (!=): Verifica se os valores são diferentes, mesmo se de tipos diferentes.
console.log(5 != "5"); // false

// Desigualdade estrita (!==): Verifica se os valores ou tipos são diferentes.
console.log(5 !== "5"); // true

// Maior que (>): Verifica se o valor à esquerda é maior que o da direita.
console.log(10 > 5); // true

// Maior ou igual (>=): Verifica se o valor à esquerda é maior ou igual ao da direita.
console.log(10 >= 10); // true

// Menor que (<): Verifica se o valor à esquerda é menor que o da direita.
console.log(5 < 10); // true

// Menor ou igual (<=): Verifica se o valor à esquerda é menor ou igual ao da direita.
console.log(5 <= 5); // true


// Operadores Lógicos

// E lógico (&&): Retorna true se ambas as expressões forem verdadeiras.
console.log(true && true); // true
console.log(true && false); // false

// OU lógico (||): Retorna true se pelo menos uma das expressões for verdadeira.
console.log(true || false); // true
console.log(false || false); // false

// NÃO lógico (!): Inverte o valor lógico da expressão.
console.log(!true); // false
console.log(!false); // true


// Exemplo de uso combinado:
let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}