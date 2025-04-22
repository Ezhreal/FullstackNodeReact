# Arrays em JavaScript: Conceitos Avançados

## Índice
1. [Métodos de Iteração Avançados](#métodos-de-iteração-avançados)
2. [Manipulação de Arrays](#manipulação-de-arrays)
3. [Arrays Tipados](#arrays-tipados)
4. [Destructuring e Spread Operator](#destructuring-e-spread-operator)
5. [Arrays Multidimensionais](#arrays-multidimensionais)
6. [Otimização e Performance](#otimização-e-performance)
7. [Padrões Funcionais](#padrões-funcionais)
8. [Algoritmos Comuns com Arrays](#algoritmos-comuns-com-arrays)

---

## Métodos de Iteração Avançados

JavaScript fornece uma ampla gama de métodos para iterar e processar arrays, permitindo operações complexas com código conciso e expressivo.

### map()

Transforma cada elemento de um array e retorna um novo array com os resultados.

```javascript
const numeros = [1, 2, 3, 4, 5];
const quadrados = numeros.map(numero => numero * numero);
console.log(quadrados); // [1, 4, 9, 16, 25]
```

### filter()

Cria um novo array contendo apenas os elementos que passam no teste especificado.

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares); // [2, 4, 6, 8]
```

### reduce()

Reduz o array a um único valor, aplicando uma função acumuladora.

```javascript
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma); // 15

// Exemplo mais complexo: contagem de ocorrências
const frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];
const contagem = frutas.reduce((acc, fruta) => {
  acc[fruta] = (acc[fruta] || 0) + 1;
  return acc;
}, {});
console.log(contagem); // { maçã: 3, banana: 2, laranja: 1 }
```

### reduceRight()

Similar ao reduce(), mas processa o array da direita para a esquerda.

```javascript
const texto = ['JavaScript', 'em', 'avançados', 'Arrays'];
const frase = texto.reduceRight((acc, palavra) => acc + ' ' + palavra);
console.log(frase); // "Arrays avançados em JavaScript"
```

### flatMap()

Combina as operações map() e flat(), ou seja, mapeia cada elemento usando uma função e depois nivela o resultado em um novo array.

```javascript
const frases = ["JavaScript é incrível", "Arrays são poderosos"];
const palavras = frases.flatMap(frase => frase.split(' '));
console.log(palavras); 
// ["JavaScript", "é", "incrível", "Arrays", "são", "poderosos"]
```

### every() e some()

Verificam se todos ou pelo menos um elemento satisfazem uma condição.

```javascript
const idades = [18, 21, 28, 32, 17];
const todosMaiores = idades.every(idade => idade >= 18);
console.log(todosMaiores); // false

const algumMaior = idades.some(idade => idade >= 18);
console.log(algumMaior); // true
```

### find() e findIndex()

Localizam o primeiro elemento ou seu índice que satisfaz uma condição.

```javascript
const usuarios = [
  { id: 1, nome: 'Alice', admin: false },
  { id: 2, nome: 'Bob', admin: true },
  { id: 3, nome: 'Carlos', admin: false }
];

const admin = usuarios.find(usuario => usuario.admin);
console.log(admin); // { id: 2, nome: 'Bob', admin: true }

const indiceAdmin = usuarios.findIndex(usuario => usuario.admin);
console.log(indiceAdmin); // 1
```

### findLast() e findLastIndex()

Versões mais recentes que pesquisam a partir do final do array.

```javascript
const numeros = [5, 12, 8, 130, 44];
const ultimoGrande = numeros.findLast(num => num > 10);
console.log(ultimoGrande); // 44

const indiceUltimoGrande = numeros.findLastIndex(num => num > 10);
console.log(indiceUltimoGrande); // 4
```

## Manipulação de Arrays

### flat()

Nivela arrays aninhados até a profundidade especificada.

```javascript
const aninhado = [1, [2, [3, [4]]]];
console.log(aninhado.flat());       // [1, 2, [3, [4]]]
console.log(aninhado.flat(2));      // [1, 2, 3, [4]]
console.log(aninhado.flat(Infinity)); // [1, 2, 3, 4]
```

### Array.from()

Cria um novo array a partir de objetos iteráveis ou array-like.

```javascript
// Converter string para array
console.log(Array.from('hello')); // ['h', 'e', 'l', 'l', 'o']

// Criar array com mapeamento
console.log(Array.from([1, 2, 3], x => x * 2)); // [2, 4, 6]

// Criar array de números sequenciais
console.log(Array.from({ length: 5 }, (_, i) => i + 1)); // [1, 2, 3, 4, 5]
```

### Array.of()

Cria um novo array com os argumentos fornecidos, independente do número ou tipo.

```javascript
console.log(Array.of(1, 2, 3, 'quatro', { cinco: 5 }));
// [1, 2, 3, 'quatro', { cinco: 5 }]

// Diferença entre Array() e Array.of()
console.log(Array(3));     // [empty × 3] (array com 3 slots vazios)
console.log(Array.of(3));  // [3] (array com o número 3)
```

### Métodos de mutação x não-mutação

É importante entender quais métodos modificam o array original e quais não:

**Métodos que modificam o original (mutadores):**
- push(), pop(), shift(), unshift()
- splice(), sort(), reverse()
- fill()

**Métodos que não modificam o original (não-mutadores):**
- map(), filter(), reduce()
- slice(), concat()
- flat(), flatMap()

Exemplo de implementação imutável:

```javascript
// Adicionando elemento de forma imutável
const numeros = [1, 2, 3];
const adicionado = [...numeros, 4];
console.log(numeros);    // [1, 2, 3]
console.log(adicionado); // [1, 2, 3, 4]

// Removendo elemento de forma imutável
const remover = index => array => {
  return [...array.slice(0, index), ...array.slice(index + 1)];
};
const removido = remover(1)(numeros);
console.log(numeros);   // [1, 2, 3]
console.log(removido);  // [1, 3]
```

## Arrays Tipados

Arrays tipados são coleções semelhantes aos arrays que fornecem um mecanismo para acessar dados binários brutos. São utilizados em contextos como WebGL, processamento de áudio, e manipulação de arquivo.

### Tipos de Arrays Tipados

```javascript
// Int8Array: 8-bit signed integer, valores de -128 a 127
const int8 = new Int8Array(4);
int8[0] = 127;
int8[1] = -128;
console.log(int8); // Int8Array [127, -128, 0, 0]

// Uint8Array: 8-bit unsigned integer, valores de 0 a 255
const uint8 = new Uint8Array(4);
uint8[0] = 255;
uint8[1] = 0;
console.log(uint8); // Uint8Array [255, 0, 0, 0]

// Outros tipos: Int16Array, Uint16Array, Int32Array, Uint32Array, 
// Float32Array, Float64Array, BigInt64Array, BigUint64Array
```

### Criação de Arrays Tipados

```javascript
// A partir de um comprimento
const a = new Int32Array(5);

// A partir de outro array (tipado ou regular)
const b = new Int32Array([1, 2, 3, 4, 5]);

// A partir de um ArrayBuffer
const buffer = new ArrayBuffer(16);
const c = new Int32Array(buffer, 4, 2); // offset=4, length=2
```

### ArrayBuffer e DataView

```javascript
// ArrayBuffer é um objeto que representa um buffer de dados binários brutos
const buffer = new ArrayBuffer(16); // 16 bytes

// DataView permite acessar o buffer com diferentes interpretações
const view = new DataView(buffer);
view.setInt32(0, 42);
view.setFloat64(4, 3.14);

console.log(view.getInt32(0));   // 42
console.log(view.getFloat64(4)); // 3.14
```

## Destructuring e Spread Operator

### Destructuring de Arrays

Permite extrair valores de arrays para variáveis individuais.

```javascript
// Destructuring básico
const rgb = [255, 100, 50];
const [red, green, blue] = rgb;
console.log(red, green, blue); // 255 100 50

// Ignorando elementos
const [primeiro, , terceiro] = [1, 2, 3];
console.log(primeiro, terceiro); // 1 3

// Valores padrão
const [a = 1, b = 2, c = 3, d = 4] = [10, 20];
console.log(a, b, c, d); // 10 20 3 4

// Rest pattern
const [inicio, ...resto] = [1, 2, 3, 4, 5];
console.log(inicio, resto); // 1 [2, 3, 4, 5]

// Trocando valores de variáveis
let x = 10, y = 20;
[x, y] = [y, x];
console.log(x, y); // 20 10
```

### Spread Operator (...)

Permite expandir um array em locais onde são esperados múltiplos valores.

```javascript
// Combinando arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = [...array1, ...array2];
console.log(combinado); // [1, 2, 3, 4, 5, 6]

// Copiando arrays
const original = [1, 2, 3];
const copia = [...original];
copia.push(4);
console.log(original); // [1, 2, 3]
console.log(copia);    // [1, 2, 3, 4]

// Inserindo elementos no meio de um array
const inserido = [...array1.slice(0, 1), 'novo', ...array1.slice(1)];
console.log(inserido); // [1, 'novo', 2, 3]

// Convertendo objetos iteráveis em arrays
console.log([...new Set([1, 2, 2, 3, 1])]); // [1, 2, 3]
console.log([..."Hello"]); // ['H', 'e', 'l', 'l', 'o']
```

## Arrays Multidimensionais

JavaScript não tem suporte nativo para arrays multidimensionais, mas podemos simulá-los usando arrays aninhados.

### Criação e Acesso

```javascript
// Matriz 3x3
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matriz[1][2]); // 6 (linha 1, coluna 2)

// Criar uma matriz com dimensões específicas
function criarMatriz(linhas, colunas, valorInicial = 0) {
  return Array(linhas).fill()
    .map(() => Array(colunas).fill(valorInicial));
}

const matriz4x4 = criarMatriz(4, 4, 1);
console.log(matriz4x4);
// [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]
```

### Operações com Matrizes

```javascript
// Percorrer uma matriz
function percorrerMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      console.log(`matriz[${i}][${j}] = ${matriz[i][j]}`);
    }
  }
}

// Soma de duas matrizes
function somarMatrizes(matrizA, matrizB) {
  if (matrizA.length !== matrizB.length || matrizA[0].length !== matrizB[0].length) {
    throw new Error('As matrizes devem ter dimensões iguais');
  }
  
  return matrizA.map((linha, i) =>
    linha.map((valor, j) => valor + matrizB[i][j])
  );
}

const a = [[1, 2], [3, 4]];
const b = [[5, 6], [7, 8]];
console.log(somarMatrizes(a, b)); // [[6, 8], [10, 12]]
```

### Matrizes Esparsas

Arrays em JavaScript podem ser esparsos, ou seja, podem ter "lacunas" (elementos indefinidos).

```javascript
const esparso = [];
esparso[0] = 1;
esparso[10] = 10;
console.log(esparso); // [1, empty × 9, 10]
console.log(esparso.length); // 11

// Tenha cuidado com métodos de iteração
esparso.forEach(item => console.log(item)); // Apenas 1, 10
```

## Otimização e Performance

### Pré-alocação vs. Crescimento Dinâmico

```javascript
// Ruim: redimensionamento frequente
const ruim = [];
console.time('ruim');
for (let i = 0; i < 1000000; i++) {
  ruim.push(i);
}
console.timeEnd('ruim');

// Melhor: pré-alocar o tamanho
const melhor = new Array(1000000);
console.time('melhor');
for (let i = 0; i < 1000000; i++) {
  melhor[i] = i;
}
console.timeEnd('melhor');
```

### Evitando o método splice() para remoções frequentes

`splice()` é O(n) e pode ser caro para grandes arrays.

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Ruim: splice para remover muitos itens
console.time('splice');
for (let i = numeros.length - 1; i >= 0; i--) {
  if (numeros[i] % 2 === 0) {
    numeros.splice(i, 1);
  }
}
console.timeEnd('splice');

// Melhor: criar novo array com filter
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.time('filter');
const impares = numeros2.filter(n => n % 2 !== 0);
console.timeEnd('filter');
```

### Uso de TypedArrays para dados numéricos

```javascript
// Array regular vs. TypedArray
const tamanho = 10000000;

console.time('Array');
const arrRegular = new Array(tamanho);
for (let i = 0; i < tamanho; i++) {
  arrRegular[i] = i;
}
let somaRegular = 0;
for (let i = 0; i < tamanho; i++) {
  somaRegular += arrRegular[i];
}
console.timeEnd('Array');

console.time('TypedArray');
const arrTipado = new Int32Array(tamanho);
for (let i = 0; i < tamanho; i++) {
  arrTipado[i] = i;
}
let somaTipado = 0;
for (let i = 0; i < tamanho; i++) {
  somaTipado += arrTipado[i];
}
console.timeEnd('TypedArray');
```

## Padrões Funcionais

### Composição de Operações

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Encadeando múltiplos métodos funcionais
const resultado = numeros
  .filter(n => n % 2 === 0)     // pares
  .map(n => n * n)              // elevados ao quadrado
  .reduce((sum, n) => sum + n, 0); // soma

console.log(resultado); // 220 (4 + 16 + 36 + 64 + 100)
```

### Currying com Arrays

```javascript
// Função para filtrar com um predicado
const filtrarPor = predicado => array => array.filter(predicado);

const ehPar = x => x % 2 === 0;
const filtrarPares = filtrarPor(ehPar);

console.log(filtrarPares([1, 2, 3, 4, 5])); // [2, 4]

// Outro exemplo - ordenação parcial
const ordenarPor = chave => array => 
  [...array].sort((a, b) => 
    a[chave] < b[chave] ? -1 : a[chave] > b[chave] ? 1 : 0
  );

const pessoas = [
  { nome: "Carlos", idade: 30 },
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 40 }
];

