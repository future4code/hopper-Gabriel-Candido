import styled from "styled-components";
import Etapa1 from "./pages/Etapa1";
import Etapa2 from "./pages/Etapa2";
import Etapa3 from "./pages/Etapa3";
import Final from "./pages/Final";
import React from "react";

const Centraliza = styled.div`
  text-align: center;
`;

class App extends React.Component {
  state = {
    etapa: 1
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
        break;

      case 2:
        return <Etapa2 />;
        break;

      case 3:
        return <Etapa3 />;
        break;

      case 4:
        return <Final />;
        break;

      default:
        break;
    }
  };

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  render() {
    // console.log(this.state.etapa);
    return (
      <Centraliza>
        {this.renderizaEtapa()}
        {this.state.etapa <=3 ? 
        <input
          onClick={this.irParaProximaEtapa}
          type={"submit"}
          value={"Proxima Etapa"}
        />
         : null
        }
        
      </Centraliza>
    );
  }
}

export default App;
