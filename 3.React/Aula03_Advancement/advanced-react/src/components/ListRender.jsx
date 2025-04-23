import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Lucas", "Pedro", "João"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Lucas", age: 25 },
    { id: 2, name: "Pedro", age: 30 },
    { id: 3, name: "João", age: 35 },
    { id: 4, name: "Maria", age: 28 },
    { id: 5, name: "Ana", age: 22 },
    { id: 6, name: "Carlos", age: 40 },
    { id: 7, name: "Fernanda", age: 29 },
    { id: 8, name: "Roberto", age: 33 },
    { id: 9, name: "Juliana", age: 27 },
    { id: 10, name: "Ricardo", age: 31 },
  ]);

  const deleteUser = () => {
    setUsers((prevUsers) => {
      const randomNumber = Math.floor(Math.random() * 11);
      // console.log(prevUsers);
      // console.log(randomNumber);
      console.log(randomNumber);
      console.log(prevUsers.length);
      // console.log(prevUsers.filter((user) => user.id !== randomNumber));
      return prevUsers.filter((user) => user.id !== randomNumber);
    });
  };
  return (
    <>
      <h1>Lista de Nomes</h1>
      <p>Renderizando uma lista de nomes key indice</p>
      <p>Lista de nomes:</p>
      {list.map((name, index) => (
        <p key={index}>{name}</p>
      ))}

      <p>Renderizando uma lista de nomes objeto</p>
      <p>Lista de nomes dos usuários:</p>
      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.name} - {user.age}
          </p>
        </div>
      ))}

      <p>Previous state</p>
      <p>Botão para deletar usuários utilizando o estado anterior</p>

      <button onClick={() => deleteUser()}>Delete User</button>
    </>
  );
};

export default ListRender;
