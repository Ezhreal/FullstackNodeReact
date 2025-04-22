# XMLHttpRequest vs Fetch API: Guia Comparativo

## Introdução

No desenvolvimento web moderno, a comunicação assíncrona com servidores é fundamental para criar aplicações dinâmicas e responsivas. Duas tecnologias principais são utilizadas para isso: o tradicional XMLHttpRequest (XHR) e a mais moderna Fetch API. Este documento explora ambas as tecnologias, suas diferenças, casos de uso e fornece exemplos práticos.

## XMLHttpRequest (XHR)

### O que é XMLHttpRequest?

XMLHttpRequest é um objeto JavaScript que permite que os navegadores realizem solicitações HTTP para servidores web de forma assíncrona. Foi inicialmente desenvolvido pela Microsoft para o Internet Explorer e depois adotado por outros navegadores.

### Características principais:

- Permite comunicação assíncrona com o servidor
- Não requer recarregamento completo da página
- Suporta diferentes tipos de dados (não apenas XML, apesar do nome)
- Possui suporte amplo em navegadores antigos
- É a base tecnológica do padrão AJAX

### Quando usar XMLHttpRequest:

- Em aplicações que precisam suportar navegadores mais antigos
- Em código legado que já utiliza XHR
- Quando você precisa monitorar o progresso de upload/download

### Exemplo básico de XMLHttpRequest:

```javascript
// Criando uma instância do objeto XMLHttpRequest
const xhr = new XMLHttpRequest();

// Configurando a requisição
xhr.open('GET', 'https://api.exemplo.com/dados', true);

// Definindo o que acontece quando a resposta é recebida
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {  // Requisição completada
    if (xhr.status === 200) {  // Status OK
      console.log(JSON.parse(xhr.responseText));
    } else {
      console.error('Erro na requisição:', xhr.status);
    }
  }
};

// Enviando a requisição
xhr.send();
```

### Exemplo de POST com XMLHttpRequest:

```javascript
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api.exemplo.com/enviar', true);

// Definindo cabeçalhos
xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

// Configurando handlers
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 201) {  // Created
      console.log('Dados enviados com sucesso!');
      console.log(JSON.parse(xhr.responseText));
    } else {
      console.error('Erro ao enviar dados:', xhr.status);
    }
  }
};

// Preparando os dados
const dados = {
  nome: 'João Silva',
  email: 'joao@exemplo.com',
  idade: 30
};

// Enviando a requisição com os dados
xhr.send(JSON.stringify(dados));
```

### Vantagens do XMLHttpRequest:

- Suporte universal em navegadores
- Manipulação detalhada de eventos de progresso de upload/download
- API bem estabelecida com ampla documentação

### Desvantagens do XMLHttpRequest:

- Sintaxe mais verbosa e complexa
- Callbacks aninhados podem levar a "callback hell"
- Tratamento de erros mais complicado
- Não trabalha nativamente com Promises

## Fetch API

### O que é Fetch API?

Fetch API é uma interface moderna para realizar requisições HTTP em JavaScript. Foi projetada para ser mais poderosa e flexível que o XMLHttpRequest, oferecendo uma sintaxe mais limpa baseada em Promises.

### Características principais:

- Baseada em Promises, facilitando operações assíncronas
- Sintaxe mais simples e intuitiva
- Parte do JavaScript moderno
- Melhor tratamento de erros
- Suporte nativo a recursos modernos como Service Workers

### Quando usar Fetch API:

- Em novos projetos web
- Quando você não precisa suportar navegadores muito antigos
- Quando prefere trabalhar com Promises e async/await
- Para código mais limpo e manutenível

### Exemplo básico de Fetch API:

```javascript
// Fazendo uma requisição GET simples
fetch('https://api.exemplo.com/dados')
  .then(response => {
    // Verificando se a requisição foi bem sucedida
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    // Convertendo a resposta para JSON
    return response.json();
  })
  .then(data => {
    // Trabalhando com os dados
    console.log(data);
  })
  .catch(error => {
    // Tratando erros
    console.error('Erro na requisição:', error);
  });
```

### Exemplo de Fetch com async/await:

```javascript
async function buscarDados() {
  try {
    const response = await fetch('https://api.exemplo.com/dados');
    
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    
    const dados = await response.json();
    console.log(dados);
    return dados;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
}

// Chamando a função
buscarDados();
```

