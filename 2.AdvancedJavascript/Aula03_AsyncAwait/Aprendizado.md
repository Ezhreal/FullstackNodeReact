## 4. Async/Await

Async/await é uma sintaxe que torna o código assíncrono mais simples de ler e escrever, construída sobre Promises.

### 4.1 Funções Async

Uma função declarada com `async` sempre retorna uma Promise.

```javascript
async function buscarDados() {
  return 'Dados obtidos';  // Automaticamente envolvido em Promise.resolve()
}

// Equivalente a:
function buscarDados() {
  return Promise.resolve('Dados obtidos');
}

// Uso:
buscarDados().then(dados => console.log(dados));
```

### 4.2 Await

O operador `await` pausa a execução da função async até que uma Promise seja resolvida.

```javascript
async function buscarUsuarioCompleto(id) {
  try {
    const usuario = await buscarUsuario(id);         // Espera pela Promise
    const pedidos = await buscarPedidos(usuario.id); // Espera pela Promise
    const total = await calcularTotal(pedidos);      // Espera pela Promise
    
    return {
      ...usuario,
      pedidos,
      totalGasto: total
    };
  } catch (erro) {
    console.error('Erro:', erro);
    throw erro; // Repropaga o erro
  }
}

// Usando a função async
buscarUsuarioCompleto(123)
  .then(dadosCompletos => console.log(dadosCompletos))
  .catch(erro => console.error('Falha ao buscar dados completos:', erro));
```

### 4.3 Tratamento de Erros com Try/Catch

```javascript
async function processarArquivo() {
  try {
    const dados = await lerArquivo('dados.json');
    const resultado = await processarDados(dados);
    await salvarResultado(resultado);
    return 'Processamento concluído com sucesso';
  } catch (erro) {
    console.error('Falha no processamento:', erro);
    await registrarErro(erro);
    throw new Error(`Não foi possível processar o arquivo: ${erro.message}`);
  } finally {
    await limparArquivosTemporarios();
    console.log('Limpeza finalizada');
  }
}
```

### 4.4 Execução Paralela com Async/Await

```javascript
async function carregarDadosDoApp() {
  try {
    // Inicia todas as requisições em paralelo
    const usuarioPromise = buscarUsuario(123);
    const produtosPromise = buscarProdutos();
    const configPromise = buscarConfiguracao();
    
    // Aguarda todas as Promises em paralelo
    const [usuario, produtos, config] = await Promise.all([
      usuarioPromise, produtosPromise, configPromise
    ]);
    
    return { usuario, produtos, config };
  } catch (erro) {
    console.error('Falha ao carregar dados:', erro);
    throw erro;
  }
}
```

## 5. Padrões Comuns

### 5.1 Retrying (Repetir em caso de falha)

```javascript
async function buscarComRetry(url, tentativas = 3, intervalo = 1000) {
  try {
    return await fetch(url).then(res => res.json());
  } catch (erro) {
    if (tentativas === 1) throw erro;
    
    console.log(`Tentativa falhou, tentando novamente em ${intervalo}ms...`);
    await new Promise(r => setTimeout(r, intervalo));
    return buscarComRetry(url, tentativas - 1, intervalo * 2);
  }
}

buscarComRetry('https://api.exemplo.com/dados')
  .then(dados => console.log('Sucesso:', dados))
  .catch(erro => console.error('Todas as tentativas falharam:', erro));
```

### 5.2 Timeout para Promises

```javascript
function comTimeout(promise, ms) {
  const timeout = new Promise((_, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id);
      reject(new Error(`Timeout após ${ms}ms`));
    }, ms);
  });

  return Promise.race([promise, timeout]);
}

// Uso
comTimeout(fetch('https://api.exemplo.com/dados'), 5000)
  .then(resposta => resposta.json())
  .then(dados => console.log(dados))
  .catch(erro => console.error('Erro ou timeout:', erro.message));
```

### 5.3 Conversão de Callbacks para Promises

```javascript
// Função com callback tradicional
function lerArquivoCallback(caminho, callback) {
  fs.readFile(caminho, 'utf8', callback);
}

// Versão com Promise
function lerArquivoPromise(caminho) {
  return new Promise((resolve, reject) => {
    fs.readFile(caminho, 'utf8', (erro, conteudo) => {
      if (erro) reject(erro);
      else resolve(conteudo);
    });
  });
}

// Versão com async/await
async function lerArquivo(caminho) {
  try {
    return await lerArquivoPromise(caminho);
  } catch (erro) {
    console.error(`Erro ao ler ${caminho}:`, erro);
    throw erro;
  }
}
```

### 5.4 Limitação de Concorrência

