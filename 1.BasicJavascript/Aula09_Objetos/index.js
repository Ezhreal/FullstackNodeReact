//Objetos
// É possível alterar os valores de um valor de referência numa const, mas nunca atribuir novos valores
const array = [1,2,3];

//objeto literal
const pessoa1 = {
    nome : 'Ronaldo',
    sobrenome : 'Ademar',
    idade: 25
};

const pessoa2 = {
    nome : 'João',
    sobrenome : 'Ademar',
    idade: 32
};

pessoa1.nome;
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);

//Criando funões

function criaPessoa (nome, sobrenome, idade) {
    return { nome,  sobrenome, idade }
};
const pessoa = criaPessoa('Ronaldo', 'Gustavo', 38);

console.log(`Nome do usuário: ${pessoa.nome}`);
console.log(`Sobrenome do usuário: ${pessoa.sobrenome}`);
console.log(`Idade do usuário: ${pessoa.idade}`);