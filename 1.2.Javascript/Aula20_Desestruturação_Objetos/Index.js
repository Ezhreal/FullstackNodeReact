/**
 * Desestruturação de objetos em JavaScript
 *
 * A desestruturação de objetos permite extrair valores de propriedades de um objeto
 * e atribuí-los a variáveis individuais de forma concisa.
 *
 * Este exemplo demonstra como:
 * - Desestruturar um objeto em variáveis separadas
 * - Renomear variáveis durante a desestruturação
 * - Usar valores padrão para propriedades inexistentes
 * - Desestruturar objetos aninhados
 */

const pessoa = {
    nome: "Ronaldo",
    idade:32,
    endereco : {
        rua: "Rua Coronel Marcelino",
        numero: "210",
        complemento: "Casa 04",
        bairro:"Santa Rosa",
        cidade:"Belo Horizonte",
        estado: "Minas gerais"
    },
    profissao: "Desenvolvedor Full Stack"
};

// Desestruturação básica
const {nome, idade} = pessoa;
console.log(nome); // "Maria"
console.log(idade); // 30

// Renomeando variáveis
const { profissao: profissional } = pessoa;
console.log(profissional); // "São Paulo"

/**
 * Desestruturação de objetos em JavaScript
 *
 * Exemplos de caso de uso para renomear variaveis
 * e atribuí-los a variáveis individuais de forma concisa.

 */

//Renomeando para nomes amigaveis
const usuario = {user_name:"ronaldo", user_idade: 32};
const {user_name: nomeUsuario, user_idade: idadeUsuario} = usuario;

//Evitar conflitos de variáveis existentes
let nameP = "Outro nome";
const person = { nameP: "Maria", idade: 30 };
const { nameP: namePessoa } = person; 

console.log(nameP);      // "Outro nome"
console.log(namePessoa); // "Maria"

//Padronização dos nomes das variáveis
/**

* Se você está trabalhando com diferentes
* APIs ou fontes de dados que usam nomes de propriedades diferentes 
* para o mesmo conceito, a renomeação pode ajudar a padronizar
* os nomes no seu código.
*/



// Valores padrão
const { profissao = "Desempregado" } = pessoa;
console.log(profissao); // "Desempregado"

// Objetos aninhados
const { endereco: { rua, numero } } = pessoa;
console.log(rua); // "Rua A"
console.log(numero); // 123