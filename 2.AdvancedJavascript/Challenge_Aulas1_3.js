/**
 * DESAFIO: SISTEMA DE PROCESSAMENTO DE PEDIDOS
 * 
 * Objetivo: Criar um sistema que simula as etapas de processamento
 * de um pedido online usando Promises e depois refatorar 
 * para async/await.
 */

// Simulações das operações do banco de dados
// -----------------------------------------

// Verifica se o produto está em estoque
function verificarEstoque(idProduto) {
    return new Promise((resolve, reject) => {
      console.log(`Verificando estoque do produto ${idProduto}...`);
      
      setTimeout(() => {
        // Simula 80% de chance de ter estoque
        const temEstoque = Math.random() < 0.8;
        
        if (temEstoque) {
          console.log(`Produto ${idProduto} está em estoque!`);
          resolve(true);
        } else {
          console.log(`Produto ${idProduto} está em falta!`);
          reject(new Error(`Produto ${idProduto} está em falta.`));
        }
      }, 1000); // Simula delay de 1 segundo
    });
  }
  
  // Processa o pagamento
  function processarPagamento(idPedido, valor) {
    return new Promise((resolve, reject) => {
      console.log(`Processando pagamento do pedido ${idPedido} no valor de R$ ${valor}...`);
      
      setTimeout(() => {
        // Simula 70% de chance de pagamento aprovado
        const pagamentoAprovado = Math.random() < 0.7;
        
        if (pagamentoAprovado) {
          const dadosPagamento = { 
            idPagamento: `PAG-${Date.now()}`,
            status: 'APROVADO', 
            valor,
            data: new Date()
          };
          
          console.log(`Pagamento do pedido ${idPedido} aprovado!`);
          resolve(dadosPagamento);
        } else {
          console.log(`Pagamento do pedido ${idPedido} rejeitado!`);
          reject(new Error('Pagamento não autorizado. Verifique o cartão.'));
        }
      }, 1500); // Simula delay de 1.5 segundos
    });
  }
  
  // Emite nota fiscal
  function emitirNotaFiscal(idPedido, dadosPagamento) {
    return new Promise((resolve, reject) => {
      console.log(`Emitindo nota fiscal para o pedido ${idPedido}...`);
      
      setTimeout(() => {
        // Simula 90% de chance de sucesso na emissão
        const emissaoOk = Math.random() < 0.9;
        
        if (emissaoOk) {
          const notaFiscal = {
            numeroNF: `NF-${Math.floor(Math.random() * 10000)}`,
            idPedido,
            idPagamento: dadosPagamento.idPagamento,
            valor: dadosPagamento.valor,
            data: new Date()
          };
          
          console.log(`Nota fiscal ${notaFiscal.numeroNF} emitida com sucesso!`);
          resolve(notaFiscal);
        } else {
          console.log(`Falha ao emitir nota fiscal para o pedido ${idPedido}!`);
          reject(new Error('Erro ao emitir nota fiscal. Sistema da Receita indisponível.'));
        }
      }, 1000); // Simula delay de 1 segundo
    });
  }
  
  // Envia pedido para entrega
  function enviarParaEntrega(idPedido, endereco) {
    return new Promise((resolve, reject) => {
      console.log(`Enviando pedido ${idPedido} para entrega em ${endereco}...`);
      
      setTimeout(() => {
        // Simula 95% de chance de sucesso no envio
        const envioOk = Math.random() < 0.95;
        
        if (envioOk) {
          const dadosEntrega = {
            idEntrega: `ENT-${Date.now()}`,
            idPedido,
            endereco,
            status: 'EM_SEPARACAO',
            previsaoEntrega: new Date(Date.now() + 172800000) // +48 horas
          };
          
          console.log(`Pedido ${idPedido} enviado para entrega!`);
          resolve(dadosEntrega);
        } else {
          console.log(`Falha ao enviar pedido ${idPedido} para entrega!`);
          reject(new Error('Erro ao registrar pedido no sistema de entregas.'));
        }
      }, 1200); // Simula delay de 1.2 segundos
    });
  }
  
  // Notifica o cliente por e-mail
  function notificarCliente(email, idPedido, detalhes) {
    return new Promise((resolve, reject) => {
      console.log(`Enviando e-mail para ${email} sobre o pedido ${idPedido}...`);
      
      setTimeout(() => {
        // Simula 80% de chance de envio com sucesso
        const emailEnviado = Math.random() < 0.8;
        
        if (emailEnviado) {
          console.log(`E-mail enviado para ${email} com sucesso!`);
          resolve(true);
        } else {
          console.log(`Falha ao enviar e-mail para ${email}!`);
          // Não rejeitamos a Promise aqui, pois o pedido não deve falhar se o e-mail não for enviado
          resolve(false);
        }
      }, 800); // Simula delay de 0.8 segundos
    });
  }
  
  // PARTE 1: Implementação com Promises encadeadas (.then/.catch)
  // -------------------------------------------------------------
  
  // DESAFIO 1: Implemente o fluxo completo de processamento de pedido usando .then() e .catch()
  function processarPedidoComPromises(idProduto, idPedido, valor, endereco, email) {
    console.log(`Iniciando processamento do pedido ${idPedido}...`);
    
    const resultado = {
        idPedido,
        idProduto,
        etapas: {}
     }
    // TODO: Implemente o fluxo completo usando Promises (.then e .catch)
    // 1. Verificar estoque
    return verificarEstoque(idProduto)
      .then(estoque => {
        resultado.etapas.estoque = {status: 'OK', estoque, disponivel: 'estoqueOk'};
        return processarPagamento(idPedido, valor);
      })
       // 2. Se em estoque, processar pagamento
      .then (dadosPagamento => {
        resultado.etapas.pagamento = {status: 'OK', dadosPagamento, disponivel: 'pagamentoOk'};
        return emitirNotaFiscal(idPedido, dadosPagamento);
      })
        // 3. Se pagamento aprovado, emitir nota fiscal
      .then (notaFiscal => {
        resultado.etapas.notaFiscal = {status: 'OK', notaFiscal, disponivel: 'notaFiscalOk'};
        return enviarParaEntrega(idPedido, endereco);
      })
       // 4. Enviar para entrega
      .then (dadosEntrega => {
        resultado.etapas.entrega = {status: 'OK', dadosEntrega, disponivel: 'entregaOk'};
        return notificarCliente(email, idPedido, resultado);
      })
       // 5. Notificar cliente
      .then(notificaCliente =>{
        resultado.etapas.notificacao = {status: 'OK', notificaCliente, disponivel: 'notificacaoOk'};
        // 6. Retornar objeto com todos os dados do processamento
        return resultado;
      }).
      catch(erro => {
        // Centraliza o tratamento de erros
      console.error(`Erro no processamento do pedido ${idPedido}:`, erro.message);
      resultado.status = 'ERRO';
      resultado.mensagemErro = erro.message;
      
      // Podemos adicionar lógica de compensação aqui
      // (ex: reembolso automático em caso de falha pós-pagamento)
      
      throw erro; // Propaga o erro para quem chamou a função
    });

    
    // 7. Tratar erros adequadamente em cada etapa
  }
  
  // PARTE 2: Implementação com async/await
  // -------------------------------------
  
  // DESAFIO 2: Reimplemente o mesmo fluxo usando async/await
  async function processarPedidoComAsync(idProduto, idPedido, valor, endereco, email) {
    console.log(`Iniciando processamento do pedido ${idPedido} (com async/await)...`);
    
    // TODO: Implemente o mesmo fluxo usando async/await
    // 1. Verificar estoque
    // 2. Se em estoque, processar pagamento
    // 3. Se pagamento aprovado, emitir nota fiscal
    // 4. Enviar para entrega
    // 5. Notificar cliente
    // 6. Retornar objeto com todos os dados do processamento
    // 7. Tratar erros adequadamente em cada etapa
  }
  
  // PARTE 3: Implementações avançadas (Desafios extras)
  // --------------------------------------------------
  
  // DESAFIO EXTRA 1: Função que processa múltiplos pedidos em paralelo,
  // mas com limite de concorrência (máx. 2 pedidos simultâneos)
  function processarMultiplosPedidos(pedidos, limiteConcorrencia = 2) {
    // TODO: Implemente esta função
  }
  
  // DESAFIO EXTRA 2: Implemente um sistema de retry (nova tentativa)
  // para a função de processamento de pagamento, tentando até 3 vezes
  function processarPagamentoComRetry(idPedido, valor, tentativas = 3) {
    // TODO: Implemente esta função
  }
  
  // Execução dos testes
  // ------------------
  
  // Dados de teste
  const pedidoTeste = {
    idProduto: "PROD-12345",
    idPedido: "PED-67890",
    valor: 199.99,
    endereco: "Rua das Flores, 123",
    email: "cliente@exemplo.com"
  };
  
  // TESTE 1: Versão com Promises
  console.log("=== TESTE COM PROMISES ===");
  processarPedidoComPromises(
    pedidoTeste.idProduto,
    pedidoTeste.idPedido,
    pedidoTeste.valor,
    pedidoTeste.endereco,
    pedidoTeste.email
  )
    .then(resultado => {
      console.log("✅ Pedido processado com sucesso (Promises):", resultado);
    })
    .catch(erro => {
      console.error("❌ Erro no processamento do pedido (Promises):", erro.message);
    })
    .finally(() => {
      console.log("=== FIM DO TESTE COM PROMISES ===\n");
      
      // TESTE 2: Versão com async/await (executado após o primeiro teste)
      console.log("=== TESTE COM ASYNC/AWAIT ===");
      processarPedidoComAsync(
        pedidoTeste.idProduto,
        pedidoTeste.idPedido,
        pedidoTeste.valor,
        pedidoTeste.endereco,
        pedidoTeste.email
      )
        .then(resultado => {
          console.log("✅ Pedido processado com sucesso (Async/Await):", resultado);
        })
        .catch(erro => {
          console.error("❌ Erro no processamento do pedido (Async/Await):", erro.message);
        })
        .finally(() => {
          console.log("=== FIM DO TESTE COM ASYNC/AWAIT ===");
        });
    });