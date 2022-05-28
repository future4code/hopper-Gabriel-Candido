import React from "react";
import { WhiteP, MusicTable } from "../components/Style"
import Delete from '../assets/delete.svg'

export default class CreatePL extends React.Component{

  render(){
    return(
      <div>
        <WhiteP>Quantidade: {this.props.trackMusic.length}</WhiteP>
        <MusicTable>
        <tr>
          <td>Nome</td>
          <td>Artista</td>
          <td>Remover</td>
        </tr>
        {this.props.trackMusic && this.props.trackMusic.map((music) => {
          return(
            <tr key={music.id}>
              <td><p>{music.name}</p></td>
              <td><p>{music.artist}</p></td>
              <td><img src={Delete} alt="Icone Deletar Música" onClick={() => this.props.removeTrack(music.id)}/></td>
            </tr>
          )
        })}
        </MusicTable>
      </div>
    )
  }
}
