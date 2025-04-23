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

## Renderização Condicional

A renderização condicional permite mostrar ou ocultar elementos na interface com base em states e condições:

### 1. Usando o operador lógico &&

Este método é usado quando você quer mostrar algo apenas quando uma condição é verdadeira:

```jsx
import { useState } from "react";

function ExemploAnd() {
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  return (
    <div>
      <button onClick={() => setMostrarMensagem(!mostrarMensagem)}>
        {mostrarMensagem ? "Ocultar" : "Mostrar"}
      </button>

      {/* Renderização condicional com && */}
      {mostrarMensagem && (
        <div>Esta mensagem só aparece quando o state é true!</div>
      )}
    </div>
  );
}
```

### 2. Usando o operador ternário

Este método é útil quando você tem duas opções alternativas:

```jsx
import { useState } from "react";

function ExemploTernario() {
  const [status, setStatus] = useState("pendente");

  return (
    <div>
      <button onClick={() => setStatus("aprovado")}>Aprovar</button>
      <button onClick={() => setStatus("rejeitado")}>Rejeitar</button>

      {/* Renderização condicional com operador ternário */}
      {status === "aprovado" ? (
        <p>Status: Aprovado ✅</p>
      ) : status === "rejeitado" ? (
        <p>Status: Rejeitado ❌</p>
      ) : (
        <p>Status: Pendente ⏳</p>
      )}
    </div>
  );
}
```

### 3. Usando funções de renderização

Para lógicas mais complexas, podemos encapsular a renderização em funções:

```jsx
import { useState } from "react";

function ExemploFuncao() {
  const [etapa, setEtapa] = useState(1);

  // Função para renderização condicional
  const renderizarEtapa = () => {
    switch (etapa) {
      case 1:
        return <div>Etapa 1: Informações Pessoais</div>;
      case 2:
        return <div>Etapa 2: Informações de Contato</div>;
      case 3:
        return <div>Etapa 3: Revisão</div>;
      default:
        return <div>Etapa não encontrada</div>;
    }
  };

  return (
    <div>
      <button onClick={() => setEtapa(etapa > 1 ? etapa - 1 : 1)}>
        Anterior
      </button>
      <button onClick={() => setEtapa(etapa < 3 ? etapa + 1 : 3)}>
        Próximo
      </button>

      {/* Chamada da função de renderização */}
      {renderizarEtapa()}
    </div>
  );
}
```

## Introdução às Props

Props (abreviação de "properties") são a forma como os componentes React recebem dados de seus componentes pais:

```jsx
// Componente pai
function App() {
  return (
    <div>
      <Saudacao nome="Maria" />
    </div>
  );
}

// Componente filho recebendo props
function Saudacao(props) {
  return <h1>Olá, {props.nome}!</h1>;
}
```

Características importantes das props:

- São passadas de cima para baixo (do componente pai para o filho)
- São somente leitura (o componente filho não deve modificá-las)
- Podem ser de qualquer tipo: strings, números, booleanos, arrays, objetos, funções
- Permitem a composição e reuso de componentes

## Destructuring em Props

Podemos usar desestruturação para acessar as props de forma mais limpa:

```jsx
// Sem destructuring
function Perfil(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <p>Idade: {props.idade}</p>
      <p>Profissão: {props.profissao}</p>
    </div>
  );
}

// Com destructuring
function Perfil({ nome, idade, profissao }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  );
}

// Uso do componente
function App() {
  return <Perfil nome="Carlos" idade={28} profissao="Desenvolvedor" />;
}
```

Vantagens do destructuring:

- Código mais limpo e legível
- Fácil definição de valores padrão
- Permite renomear props quando necessário

## Reaproveitamento de Componentes

O reaproveitamento de componentes é uma das principais vantagens do React. Com props, podemos criar componentes genéricos e reutilizáveis:

```jsx
function Botao({ texto, cor, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: cor || "#007bff",
        color: "white",
        padding: "10px 15px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {texto}
    </button>
  );
}

// Usando o componente Botao em diferentes contextos
function App() {
  const salvar = () => alert("Salvo com sucesso!");
  const cancelar = () => alert("Operação cancelada");

  return (
    <div>
      <h1>Formulário</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <Botao texto="Salvar" onClick={salvar} />
        <Botao texto="Cancelar" cor="#dc3545" onClick={cancelar} />
      </div>
    </div>
  );
}
```

## Renderização de Lista em Componente

Podemos criar componentes específicos para renderizar listas, tornando nossa aplicação mais modular:

