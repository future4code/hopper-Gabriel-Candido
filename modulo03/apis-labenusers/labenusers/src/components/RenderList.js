import React from "react";

export class RenderList extends React.Component{
  render(){
    return(
      <div>
        <h1>Usuários Cadastrados: </h1>

          {this.props.showScreen && this.props.showScreen.map((data) => {
            return(
              <ul key={data.id}>
                <li>{data.name}</li>
                <button onClick={() => this.props.remove(data.id)}>Remove User</button>
                <button onClick={() => this.props.detail(data.id)}>Detail</button>
              </ul>
            )
          })} 

        <button onClick={this.props.pageReturn}>Voltar página</button>
      </div>
    )
  }
}