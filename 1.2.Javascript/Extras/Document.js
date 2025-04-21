// Seleciona o elemento com o ID "meuParagrafo".
const paragrafo = document.getElementById("meuParagrafo");

// Altera o conteúdo de texto do parágrafo.
paragrafo.textContent = "Novo texto do parágrafo!";

// Cria um novo elemento de lista.
const novoItemLista = document.createElement("li");

// Define o conteúdo de texto do novo item da lista.
novoItemLista.textContent = "Item adicionado dinamicamente!";

// Seleciona a lista com o ID "minhaLista".
const lista = document.getElementById("minhaLista");

// Adiciona o novo item à lista.
lista.appendChild(novoItemLista);

// Seleciona todos os elementos com a classe "itens".
const itens = document.querySelectorAll(".itens");

// Adiciona um evento de clique a cada elemento.
itens.forEach(item => {
  item.addEventListener("click", () => {
    // Altera a cor do item quando clicado.
    item.style.color = "red";
  });
});

// Verifica se o documento possui um elemento com o ID "elementoExistente".
if (document.getElementById("elementoExistente")) {
  console.log("O elemento existe!");
}

// Cria um novo elemento de imagem.
const novaImagem = document.createElement("img");

// Define o atributo src da imagem.
novaImagem.setAttribute("src", "caminho/para/imagem.jpg");

// Adiciona a imagem ao corpo do documento.
document.body.appendChild(novaImagem);

// =========================== Mais métodos ===========================

// Seleciona o primeiro elemento com a classe "container".
const container = document.querySelector(".container");

// Adiciona uma classe ao elemento.
container.classList.add("destaque");

// Remove uma classe do elemento.
container.classList.remove("container");

// Verifica se o elemento possui uma classe.
if (container.classList.contains("destaque")) {
  console.log("O elemento possui a classe 'destaque'");
}

// Altera o estilo do elemento diretamente.
container.style.backgroundColor = "lightblue";

// Obtém o valor do atributo "id" do elemento.
const idDoContainer = container.getAttribute("id");

// Define o valor do atributo "data-info" do elemento.
container.setAttribute("data-info", "informação útil");

// Remove o atributo "data-info" do elemento.
container.removeAttribute("data-info");

// Navega pelos nós do DOM:
const paiDoContainer = container.parentNode; // Obtém o elemento pai
const primeiroFilhoDoContainer = container.firstChild; // Obtém o primeiro filho
const ultimoFilhoDoContainer = container.lastChild; // Obtém o último filho

// Clona o elemento container (cópia profunda).
const cloneDoContainer = container.cloneNode(true);

// Remove o elemento container do DOM.
paiDoContainer.removeChild(container); 

// Insere um novo elemento antes do primeiro filho do pai do container.
paiDoContainer.insertBefore(cloneDoContainer, primeiroFilhoDoContainer);