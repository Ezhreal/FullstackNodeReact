// ===== ENTENDENDO PROMISES EM JAVASCRIPT =====

/**
 * O que são Promises?
 * ------------------
 * Promises são objetos que representam a eventual conclusão (ou falha)
 * de uma operação assíncrona e seu valor resultante.
 * 
 * Uma Promise está sempre em um destes estados:
 * 1. Pendente (pending): estado inicial, nem cumprida nem rejeitada
 * 2. Cumprida (fulfilled): operação concluída com sucesso
 * 3. Rejeitada (rejected): operação falhou
 */

// === CRIANDO UMA PROMISE SIMPLES ===

// Criando uma Promise básica

const myPromisse = new Promise((resolve, reject) => {
	setTimeout(() => {
        // Simulando uma operação assíncrona (ex: requisição a um servidor)
        const success = false; // Altere para false para simular erro

        if (success) {
            resolve("Operação concluída com sucesso!"); // Resolve a Promise
        }
        else {
            reject("Erro: A operação falhou!"); // Rejeita a Promise
        }
    }, 2000);
});

// === UTILIZANDO A PROMISE ===

// Para usar a Promise, utilizamos os métodos .then() e .catch()
// .then() - executado quando a Promise é resolvida
// .catch() - executado quando a Promise é rejeitada

console.log("Iniciando operação assíncrona...");

myPromisse
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((erro) => {
        console.error(erro);
    })
    .finally(() => {
        console.log("Operação finalizada (independente do resultado).");
    });

console.log("Este código é executado antes da Promise completar!");

// === EXEMPLO PRÁTICO: SIMULAR UMA REQUISIÇÃO ===

function getUserAccountById(id) {
  return new Promise((resolve, reject) => {
    console.log(`Buscando dados do usuário ${id}...`);

    setTimeout(() => {
      const usuarios = {
        1: { id: 1, nome: "Ana", email: "ana@exemplo.com" },
        2: { id: 2, nome: "Bruno", email: "bruno@exemplo.com" },
        3: { id: 3, nome: "Ronaldo", email: "ronaldo@exemplo.com" },
      };

      // Verifica se o usuário existe
      if (usuarios[id]) {
        resolve(usuarios[id]);
      } else {
        reject(`Usuário com ID ${id} não encontrado`);
      }
    }, 1500);
  });
}

// Utilizando a função
getUserAccountById(10)
  .then(usuario => {
    console.log("Dados do usuário:", usuario);
    return;
  })
  .catch(erro => {
    console.error("Erro ao buscar usuário:", erro);
  });