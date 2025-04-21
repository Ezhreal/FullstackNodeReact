# JavaScript - Guia de Aprendizado

## Aula 01 - Tipos Primitivos e Declarações

### Tipos Primitivos
- **String**: Texto entre aspas. Ex: `"Olá mundo"`, `'JavaScript'`
- **Number**: Valores numéricos. Ex: `42`, `3.14`
- **Boolean**: Valores de verdadeiro ou falso. Ex: `true`, `false`
- **Undefined**: Valor padrão de variáveis não inicializadas
- **Null**: Representa a ausência intencional de valor

### Declaração de Variáveis
```javascript
// var - escopo de função (evitar usar)
var nome = "João";

// let - escopo de bloco, pode ser reatribuída
let idade = 25;
idade = 26; // válido

// const - escopo de bloco, não pode ser reatribuída
const PI = 3.14;
```

## Aula 02 - Operadores

### Operadores Aritméticos
```javascript
let a = 10;
let b = 5;

let soma = a + b;        // 15
let subtracao = a - b;   // 5
let multiplicacao = a * b; // 50
let divisao = a / b;     // 2
let resto = a % b;       // 0
let exponencial = a ** b; // 100000
```

### Operadores de Atribuição
```javascript
let x = 10;
x += 5;  // x = x + 5 (15)
x -= 2;  // x = x - 2 (13)
x *= 2;  // x = x * 2 (26)
x /= 2;  // x = x / 2 (13)
```

## Aula 03 - Comandos Windows

### Comandos Básicos
- `cd` - Mudar de diretório
- `dir` - Listar arquivos e pastas
- `mkdir` - Criar pasta
- `del` - Deletar arquivos
- `rmdir` - Remover diretório

## Aula 04 - Strings

### Métodos de String
```javascript
const texto = "JavaScript é incrível!";

// Comprimento
console.log(texto.length); // 23

// Conversão de caso
console.log(texto.toUpperCase()); // JAVASCRIPT É INCRÍVEL!
console.log(texto.toLowerCase()); // javascript é incrível!

// Busca
console.log(texto.indexOf("Script")); // 4
console.log(texto.includes("incrível")); // true

// Fatiar
console.log(texto.slice(0, 10)); // JavaScript

// Substituir
console.log(texto.replace("incrível", "maravilhoso")); // JavaScript é maravilhoso!
```

## Aula 05 - Number

### Métodos e Operações com Números
```javascript
// Conversão
let stringNum = "123.45";
let num = Number(stringNum); // 123.45

// Métodos
console.log(num.toFixed(1)); // "123.5" (arredonda para 1 casa decimal)
console.log(Number.isInteger(num)); // false

// NaN - Not a Number
console.log(Number("texto")); // NaN
console.log(isNaN(Number("texto"))); // true
```

## Aula 06 - Math

### Objeto Math
```javascript
// Constantes
console.log(Math.PI); // 3.141592653589793

// Arredondamento
console.log(Math.round(3.7)); // 4
console.log(Math.floor(3.7)); // 3 (arredonda para baixo)
console.log(Math.ceil(3.1)); // 4 (arredonda para cima)

// Valor absoluto
console.log(Math.abs(-10)); // 10

// Potência e raiz
console.log(Math.pow(2, 3)); // 8 (2³)
console.log(Math.sqrt(9)); // 3 (raiz quadrada)

// Mínimo e máximo
console.log(Math.min(5, 2, 8, 1)); // 1
console.log(Math.max(5, 2, 8, 1)); // 8

// Número aleatório (0 a 1)
console.log(Math.random()); // ex: 0.7283871927401288
```

## Aula 07 - Arrays

