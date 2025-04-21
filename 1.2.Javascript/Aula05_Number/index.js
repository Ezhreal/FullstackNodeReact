let number1 = 1;
//IEEE 754-2008 -> PADRÃO DAS CASAS DECIMAIS
let number2 = 2.5;
let number3 = 10.098098832;
let number4 = 10;

//temporariamente convertendo para string.
console.log(number1.toString() + number2);

//arredondar valores, temporariamente
console.log(number3.toFixed(2));

//bool para verificar se a variavel é um número inteiro
console.log(Number.isInteger(number1))

//É possível o JS fazer a conta com string, se for um número e não com soma. Porém, é sempre verificar.
let temp = number4 + 'Olá';
console.log(temp)
console.log(Number.isNaN(temp))

//resolvendo pontos flutuantes
let number5 = 0.1;
let number6 = 0.5
//forma correta para exibir 
number6 += number5;
number6 += number5;
number6 += number5;
number6 += number5;
number6 += number5;


console.log(number6);
console.log(Number.isInteger(number6));

let number6fixed = number6.toFixed(2);
console.log(number6fixed);
console.log(Number.isInteger(number6fixed));

let number6parseFloat = parseFloat(number6.toFixed(2))
console.log(number6parseFloat);
console.log(Number.isInteger(number6parseFloat));


