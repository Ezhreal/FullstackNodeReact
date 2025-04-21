// window.alert(): Exibe uma caixa de alerta com uma mensagem.
window.alert("Olá, mundo!");

// window.confirm(): Exibe uma caixa de confirmação com uma mensagem e botões "OK" e "Cancelar".
const confirmar = window.confirm("Deseja realmente sair?");
if (confirmar) {
  // Ação se o usuário clicar em "OK"
} else {
  // Ação se o usuário clicar em "Cancelar"
}

// window.prompt(): Exibe uma caixa de diálogo com um campo de entrada para o usuário digitar um valor.
const nome = window.prompt("Digite seu nome:");
if (nome) {
  console.log("Olá, " + nome + "!");
}

// window.open(): Abre uma nova janela do navegador.
window.open("https://www.google.com", "_blank");

// window.close(): Fecha a janela atual do navegador.
// window.close();

// window.location: Fornece informações sobre a URL atual.
console.log(window.location.href); // Exibe a URL completa
console.log(window.location.hostname); // Exibe o nome do host

// window.history: Permite navegar pelo histórico de navegação.
window.history.back(); // Volta para a página anterior
window.history.forward(); // Avança para a próxima página

// window.screen: Fornece informações sobre a tela do usuário.
console.log(window.screen.width); // Largura da tela em pixels
console.log(window.screen.height); // Altura da tela em pixels

// window.navigator: Fornece informações sobre o navegador do usuário.
console.log(window.navigator.userAgent); // String que identifica o navegador

// window.document: Representa o documento HTML da página.
console.log(window.document.title); // Exibe o título da página

// window.setTimeout(): Executa uma função após um determinado tempo (em milissegundos).
window.setTimeout(function() {
  console.log("Esta mensagem será exibida após 3 segundos.");
}, 3000);

// window.setInterval(): Executa uma função repetidamente em um intervalo de tempo definido.
window.setInterval(function() {
  // Código a ser executado a cada 5 segundos
}, 5000);

// window.addEventListener(): Adiciona um evento listener a um elemento.
window.addEventListener('resize', function() {
  console.log("A janela foi redimensionada!");
});