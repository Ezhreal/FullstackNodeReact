const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' }
];

// Seleciona o elemento com a classe 'container' no documento HTML.
// Este elemento servirá como pai para os novos elementos que serão criados.
const container = document.querySelector('.container');

// Cria um novo elemento 'div'. Este elemento servirá como container 
// para os elementos que serão criados dentro do loop.
const div = document.createElement('div');

// Itera sobre o array 'elementos' usando um loop for.
for (let i = 0; i < elementos.length; i++) {
    // Desestrutura o objeto atual do array, extraindo as propriedades 'tag' e 'texto'.
    // Isso facilita o acesso a essas propriedades posteriormente.
    let { tag, texto } = elementos[i];

    // Cria um novo elemento HTML com base na tag definida no objeto atual.
    // Por exemplo, se tag for 'p', um novo elemento <p> será criado.
    let tagCriada = document.createElement(tag);

    // Define o conteúdo de texto do elemento recém-criado.
    tagCriada.innerHTML = texto;

    // Adiciona o elemento recém-criado como filho do elemento 'div'.
    div.appendChild(tagCriada);
}

// Após o loop, adiciona o elemento 'div' (contendo todos os elementos criados) 
// como filho do elemento 'container' no documento HTML.
container.appendChild(div);