### Exemplo de POST com Fetch API:

```javascript
const dados = {
  nome: 'Maria Santos',
  email: 'maria@exemplo.com',
  idade: 28
};

fetch('https://api.exemplo.com/enviar', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(dados)
})
.then(response => {
  if (!response.ok) {
    throw new Error(`Erro HTTP: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  console.log('Sucesso:', data);
})
.catch(error => {
  console.error('Erro:', error);
});
```

### Vantagens da Fetch API:

- Sintaxe mais limpa e moderna
- Baseada em Promises, permitindo uso de async/await
- Reduz a necessidade de bibliotecas externas para requisições HTTP
- Melhor integração com outras APIs modernas do JavaScript
- Fluxo de controle mais intuitivo para requisições em cadeia

### Desvantagens da Fetch API:

- Não suportada em navegadores muito antigos (IE11 e anteriores)
- Não aborta requisições nativamente em versões mais antigas
- Não reporta progresso de upload/download por padrão
- Não rejeita Promises em caso de erros HTTP (apenas para erros de rede)

## Comparação Direta

| Característica | XMLHttpRequest | Fetch API |
|----------------|----------------|-----------|
| Sintaxe | Mais verbosa, baseada em callbacks | Mais limpa, baseada em Promises |
| Suporte a navegadores | Todos, incluindo legados | Navegadores modernos (>IE11) |
| Tratamento de erros | Via verificação de status | Via Promises/try-catch |
| Progresso de download | Suportado nativamente | Requer uso de ReadableStream |
| Cancelamento de requisições | Direto via xhr.abort() | Requer AbortController |
| Timeout | Configurável diretamente | Requer implementação manual |
| Interceptação de requisições | Mais complexa | Mais simples com Promises |

## Exemplo prático: Busca de dados de um usuário

### Com XMLHttpRequest:

```javascript
function buscarUsuarioXHR(id) {
  const xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    
    if (xhr.status === 200) {
      const usuario = JSON.parse(xhr.responseText);
      exibirUsuario(usuario);
    } else if (xhr.status === 404) {
      mostrarErro('Usuário não encontrado');
    } else {
      mostrarErro(`Erro ao buscar usuário: ${xhr.status}`);
    }
  };
  
  xhr.open('GET', `https://api.exemplo.com/usuarios/${id}`, true);
  xhr.send();
}

// Uso
buscarUsuarioXHR(123);
```

### Com Fetch API:

```javascript
function buscarUsuarioFetch(id) {
  fetch(`https://api.exemplo.com/usuarios/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        throw new Error('Usuário não encontrado');
      } else {
        throw new Error(`Erro ao buscar usuário: ${response.status}`);
      }
    })
    .then(usuario => exibirUsuario(usuario))
    .catch(erro => mostrarErro(erro.message));
}

// Uso
buscarUsuarioFetch(123);
```

### Com Fetch API e async/await:

```javascript
async function buscarUsuario(id) {
  try {
    const response = await fetch(`https://api.exemplo.com/usuarios/${id}`);
    
    if (response.ok) {
      const usuario = await response.json();
      exibirUsuario(usuario);
    } else if (response.status === 404) {
      mostrarErro('Usuário não encontrado');
    } else {
      mostrarErro(`Erro ao buscar usuário: ${response.status}`);
    }
  } catch (erro) {
    mostrarErro(`Erro de rede: ${erro.message}`);
  }
}

// Uso
buscarUsuario(123);
```

## Conclusão

Embora o XMLHttpRequest tenha sido a tecnologia padrão para comunicação assíncrona no navegador por muitos anos, a Fetch API está se tornando a escolha preferida para novos projetos devido à sua sintaxe mais limpa, suporte a Promises e melhor integração com outras APIs modernas do JavaScript.

No entanto, o XMLHttpRequest ainda é relevante, especialmente em projetos que precisam dar suporte a navegadores mais antigos ou quando recursos específicos como monitoramento detalhado de progresso são necessários.

A escolha entre XMLHttpRequest e Fetch API deve ser baseada nos requisitos específicos do seu projeto, incluindo o suporte a navegadores, complexidade das operações e familiaridade da equipe com as tecnologias.

## Recursos adicionais

- [MDN Web Docs: Usando XMLHttpRequest](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [MDN Web Docs: Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)
- [MDN Web Docs: Usando Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)