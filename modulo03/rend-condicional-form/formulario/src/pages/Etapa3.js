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
    margin: 0 auto;
  }
`;

class Etapa3 extends React.Component {
  render() {
    return (
      <>
        <TituloPadrao titulo={"Informações Gerais de Ensino"} />
        <InputsPadrao
          htmlFor={"nome"}
          pergunta={"1. Por que você não terminou um curso de graduação?"}
          id={"nome"}
          name={"nome"}
          type={"text"}
          required={true}
        />

        <Selecao>
          <label htmlFor={"escolaridade"}>
            6. Você fez algum curso complementar?
          </label>
          <select>
            <option value={""} checked></option>
            <option value={"Curso Técnico"}>Curso Técnico</option>
            <option value={"Cursos de inglês"}>Cursos de inglês</option>
            <option value={"Não fiz curso complementar"}>
              Não fiz curso complementar
            </option>
          </select>
        </Selecao>
      </>
    );
  }
}

export default Etapa3;
