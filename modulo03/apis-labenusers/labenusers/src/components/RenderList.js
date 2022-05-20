import React from "react";

export class RenderList extends React.Component{
  render(){
    return(
      <div>
        <h1>Usuários Cadastrados: </h1>

          {this.props.showScreen && this.props.showScreen.map((data) => {
            return(
              <ol key={data.id}>
                <li key={data.id}>{data.name}</li>
                <button onClick={() => this.props.remove(data.id)}>Remove User</button>
              </ol>
            )
          })} 

        <button onClick={this.props.pageReturn}>Voltar página</button>
      </div>
    )
  }
}