### Manipulação de Arrays
```javascript
// Criação
let frutas = ["Maçã", "Banana", "Laranja"];

// Acessar elementos
console.log(frutas[0]); // Maçã

// Adicionar/remover elementos
frutas.push("Uva"); // Adiciona no final
frutas.unshift("Morango"); // Adiciona no início
frutas.pop(); // Remove do final
frutas.shift(); // Remove do início

// Comprimento
console.log(frutas.length); // 3

// Métodos úteis
console.log(frutas.includes("Banana")); // true
console.log(frutas.indexOf("Laranja")); // 2

// Juntar arrays
let mais_frutas = ["Pêra", "Abacaxi"];
let todas_frutas = frutas.concat(mais_frutas);

// Fatiar
let algumas_frutas = frutas.slice(1, 3);
```

## Aula 08 - Funções

### Declaração e Uso de Funções
```javascript
// Função declarativa
function somar(a, b) {
    return a + b;
}

// Expressão de função
const multiplicar = function(a, b) {
    return a * b;
};

// Arrow function
const dividir = (a, b) => a / b;

// Parâmetros padrão
function cumprimentar(nome = "visitante") {
    return `Olá, ${nome}!`;
}

// Chamada de funções
console.log(somar(5, 3)); // 8
console.log(multiplicar(4, 2)); // 8
console.log(dividir(10, 2)); // 5
console.log(cumprimentar()); // Olá, visitante!
```

## Aula 09 - Objetos

### Criação e Manipulação de Objetos
```javascript
// Criação
const pessoa = {
    nome: "Ana",
    idade: 28,
    profissao: "Desenvolvedora",
    saudacao: function() {
        return `Olá, eu sou ${this.nome}!`;
    }
};

// Acesso às propriedades
console.log(pessoa.nome); // Ana
console.log(pessoa["idade"]); // 28

// Alteração de propriedades
pessoa.idade = 29;

// Adição de propriedades
pessoa.cidade = "São Paulo";

// Remoção de propriedades
delete pessoa.profissao;

// Métodos
console.log(pessoa.saudacao()); // Olá, eu sou Ana!

// Verificar propriedades
console.log("nome" in pessoa); // true
```

## Aula 10 - Atividade Formulário

### Exemplo de Formulário Básico
```javascript
// HTML do formulário
/*
<form id="meuForm">
  <input type="text" id="nome" placeholder="Nome">
  <input type="email" id="email" placeholder="Email">
  <button type="submit">Enviar</button>
</form>
*/

// JavaScript para manipular o formulário
document.getElementById("meuForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    
    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }
    
    console.log(`Nome: ${nome}, Email: ${email}`);
    // Aqui você poderia enviar os dados para um servidor
    
    this.reset(); // Limpa o formulário
});
```

## Aula 11 - Operadores Lógicos e Comparativos

### Operadores Comparativos
```javascript
let x = 5;
let y = "5";

console.log(x == y);  // true (compara valor)
console.log(x === y); // false (compara valor e tipo)
console.log(x != y);  // false
console.log(x !== y); // true (diferente em valor OU tipo)
console.log(x > 3);   // true
console.log(x < 10);  // true
console.log(x >= 5);  // true
console.log(x <= 4);  // false
```

### Operadores Lógicos
```javascript
let a = true;
let b = false;

console.log(a && b); // false (AND - ambos precisam ser true)
console.log(a || b); // true (OR - pelo menos um precisa ser true)
console.log(!a);     // false (NOT - inverte o valor)

// Exemplo prático
let idade = 16;
let acompanhado = true;
console.log(idade >= 18 || acompanhado); // true (pode entrar no cinema)
```

## Aula 12 - If Else

### Estruturas Condicionais
```javascript
const idade = 17;

// if simples
if (idade >= 18) {
    console.log("Você é maior de idade.");
}

// if-else
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// if-else if-else
if (idade < 13) {
    console.log("Criança");
} else if (idade < 18) {
    console.log("Adolescente");
} else if (idade < 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

// Operador ternário
const status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status);
```

## Aula 13 - Calculadora IMC

