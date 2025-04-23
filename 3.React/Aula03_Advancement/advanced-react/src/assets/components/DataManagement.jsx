import { useState } from "react";

const DataManagement = () => {
  let staticData = 10;
  const [dynamicData, setDynamicData] = useState(10);

  return (
    <>
      <h1>Data Management</h1>
      <h2>Gerenciamento de dados no React</h2>

      <p>Dado estático que não altera após inicialização</p>
      <p>Valor de staticData: {staticData}</p>
      <button onClick={() => (staticData = 12)}>Altera staticData</button>

      <p>
        O valor de staticData não muda, pois não está dentro do estado do React.
      </p>

      <br />
      <br />

      <p>Dados dinâmicos que alteram após inicialização, utilizando useState</p>
      <p>Valor de staticData: {dynamicData}</p>
      <button onClick={() => setDynamicData(12)}>Altera dynamicData</button>
      <p>O valor de dynamicData muda, pois está dentro do estado do React.</p>
    </>
  );
};

export default DataManagement;