```jsx
// Componente para renderizar um item da lista
function ItemUsuario({ usuario }) {
  return (
    <li
      style={{
        marginBottom: "10px",
        padding: "10px",
        border: "1px solid #ddd",
      }}
    >
      <strong>{usuario.nome}</strong>
      <p>{usuario.email}</p>
      <small>ID: {usuario.id}</small>
    </li>
  );
}

// Componente para renderizar a lista completa
function ListaUsuarios({ usuarios }) {
  return (
    <div>
      <h2>Lista de Usuários</h2>
      {usuarios.length === 0 ? (
        <p>Nenhum usuário encontrado.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {usuarios.map((usuario) => (
            <ItemUsuario key={usuario.id} usuario={usuario} />
          ))}
        </ul>
      )}
    </div>
  );
}

// Uso do componente de lista
function App() {
  const [usuarios] = useState([
    { id: 1, nome: "João", email: "joao@exemplo.com" },
    { id: 2, nome: "Maria", email: "maria@exemplo.com" },
    { id: 3, nome: "Pedro", email: "pedro@exemplo.com" },
  ]);

  return (
    <div>
      <h1>Sistema de Usuários</h1>
      <ListaUsuarios usuarios={usuarios} />
    </div>
  );
}
```

## Fragments

Fragments permitem agrupar elementos filhos sem adicionar nós extras ao DOM:

```jsx
// Sem Fragment (adiciona uma div extra ao DOM)
function Exemplo() {
  return (
    <div>
      <h1>Título</h1>
      <p>Parágrafo 1</p>
      <p>Parágrafo 2</p>
    </div>
  );
}

// Com Fragment (sintaxe explícita)
function ExemploComFragment() {
  return (
    <React.Fragment>
      <h1>Título</h1>
      <p>Parágrafo 1</p>
      <p>Parágrafo 2</p>
    </React.Fragment>
  );
}

// Com Fragment (sintaxe abreviada)
function ExemploComFragmentAbreviado() {
  return (
    <>
      <h1>Título</h1>
      <p>Parágrafo 1</p>
      <p>Parágrafo 2</p>
    </>
  );
}
```

Benefícios dos Fragments:

- Evitam nós extras no DOM
- Melhoram a performance
- São especialmente úteis em situações como tabelas, onde elementos como `<div>` não são permitidos como filhos diretos de `<tr>`

## A Prop Children

A prop `children` permite passar componentes ou elementos como filhos para outros componentes:

```jsx
function Card({ titulo, children }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px 0",
      }}
    >
      <h3>{titulo}</h3>
      <div>{children}</div>
    </div>
  );
}

// Uso do componente com children
function App() {
  return (
    <div>
      <Card titulo="Informações">
        <p>Este é um conteúdo passado como children.</p>
        <button>Clique aqui</button>
      </Card>

      <Card titulo="Estatísticas">
        <ul>
          <li>Usuários: 120</li>
          <li>Visitas: 3500</li>
          <li>Conversões: 8%</li>
        </ul>
      </Card>
    </div>
  );
}
```

Vantagens da prop children:

- Permite composição flexível de componentes
- Facilita a criação de componentes wrapper ou de layout
- Torna a estrutura da aplicação mais declarativa e intuitiva

## Função como Prop

Podemos passar funções como props para permitir que componentes filhos comuniquem-se com seus pais:

```jsx
function FormularioContato({ onEnviar }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Chamando a função passada como prop
    onEnviar({ nome, email, mensagem });

    // Limpando o formulário
    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Mensagem:</label>
        <textarea
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

// Uso do componente com função como prop
function App() {
  const processarEnvio = (dados) => {
    console.log("Dados recebidos:", dados);
    alert(`Mensagem enviada por ${dados.nome}`);
    // Aqui você normalmente enviaria os dados para um servidor
  };

  return (
    <div>
      <h1>Entre em contato</h1>
      <FormularioContato onEnviar={processarEnvio} />
    </div>
  );
}
```

## State Lift (Elevação de Estado)

State lift é uma técnica para compartilhar estado entre componentes irmãos, elevando o estado para o componente pai comum:

