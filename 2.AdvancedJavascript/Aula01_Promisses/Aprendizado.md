## 1. Introdução às Promises

As Promises são objetos que representam o resultado futuro de uma operação assíncrona. Funcionam como "promessas" de que um valor será eventualmente retornado, seja com sucesso ou falha.

### 1.1 Estados de uma Promise

Uma Promise sempre está em um dos três estados:
- **Pendente (pending)**: Estado inicial, operação em andamento
- **Cumprida (fulfilled)**: Operação concluída com sucesso
- **Rejeitada (rejected)**: Operação falhou

### 1.2 Criando uma Promise

```javascript
const minhaPromise = new Promise((resolve, reject) => {
  // Operação assíncrona
  const sucesso = true;
  
  if (sucesso) {
    resolve('Operação concluída!'); // Cumpre a Promise
  } else {
    reject('Algo deu errado!');     // Rejeita a Promise
  }
});
```

### 1.3 Usando uma Promise

```javascript
minhaPromise
  .then((resultado) => {
    console.log('Sucesso:', resultado);
  })
  .catch((erro) => {
    console.error('Erro:', erro);
  });
```