### Exemplo de Calculadora IMC
```javascript
function calcularIMC(peso, altura) {
    // Fórmula: peso / (altura * altura)
    const imc = peso / (altura * altura);
    
    // Retorna o valor com 2 casas decimais
    return imc.toFixed(2);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else if (imc < 35) {
        return "Obesidade grau 1";
    } else if (imc < 40) {
        return "Obesidade grau 2";
    } else {
        return "Obesidade grau 3";
    }
}

// Uso
const peso = 70; // em kg
const altura = 1.75; // em metros

const imc = calcularIMC(peso, altura);
const classificacao = classificarIMC(imc);

console.log(`Seu IMC é ${imc} - Classificação: ${classificacao}`);
```

## Aula 14 - Operação Ternária

### Uso de Operador Ternário
```javascript
// Sintaxe: condição ? valor_se_verdadeiro : valor_se_falso

// Exemplo 1: Verificar maioridade
const idade = 20;
const status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status); // Maior de idade

// Exemplo 2: Verificar se número é par ou ímpar
const numero = 7;
console.log(numero % 2 === 0 ? "Par" : "Ímpar"); // Ímpar

// Exemplo 3: Níveis de acesso
const tipo_usuario = "admin";
const acesso = tipo_usuario === "admin" ? "Acesso total" : "Acesso limitado";
console.log(acesso); // Acesso total

// Aninhamento (evitar excesso pois compromete legibilidade)
const temp = 30;
const clima = temp < 0 ? "Congelando" : 
             temp < 15 ? "Frio" : 
             temp < 25 ? "Agradável" : 
             "Quente";
console.log(clima); // Quente
```

## Aula 15 - Objeto Date

### Manipulação de Datas
```javascript
// Criar objeto Date
const hoje = new Date(); // Data e hora atual
console.log(hoje);

// Criar data específica (ano, mês[0-11], dia, hora, minuto, segundo)
const natal = new Date(2023, 11, 25); // 25/12/2023
console.log(natal);

// Obter componentes
console.log(hoje.getFullYear()); // Ano atual
console.log(hoje.getMonth()); // Mês (0-11)
console.log(hoje.getDate()); // Dia do mês
console.log(hoje.getDay()); // Dia da semana (0=Domingo, 6=Sábado)
console.log(hoje.getHours()); // Hora
console.log(hoje.getMinutes()); // Minutos
console.log(hoje.getSeconds()); // Segundos

// Definir componentes
hoje.setFullYear(2024);
hoje.setMonth(5); // Junho
hoje.setDate(15);

// Formatar data (métodos simples)
console.log(hoje.toDateString()); // ex: "Sat Jun 15 2024"
console.log(hoje.toLocaleDateString()); // formato local: ex: "15/06/2024"

// Calcular diferença entre datas (em milissegundos)
const inicio = new Date();
const fim = new Date(inicio.getTime() + 3600000); // 1 hora depois
const diff = fim - inicio; // 3600000 (ms)
const diffHoras = diff / (1000 * 60 * 60); // 1 (hora)
```

## Aula 16 - Switch Case

### Estrutura Switch
```javascript
const diaSemana = 3; // 0=Domingo, 1=Segunda, ...

switch (diaSemana) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
}

// Switch com múltiplos casos
const mes = "janeiro";

switch (mes.toLowerCase()) {
    case "dezembro":
    case "janeiro":
    case "fevereiro":
        console.log("Verão no hemisfério sul");
        break;
    case "março":
    case "abril":
    case "maio":
        console.log("Outono no hemisfério sul");
        break;
    case "junho":
    case "julho":
    case "agosto":
        console.log("Inverno no hemisfério sul");
        break;
    case "setembro":
    case "outubro":
    case "novembro":
        console.log("Primavera no hemisfério sul");
        break;
    default:
        console.log("Mês inválido");
}
```

## Aula 17 - Atividade Switch Date

