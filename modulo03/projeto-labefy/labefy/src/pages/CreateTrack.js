import React from "react";
import { ContainerTrack } from "../components/Style"

export class CreateTrack extends React.Component {
  render(){
    return(
      <ContainerTrack>
        <h1>Adicione sua música:</h1>
        <div>
          <input 
            type="text" 
            placeholder="Name"
            value={this.props.trackName}
            onChange={this.props.onChangeName}
          />
          <input 
            type="text" 
            placeholder="Artist"
            value={this.props.trackArtist}
            onChange={this.props.onChangeArtist}
          />
          <input 
            type="text" 
            placeholder="Music url"
            value={this.props.trackUrl}
            onChange={this.props.onChangeUrl}
          />
          <button onClick={this.props.addTrack}>Criar</button>
        </div>
      </ContainerTrack>
    )
  }
}
