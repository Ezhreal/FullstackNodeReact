/**
 * Loop for clássico em JavaScript
 *
 * O loop for clássico é uma estrutura de controle que permite executar um bloco de código
 * repetidamente por um número determinado de vezes.
 * 
 * Este exemplo demonstra como:
 * - Inicializar um contador (let i = 0)
 * - Definir uma condição de continuação (i < 10)
 * - Incrementar o contador a cada iteração (i++)
 * - Executar um bloco de código em cada iteração
 */

//Iterar sobre números
for (let i = 0; i < 10; i++) {
    console.log(`Iteração número: ${i}`);
}

//Iterar sobre arrays:
const frutas = ["maçã", "banana", "laranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}

//gerar sequencia numerica
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    console.log("Olá!");
}