### Exemplo de Aplicação Switch com Date
```javascript
function getDiaSemana(date) {
    const diaSemana = date.getDay();
    
    switch (diaSemana) {
        case 0: return "Domingo";
        case 1: return "Segunda-feira";
        case 2: return "Terça-feira";
        case 3: return "Quarta-feira";
        case 4: return "Quinta-feira";
        case 5: return "Sexta-feira";
        case 6: return "Sábado";
        default: return "Dia inválido";
    }
}

function getMes(date) {
    const mes = date.getMonth();
    
    switch (mes) {
        case 0: return "Janeiro";
        case 1: return "Fevereiro";
        case 2: return "Março";
        case 3: return "Abril";
        case 4: return "Maio";
        case 5: return "Junho";
        case 6: return "Julho";
        case 7: return "Agosto";
        case 8: return "Setembro";
        case 9: return "Outubro";
        case 10: return "Novembro";
        case 11: return "Dezembro";
        default: return "Mês inválido";
    }
}

// Uso
const hoje = new Date();
console.log(`Hoje é ${getDiaSemana(hoje)}, ${hoje.getDate()} de ${getMes(hoje)} de ${hoje.getFullYear()}`);
```

## Aula 18 - Let, Var, Diff

### Diferenças entre Var, Let e Const
```javascript
// var - escopo de função, sofre hoisting
function exemploVar() {
    console.log(x); // undefined (hoisting)
    var x = 10;
    console.log(x); // 10
    
    if (true) {
        var x = 20; // mesma variável
        console.log(x); // 20
    }
    
    console.log(x); // 20 (valor foi alterado)
}

// let - escopo de bloco, não sofre hoisting completo
function exemploLet() {
    // console.log(y); // Erro: y is not defined
    let y = 10;
    console.log(y); // 10
    
    if (true) {
        let y = 20; // variável diferente (escopo de bloco)
        console.log(y); // 20
    }
    
    console.log(y); // 10 (valor não foi alterado)
}

// const - escopo de bloco, não pode ser reatribuída
function exemploConst() {
    const z = 10;
    console.log(z); // 10
    
    // z = 20; // Erro: Assignment to constant variable
    
    // Mas objetos e arrays podem ser modificados internamente
    const obj = { nome: "João" };
    obj.nome = "Maria"; // válido
    console.log(obj.nome); // Maria
    
    const arr = [1, 2, 3];
    arr.push(4); // válido
    console.log(arr); // [1, 2, 3, 4]
}
```

## Aula 19 - Desestruturação Array

### Desestruturação de Arrays
```javascript
// Array básico
const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

// Desestruturação básica
const [primeira, segunda] = frutas;
console.log(primeira); // Maçã
console.log(segunda);  // Banana

// Pular elementos
const [first, , third] = frutas;
console.log(first);  // Maçã
console.log(third);  // Laranja

// Valores padrão
const cores = ["Vermelho", "Azul"];
const [cor1, cor2, cor3 = "Verde"] = cores;
console.log(cor3); // Verde

// Rest operator
const [primeiraFruta, ...restantes] = frutas;
console.log(primeiraFruta); // Maçã
console.log(restantes);     // ["Banana", "Laranja", "Uva"]

// Troca de valores (swap)
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a); // 10
console.log(b); // 5

// Desestruturação em funções
function retornaArray() {
    return ["Olá", "Mundo"];
}
const [saudacao, objeto] = retornaArray();
console.log(`${saudacao}, ${objeto}!`); // Olá, Mundo!
```

## Aula 20 - Desestruturação Objetos

