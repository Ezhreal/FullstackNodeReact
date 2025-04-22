import React, { useState, useEffect } from "react";

const Challenge = () => {
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);

  // Este useEffect só é executado uma vez quando o componente monta
  useEffect(() => {
    setNumber1(parseFloat(prompt("Digite o primeiro número:")));
    setNumber2(parseFloat(prompt("Digite o segundo número:")));
  }, []); // O array vazio faz com que execute apenas uma vez na montagem

  return (
    <>
      <button
        onClick={() => alert(`A soma dos dois números é: ${number1 + number2}`)}
      >
        Calcular
      </button>
    </>
  );
};

export default Challenge;
