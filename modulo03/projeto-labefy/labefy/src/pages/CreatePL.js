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
          <td>Music Name / Artist</td>
          <td>Player</td>
          <td>Delete</td>
        </tr>
        {this.props.trackMusic && this.props.trackMusic.map((music) => {
          return(
            <tr key={music.id}>
              <td>
                <p>{music.name}</p>
                <p>{music.artist}</p>
              </td>
              <td>
                <iframe width="200" height="70px" src={music.url.replace("watch?v=", "embed/")} frameBorder="0">
                  <p>Seu navegador não possui Suporte para este recurso...</p>
                </iframe>
              </td>
              <td>
                <img src={Delete} alt="Icone Deletar Música" onClick={() => this.props.removeTrack(music.id)}/>
              </td>
            </tr>
          )
        })}
        </MusicTable>
      </div>
    )
  }
}
