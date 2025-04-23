import React, { useState } from "react";

/* 
  FormularioCondicional: Um componente de formulário de múltiplas etapas
  
  Problema: Precisamos criar um formulário que se adapte dinamicamente ao tipo de usuário
  e mostre diferentes etapas de preenchimento.
  
  Requisitos:
  - O usuário deve poder escolher entre diferentes perfis (cliente ou admin)
  - O formulário deve ter múltiplas etapas que mudam conforme o progresso
  - Devemos mostrar feedback visual para estados como carregamento e erro
  - O usuário deve poder navegar entre etapas
*/

function ConditionalFormRendering() {
  // Primeiro, definimos os estados que vamos precisar
  const [etapa, setEtapa] = useState(1); // Para controlar em qual etapa estamos
  const [tipoUsuario, setTipoUsuario] = useState(""); // Para armazenar o tipo de usuário
  const [carregando, setCarregando] = useState(false); // Para mostrar estado de carregamento
  const [erro, setErro] = useState(null); // Para gerenciar erros

  // Também vamos precisar de estados para os campos de formulário
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: "",
    documento: "",
    email: "",
    telefone: "",
    departamento: "", // apenas para admin
    cargo: "", // apenas para admin
  });

  // Função para atualizar campos do formulário
  const atualizarCampo = (campo, valor) => {
    setDadosFormulario({
      ...dadosFormulario,
      [campo]: valor,
    });
  };

  // Função para avançar para próxima etapa
  const avancarEtapa = () => {
    // Simulamos uma validação antes de avançar
    if (etapa === 1 && !tipoUsuario) {
      setErro("Selecione um tipo de usuário para continuar");
      return;
    }

    // Validamos campos obrigatórios na etapa 2
    if (etapa === 2) {
      if (
        tipoUsuario === "cliente" &&
        (!dadosFormulario.nome || !dadosFormulario.documento)
      ) {
        setErro("Preencha todos os campos obrigatórios");
        return;
      }

      if (
        tipoUsuario === "admin" &&
        (!dadosFormulario.nome || !dadosFormulario.departamento)
      ) {
        setErro("Preencha todos os campos obrigatórios");
        return;
      }
    }

    // Se passou nas validações, limpamos erros e mostramos carregamento
    setErro(null);
    setCarregando(true);

    // Simulamos uma operação assíncrona (como uma chamada API)
    setTimeout(() => {
      setCarregando(false);
      setEtapa(etapa + 1);
    }, 800);
  };

  // Função para voltar à etapa anterior
  const voltarEtapa = () => {
    setEtapa(etapa - 1);
    setErro(null); // Limpamos erros ao voltar
  };

  // Função para selecionar o tipo de usuário
  const selecionarTipoUsuario = (tipo) => {
    setTipoUsuario(tipo);
    setErro(null); // Limpamos erros ao selecionar
  };

  // Função para submeter o formulário na etapa final
  const submeterFormulario = () => {
    setCarregando(true);

    // Simulamos o envio para uma API
    setTimeout(() => {
      setCarregando(false);
      alert("Formulário enviado com sucesso!");
      // Resetamos o formulário
      setEtapa(1);
      setTipoUsuario("");
      setDadosFormulario({
        nome: "",
        documento: "",
        email: "",
        telefone: "",
        departamento: "",
        cargo: "",
      });
    }, 1500);
  };

  // Função para renderizar o cabeçalho do formulário
  const renderizarCabecalho = () => {
    return (
      <div className="cabecalho" style={{ marginBottom: "20px" }}>
        <h2>Formulário de Cadastro</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "300px",
            margin: "20px 0",
          }}
        >
          <div
            style={{
              padding: "20px",
              backgroundColor: etapa >= 1 ? "#4CAF50" : "#e0e0e0",
              color: etapa >= 1 ? "white" : "black",
              borderRadius: "50%",
            }}
          >
            1
          </div>
          <div
            style={{
              padding: "20px",
              backgroundColor: etapa >= 2 ? "#4CAF50" : "#e0e0e0",
              color: etapa >= 2 ? "white" : "black",
              borderRadius: "50%",
            }}
          >
            2
          </div>
          <div
            style={{
              padding: "20px",
              backgroundColor: etapa >= 3 ? "#4CAF50" : "#e0e0e0",
              color: etapa >= 3 ? "white" : "black",
              borderRadius: "50%",
            }}
          >
            3
          </div>
        </div>
      </div>
    );
  };

  // Função para renderizar o conteúdo da etapa atual
  const renderizarConteudoEtapa = () => {
    switch (etapa) {
      case 1:
        return (
          <div className="etapa-perfil">
            <h3>Etapa 1: Escolha o tipo de perfil</h3>
            <p>
              Selecione o tipo de usuário que melhor se encaixa no seu perfil
            </p>

            <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
              <button
                onClick={() => selecionarTipoUsuario("cliente")}
                style={{
                  padding: "10px 20px",
                  backgroundColor:
                    tipoUsuario === "cliente" ? "#4CAF50" : "#f0f0f0",
                  color: tipoUsuario === "cliente" ? "white" : "black",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Cliente
              </button>

              <button
                onClick={() => selecionarTipoUsuario("admin")}
                style={{
                  padding: "10px 20px",
                  backgroundColor:
                    tipoUsuario === "admin" ? "#4CAF50" : "#f0f0f0",
                  color: tipoUsuario === "admin" ? "white" : "black",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Administrador
              </button>
            </div>

            <div style={{ marginTop: "20px" }}>
              {tipoUsuario === "cliente" && (
                <p>
                  Como cliente, você terá acesso às funcionalidades de compra e
                  atendimento.
                </p>
              )}

              {tipoUsuario === "admin" && (
                <p>
                  Como administrador, você terá acesso ao painel administrativo
                  do sistema.
                </p>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="etapa-dados">
            <h3>Etapa 2: Preencha seus dados</h3>

            {/* Campos em comum para ambos os tipos */}
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Nome completo *
              </label>
              <input
                type="text"
                value={dadosFormulario.nome}
                onChange={(e) => atualizarCampo("nome", e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Email
              </label>
              <input
                type="email"
                value={dadosFormulario.email}
                onChange={(e) => atualizarCampo("email", e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Campos específicos para cliente */}
            {tipoUsuario === "cliente" && (
              <>
                <div style={{ marginBottom: "15px" }}>
                  <label style={{ display: "block", marginBottom: "5px" }}>
                    CPF/CNPJ *
                  </label>
                  <input
                    type="text"
                    value={dadosFormulario.documento}
                    onChange={(e) =>
                      atualizarCampo("documento", e.target.value)
                    }
                    style={{
                      width: "100%",
                      padding: "8px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "15px" }}>
                  <label style={{ display: "block", marginBottom: "5px" }}>
                    Telefone
                  </label>
                  <input
                    type="tel"
                    value={dadosFormulario.telefone}
                    onChange={(e) => atualizarCampo("telefone", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </>
            )}

            {/* Campos específicos para admin */}
            {tipoUsuario === "admin" && (
              <>
                <div style={{ marginBottom: "15px" }}>
                  <label style={{ display: "block", marginBottom: "5px" }}>
                    Departamento *
                  </label>
                  <select
                    value={dadosFormulario.departamento}
                    onChange={(e) =>
                      atualizarCampo("departamento", e.target.value)
                    }
                    style={{
                      width: "100%",
                      padding: "8px",
                      boxSizing: "border-box",
                    }}
                  >
                    <option value="">Selecione...</option>
                    <option value="TI">TI</option>
                    <option value="RH">RH</option>
                    <option value="Financeiro">Financeiro</option>
                  </select>
                </div>

                <div style={{ marginBottom: "15px" }}>
                  <label style={{ display: "block", marginBottom: "5px" }}>
                    Cargo
                  </label>
                  <input
                    type="text"
                    value={dadosFormulario.cargo}
                    onChange={(e) => atualizarCampo("cargo", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "8px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </>
            )}
          </div>
        );

      case 3:
        return (
          <div className="etapa-confirmacao">
            <h3>Etapa 3: Confirme suas informações</h3>

            <div
              style={{
                padding: "15px",
                backgroundColor: "#f7f7f7",
                borderRadius: "5px",
                marginTop: "20px",
              }}
            >
              <h4>Resumo dos dados</h4>

              <div style={{ marginBottom: "10px" }}>
                <strong>Tipo de usuário:</strong>{" "}
                {tipoUsuario === "cliente" ? "Cliente" : "Administrador"}
              </div>

              <div style={{ marginBottom: "10px" }}>
                <strong>Nome:</strong> {dadosFormulario.nome || "-"}
              </div>

              <div style={{ marginBottom: "10px" }}>
                <strong>Email:</strong> {dadosFormulario.email || "-"}
              </div>

              {tipoUsuario === "cliente" && (
                <>
                  <div style={{ marginBottom: "10px" }}>
                    <strong>CPF/CNPJ:</strong>{" "}
                    {dadosFormulario.documento || "-"}
                  </div>

                  <div style={{ marginBottom: "10px" }}>
                    <strong>Telefone:</strong> {dadosFormulario.telefone || "-"}
                  </div>
                </>
              )}

              {tipoUsuario === "admin" && (
                <>
                  <div style={{ marginBottom: "10px" }}>
                    <strong>Departamento:</strong>{" "}
                    {dadosFormulario.departamento || "-"}
                  </div>

                  <div style={{ marginBottom: "10px" }}>
                    <strong>Cargo:</strong> {dadosFormulario.cargo || "-"}
                  </div>
                </>
              )}
            </div>

            <p style={{ marginTop: "20px" }}>
              Confirme se todos os dados estão corretos antes de finalizar o
              cadastro.
            </p>
          </div>
        );

      default:
        return <div>Etapa não encontrada</div>;
    }
  };

  // Função para renderizar as ações (botões) de cada etapa
  const renderizarAcoes = () => {
    return (
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {etapa > 1 && (
          <button
            onClick={voltarEtapa}
            style={{
              padding: "10px 20px",
              backgroundColor: "#f0f0f0",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Voltar
          </button>
        )}

        {etapa < 3 ? (
          <button
            onClick={avancarEtapa}
            disabled={carregando || (etapa === 1 && !tipoUsuario)}
            style={{
              padding: "10px 20px",
              backgroundColor:
                etapa === 1 && !tipoUsuario ? "#cccccc" : "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: etapa === 1 && !tipoUsuario ? "not-allowed" : "pointer",
              marginLeft: "auto",
            }}
          >
            {carregando ? "Processando..." : "Avançar"}
          </button>
        ) : (
          <button
            onClick={submeterFormulario}
            disabled={carregando}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginLeft: "auto",
            }}
          >
            {carregando ? "Enviando..." : "Finalizar Cadastro"}
          </button>
        )}
      </div>
    );
  };

  // Renderizamos o componente principal
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      {/* Cabeçalho com etapas */}
      {renderizarCabecalho()}

      {/* Área de carregamento */}
      {carregando && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#f8f9fa",
            borderRadius: "4px",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0 }}>Carregando... Por favor, aguarde.</p>
        </div>
      )}

      {/* Área de erro */}
      {erro && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#ffebee",
            color: "#c62828",
            borderRadius: "4px",
            marginBottom: "15px",
          }}
        >
          <p style={{ margin: 0 }}>{erro}</p>
        </div>
      )}

      {/* Conteúdo da etapa atual */}
      {renderizarConteudoEtapa()}

      {/* Ações (botões) */}
      {renderizarAcoes()}
    </div>
  );
}

export default ConditionalFormRendering;
