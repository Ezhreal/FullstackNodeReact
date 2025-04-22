// Função auxiliar para simular operações assíncronas
function simulaOperacao(valor, tempoMs, falhar = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!falhar) {
                resolve(valor)
            } else {
                reject(`Erro ao processar: ${valor}`);
            }
        }, tempoMs)
    })
}
/**
 * RESUMO DOS MÉTODOS ÚTEIS DE PROMISES
 * ------------------------------------
 * 
 * 1. Promise.all(iterável)
 *    - Recebe um array de promises e retorna uma nova promise
 *    - RESOLVE: quando TODAS as promises do array forem resolvidas
 *      - Retorna um array com os resultados na MESMA ORDEM do array de entrada
 *    - REJEITA: assim que QUALQUER promise do array for rejeitada
 *      - Retorna o valor de rejeição da primeira promise que falhou
 *    - Útil para executar múltiplas operações em paralelo quando você precisa
 *      de TODOS os resultados para prosseguir
 */
function exemploPromiseAll() {
    console.log("--- Exemplo Promise.all() ---");
    
    // Simulando busca de dados de diferentes endpoints
    const buscarUsuario = simulaOperacao({ id: 1, nome: "Ana" }, 1000, true);
    const buscarPedidos = simulaOperacao([{ id: 101 }, { id: 102 }], 1500);
    const buscarConfig = simulaOperacao({ tema: "escuro" }, 800);
    
    // Espera todas as operações completarem
    Promise.all([buscarUsuario, buscarPedidos, buscarConfig])
      .then(([usuario, pedidos, config]) => {
        console.log("Dados do usuário:", usuario);
        console.log("Pedidos do usuário:", pedidos);
        console.log("Configurações:", config);
        
        // Agora podemos montar a tela com todos os dados necessários
        console.log("Tela pronta para renderização!");
      })
      .catch(erro => {
        // Se qualquer uma das promessas falhar, entramos aqui
        console.error("Falha ao carregar dados:", erro);
        console.log("Mostrando mensagem de erro para o usuário");
      });
  }
  
  //exemploPromiseAll();

 /** 
 * 2. Promise.race(iterável)
 *    - Recebe um array de promises e retorna uma nova promise
 *    - RESOLVE/REJEITA: assim que a PRIMEIRA promise do array for concluída
 *      (seja resolvida ou rejeitada)
 *    - Retorna o valor de resolução ou rejeição da primeira promise a completar
 *    - Útil para implementar timeouts ou usar o recurso que responder primeiro
 */

 function exemploPromiseRace() {
    console.log("--- Exemplo Promise.race() ---");
    
    // Simulando busca em dois servidores diferentes + timeout
    const servidorPrincipal = simulaOperacao("Dados do servidor principal", 1500);
    const servidorBackup = simulaOperacao("Dados do servidor backup", 1000, true);
    
    // Criando um timeout para não esperar infinitamente
    const timeout = new Promise((_, reject) => {
      setTimeout(() => reject("Timeout: Servidores demorando muito para responder"), 5000);
    });
    
    // A primeira promessa a completar ganha
    Promise.race([servidorPrincipal, servidorBackup, timeout])
      .then(dados => {
        console.log("Resposta recebida:", dados);
      })
      .catch(erro => {
        console.error(erro);
        console.log("Mostrando mensagem de falha na conexão");
      });
  }
  
 //exemploPromiseRace();
 /** 
 * 3. Promise.allSettled(iterável) [ES2020]
 *    - Recebe um array de promises e retorna uma nova promise
 *    - SEMPRE RESOLVE: depois que TODAS as promises forem concluídas
 *      (independente de sucesso ou falha)
 *    - Retorna um array de objetos com:
 *      - { status: "fulfilled", value: resultado } (para promises resolvidas)
 *      - { status: "rejected", reason: erro } (para promises rejeitadas)
 *    - Útil quando você quer executar todas as operações independentemente
 *      e saber o status de cada uma
 */

 function exemploPromiseAllSettled() {
    console.log("--- Exemplo Promise.allSettled() ---");
    
    // Simulando várias operações, algumas que vão falhar
    const operacoes = [
      simulaOperacao("Operação 1", 800),             // Sucesso
      simulaOperacao("Operação 2", 600, true),       // Falha
      simulaOperacao("Operação 3", 1000),            // Sucesso
      simulaOperacao("Operação 4", 1200, true)       // Falha
    ];
    
    Promise.allSettled(operacoes)
      .then(resultados => {
        console.log("Resultados de todas as operações:");
        
        // Contadores para o relatório
        let sucessos = 0;
        let falhas = 0;
        
        resultados.forEach((resultado, index) => {
          if (resultado.status === "fulfilled") {
            console.log(`✅ Operação ${index + 1}: Sucesso ->`, resultado.value);
            sucessos++;
          } else {
            console.log(`❌ Operação ${index + 1}: Falha ->`, resultado.reason);
            falhas++;
          }
        });
        
        console.log(`Relatório: ${sucessos} operações com sucesso, ${falhas} operações falharam`);
      });
  }
  
  //exemploPromiseAllSettled();
 /** 
 * 4. Promise.any(iterável) [ES2021]
 *    - Recebe um array de promises e retorna uma nova promise
 *    - RESOLVE: assim que a PRIMEIRA promise for RESOLVIDA com sucesso
 *    - REJEITA: somente se TODAS as promises forem rejeitadas
 *      - Retorna um AggregateError contendo todos os erros
 *    - Útil quando você precisa de apenas um resultado bem-sucedido entre
 *      várias alternativas
 */
 function exemploPromiseAny() {
    console.log("--- Exemplo Promise.any() ---");
    
    // Simulando tentativas de conexão com diferentes CDNs
    const cdn1 = simulaOperacao("CDN 1 respondeu", 1000, true);   // Vai falhar
    const cdn2 = simulaOperacao("CDN 2 respondeu", 1500,true);         // Vai ter sucesso
    const cdn3 = simulaOperacao("CDN 3 respondeu", 800, true);    // Vai falhar
    
    Promise.any([cdn1, cdn2, cdn3])
      .then(resultado => {
        console.log("Conseguimos uma conexão:", resultado);
        console.log("Iniciando download...");
      })
      .catch(erro => {
        // AggregateError contendo todos os erros
        console.error("Todos os CDNs falharam:", erro);
        console.log("Número de erros:", erro.errors.length);
        console.log("Mostrando mensagem: Serviço indisponível");
      });
  }
  
  //exemploPromiseAny();
  

 /** 
 * 5. Promise.resolve(valor)
 *    - Cria uma promise já resolvida com o valor especificado
 *    - Se o valor já for uma promise, retorna essa promise
 *    - Útil para:
 *      - Padronizar retornos que podem ou não ser promises
 *      - Garantir execução assíncrona para um valor síncrono
 *      - Converter valores "thenable" em Promises reais
 
      Promise.reject(motivo)
 *    - Cria uma promise já rejeitada com o motivo especificado
 *    - Útil para encurtar o código quando você precisa retornar um erro
 *      em um contexto de promise
 */

