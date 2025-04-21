// Arrays

// É possível trabalhar no javascript com vários tipos dentros de um array, mas por boa prática manter sempre o mesmo tipo.

//As arrays são indexados, porém, diferente de uma string, por omento
// [0] = Luiz
// [1] = Maria
// [2] = João
const alunos =['Luiz','Maria','João'];

//Acessando os valores
console.log(`Aluno: ${alunos[0]}`);
console.log(`Aluno: ${alunos[1]}`);
console.log(`Aluno: ${alunos[2]}`);

//editando valor do array
alunos[0] = 'Luiz Cardoso';
console.log(`Aluno: ${alunos[0]}`);

//criando elementos
alunos[3] = 'Gabriela';
console.log(alunos);

//adicionando elementos ao final do array
alunos.push ('Luiza');
console.log(alunos);

//LPara adicionar no inicio, precisa mover todos para frente
alunos.unshift('Fábio')
console.log(alunos);

//REMOVE DO FIM 
const alunoRemovidoFim = alunos.pop();
console.log(alunoRemovidoFim);
console.log(alunos);

//REMOVE DO inicio altera o indice
const alunoRemovidoInicio = alunos.shift();
console.log(alunoRemovidoInicio);
console.log(alunos);

//deleta um elemento de indice e o deixa vazio
//delete alunos[1];
//console.log(alunos);

//range dos elementos
console.log (alunos.slice(0,2))

console.log (alunos instanceof Array);