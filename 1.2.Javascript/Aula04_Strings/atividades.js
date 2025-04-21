/*
Seu nome é: null
Seu nome tem ______ letras
A segunda letra do seu nome é: ______
Qual o primeiro índice da letra LETRA no seu nome? ______
Qual o último índice da letra LETRA no seu nome? ______
As últimas 3 letras do seu nome são: ______
As palavras do seu nome são: ______
Seu nome com letras maiúsculas: ______
Seu nome com letras minúsculas: ______

*/
const nome = window.prompt("Qual o seu primeiro nome?");
const sobrenome = window.prompt("Qual o seu sobrenome?");
const nomeCompleto = `${nome} ${sobrenome}`
let quantidadeLetras = nome.length + sobrenome.length;
let letraBuscada = 'O'

window.document.body.innerHTML += `Seu nome é: ${nome} ${sobrenome}!<br />`

window.document.body.innerHTML += `Seu nome completo tem ${quantidadeLetras}  letras.<br />`;

window.document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br />`;

window.document.body.innerHTML += `Qual o primeiro indice da letra ${letraBuscada} no seu nome? ${nome.toLowerCase().indexOf(letraBuscada.toLowerCase()) != - 1 ? `O índice da letra é: ${nome.toLowerCase().indexOf(letraBuscada.toLowerCase())}` : `O nome não possui a letra ${letraBuscada}`}. <br />`;

window.document.body.innerHTML += `Qual o primeiro indice da letra ${letraBuscada} no seu sobrenome? ${sobrenome.toLowerCase().indexOf(letraBuscada.toLowerCase ) != - 1 ? `O índice da letra  é: ${sobrenome.toLowerCase().indexOf(letraBuscada.toLowerCase())}`: `O sobrenome não possui a letra ${letraBuscada}`}<br />`;

window.document.body.innerHTML += `Qual o ultimo indice da letra ${letraBuscada} no seu nome? ${nome.toLowerCase().lastIndexOf(letraBuscada.toLowerCase()) != - 1 ? `O índice da letra é: ${nome.toLowerCase().lastIndexOf(letraBuscada.toLowerCase())}` : `O nome não possui a letra ${letraBuscada}`}. <br />`;

window.document.body.innerHTML += `Qual o ultimo indice da letra ${letraBuscada} no seu sobrenome? ${sobrenome.toLowerCase().lastIndexOf(letraBuscada.toLowerCase ) != - 1 ? `O índice da letra  é: ${sobrenome.toLowerCase().lastIndexOf(letraBuscada.toLowerCase())}`: `O sobrenome não possui a letra ${letraBuscada}`}<br />`;

window.document.body.innerHTML += `As 3 últimas letras do seu nome são: ${nome.slice(-3)}<br />`;

window.document.body.innerHTML += `As palavras no seu nome são: ${nomeCompleto.split(' ')}<br />`;

window.document.body.innerHTML += `O seu nome com letra maíscula são: ${nomeCompleto.toUpperCase()}<br />`;

window.document.body.innerHTML += `O seu nome com letras minúsculas são: ${nomeCompleto.toLowerCase()}<br />`;
 