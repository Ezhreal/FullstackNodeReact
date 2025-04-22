## 2. Métodos de Promise

### 2.1 Promise.then()

Registra callbacks para receber o valor de uma Promise resolvida ou lidar com a rejeição.

```javascript
minhaPromise.then(
  (valor) => console.log(valor),     // Executado se resolvida
  (erro) => console.error(erro)      // Executado se rejeitada (opcional)
);
```

### 2.2 Promise.catch()

Registra apenas o callback para tratamento de erros.

```javascript
minhaPromise
  .then((valor) => console.log(valor))
  .catch((erro) => console.error('Erro capturado:', erro));
```

### 2.3 Promise.finally()

Executa código independentemente do resultado da Promise.

```javascript
fetch('/api/dados')
  .then(resposta => resposta.json())
  .catch(erro => console.error(erro))
  .finally(() => {
    console.log('Requisição finalizada');
    esconderIndicadorDeCarregamento();
  });
```

### 2.4 Promise.all()

Executa múltiplas Promises em paralelo e aguarda todas serem resolvidas.

```javascript
const promise1 = fetch('/api/usuarios');
const promise2 = fetch('/api/produtos');
const promise3 = fetch('/api/pedidos');

Promise.all([promise1, promise2, promise3])
  .then(([usuariosResp, produtosResp, pedidosResp]) => {
    // Todas as Promises foram resolvidas
    return Promise.all([
      usuariosResp.json(),
      produtosResp.json(),
      pedidosResp.json()
    ]);
  })
  .then(([usuarios, produtos, pedidos]) => {
    console.log('Todos os dados foram carregados');
  })
  .catch(erro => {
    console.error('Pelo menos uma requisição falhou:', erro);
  });
```

### 2.5 Promise.race()

Retorna o resultado da primeira Promise a ser concluída (resolvida ou rejeitada).

```javascript
// Implementando um timeout para uma requisição
function fetchComTimeout(url, tempo) {
  const requisicao = fetch(url);
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Timeout')), tempo);
  });
  
  return Promise.race([requisicao, timeout]);
}

fetchComTimeout('/api/dados', 5000)
  .then(resposta => resposta.json())
  .then(dados => console.log(dados))
  .catch(erro => {
    if (erro.message === 'Timeout') {
      console.log('A requisição demorou demais!');
    } else {
      console.log('Ocorreu um erro na requisição');
    }
  });
```

### 2.6 Promise.allSettled()

Aguarda todas as Promises completarem, independentemente de sucesso ou falha.

```javascript
const promises = [
  fetch('/api/importante'),
  fetch('/api/pode-falhar'),
  fetch('/api/dados-opcionais')
];

Promise.allSettled(promises)
  .then(resultados => {
    resultados.forEach((resultado, index) => {
      if (resultado.status === 'fulfilled') {
        console.log(`Promise ${index} resolvida:`, resultado.value);
      } else {
        console.log(`Promise ${index} rejeitada:`, resultado.reason);
      }
    });
  });
```

### 2.7 Promise.any()

Retorna a primeira Promise que for resolvida com sucesso.

```javascript
const servidores = [
  fetch('https://servidor1.api.com/dados'),
  fetch('https://servidor2.api.com/dados'),
  fetch('https://servidor3.api.com/dados')
];

Promise.any(servidores)
  .then(primeiraResposta => primeiraResposta.json())
  .then(dados => console.log('Dados do primeiro servidor que respondeu:', dados))
  .catch(erro => {
    // AggregateError contendo todos os erros
    console.error('Todos os servidores falharam:', erro);
  });
```

### 2.8 Promise.resolve() e Promise.reject()

Cria Promises já resolvidas ou rejeitadas.

```javascript
// Promise já resolvida
Promise.resolve('Valor imediato')
  .then(valor => console.log(valor));

// Promise já rejeitada
Promise.reject(new Error('Falha imediata'))
  .catch(erro => console.error(erro.message));

// Útil para implementação de cache
function buscarComCache(chave) {
  if (cache[chave]) {
    return Promise.resolve(cache[chave]);
  }
  return fetchDados(chave);
}
```

## 3. Encadeamento de Promises

Promises podem ser encadeadas para realizar operações sequenciais.

```javascript
buscarUsuario(123)
  .then(usuario => {
    console.log('Usuário:', usuario);
    return buscarPedidos(usuario.id); // Retorna outra Promise
  })
  .then(pedidos => {
    console.log('Pedidos:', pedidos);
    return calcularTotal(pedidos);    // Retorna outra Promise
  })
  .then(total => {
    console.log('Total gasto:', total);
  })
  .catch(erro => {
    console.error('Erro em alguma etapa:', erro);
  });
```
