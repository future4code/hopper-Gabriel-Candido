import './App.css';
import styled from "styled-components";
import cancel from "./assets/cancel.svg";

import ComponentMessage from "./components/ComponentMessage.jsx";

const ContainerApp = styled.div`
  background-color: #ece5dd;
  width: 40%;
  margin: .5% auto;
  height: 99vh;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 98%;
  }
`;

export default function App() {
  return (
    <div className="App">
      <ContainerApp>
        <ComponentMessage source={cancel} alternative={"Cancelar Mensagem"} />
      </ContainerApp>
    </div>
  );
}