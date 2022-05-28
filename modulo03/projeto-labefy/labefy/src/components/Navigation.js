import React from "react";
import home from "../assets/home.svg"
import search from "../assets/search.svg"
import library from "../assets/library.svg"
import add from "../assets/add.svg"
import { ContainerNav } from "./Style"

export class Navigation extends React.Component{

  render(){
    return(
      <ContainerNav>
        <ul>
          <li>
            <img src={home} alt="Icon Home" />
            <p>Home</p>
          </li>
          <li onClick={this.props.onClickSearch}>
            <img src={search} alt="Icon Search" />
            <p>Search</p>
          </li>
          <li>
            <img src={library} alt="Icon Library" />
            <p>Library</p>
          </li>
          <li onClick={this.props.onClickAdd}>
            <img src={add} alt="Icon AddPlaylist" />
            <p>Add Playlist</p>
          </li>
        </ul>
      </ContainerNav>
    )
  }
}