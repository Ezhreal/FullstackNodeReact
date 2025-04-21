const numero = Number(prompt('Digite um número(use ponto para números fracionais): '));
const tituloPagina = document.getElementById('tituloPagina');
const textos = document.getElementById('textos');

tituloPagina.innerHTML = `Seu número é: ${numero}`;
textos.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`
textos.innerHTML += `<p>${numero} é um número inteiro? ${Number.isInteger(numero) ? 'Sim' : 'Não'}</p>`
textos.innerHTML += `<p>${numero} é um tipo NaN? ${Number.isNaN(numero) ? 'Sim' : 'Não'}</p>`
textos.innerHTML += `<p>Arredondando o número para cima: ${Math.ceil(numero)}</p>`
textos.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`
textos.innerHTML += `<p>Arredondando para o mais próximo: ${Math.round(numero)}</p>`
textos.innerHTML += `<p>Duas casas decimais: ${numero.toFixed(2)}</p>`