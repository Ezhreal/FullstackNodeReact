import React from "react";

const TemplateExpressions = () => {
  const user = {
    name: "Ronaldo Ademar",
    age: 38,
    profession: "Fullstack Developer",
  };
  return (
    <>
      <h1>Template Expressions</h1>
      <p>Olá, {user.name}!</p>
      <p>Você tem {user.age} anos.</p>
      <p>Você é um {user.profession}.</p>
      <p>{user.age >= 18 ? "Maior de idade" : "Menor de idade"}</p>
    </>
  );
};

export default TemplateExpressions;
