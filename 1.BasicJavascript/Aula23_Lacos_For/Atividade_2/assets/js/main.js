/*
  Atividade: Criando um Perfil Dinâmico

  Objetivo: 
    Utilizar o conceito de criação dinâmica de elementos HTML com JavaScript 
    para gerar um perfil de usuário a partir de um array de objetos.

  Descrição:
    Imagine que você precisa criar um perfil de usuário em uma página web. 
    As informações do usuário estão disponíveis em um array de objetos, 
    como este:

    const usuario = [
      { tag: 'h2', texto: 'Nome: João Silva' },
      { tag: 'img', src: 'caminho/para/foto.jpg', alt: 'Foto do perfil' },
      { tag: 'p', texto: 'Profissão: Desenvolvedor Web' },
      { tag: 'p', texto: 'Cidade: São Paulo' },
      { tag: 'ul', texto: '' } // Lista de hobbies (vazia por enquanto)
    ];

    Você precisa usar JavaScript para criar os elementos HTML do perfil 
    dinamicamente, com base nesse array. Além disso, o array contém um 
    objeto com a tag 'ul' para uma lista de hobbies. Você precisará 
    adicionar itens à essa lista com base em outro array:

    const hobbies = ['Ler', 'Programar', 'Jogar videogame', 'Viajar'];
*/
const hobbies = ['Ler', 'Programar', 'Jogar videogame', 'Viajar'];
const perfil = document.querySelector('.perfil');

const pessoa = {
    nome: 'Ronaldo Ademar',
    profissao: 'Desenvolvedor C#',
    cidade: 'Belo Horizonte / MG',
    hobbies: hobbies
}

// Seu código JavaScript aqui...
const usuario = [
    {tag:'h2', texto: pessoa.nome},
    {tag:'p', texto:pessoa.profissao},
    {tag:'p', texto:pessoa.cidade},
    {tag:'ul', texto: pessoa.hobbies},
]

for (i = 0;  i < usuario.length ; i++) {
    const {tag, texto} = usuario[i];
    let adicionaTag = '';
    let itemHobbies = ''
    
    if(tag == 'ul' && pessoa.hobbies.length > 0) { 
      
      adicionaTag = document.createElement(tag);  
      perfil.appendChild(adicionaTag);
        pessoa.hobbies.forEach(hobby  => {
           itemHobbies = document.createElement('li');
           itemHobbies.innerHTML = hobby; 
           
           document.querySelector('ul').appendChild(itemHobbies)
        });  
       
    }
    else {
      adicionaTag = document.createElement(tag);  
      adicionaTag.innerHTML = texto;
      perfil.appendChild(adicionaTag);
    }       

    
}