const ordenarPorNome = ordenarPor('nome');
const ordenarPorIdade = ordenarPor('idade');

console.log(ordenarPorNome(pessoas));
// [{ nome: "Ana", idade: 25 }, { nome: "Bruno", idade: 40 }, { nome: "Carlos", idade: 30 }]

console.log(ordenarPorIdade(pessoas));
// [{ nome: "Ana", idade: 25 }, { nome: "Carlos", idade: 30 }, { nome: "Bruno", idade: 40 }]
```

### Functores e Mônadas

```javascript
// Implementação simples de um Array como um Functor
Array.prototype.fmap = function(fn) {
  return this.map(fn);
};

const numeros = [1, 2, 3];
const duplicados = numeros.fmap(x => x * 2);
console.log(duplicados); // [2, 4, 6]

// Implementação básica de flatMap como uma Mônada
Array.prototype.chain = function(fn) {
  return this.flatMap(fn);
};

const usuarios = [
  { id: 1, nome: "Alice" },
  { id: 2, nome: "Bob" }
];

const getPosts = usuario => {
  // Simula uma busca de posts por usuário
  return [
    { userId: usuario.id, texto: `Post 1 de ${usuario.nome}` },
    { userId: usuario.id, texto: `Post 2 de ${usuario.nome}` }
  ];
};

