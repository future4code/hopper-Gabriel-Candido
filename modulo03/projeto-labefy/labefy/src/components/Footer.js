import React from "react";
import { ContainerFooter } from "./Style"
import pause_circle from "../assets/pause_circle.svg"
import play_circle from "../assets/play_circle.svg"
import skip_next from "../assets/skip_next.svg"
import skip_previous from "../assets/skip_previous.svg"

export class Footer extends React.Component{
  
  state = {
    Icon: false
  }
  
  onPlayPause = () => {
    this.setState({Icon: !this.state.Icon})
  }

  render(){
    let playPause

    if(this.state.Icon) {
      playPause = pause_circle
    } else {
      playPause = play_circle
    }

    return(
      <ContainerFooter>
        <div>
        <img src={skip_previous} alt="Skip Previous Icon" />
        <img onClick={this.onPlayPause} src={playPause} alt="" />
        <img src={skip_next} alt="Skip Next Icon" />
        </div>
        <div>
          <span></span>
          <span></span>
        </div>
      </ContainerFooter>
    )
  }
}