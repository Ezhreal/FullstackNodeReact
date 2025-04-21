const verdadeiro = true;

//Let tem escopo de bloco { ... bloco ...}
//Var tem escopo de função

let nome = 'Ronaldo'; 
var nome2 = 'Ademar';

if (verdadeiro) {
    let nome ='Augusto'; //Criada
    var nome2 = 'Rogério'; //redeclaração

    console.log(nome, nome2)
}

function falaOi () {
    // ao declarar dentro da função. Só é possível acessar dentro da função.
    var nome = 'José'
    console.log(`${nome} disse oi;`)
}

falaOi();