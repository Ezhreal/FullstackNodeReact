import { useState } from "react";

const ConditionalRendering = () => {
  const [mostrarMensagem, setMostrarMensagem] = useState(false);
  const alterarMensagem = () => {
    setMostrarMensagem(!mostrarMensagem);
  };
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2>Renderização Condicional com State</h2>

        {/* Botão para alternar o state */}
        <button onClick={alterarMensagem}>
          {mostrarMensagem ? "Ocultar Mensagem" : "Mostrar Mensagem"}
        </button>

        {/* Renderização condicional usando operador && */}
        {mostrarMensagem && (
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "#e6f7ff",
              borderRadius: "5px",
            }}
          >
            Esta mensagem só aparece quando o state mostrarMensagem é true!
          </div>
        )}

        {/* Renderização condicional usando operador ternário */}
        <div style={{ marginTop: "20px" }}>
          {mostrarMensagem ? (
            <p style={{ color: "green" }}>State está como TRUE</p>
          ) : (
            <p style={{ color: "red" }}>State está como FALSE</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ConditionalRendering;
