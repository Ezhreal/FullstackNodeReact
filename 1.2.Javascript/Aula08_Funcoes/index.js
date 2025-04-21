//FUNÇÕES
// Tudo que está dentro da função, está protegido.
// Funções recebem parametros de qualquer tipo
// SOBRE RETURN: Em qualquer linguagem a palavra reservada return, para a função e retorna o que tiver. Não rodando o que está abaixo.
function saudacao (nome) {
    return `Bom dia ${nome}!`;
}

saudacao('Ronaldo');
saudacao('Luiz');
saudacao('Maria');

//salvando
const saudacaoRetorno = saudacao('Ronaldo Ademar');
console.log(saudacaoRetorno)


//testes e exemplos
// atribuir valores aos parametros, torna o valor padrão caso a soma não seja enviado parametros na função
function soma(x = 0, y = 0) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(3,1))

//outras formas de criar função
//1.  Declarar função anonima dentro de uma variavel
const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(9));

//outras formas de criar função
//2. Arrow Function -
const raizArrow = (n) => {
    return n ** 0.5;
}
console.log(raizArrow(16));

// Simplificação
const raizFuncSimplificada = n => n ** 0.5;
console.log(raizFuncSimplificada(25))