```jsx
function CaixaDeSelecao({ item, selecionado, onToggle }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={selecionado}
          onChange={() => onToggle(item.id)}
        />
        {item.nome}
      </label>
    </div>
  );
}

function ListaDeSelecao({ itens, itensSelecionados, onToggleItem }) {
  return (
    <div>
      {itens.map((item) => (
        <CaixaDeSelecao
          key={item.id}
          item={item}
          selecionado={itensSelecionados.includes(item.id)}
          onToggle={onToggleItem}
        />
      ))}
    </div>
  );
}

function ResumoSelecao({ itens, itensSelecionados }) {
  const itensFiltrados = itens.filter((item) =>
    itensSelecionados.includes(item.id)
  );

  return (
    <div>
      <h3>Itens Selecionados ({itensFiltrados.length})</h3>
      {itensFiltrados.length === 0 ? (
        <p>Nenhum item selecionado.</p>
      ) : (
        <ul>
          {itensFiltrados.map((item) => (
            <li key={item.id}>{item.nome}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Componente pai que gerencia o estado compartilhado
function App() {
  const [itens] = useState([
    { id: 1, nome: "Item 1" },
    { id: 2, nome: "Item 2" },
    { id: 3, nome: "Item 3" },
    { id: 4, nome: "Item 4" },
  ]);

  const [itensSelecionados, setItensSelecionados] = useState([]);

  const handleToggleItem = (itemId) => {
    setItensSelecionados((prevSelecionados) => {
      if (prevSelecionados.includes(itemId)) {
        // Remove o item se já estiver selecionado
        return prevSelecionados.filter((id) => id !== itemId);
      } else {
        // Adiciona o item se não estiver selecionado
        return [...prevSelecionados, itemId];
      }
    });
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div>
        <h3>Lista de Itens</h3>
        <ListaDeSelecao
          itens={itens}
          itensSelecionados={itensSelecionados}
          onToggleItem={handleToggleItem}
        />
      </div>

      <div>
        <ResumoSelecao itens={itens} itensSelecionados={itensSelecionados} />
      </div>
    </div>
  );
}
```

Quando usar State Lift:

- Quando dois ou mais componentes precisam compartilhar o mesmo estado
- Quando você precisa que um componente reflita mudanças em outro componente
- Quando a comunicação precisa fluir tanto para cima quanto para baixo na árvore de componentes

# Desafio: Sistema de Lista de Compras Interativo

## Objetivo

Criar um sistema de lista de compras que permita aos usuários adicionar itens, marcar como comprados, filtrar por categorias e exibir um resumo das compras.

## Requisitos Funcionais

1. Adicionar novos itens com nome, categoria e quantidade
2. Marcar itens como comprados/não comprados
3. Filtrar itens por categoria e status
4. Exibir resumo do total de itens e itens comprados

## Componentes a Serem Criados

### 1. `FormularioItem.js`

- Formulário para adicionar novos itens
- Deve receber uma função como prop para adicionar o item à lista principal

### 2. `ItemLista.js`

- Componente para exibir um único item da lista
- Deve receber props com os dados do item e funções para alterá-lo

### 3. `ListaCompras.js`

- Componente para renderizar a lista de itens usando map()
- Deve usar o componente ItemLista para cada item

### 4. `Filtros.js`

- Componente com opções para filtrar a lista
- Deve passar o estado dos filtros para o componente pai

### 5. `Resumo.js`

- Componente para mostrar estatísticas da lista
- Deve mostrar total de itens e porcentagem de itens comprados

### 6. `App.js`

- Componente principal que integra todos os outros
- Deve gerenciar o estado principal e as funções para manipulá-lo

## Conceitos a Serem Aplicados

- Gerenciamento de estado com useState
- Props (incluindo destructuring)
- Função como prop
- State lift (elevação de estado)
- Children prop (opcional)
- Renderização condicional
- Renderização de listas com map() e keys
- Previous state em atualizações de estado
- Fragments

## Dados Sugeridos

```jsx
const categorias = [
  "Frutas",
  "Laticínios",
  "Padaria",
  "Carnes",
  "Limpeza",
  "Outros",
];

const itensIniciais = [
  { id: 1, nome: "Maçã", categoria: "Frutas", quantidade: 5, comprado: false },
  {
    id: 2,
    nome: "Leite",
    categoria: "Laticínios",
    quantidade: 2,
    comprado: true,
  },
  { id: 3, nome: "Pão", categoria: "Padaria", quantidade: 1, comprado: false },
];
```

## Dicas de Implementação

1. Comece pelo componente `App.js` e planeje o estado principal
2. Implemente os componentes individuais um a um
3. Teste a aplicação após cada componente implementado
4. Use o destructuring para acessar as props
5. Lembre-se de usar o previous state ao atualizar arrays ou objetos
6. Use renderização condicional para mostrar/ocultar elementos baseados em filtros

## Bônus (Opcional)

- Adicionar a funcionalidade de editar itens existentes
- Persistência local usando localStorage (se já tiver conhecimento)
- Adicionar validação ao formulário
- Design responsivo usando CSS básico

Este desafio engloba todos os conceitos que você estudou até agora e não inclui conceitos avançados que você ainda não aprendeu. Cada componente tem um propósito específico e trabalha em conjunto para criar uma aplicação completa.
