# Seção 3: Avançando em React

Esta seção aborda conceitos mais avançados do React, apresentando técnicas essenciais para o desenvolvimento de aplicações mais complexas e interativas.

## Imagens Públicas no React

Para utilizar imagens públicas em um projeto React, você pode armazená-las na pasta `public` do seu projeto:

- As imagens na pasta `public` são acessíveis diretamente pelo navegador
- São referenciadas a partir da raiz do projeto
- Não são processadas pelo bundler (como Webpack ou Vite)

```jsx
function ImagemPublica() {
  return (
    <div>
      <h2>Imagem da pasta public:</h2>
      <img src="/logo.png" alt="Logo" />
    </div>
  );
}
```

Vantagens:

- Fácil implementação
- Bom para arquivos grandes que não precisam ser processados
- Útil para imagens que mudam frequentemente

Desvantagens:

- Não se beneficiam da otimização do bundler
- Podem causar problemas com caminhos em builds de produção

## Imagens em src

Importar imagens diretamente no código fonte é uma abordagem mais robusta:

```jsx
// Importar a imagem
import logoImg from "../assets/logo.png";

function ImagemSrc() {
  return (
    <div>
      <h2>Imagem importada do src:</h2>
      <img src={logoImg} alt="Logo" />
    </div>
  );
}
```

Vantagens:

- As imagens são processadas pelo bundler (otimizadas)
- O caminho é resolvido automaticamente (evita problemas de build)
- Melhor integração com TypeScript
- Melhor gerenciamento de recursos

Este método é preferível para imagens que fazem parte da interface do usuário e precisam ser carregadas junto com o componente.

## O que são Hooks?

Hooks são funções especiais que permitem usar recursos do React em componentes funcionais:

- Introduzidos na versão 16.8 do React
- Permitem usar estado e outros recursos do React sem escrever componentes de classe
- Todos os hooks começam com "use" (convenção importante)

Os hooks mais comuns são:

- `useState`: Gerenciar estado local
- `useEffect`: Lidar com efeitos colaterais (ciclo de vida)
- `useContext`: Acessar o Context API
- `useReducer`: Estado complexo com reducer
- `useRef`: Referências a elementos DOM

Os hooks seguem duas regras importantes:

1. Só podem ser chamados no nível superior de componentes ou hooks personalizados
2. Não podem ser chamados dentro de loops, condições ou funções aninhadas

## useState na Prática

O hook `useState` permite adicionar estado local a componentes funcionais:

```jsx
import { useState } from "react";

function Contador() {
  // Declara uma variável de estado chamada "contador"
  // e uma função para atualizá-la chamada "setContador"
  const [contador, setContador] = useState(0); // O valor 0 é o estado inicial

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      <button onClick={() => setContador(contador - 1)}>Diminuir</button>
    </div>
  );
}
```

Características importantes:

- A função `useState` retorna um array com dois elementos:
  1. O valor atual do estado
  2. Uma função para atualizar o estado
- Podemos usar desestruturação de array para acessar esses valores
- Podemos ter múltiplos estados em um componente
- A atualização do estado causa uma nova renderização do componente

## Renderização de Listas

Para renderizar listas de elementos em React, usamos o método `map()`:

```jsx
import { useState } from "react";

function ListaUsuarios() {
  const [usuarios] = useState([
    { id: 1, nome: "João", email: "joao@exemplo.com" },
    { id: 2, nome: "Maria", email: "maria@exemplo.com" },
    { id: 3, nome: "Pedro", email: "pedro@exemplo.com" },
  ]);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <strong>{usuario.nome}</strong> - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## A Propriedade key

A propriedade `key` é fundamental ao renderizar listas em React:

- Ajuda o React a identificar quais itens foram alterados, adicionados ou removidos
- Deve ser única entre elementos irmãos (não precisa ser única globalmente)
- Geralmente usa-se um ID único do seu conjunto de dados
- Não use índices do array como keys se a ordem dos itens pode mudar

```jsx
// Bom: usando IDs estáveis
{
  items.map((item) => <li key={item.id}>{item.nome}</li>);
}

// Evite: usando índices quando a lista pode mudar
{
  items.map((item, index) => <li key={index}>{item.nome}</li>);
}
```

Por que as keys são importantes:

1. Melhoram o desempenho na renderização de listas
2. Ajudam a manter o estado dos componentes quando a lista é reordenada
3. Previnem comportamentos estranhos na interface do usuário

## Previous State

Ao atualizar o estado baseado no valor anterior, devemos usar a forma funcional do `setState`:

```jsx
function Contador() {
  const [contador, setContador] = useState(0);

  // Forma incorreta (pode causar problemas com múltiplas atualizações)
  const incrementarIncorreto = () => {
    setContador(contador + 1);
  };

  // Forma correta usando o previous state
  const incrementarCorreto = () => {
    setContador((prevContador) => prevContador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarCorreto}>Incrementar</button>
    </div>
  );
}
```

Razões para usar o previous state:

- Garante que você sempre está trabalhando com o valor mais recente do estado
- Evita problemas com múltiplas atualizações em sequência
- Essencial quando uma atualização depende do valor anterior

Por exemplo, em um cenário onde você precisa incrementar o contador duas vezes:

```jsx
// Problema: ambas as chamadas usam o mesmo valor inicial
const incrementarDuasVezes = () => {
  setContador(contador + 1); // Se contador for 0, isso faz 0 + 1 = 1
  setContador(contador + 1); // Se contador for 0, isso também faz 0 + 1 = 1
};

// Solução: uso do previous state
const incrementarDuasVezesCorreto = () => {
  setContador((prev) => prev + 1); // Se contador for 0, isso faz 0 + 1 = 1
  setContador((prev) => prev + 1); // Agora isso usa 1 + 1 = 2
};
```
