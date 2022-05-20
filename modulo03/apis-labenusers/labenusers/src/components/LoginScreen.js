import React from "react";
import { Login , Form } from './Styles'

export class LoginScreen extends React.Component{

  render(){
    return(
      <Login>
        <Form>
          <span>Nome:</span>
          <input
            type="text"
            placeholder="Digite seu nome..."
            onChange={this.props.onChangeName}
            value={this.props.valueName}
          />
          
          <span>E-mail:</span>
          <input 
            type="email" 
            placeholder="Digite seu melhor email..."
            onChange={this.props.onChangeEmail}
            value={this.props.valueEmail}
          />

          <button
            onClick={this.props.criarUsuario}
            type='button'
          >
            Cadastrar
          </button>
        </Form>
        
      </Login>
    )
  }
}