const todosPosts = usuarios.chain(getPosts);
console.log(todosPosts);
// [
//   { userId: 1, texto: "Post 1 de Alice" },
//   { userId: 1, texto: "Post 2 de Alice" },
//   { userId: 2, texto: "Post 1 de Bob" },
//   { userId: 2, texto: "Post 2 de Bob" }
// ]
```

## Algoritmos Comuns com Arrays

### Implementação manual de métodos de array

```javascript
// Implementação manual de map
function meuMap(array, callback) {
  const resultado = [];
  for (let i = 0; i < array.length; i++) {
    resultado[i] = callback(array[i], i, array);
  }
  return resultado;
}

// Implementação manual de filter
function meuFilter(array, callback) {
  const resultado = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}

// Implementação manual de reduce
function meuReduce(array, callback, valorInicial) {
  let acumulador = valorInicial !== undefined ? valorInicial : array[0];
  const inicioIndice = valorInicial !== undefined ? 0 : 1;
  
  for (let i = inicioIndice; i < array.length; i++) {
    acumulador = callback(acumulador, array[i], i, array);
  }
  return acumulador;
}
```

### Algoritmos de ordenação

```javascript
// Bubble Sort
function bubbleSort(array) {
  const arr = [...array]; // Cópia para não mutar o original
  const n = arr.length;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Troca elementos
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  
  return arr;
}

