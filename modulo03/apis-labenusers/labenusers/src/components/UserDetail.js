import React from "react";

export class UserDetail extends React.Component {
  state = {
    userDetail: [this.props.detail]
  };

  render() {
    return (
      <div>
        {this.state.userDetail.map((data) => {
          return (
            <ul key={data.id}>
              <li>Nome: {data.name}</li>
              <li>Email: {data.email} </li>
              <button onClick={() => this.props.delete(data.id)}>
                Deletar Usuário
              </button>
            </ul>
          );
        })}
        <button onClick={this.props.pageReturn}>Voltar página</button>
      </div>
    );
  }
}