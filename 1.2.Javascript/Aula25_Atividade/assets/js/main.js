const texto = document.querySelector('.texto');
const paragrafos = texto.querySelectorAll('p');

const bodyStyles = getComputedStyle(document.body);

const backgroundColor = bodyStyles.backgroundColor;
console.log(bodyStyles)

for (let paragrafo of paragrafos) {
    paragrafo.style.backgroundColor =backgroundColor;
    paragrafo.style.color = 'white';
}

