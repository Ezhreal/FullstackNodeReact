/**
 * A estrutura switch/case em JavaScript é uma alternativa ao if/else para 
 * executar diferentes blocos de código com base no valor de uma variável.
 * 
 * Este exemplo demonstra como:
 * - Definir uma variável para ser avaliada no switch
 * - Usar cases para diferentes valores da variável
 * - Executar código específico em cada case
 * - Usar o default para um caso que não seja coberto pelos cases
 * - Usar break para evitar que os cases subsequentes sejam executados
 */

// Variável que será avaliada no switch
const diaDaSemana = new Date().getDay()+2;

const diaDaSemanaNome = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado']

switch (diaDaSemana) {
    case 0 : {
        console.log(`${diaDaSemanaNome[diaDaSemana]}! Dia de faxina!`)
        break;  
    }
    case 6 : {
        console.log(`Hoje é ${diaDaSemanaNome[diaDaSemana]}!! Dia de cachaçaaaaaaa!`)
        break;  
    }
    default : {
        console.log(`Dia de ${diaDaSemanaNome[diaDaSemana]}!. Muito trabalho para fazer!`)
        break;  
    }
}   