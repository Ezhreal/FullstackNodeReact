/**
 * Desestruturação de arrays em JavaScript
 *
 * A desestruturação de arrays permite extrair valores de um array 
 * e atribuí-los a variáveis individuais de forma concisa.
 *
 * Este exemplo demonstra como:
 * - Desestruturar um array em variáveis separadas
 * - Ignorar elementos do array
 * - Usar o operador rest para capturar o restante do array
 * - Desestruturar arrays aninhados
 */

// ARRAY CORES EXEMPLO
const cores = ['Amarelo', 'Azul', 'Vermelho', 'Verde'];

const [amarelo, azul, vermelho, verde] = cores;
console.log(amarelo);
console.log(azul);
console.log(vermelho);
console.log(verde);

//Ignorando elementos
const [,,corAzul] = cores;
console.log(corAzul);


// Operador rest (...)
const [primeiraCor, ...outrasCores] = cores;
console.log(primeiraCor); // "vermelho"
console.log(outrasCores); // ["verde", "azul", "amarelo"]


// Arrays aninhados
const coordenadas = [[1, 2], [3, 4], [5, 6]];
const [[x1, y1], [x2, y2], [x3, y3]] = coordenadas;
console.log(x1); // 1
console.log(y1); // 2
console.log(x3); // 5
console.log(y3); // 6


//exeplo json para bidimensional

const produtos = [
    ['Camisa', 'Roupa', 29.90],
    ['Camisa-social', 'Roupa', 89.90],
    ['Calça Jeans Skinny', 'Roupa', 120.90]
]

for (const [nome, categoria, preco] of produtos) {
    console.log(`Produto: ${nome}, Categoria: ${categoria}, Preço: R$ ${preco}`);
  }

//exemplo de cpodigo backending
const { Pool } = require('pg');

const pool = new Pool({
  // Configurações de conexão com o banco de dados
});

async function obterProdutos() {
  const resultado = await pool.query('SELECT nome, categoria, preco FROM produtos');
  return resultado.rows;
}

async function main() {
  const produtos = await obterProdutos();

  for (const [nome, categoria, preco] of produtos) {
    console.log(`Produto: ${nome}, Categoria: ${categoria}, Preço: R$ ${preco}`);
  }

  await pool.end(); // Fecha a conexão com o banco de dados
}

main();