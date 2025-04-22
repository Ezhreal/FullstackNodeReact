let number1 = window.prompt("Digite o primeiro número:");
let number2 = window.prompt("Digite o segundo número:");

let fazSoma = window.confirm('Deseja somar os dois números? Caso queira digitar outros números. Clique em cancelar.');

if (fazSoma) {
    number1 = parseInt(number1);
    number2 = parseInt(number2);

    const somaNumeros = number1 + number2;    
    alert(`A soma dos números é: ${somaNumeros}` )
}
else
 {
    alert(`Digite os números novamente!` )
    window.location.reload();
 }

  