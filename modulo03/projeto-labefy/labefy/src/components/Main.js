import React from "react";
import { ContainerMain } from "./Style"

export class Main extends React.Component{

  welcome = () => {
    let date = new Date().getHours()
    if ( date >= 1 && date < 12 ){
      return <h1>Bom Dia</h1>
    } else if ( date >= 12 && date < 18){
      return <h1>Boa Tarde</h1>
    } else {
      return <h1>Boa Noite</h1>
    }
  }

  render(){
    return(
      <ContainerMain visibility={this.props.searchBtn}>
        <input type="search" placeholder="Search" />
        {this.welcome()}
      </ContainerMain>
    )
  }
}