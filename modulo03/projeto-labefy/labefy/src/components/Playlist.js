import React from "react";
import { ContainerPlay, ShowInput, ShowPlaylists } from "./Style"
import playlistRemove from "../assets/playlist_remove.svg"
import playlistAdd from "../assets/playlist_add.svg"

export class Playlist extends React.Component {

  render(){
    return(
      <ContainerPlay>

        <ShowInput input={this.props.onOff} button={this.props.onOff}>
          <input type="text" placeholder="Playlist Name" value={this.props.value} onChange={this.props.onChange}/>
          <button type="button" onClick={this.props.onClick}> Criar </button>
        </ShowInput>

          {this.props.plts && this.props.plts.map((playlist) => {
            return(
              <ShowPlaylists key={playlist.id}>
                <p onClick={() => {this.props.detail(playlist.id)}}>
                  {playlist.name}
                </p>

                <div>
                  <img
                    onClick={() => this.props.addId(playlist.id)} 
                    src={playlistAdd} 
                    alt="Icon add" 
                  />
                  <img 
                    onClick={() => this.props.remove(playlist.id)} 
                    src={playlistRemove} 
                    alt="Icon remove"
                  />
                </div>
              </ShowPlaylists>
            )
          })}

      </ContainerPlay>
    )
  }
}