```javascript
async function processarComLimite(itens, funcaoProcessamento, limiteConcorrencia = 3) {
  const resultados = [];
  const emProcessamento = new Set();
  
  for (const item of itens) {
    if (emProcessamento.size >= limiteConcorrencia) {
      // Espera qualquer Promise atual completar antes de continuar
      await Promise.race(emProcessamento);
    }
    
    const promise = funcaoProcessamento(item)
      .then(resultado => {
        resultados.push(resultado);
        emProcessamento.delete(promise);
        return resultado;
      })
      .catch(erro => {
        console.error(`Erro ao processar ${item}:`, erro);
        emProcessamento.delete(promise);
        throw erro;
      });
    
    emProcessamento.add(promise);
  }
  
  // Espera todas as Promises restantes completarem
  await Promise.all(emProcessamento);
  return resultados;
}

// Exemplo de uso
const urls = ['url1', 'url2', 'url3', 'url4', 'url5', 'url6'];

processarComLimite(urls, url => fetch(url).then(r => r.json()), 2)
  .then(resultados => console.log('Todos processados:', resultados))
  .catch(erro => console.error('Falha no processamento:', erro));
```

## 6. Melhores Práticas

1. **Sempre retorne Promises das funções assíncronas**
   ```javascript
   // Ruim
   function buscarDados() {
     fetch('/api/dados').then(/* ... */);
   }
   
   // Bom
   function buscarDados() {
     return fetch('/api/dados').then(/* ... */);
   }
   ```

2. **Nunca esqueça de tratar erros**
   ```javascript
   // Use sempre .catch() ou try/catch com await
   buscarDados()
     .then(processarDados)
     .catch(tratarErro);
   ```

3. **Evite aninhamento**
   ```javascript
   // Ruim
   buscarUsuario().then(usuario => {
     buscarPedidos(usuario.id).then(pedidos => {
       // Aninhamento excessivo
     });
   });
   
   // Bom - Use encadeamento
   buscarUsuario()
     .then(usuario => buscarPedidos(usuario.id))
     .then(pedidos => /* ... */);
   
   // Melhor - Use async/await
   async function buscar() {
     const usuario = await buscarUsuario();
     const pedidos = await buscarPedidos(usuario.id);
     // ...
   }
   ```

4. **Cuidado com loops e async/await**
   ```javascript
   // Errado: processamento sequencial não intencional
   async function processarItens(itens) {
     for (const item of itens) {
       await processarItem(item); // Um por vez
     }
   }
   
   // Correto para execução paralela
   async function processarItens(itens) {
     const promessas = itens.map(item => processarItem(item));
     return Promise.all(promessas);
   }
   ```

5. **Promise.all() para operações paralelas**
   ```javascript
   // Executa requisições simultaneamente para melhor performance
   async function buscarDados() {
     const [usuarios, produtos, pedidos] = await Promise.all([
       api.buscarUsuarios(),
       api.buscarProdutos(),
       api.buscarPedidos()
     ]);
   }
   ```

## 7. Exemplo Completo: Aplicação Prática

```javascript
// API simulada
const api = {
  login: (usuario, senha) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usuario === 'admin' && senha === 'senha123') {
        resolve({ token: 'abc123', usuario: { id: 1, nome: 'Admin' } });
      } else {
        reject(new Error('Credenciais inválidas'));
      }
    }, 800);
  }),
  
  buscarPerfil: (id, token) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!token) reject(new Error('Não autorizado'));
      resolve({ id, nome: 'Admin', email: 'admin@exemplo.com', cargo: 'Administrador' });
    }, 600);
  }),
  
  buscarPermissoes: (id, token) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!token) reject(new Error('Não autorizado'));
      resolve(['ler', 'escrever', 'deletar', 'admin']);
    }, 700);
  })
};

// Uso com async/await
async function iniciarSessao(usuario, senha) {
  try {
    // 1. Login
    console.log('Realizando login...');
    const { token, usuario: dadosUsuario } = await api.login(usuario, senha);
    console.log('Login realizado com sucesso');
    
    // 2. Buscar dados em paralelo
    console.log('Carregando dados do usuário...');
    const [perfil, permissoes] = await Promise.all([
      api.buscarPerfil(dadosUsuario.id, token),
      api.buscarPermissoes(dadosUsuario.id, token)
    ]);
    
    // 3. Verificar permissões
    if (!permissoes.includes('admin')) {
      console.warn('Usuário não possui permissão de administrador');
    }
    
    // 4. Retornar objeto consolidado
    return {
      usuario: perfil,
      permissoes,
      token
    };
  } catch (erro) {
    console.error('Erro ao iniciar sessão:', erro);
    throw new Error(`Falha na autenticação: ${erro.message}`);
  } finally {
    console.log('Processo de inicialização de sessão finalizado');
  }
}

// Uso
iniciarSessao('admin', 'senha123')
  .then(sessao => {
    console.log('Sessão iniciada:', sessao);
    // Continuar com a aplicação...
  })
  .catch(erro => {
    console.error('Falha ao iniciar sessão:', erro);
    // Mostrar mensagem de erro para o usuário...
  });
```

## 8. Recursos Adicionais