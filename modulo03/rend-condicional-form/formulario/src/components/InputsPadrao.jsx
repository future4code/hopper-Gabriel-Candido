import React from "react";
import styled from "styled-components";

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 10px;

  label {
    font-size: 1.3em;
    font-weight: bold;
  }
  input {
    width: 20%;
    padding: 10px 0;
    margin: 0 auto;
  }
`;

class InputsPadrao extends React.Component {
  render() {
    return (
      <>
        <Formulario>
          <label htmlFor={this.props.htmlFor}>{this.props.pergunta}</label>
          <input
            id={this.props.id}
            name={this.props.name}
            type={this.props.type}
            required={this.props.required}
          />
        </Formulario>
      </>
    );
  }
}

export default InputsPadrao;
