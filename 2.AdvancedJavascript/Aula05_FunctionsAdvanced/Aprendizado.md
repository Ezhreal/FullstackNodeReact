# Funções em JavaScript: Um Guia Completo

## Índice
1. [As várias maneiras de declarar funções](#as-várias-maneiras-de-declarar-funções)
2. [Parâmetros da função](#parâmetros-da-função)
3. [Retorno da função](#retorno-da-função)
4. [Escopo léxico](#escopo-léxico)
5. [Closures](#closures)

## As várias maneiras de declarar funções

JavaScript oferece diversas maneiras de definir funções, cada uma com suas particularidades e casos de uso específicos.

### 1. Declaração de função (Function Declaration)

A forma mais tradicional e direta de criar uma função:

```javascript
function somar(a, b) {
  return a + b;
}

// Uso:
console.log(somar(5, 3)); // 8
```

**Características importantes:**
- São elevadas (hoisted), o que significa que podem ser chamadas antes de serem declaradas no código
- Possuem um nome obrigatório
- Criam um contexto de `this` próprio

### 2. Expressão de função (Function Expression)

Funções como valores atribuídos a variáveis:

```javascript
const multiplicar = function(a, b) {
  return a * b;
};

// Uso:
console.log(multiplicar(4, 2)); // 8
```

**Características importantes:**
- Não são elevadas (só podem ser usadas após a definição)
- O nome da função é opcional (funções anônimas)
- Úteis para passar funções como argumentos

### 3. Funções de seta (Arrow Functions)

Introduzidas no ES6, oferecem uma sintaxe mais concisa:

```javascript
const dividir = (a, b) => a / b;

// Uso:
console.log(dividir(10, 2)); // 5

// Com múltiplas linhas:
const calcularArea = (largura, altura) => {
  const area = largura * altura;
  return area;
};
```

**Características importantes:**
- Sintaxe mais curta
- Não possuem próprio `this` (herdam do contexto envolvente)
- Não possuem próprio `arguments`
- Não podem ser usadas como construtores
- Ideal para funções curtas e callbacks

### 4. Método de objeto

Funções definidas como propriedades de objetos:

```javascript
const calculadora = {
  valor: 0,
  somar(x) {
    this.valor += x;
    return this.valor;
  },
  subtrair(x) {
    this.valor -= x;
    return this.valor;
  }
};

// Uso:
console.log(calculadora.somar(5)); // 5
console.log(calculadora.subtrair(2)); // 3
```

### 5. Funções construtoras

Usadas para criar objetos com o operador `new`:

```javascript
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.apresentar = function() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  };
}

// Uso:
const joao = new Pessoa('João', 25);
console.log(joao.apresentar()); // "Olá, meu nome é João e tenho 25 anos."
```

### 6. Classes (ES6+)

Sintaxe introduzida no ES6 para trabalhar com orientação a objetos:

```javascript
class Animal {
  constructor(nome) {
    this.nome = nome;
  }
  
  fazerSom() {
    return `${this.nome} faz algum som.`;
  }
}

// Uso:
const cachorro = new Animal('Rex');
console.log(cachorro.fazerSom()); // "Rex faz algum som."
```

### 7. Funções geradoras (Generator Functions)

Funções especiais que podem pausar e retomar sua execução:

```javascript
function* gerarSequencia() {
  yield 1;
  yield 2;
  yield 3;
}

// Uso:
const sequencia = gerarSequencia();
console.log(sequencia.next().value); // 1
console.log(sequencia.next().value); // 2
console.log(sequencia.next().value); // 3
```

### 8. Funções IIFE (Immediately Invoked Function Expression)

Funções que são executadas imediatamente após serem definidas:

```javascript
(function() {
  const mensagem = "Esta função é executada imediatamente!";
  console.log(mensagem);
})();

// Versão com arrow function:
(() => {
  console.log("Também executada imediatamente!");
})();
```

## Parâmetros da função

JavaScript oferece várias maneiras de trabalhar com parâmetros em funções.

### 1. Parâmetros básicos

```javascript
function saudar(nome, mensagem) {
  return `${mensagem}, ${nome}!`;
}

console.log(saudar('Maria', 'Olá')); // "Olá, Maria!"
```

### 2. Parâmetros padrão (Default Parameters)

Permitem definir valores padrão para parâmetros não fornecidos:

```javascript
function saudar(nome, mensagem = 'Olá') {
  return `${mensagem}, ${nome}!`;
}

console.log(saudar('João')); // "Olá, João!"
console.log(saudar('Maria', 'Bem-vinda')); // "Bem-vinda, Maria!"
```

### 3. Parâmetros rest (Rest Parameters)

Permitem representar um número indefinido de argumentos como um array:

```javascript
function somarTodos(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(somarTodos(1, 2, 3, 4)); // 10
console.log(somarTodos(5, 10, 15)); // 30
```

### 4. Objeto arguments

Objeto semelhante a um array disponível dentro de funções que contém todos os argumentos passados:

```javascript
function exibirArgumentos() {
  for(let i = 0; i < arguments.length; i++) {
    console.log(`Argumento ${i}: ${arguments[i]}`);
  }
}

exibirArgumentos('a', 'b', 'c');
// Argumento 0: a
// Argumento 1: b
// Argumento 2: c
```

**Observação:** `arguments` não está disponível em arrow functions.

### 5. Desestruturação de parâmetros

Permite extrair valores de objetos ou arrays diretamente nos parâmetros:

```javascript
// Desestruturação de objeto
function processarPedido({ cliente, produto, valor }) {
  console.log(`${cliente} comprou ${produto} por R$ ${valor}`);
}

const pedido = {
  cliente: 'Ana',
  produto: 'Notebook',
  valor: 3500
};

processarPedido(pedido); // "Ana comprou Notebook por R$ 3500"

// Desestruturação de array
function exibirCoordenadas([x, y, z]) {
  console.log(`X: ${x}, Y: ${y}, Z: ${z}`);
}

exibirCoordenadas([10, 20, 30]); // "X: 10, Y: 20, Z: 30"
```

## Retorno da função

O retorno de uma função em JavaScript é controlado pela declaração `return`.

### 1. Retorno básico

```javascript
function quadrado(numero) {
  return numero * numero;
}

const resultado = quadrado(5);
console.log(resultado); // 25
```

### 2. Retorno implícito (Arrow Functions)

Arrow functions com uma única expressão têm retorno implícito:

```javascript
const cubo = x => x * x * x;

console.log(cubo(3)); // 27
```

### 3. Retorno de múltiplos valores

JavaScript não suporta nativamente retorno de múltiplos valores, mas é possível simular usando arrays, objetos ou desestruturação:

```javascript
// Usando array
function calcularDimensoes(raio) {
  const area = Math.PI * raio * raio;
  const circunferencia = 2 * Math.PI * raio;
  return [area, circunferencia];
}

const [area, circunferencia] = calcularDimensoes(5);
console.log(`Área: ${area}, Circunferência: ${circunferencia}`);

// Usando objeto
function analisarNumero(num) {
  return {
    valor: num,
    quadrado: num * num,
    ePar: num % 2 === 0
  };
}

const analise = analisarNumero(7);
console.log(analise.quadrado); // 49
console.log(analise.ePar); // false
```

### 4. Early return (Retorno antecipado)

Técnica de retornar cedo para evitar aninhamento excessivo e melhorar legibilidade:

```javascript
function verificarIdade(idade) {
  if (idade < 0) {
    return 'Idade inválida';
  }
  
  if (idade < 18) {
    return 'Menor de idade';
  }
  
  if (idade < 60) {
    return 'Adulto';
  }
  
  return 'Idoso';
}

console.log(verificarIdade(25)); // "Adulto"
```

### 5. Sem retorno explícito

Funções sem declaração `return` ou com `return` sem valor retornam `undefined`:

```javascript
function semRetorno() {
  console.log('Esta função não retorna nada explicitamente');
}

const resultado = semRetorno();
console.log(resultado); // undefined
```

## Escopo léxico

Escopo léxico refere-se a como as variáveis são acessadas em funções aninhadas em JavaScript.

### 1. Escopo global e local

```javascript
// Variável global
const global = 'Visível em todo lugar';

function exemploEscopo() {
  // Variável local
  const local = 'Visível apenas dentro desta função';
  
  console.log(global); // "Visível em todo lugar"
  console.log(local); // "Visível apenas dentro desta função"
}

exemploEscopo();
console.log(global); // "Visível em todo lugar"
// console.log(local); // Erro: local is not defined
```

### 2. Blocos e escopo de variáveis

```javascript
function exemploEscopoBloco() {
  if (true) {
    var varVariavel = 'Visível em toda função';
    let letVariavel = 'Visível apenas no bloco';
    const constVariavel = 'Também visível apenas no bloco';
  }
  
  console.log(varVariavel); // "Visível em toda função"
  // console.log(letVariavel); // Erro: letVariavel is not defined
  // console.log(constVariavel); // Erro: constVariavel is not defined
}

exemploEscopoBloco();
```

### 3. Aninhamento de escopos

```javascript
function externa() {
  const mensagem = 'Função externa';
  
  function interna() {
    const msgInterna = 'Função interna';
    console.log(mensagem); // Acessa variável da função externa
    console.log(msgInterna);
  }
  
  interna();
  // console.log(msgInterna); // Erro: msgInterna is not defined
}

externa();
```

### 4. Sombreamento de variáveis (Variable Shadowing)

Quando uma variável interna tem o mesmo nome de uma variável externa:

```javascript
const valor = 10;

function exemplo() {
  const valor = 20; // Diferente da variável externa
  console.log(valor); // 20
  
  if (true) {
    const valor = 30; // Diferente das duas anteriores
    console.log(valor); // 30
  }
}

exemplo();
console.log(valor); // 10
```

### 5. Elevação (Hoisting)

```javascript
// Função declarativa é elevada
console.log(soma(2, 3)); // 5

function soma(a, b) {
  return a + b;
}

// Variáveis var são elevadas, mas não inicializadas
console.log(x); // undefined
var x = 10;

// Variáveis let e const são elevadas para o "Temporal Dead Zone"
// console.log(y); // Erro: Cannot access 'y' before initialization
let y = 20;
```

## Closures

Closures são funções que "lembram" o ambiente em que foram criadas, mesmo após esse ambiente não estar mais diretamente acessível.

### 1. Conceito básico

```javascript
function criarContador() {
  let contador = 0;
  
  return function() {
    contador++;
    return contador;
  };
}

const meuContador = criarContador();
console.log(meuContador()); // 1
console.log(meuContador()); // 2
console.log(meuContador()); // 3

// A variável contador não é acessível diretamente
// mas a função retornada mantém acesso a ela
```

### 2. Closures com parâmetros

```javascript
function criarMultiplicador(fator) {
  return function(numero) {
    return numero * fator;
  };
}

const duplicar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);

console.log(duplicar(5)); // 10
console.log(triplicar(5)); // 15
```

### 3. Closures para dados privados

```javascript
function criarPessoa(nome, idade) {
  // Dados "privados"
  let _nome = nome;
  let _idade = idade;
  
  return {
    getNome: function() {
      return _nome;
    },
    getIdade: function() {
      return _idade;
    },
    setIdade: function(novaIdade) {
      if (novaIdade > 0) {
        _idade = novaIdade;
      }
    }
  };
}

const pessoa = criarPessoa('Carlos', 30);
console.log(pessoa.getNome()); // "Carlos"
console.log(pessoa.getIdade()); // 30
pessoa.setIdade(31);
console.log(pessoa.getIdade()); // 31
```

### 4. Closures em loops

Um problema comum e sua solução:

```javascript
// Problema
function criarBotoes() {
  for (var i = 1; i <= 3; i++) {
    var btn = document.createElement('button');
    btn.textContent = 'Botão ' + i;
    
    btn.onclick = function() {
      console.log('Botão ' + i + ' clicado'); // i sempre será 4
    };
    
    document.body.appendChild(btn);
  }
}

// Solução com closure
function criarBotoesCorretamente() {
  for (var i = 1; i <= 3; i++) {
    var btn = document.createElement('button');
    btn.textContent = 'Botão ' + i;
    
    btn.onclick = (function(num) {
      return function() {
        console.log('Botão ' + num + ' clicado'); // num terá o valor correto
      };
    })(i);
    
    document.body.appendChild(btn);
  }
}

// Solução moderna com let (escopo de bloco)
function criarBotoesModerno() {
  for (let i = 1; i <= 3; i++) {
    const btn = document.createElement('button');
    btn.textContent = 'Botão ' + i;
    
    btn.onclick = function() {
      console.log('Botão ' + i + ' clicado'); // i terá o valor correto
    };
    
    document.body.appendChild(btn);
  }
}
```

### 5. Aplicações práticas de closures

```javascript
// Memoização (cache de resultados)
function criarCalculadoraComMemoizacao() {
  const cache = {};
  
  return function(n) {
    if (n in cache) {
      console.log('Usando valor em cache');
      return cache[n];
    }
    
    console.log('Calculando novo valor');
    const resultado = n * (n + 1) / 2; // Soma de 1 até n
    cache[n] = resultado;
    return resultado;
  };
}

const calculadora = criarCalculadoraComMemoizacao();
console.log(calculadora(5)); // Calculando novo valor: 15
console.log(calculadora(5)); // Usando valor em cache: 15
console.log(calculadora(10)); // Calculando novo valor: 55

// Função de debounce (útil para eventos como resize, scroll, etc.)
function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    const context = this;
    
    clearTimeout(timeoutId);
    
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// Uso:
const buscarDadosDebounced = debounce(function(termo) {
  console.log('Buscando:', termo);
  // Lógica de busca de dados
}, 300);

// Ao chamar várias vezes rapidamente, apenas a última será executada
buscarDadosDebounced('a');
buscarDadosDebounced('ap');
buscarDadosDebounced('app');
buscarDadosDebounced('appl');
buscarDadosDebounced('apple');
// Após 300ms: "Buscando: apple"
```

---

Este guia abrange os principais conceitos relacionados a funções em JavaScript, desde as várias formas de declaração até conceitos avançados como closures. As funções são um dos recursos mais poderosos de JavaScript e entender profundamente como elas funcionam é essencial para se tornar um desenvolvedor eficiente.