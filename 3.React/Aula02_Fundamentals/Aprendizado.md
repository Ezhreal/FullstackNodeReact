# Seção 2: Fundamentos do React

Esta seção aborda os conceitos fundamentais do React que todo desenvolvedor precisa dominar para construir aplicações eficientes.

## Criando Componentes

Os componentes são os blocos de construção das aplicações React. Existem dois tipos principais:

### Componentes Funcionais

```jsx
function MeuComponente() {
  return <h1>Olá, mundo!</h1>;
}
```

### Componentes de Classe

```jsx
import React, { Component } from "react";

class MeuComponente extends Component {
  render() {
    return <h1>Olá, mundo!</h1>;
  }
}
```

Os componentes funcionais são preferidos na maioria dos casos modernos por serem mais simples e permitirem o uso de Hooks.

## Importação de Componentes

Para reutilizar componentes em diferentes partes da aplicação, usamos o sistema de importação/exportação:

### Exportando um componente

```jsx
// Botao.jsx
function Botao() {
  return <button>Clique Aqui</button>;
}

export default Botao; // Exportação padrão
```

### Importando um componente

```jsx
// App.jsx
import Botao from "./Botao";

function App() {
  return (
    <div>
      <h1>Minha Aplicação</h1>
      <Botao />
    </div>
  );
}
```

Também é possível fazer exportações nomeadas:

```jsx
// componentes.jsx
export const Titulo = () => <h1>Título</h1>;
export const Subtitulo = () => <h2>Subtítulo</h2>;

// Importação
import { Titulo, Subtitulo } from "./componentes";
```

## Conhecendo o JSX

JSX (JavaScript XML) é uma extensão de sintaxe que permite escrever HTML dentro do JavaScript:

### Características do JSX

- Parece HTML, mas é transpilado para JavaScript
- Permite inserir expressões JavaScript usando chaves `{}`
- Usa `className` em vez de `class` (pois `class` é uma palavra reservada em JS)
- Elementos JSX devem ter um elemento pai único ou usar fragmentos `<></>`
- Atributos usam camelCase (ex: `onClick` em vez de `onclick`)

```jsx
const nome = "Maria";
const elemento = (
  <div className="container">
    <h1>Olá, {nome}!</h1>
    <p>A soma é {2 + 2}</p>
  </div>
);
```

## Comentários nos Componentes

Existem diferentes formas de adicionar comentários em componentes React:

### Em JSX

```jsx
function Componente() {
  return (
    <div>
      {/* Este é um comentário dentro do JSX */}
      <h1>Título</h1>
    </div>
  );
}
```

### Em JavaScript

```jsx
function Componente() {
  // Este é um comentário JavaScript fora do JSX
  const valor = 10; // Comentário inline

  /* 
    Comentário de
    múltiplas linhas
  */

  return <div>{valor}</div>;
}
```

## Template Expressions

Template expressions permitem inserir valores JavaScript diretamente no JSX usando chaves `{}`:

```jsx
function Greeting() {
  const nome = "João";
  const idade = 30;
  const auth = true;
  const produtos = ["Mouse", "Teclado", "Monitor"];

  return (
    <div>
      <h2>Bem-vindo, {nome}!</h2>
      <p>Você tem {idade} anos.</p>

      {/* Operador ternário */}
      {auth ? <p>Usuário autenticado</p> : <p>Faça login</p>}

      {/* Renderização de listas */}
      <ul>
        {produtos.map((produto, index) => (
          <li key={index}>{produto}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Hierarquia de Componentes

Os componentes React são organizados em uma estrutura de árvore, onde componentes pais contêm componentes filhos:

```jsx
function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <Section titulo="Seção 1" />
        <Section titulo="Seção 2" />
      </Main>
      <Footer />
    </div>
  );
}

function Main({ children }) {
  return <main>{children}</main>;
}

function Section({ titulo }) {
  return (
    <section>
      <h2>{titulo}</h2>
    </section>
  );
}
```

Esta estrutura hierárquica facilita:

- Reuso de componentes
- Passagem de dados via props
- Composição de interfaces complexas a partir de peças simples

## Eventos

O React oferece uma maneira unificada de lidar com eventos do usuário, usando a sintaxe camelCase:

```jsx
function Botao() {
  function handleClick(e) {
    // 'e' é o objeto de evento sintético do React
    e.preventDefault();
    console.log("Botão clicado!");
  }

  return <button onClick={handleClick}>Clique Aqui</button>;
}
```

Eventos comuns:

- `onClick`: Clique
- `onChange`: Mudança em input
- `onSubmit`: Envio de formulário
- `onMouseOver`: Mouse sobre elemento
- `onKeyDown`: Tecla pressionada

## Funções nos Eventos

Existem várias maneiras de trabalhar com funções em eventos:

### Função nomeada

```jsx
function Componente() {
  function handleClick() {
    console.log("Clicado");
  }

  return <button onClick={handleClick}>Clique</button>;
}
```

### Arrow function inline

```jsx
function Componente() {
  return <button onClick={() => console.log("Clicado")}>Clique</button>;
}
```

### Passando parâmetros

```jsx
function Componente() {
  function handleClick(id) {
    console.log(`Item ${id} clicado`);
  }

  return <button onClick={() => handleClick(5)}>Clique no item 5</button>;
}
```

## Função de Renderização

Todo componente React tem uma função de renderização que determina o que será exibido na tela:

### Em componentes funcionais

A própria função do componente é a função de renderização:

```jsx
function MeuComponente() {
  // Lógica do componente

  // O que for retornado será renderizado
  return <div>Conteúdo</div>;
}
```

### Em componentes de classe

O método `render()` cumpre esse papel:

```jsx
class MeuComponente extends React.Component {
  // Lógica do componente

  render() {
    // O que for retornado será renderizado
    return <div>Conteúdo</div>;
  }
}
```

A função de renderização deve:

- Sempre retornar JSX ou `null`
- Ser pura (mesmo input sempre gera mesmo output)
- Não causar efeitos colaterais (como mudar estado, fazer chamadas API)
- Executar rapidamente (lógica pesada deve ir para outros lugares)

## Próximos Passos

Após entender esses fundamentos, você estará pronto para avançar para conceitos mais complexos como:

- Estado (useState)
- Efeitos colaterais (useEffect)
- Contexto (useContext)
- Gerenciamento de formulários
- Roteamento
- Integração com APIs
