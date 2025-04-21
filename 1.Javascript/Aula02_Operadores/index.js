// Operadores em JavaScript

// Operadores Aritméticos
const soma = 10 + 5; // Adição
const subtracao = 10 - 5; // Subtração
const multiplicacao = 10 * 5; // Multiplicação
const divisao = 10 / 5; // Divisão
const modulo = 10 % 3; // Resto da divisão (1)
const exponenciacao = 2 ** 3; // Exponenciação (8)
let incremento = 5; 
incremento++; // Incremento (incremento agora é 6)
let decremento = 5;
decremento--; // Decremento (decremento agora é 4)

// Operadores de Atribuição
let numero = 10;
numero += 5; // Equivalente a numero = numero + 5 (numero agora é 15)
numero -= 3; // Equivalente a numero = numero - 3 (numero agora é 12)
numero *= 2; // Equivalente a numero = numero * 2 (numero agora é 24)
numero /= 4; // Equivalente a numero = numero / 4 (numero agora é 6)
numero %= 5; // Equivalente a numero = numero % 5 (numero agora é 1)

// Operadores de Comparação
const igual = 10 == "10"; // Igualdade (true, pois converte o tipo)
const estritamenteIgual = 10 === "10"; // Igualdade estrita (false, pois os tipos são diferentes)
const diferente = 10 != "10"; // Diferença (false, pois converte o tipo)
const estritamenteDiferente = 10 !== "10"; // Diferença estrita (true, pois os tipos são diferentes)
const maiorQue = 10 > 5; // Maior que (true)
const maiorOuIgualQue = 10 >= 10; // Maior ou igual que (true)
const menorQue = 5 < 10; // Menor que (true)
const menorOuIgualQue = 5 <= 5; // Menor ou igual que (true)

// Operadores Lógicos
const eLogico = true && false; // E lógico (false)
const ouLogico = true || false; // OU lógico (true)
const negacao = !true; // Negação (false)

// Operador Condicional (Ternário)
const idadeMinima = 18;
const idadeUsuario = 20;
const podeEntrar = idadeUsuario >= idadeMinima ? "Pode entrar" : "Não pode entrar"; // Operador ternário

// Operadores de String
const nomeCompleto = "João" + " " + "Silva"; // Concatenação de strings ("João Silva")

// Operadores de Tipo
const tipo = typeof 10; // Retorna "number"
const ehNumero = typeof 10 === "number"; // Verifica se é um número (true)

// Operadores Bit a Bit (não abordados neste exemplo)
// &, |, ^, ~, <<, >>, >>>

// Precedência de Operadores
// A ordem de execução dos operadores segue as regras de precedência.
// Consulte a documentação para mais detalhes.

// Regras e usos:

// - Utilize os operadores corretos para cada tipo de dado.
// - Entenda a precedência dos operadores para evitar resultados inesperados.
// - Use parênteses para controlar a ordem de avaliação das expressões.
// - Consulte a documentação para obter informações detalhadas sobre cada operador.