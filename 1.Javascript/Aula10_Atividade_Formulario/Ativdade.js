function envioFormulario() {
    // Seleciona o formulário e o elemento onde o resultado será exibido
    const form = document.querySelector('form');
    const resultado = document.querySelector('.resultado');
  
    // Cria um objeto "pessoa" com propriedades vazias
    const pessoa = {
      nome: '',
      sobrenome: '',
      altura: '',
      peso: ''
    };
  
    // Cria um array vazio para armazenar as pessoas
    const listaPessoas = [];
  
    // Função que será executada quando o formulário for enviado
    function recebeFormulario(e) {
      // Previne o comportamento padrão do formulário (recarregar a página)
      e.preventDefault();
  
      // Seleciona os campos do formulário
      const nome = form.querySelector('.nome');
      const sobrenome = form.querySelector('.sobrenome');
      const altura = form.querySelector('.altura');
      const peso = form.querySelector('.peso');
  
      // Atribui os valores dos campos às propriedades do objeto "pessoa"
      pessoa.nome = nome.value;
      pessoa.sobrenome = sobrenome.value;
      pessoa.altura = altura.value;
      pessoa.peso = peso.value;
  
      // Verifica se o objeto "pessoa" e suas propriedades foram preenchidos
      if (pessoa != null && !pessoaHasNull(pessoa)) {
        // Adiciona o objeto "pessoa" ao array "listaPessoas"
        listaPessoas.push(pessoa);
  
        // Exibe os dados da pessoa no elemento "resultado"
        resultado.innerHTML += `</p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.altura} ${pessoa.peso}</p>`;
  
        // Exibe o array "listaPessoas" no console (para fins de depuração)
        console.log(listaPessoas);
      } else {
        // Exibe um alerta caso haja algum erro no preenchimento do formulário
        alert("Erro ao adicionar uma pessoa ao formulário. Verifique os campos.");
      }
  
    }
  
    // Adiciona um ouvinte de evento para o evento "submit" do formulário
    form.addEventListener('submit', recebeFormulario);
  
    // Função auxiliar para verificar se o objeto possui alguma propriedade nula
    function pessoaHasNull(obj) {
      // Itera sobre as propriedades do objeto
      for (let pro in obj) {
        // Se encontrar uma propriedade nula, retorna "true"
        if (obj[pro] === null) {
          return true;
        }
      }
      // Se nenhuma propriedade for nula, retorna "false"
      return false;
    }
  
  }
  
  // Chama a função principal para iniciar o processo
  envioFormulario();