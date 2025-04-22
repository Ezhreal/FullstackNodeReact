# Introdução ao React

Este documento apresenta os conceitos básicos necessários para começar a desenvolver aplicações com React.

## O que é React?

React é uma biblioteca JavaScript de código aberto mantida pelo Facebook (Meta) para construir interfaces de usuário (UI). Diferente de frameworks completos, o React foca especificamente na camada de visualização de aplicações web. Suas principais características incluem:

- **Componentização**: Todo o código é organizado em componentes reutilizáveis
- **Virtual DOM**: Sistema que otimiza atualizações na interface do usuário
- **Fluxo de dados unidirecional**: Facilita o rastreamento de mudanças nos dados
- **JSX**: Extensão de sintaxe que permite escrever HTML dentro do JavaScript

## O que é Node.js?

Node.js é um ambiente de execução JavaScript baseado no motor V8 do Google Chrome que permite executar código JavaScript fora do navegador. No desenvolvimento React, o Node.js é essencial pois:

- Executa ferramentas de build e desenvolvimento
- Permite gerenciar dependências via npm
- Oferece um ambiente de desenvolvimento local
- Facilita a criação de aplicações full-stack JavaScript

## O que é npm?

npm (Node Package Manager) é o gerenciador de pacotes padrão do Node.js. Suas funções principais no desenvolvimento React são:

- Instalar e gerenciar bibliotecas e dependências
- Executar scripts definidos no package.json
- Gerenciar versões de pacotes
- Compartilhar código reutilizável

Os comandos mais comuns incluem `npm install`, `npm start`, `npm run build` e `npm test`.

## Instalação do Node.js

### Windows

1. Acesse o site oficial nodejs.org
2. Baixe o instalador LTS (Long Term Support)
3. Execute o instalador e siga as instruções
4. Verifique a instalação abrindo o Prompt de Comando e digitando `node -v` e `npm -v`

### Linux

1. Abra o Terminal
2. Use o gerenciador de pacotes da sua distribuição:

   ```
   # Ubuntu/Debian
   sudo apt update
   sudo apt install nodejs npm

   # Fedora
   sudo dnf install nodejs
   ```

3. Ou use o NVM (Node Version Manager) para facilitar a gestão de versões
4. Verifique a instalação com `node -v` e `npm -v`

## Instalação do VS Code

O Visual Studio Code é um editor de código altamente recomendado para desenvolvimento React:

1. Acesse code.visualstudio.com
2. Baixe a versão para seu sistema operacional
3. Execute o instalador
4. Após instalação, abra o VS Code

## Hello World em React

Para criar seu primeiro projeto React, você pode utilizar o Create React App ou o Vite:

### Usando Vite (Recomendado)

```bash
npm create vite@latest meu-primeiro-app -- --template react
cd meu-primeiro-app
npm install
npm run dev
```

## Criação de projetos com Vite

O Vite é uma ferramenta de build moderna que oferece:

- Inicialização de projeto muito mais rápida que Create React App
- Hot Module Replacement (HMR) instantâneo
- Configuração mínima para começar

Para criar um projeto:

```bash
npm create vite@latest nome-do-projeto -- --template react
```

Opções de template incluem:

- react (JavaScript)
- react-ts (TypeScript)

## Estrutura inicial do React

Um projeto React típico contém:

- **node_modules/**: Pacotes instalados
- **public/**: Arquivos estáticos acessíveis publicamente
- **src/**: Código fonte da aplicação
  - **components/**: Componentes React reutilizáveis
  - **App.jsx**: Componente principal
  - **main.jsx**: Ponto de entrada da aplicação
- **package.json**: Configurações do projeto e dependências
- **vite.config.js**: Configurações do Vite

## Extensões úteis para React no VS Code

Para melhorar sua produtividade:

- **ES7+ React/Redux/React-Native snippets**: Atalhos para criar componentes
- **Prettier**: Formatação de código
- **ESLint**: Verificação de qualidade de código
- **Auto Import**: Importações automáticas
- **Color Highlight**: Visualização de cores no código

## Configurando o Emmet para o React

Para configurar o Emmet no VS Code para reconhecer JSX:

1. Abra as configurações (Ctrl+,)
2. Procure por "emmet"
3. Adicione às configurações:
   ```json
   "emmet.includeLanguages": {
     "javascript": "javascriptreact",
     "typescript": "typescriptreact"
   }
   ```

## Dicas para aproveitar ao máximo

- Pratique criando pequenos projetos
- Consulte a documentação oficial do React
- Utilize o DevTools para React no navegador
- Participe de comunidades (Discord, Reddit, Stack Overflow)
- Faça código regularmente para fixar o aprendizado

## Recursos adicionais

- [Documentação oficial do React](https://reactjs.org/docs/getting-started.html)
- [Documentação do Vite](https://vitejs.dev/guide/)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
