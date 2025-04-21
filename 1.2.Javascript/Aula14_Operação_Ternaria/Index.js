/*
    OPERAÇÃO TERNÁRIA - ENCURTAMENTO DE IF AND ELSE
    Pode se ter uma condicional mais elabora, utilzar parenteses para esses casos
    (condicao) ? 'Valor para verdadeiro' : 'Valor para false'

    É possível setar também valores padrões otimizando o OR (||)
    variavel || 'Valor padrão'
    
*/
const idade = 21;
const maioridade = idade > 18 ? 'Maior de idade' : 'Menor de idade';

const genero = null;
const selecaoGenero  = genero || 'Não definido'; // define como valor padrão.

console.log(maioridade, selecaoGenero)