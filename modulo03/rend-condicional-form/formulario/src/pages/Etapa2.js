import React from "react";
import InputsPadrao from "../components/InputsPadrao";
import TituloPadrao from "../components/TituloPadrao";

class Etapa2 extends React.Component {
  render() {
    return (
      <>
        <TituloPadrao titulo={"Informações do Ensino Superior"} />
        <InputsPadrao
          htmlFor={"curso"}
          pergunta={"1. Qual curso?"}
          id={"curso"}
          name={"curso"}
          type={"text"}
          required={true}
        />

        <InputsPadrao
          htmlFor={"unidade"}
          pergunta={"2. Qual a unidade de ensino?"}
          id={"unidade"}
          name={"unidade"}
          type={"text"}
          required={true}
        />
      </>
    );
  }
}

export default Etapa2;
