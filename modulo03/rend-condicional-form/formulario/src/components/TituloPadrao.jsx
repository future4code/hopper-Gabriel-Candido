import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
  text-transform: uppercase;
`;

class TituloPadrao extends React.Component {
  render() {
    return (
      <>
        <Titulo>{this.props.titulo}</Titulo>
      </>
    );
  }
}
export default TituloPadrao;
