import React from "react";
import styled from "styled-components";
import InputsPadrao from "../components/InputsPadrao";
import TituloPadrao from "../components/TituloPadrao";

const Selecao = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 10px;

  label {
    font-size: 1.3em;
    font-weight: bold;
  }
  select {
    width: 20%;
    padding: 10px 0;
    margin: 0 auto;
  }
`;

class Etapa1 extends React.Component {
  render() {
    return (
      <>
        <TituloPadrao titulo={"Dados Gerais"} />
        <InputsPadrao
          htmlFor={"nome"}
          pergunta={"1. Qual seu nome?"}
          id={"nome"}
          name={"nome"}
          type={"text"}
          required={true}
        />

        <InputsPadrao
          htmlFor={"idade"}
          pergunta={"2. Qual sua idade?"}
          id={"idade"}
          name={"idade"}
          type={"number"}
          required={true}
        />

        <InputsPadrao
          htmlFor={"email"}
          pergunta={"3. Seu melhor email?"}
          id={"email"}
          name={"email"}
          type={"email"}
          required={true}
        />

        <Selecao>
          <label htmlFor={"escolaridade"}>4. Qual sua escolaridade?</label>
          <select>
            <option value={""} checked></option>
            <option value={"Ensino Médio Incompleto"}>
              Ensino Médio Incompleto
            </option>
            <option value={"Ensino Médio Completo"}>
              Ensino Médio Completo
            </option>
            <option value={"Ensino Superior Incompleto"}>
              Ensino Superior Incompleto
            </option>
            <option value={"Ensino Superior Completo"}>
              Ensino Superior Completo
            </option>
          </select>
        </Selecao>
      </>
    );
  }
}

export default Etapa1;