// Quick Sort
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  
  const pivot = array[0];
  const menores = [];
  const maiores = [];
  
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      menores.push(array[i]);
    } else {
      maiores.push(array[i]);
    }
  }
  
  return [...quickSort(menores), pivot, ...quickSort(maiores)];
}
```

### Busca e pesquisa

```javascript
// Busca binária (para arrays ordenados)
function buscaBinaria(array, alvo) {
  let inicio = 0;
  let fim = array.length - 1;
  
  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);
    
    if (array[meio] === alvo) {
      return meio; // Encontrou o elemento
    } else if (array[meio] < alvo) {
      inicio = meio + 1; // Busca na metade direita
    } else {
      fim = meio - 1; // Busca na metade esquerda
    }
  }
  
  return -1; // Elemento não encontrado
}

const numeros = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(buscaBinaria(numeros, 7));  // 3
console.log(buscaBinaria(numeros, 6));  // -1
```

### Manipulação avançada

```javascript
// Remover duplicatas
function removerDuplicatas(array) {
  return [...new Set(array)];
}

console.log(removerDuplicatas([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// Agrupar por propriedade
function agruparPor(array, propriedade) {
  return array.reduce((agrupado, item) => {
    const chave = item[propriedade];
    if (!agrupado[chave]) {
      agrupado[chave] = [];
    }
    agrupado[chave].push(item);
    return agrupado;
  }, {});
}

const produtos = [
  { categoria: 'Eletrônicos', nome: 'Laptop', preco: 1200 },
  { categoria: 'Roupas', nome: 'Camiseta', preco: 25 },
  { categoria: 'Eletrônicos', nome: 'Smartphone', preco: 800 },
  { categoria: 'Roupas', nome: 'Calça', preco: 50 }
];

console.log(agruparPor(produtos, 'categoria'));
// {
//   Eletrônicos: [
//     { categoria: 'Eletrônicos', nome: 'Laptop', preco: 1200 },
//     { categoria: 'Eletrônicos', nome: 'Smartphone', preco: 800 }
//   ],
//   Roupas: [
//     { categoria: 'Roupas', nome: 'Camiseta', preco: 25 },
//     { categoria: 'Roupas', nome: 'Calça', preco: 50 }
//   ]
// }

// Intersecção de arrays
function intersecao(array1, array2) {
  return array1.filter(item => array2.includes(item));
}

console.log(intersecao([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

// União de arrays (sem duplicatas)
function uniao(array1, array2) {
  return [...new Set([...array1, ...array2])];
}

console.log(uniao([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
```

---

Este guia abrange conceitos avançados de arrays em JavaScript, permitindo que você explore todo o potencial dessa estrutura de dados versátil. Dominar esses conceitos é essencial para escrever código JavaScript eficiente, expressivo e de alta performance.