### Desestruturação de Objetos
```javascript
// Objeto básico
const pessoa = {
    nome: "Carlos",
    idade: 30,
    profissao: "Desenvolvedor",
    endereco: {
        cidade: "São Paulo",
        bairro: "Centro"
    }
};

// Desestruturação básica
const { nome, idade } = pessoa;
console.log(nome);  // Carlos
console.log(idade); // 30

// Renomear variáveis
const { nome: nomePessoa, profissao: trabalho } = pessoa;
console.log(nomePessoa); // Carlos
console.log(trabalho);   // Desenvolvedor

// Valores padrão
const { salario = 5000 } = pessoa;
console.log(salario); // 5000 (valor padrão)

// Objetos aninhados
const { endereco: { cidade, bairro } } = pessoa;
console.log(cidade); // São Paulo
console.log(bairro); // Centro

// Rest operator em objetos
const { nome: nome2, ...resto } = pessoa;
console.log(nome2); // Carlos
console.log(resto); // { idade: 30, profissao: "Desenvolvedor", endereco: {...} }

// Em parâmetros de função
function imprimeDados({ nome, idade, profissao = "Não informado" }) {
    console.log(`${nome}, ${idade} anos, ${profissao}`);
}
imprimeDados(pessoa); // Carlos, 30 anos, Desenvolvedor
```

## Aulas 21-25 - Estruturas de Repetição (For)

### For Clássico
```javascript
// For básico
for (let i = 0; i < 5; i++) {
    console.log(`Iteração ${i}`);
}

// Percorrendo um array
const numeros = [10, 20, 30, 40, 50];
for (let i = 0; i < numeros.length; i++) {
    console.log(`Índice ${i}: ${numeros[i]}`);
}
```

### For...in
```javascript
// Iterando sobre propriedades de um objeto
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};

for (let prop in carro) {
    console.log(`${prop}: ${carro[prop]}`);
}

// Também pode ser usado em arrays (índices)
const frutas = ["Maçã", "Banana", "Uva"];
for (let indice in frutas) {
    console.log(`${indice}: ${frutas[indice]}`);
}
```

### For...of
```javascript
// Melhor para iteração em coleções (arrays, strings)
const cores = ["Vermelho", "Verde", "Azul"];

for (let cor of cores) {
    console.log(cor);
}

// String
const palavra = "JavaScript";
for (let letra of palavra) {
    console.log(letra);
}
```

### Laços Aninhados
```javascript
// Matriz 3x3
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`matriz[${i}][${j}] = ${matriz[i][j]}`);
    }
}
```

### Controle de Fluxo em Loops
```javascript
// break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // interrompe o loop
    }
    console.log(i); // 0, 1, 2, 3, 4
}

// continue
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // pula para próxima iteração
    }
    console.log(i); // 0, 1, 3, 4
}
```

---

## Dicas Gerais de JavaScript

1. **Use Strict Mode**: Adicione `"use strict";` no início dos seus arquivos para evitar erros comuns.

2. **Evite Variáveis Globais**: Sempre declare suas variáveis com `let` ou `const` para evitar poluir o escopo global.

3. **Prefira const**: Use `const` por padrão, e `let` apenas quando precisar reatribuir valores.

4. **Funções Arrow**: Use-as para funções curtas e anônimas, mas lembre-se que elas não possuem seu próprio `this`.

5. **Template Literals**: Use-os para concatenar strings de forma mais legível: 
   ```javascript
   `Olá, ${nome}! Você tem ${idade} anos.`
   ```

6. **Operador Spread**: Útil para cópias de arrays e objetos:
   ```javascript
   const novoArray = [...arrayAntigo];
   const novoObj = {...objAntigo};
   ```

7. **Métodos de Array**: Prefira métodos como `map`, `filter`, `reduce` em vez de loops manuais:
   ```javascript
   const dobrados = numeros.map(n => n * 2);
   const pares = numeros.filter(n => n % 2 === 0);
   ```

8. **Promises e Async/Await**: Use para operações assíncronas para evitar "callback hell".

9. **Desestruturação**: Use para extrair valores de objetos e arrays de forma concisa.

10. **Módulos**: Divida seu código em módulos para melhor organização e reutilização.