function exemploResolveReject() {
  console.log("--- Exemplo Promise.resolve() e Promise.reject() ---");

  // Simulando um cache
  const cache = {
    "produto:123": { id: 123, nome: "Notebook", preco: 2500 },
  };

  function buscarProduto(id) {
    const cacheKey = `produto:${id}`;

    // Verifica primeiro no cache
    if (cache[cacheKey]) {
      console.log("Produto encontrado no cache!");
      // Retorna uma Promise já resolvida com o valor do cache
      return Promise.resolve(cache[cacheKey]);
    }

    // Se o ID for inválido, retorna erro imediatamente
    if (id <= 0) {
      return Promise.reject(new Error("ID de produto inválido"));
    }

    // Se não estiver no cache, busca no "servidor"
    console.log("Buscando produto no servidor...");
    return simulaOperacao({ id, nome: "Produto novo", preco: 1000 }, 1500).then(
      (produto) => {
        // Armazena no cache para futuras consultas
        cache[cacheKey] = produto;
        return produto;
      }
    );
  }

  // Exemplo 1: Produto no cache
  buscarProduto(123)
    .then((produto) => console.log("Produto do cache:", produto))
    .catch((erro) => console.error(erro));

  // Exemplo 2: ID inválido
  buscarProduto(-1)
    .then((produto) => console.log("Produto:", produto))
    .catch((erro) => console.error("Erro com ID inválido:", erro.message));

  // Exemplo 3: Produto não está no cache
  buscarProduto(456)
    .then((produto) => console.log("Produto do servidor:", produto))
    .catch((erro) => console.error(erro));
}

exemploResolveReject();
 /** 
 * 6. promise.then(onFulfilled, onRejected)
 *    - Registra callbacks para quando uma promise for resolvida ou rejeitada
 *    - Retorna uma NOVA promise, permitindo encadeamento
 *    - Transforma valores: o valor retornado por um callback se torna o
 *      valor de resolução da nova promise 
 *    promise.catch(onRejected)
 *    - Atalho para promise.then(null, onRejected)
 *    - Registra apenas o callback de erro
 *    - Retorna uma NOVA promise 
 *    promise.finally(onFinally)
 *    - Executa um callback quando a promise for concluída,
 *      independentemente de sucesso ou falha
 *    - Não recebe argumentos (não tem acesso ao resultado/erro)
 *    - Útil para limpeza (fechar conexões, etc.)
 */

 function exemploThenCatchFinally() {
    console.log("--- Exemplo then(), catch() e finally() ---");
    
    console.log("Iniciando download de arquivo...");
    
    // Simulando download de um arquivo
    const downloadArquivo = simulaOperacao("arquivo.pdf", 1500, Math.random() > 0.8);
    
    downloadArquivo
      .then(arquivo => {
        // Executado se a Promise for resolvida
        console.log(`Download de ${arquivo} concluído com sucesso`);
        return `processado_${arquivo}`;
      })
      .then(arquivoProcessado => {
        // Encadeamento: resultado do then anterior
        console.log(`Arquivo ${arquivoProcessado} aberto e pronto para visualização`);
      })
      .catch(erro => {
        // Executado se qualquer Promise na cadeia for rejeitada
        console.error("Falha no download:", erro);
      })
      .finally(() => {
        // Executado sempre, independentemente do resultado
        console.log("Operação de download finalizada");
        console.log("Removendo indicador de progresso da tela");
      });
  }
  
  exemploThenCatchFinally();