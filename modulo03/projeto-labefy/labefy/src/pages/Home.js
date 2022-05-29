import React from "react";
import { ContainerHome } from "../components/Style"

export class Home extends React.Component {
  render(){
    return(
      <ContainerHome>
        <h1>Labefy</h1>
        <h2> Primeiros passos: </h2>
        <div>
          <ol>
            <li>Crie sua playlist no botão verdinho ao lado "Add Playlist"</li>
            <li>Dê um nome para sua Playlist</li>
            <li>Logo abaixo, fica a área onde suas Playlists se encontram</li>
            <li>Para adicionar uma música, aperte no botão verde ao lado</li>
            <li>Caso deseje excluir a Playlist, aperto no botão vermelho ao lado</li>
            <li>Para visualizar suas música, clique em cima da Playlist</li>
            <li>Se precisar remover algum música, pressione no botão de remover " x "</li>
            <li>Agora é só curtir conosco!</li>
          </ol>
        </div>
      </ContainerHome>
    )
  }
}