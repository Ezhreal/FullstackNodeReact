/**
 * O objeto Date em JavaScript é usado para trabalhar com datas e horas.
 *
 * Este exemplo demonstra como:
 * - Criar objetos Date
 * - Acessar informações de data e hora
 * - Formatar datas
 * - Manipular datas (adicionar dias)
 * - Comparar datas
 */

// Criando um objeto Date com a data e hora atuais
const agora = new Date();
console.log("Data e hora atuais:", agora);

// Criando um objeto Date com uma data específica
const dataEspecifica = new Date(2025, 5, 15, 10, 30, 0); // 15 de junho de 2025, 10:30
console.log("Data específica:", dataEspecifica);

// Acessando informações da data
const ano = agora.getFullYear();
const mes = agora.getMonth() + 1; // Mês é indexado em 0 (0 = Janeiro)
const dia = agora.getDate();
const hora = agora.getHours();
const minutos = agora.getMinutes();
const segundos = agora.getSeconds();

console.log(`Ano: ${ano}`);
console.log(`Mês: ${mes}`);
console.log(`Dia: ${dia}`);
console.log(`Hora: ${hora}`);
console.log(`Minutos: ${minutos}`);
console.log(`Segundos: ${segundos}`);
// Formatando a data
const dataFormatada = agora.toLocaleDateString('pt-BR'); // Formato brasileiro: dd/mm/aaaa
console.log("Data formatada:", dataFormatada);

// Adicionando dias a uma data
const amanha = new Date(agora);
amanha.setDate(amanha.getDate() + 1);
console.log("Amanhã:", amanha);

// Comparando datas
const data1 = new Date(2024, 11, 20);
const data2 = new Date(2024, 11, 25);

if (data1 < data2) {
  console.log("data1 é anterior a data2");
} else if (data1 > data2) {
  console.log("data1 é posterior a data2");
} else {
  console.log("data1 é igual a data2");
}

function formatandoDataManual (data) {
    return `${zeroEsquerda(dia)}/${zeroEsquerda(mes)}/${zeroEsquerda(ano)} ${zeroEsquerda(hora)}:${zeroEsquerda(minutos)}:${zeroEsquerda(segundos)}`
}
function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

const dataAtual = new Date();
const dataFormatadaAtual = formatandoDataManual(dataAtual);

console.log(dataFormatadaAtual)