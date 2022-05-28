import React from "react";
import { Container, GlobalStyle, ContainerScreen } from "./components/Style"

import { Navigation } from "./components/Navigation";
import { Playlist } from "./components/Playlist"
import { Main } from "./components/Main"
import CreatePL  from "./pages/CreatePL.js"
import { CreateTrack } from "./pages/CreateTrack.js"
import { createPlaylist, getAllPlaylists, deletePlaylist, getPlaylistTracks, addTrackToPlaylist, removeTrackFromPlaylist } from "./services/ApiRequests"

class App extends React.Component {
  state = {
    busca: false,
    add: false,
    showScreen: '',
    playlistName: '',
    allPlaylists: [],
    tracks: [],
    playlistId: '',
    trackName: '',
    trackArtist: '',
    trackUrl: ''  
  }

  componentDidMount = () => {
    this.handleGetAllPlaylists()
  }

  handleCreateUser = async () => {
    const body = {
      name: this.state.playlistName
    }

    await createPlaylist(body)
    this.setState({playlistName: ''})
    this.handleGetAllPlaylists()
  }

  handleGetAllPlaylists = async () => {
    const response = await getAllPlaylists()
    this.setState({allPlaylists: response.result.list})
  }

  handleDeletePlaylist = async (id) => {
    if(window.confirm("Tem certeza que quer deletar essa Playlist?")){
      await deletePlaylist(id)
      this.handleGetAllPlaylists()
    }
  }

  handleGetPlaylistTracks = async (id) => {
    const response = await getPlaylistTracks(id)
    this.setState({tracks: response.result.tracks, showScreen:'tracks', playlistId: id})
  }

  getId = (id) => {
    this.setState({playlistId: id, showScreen: 'addTrack'})
  }

  handleAddTrackToPlaylist = async () => {
    const id = this.state.playlistId
    const body = {
      name: this.state.trackName,
      artist: this.state.trackArtist,
      url: this.state.trackUrl
    }

    await addTrackToPlaylist(id, body)
    this.handleGetAllPlaylists()
    this.setState({trackName: '', trackArtist: '', trackMusic: ''})
  }

  handleRemoveTrackFromPlaylist = async (id) => {
    if(window.confirm("Você tem certeza disso?")){
      const idPlaylist = this.state.playlistId
      await removeTrackFromPlaylist(idPlaylist, id)
      this.handleGetPlaylistTracks(idPlaylist)
    }
  }

  onSearch = () => {
    return this.setState({busca: !this.state.busca})
  }
  onAdd = () => {
    return this.setState({add: !this.state.add})
  }

  screen = () => {
    switch (this.state.showScreen) {
      case 'tracks':
        return (
          <CreatePL 
            trackMusic={this.state.tracks}
            removeTrack={this.handleRemoveTrackFromPlaylist}
          />
        )
      case 'addTrack':
        return(
          <CreateTrack 
            trackName={this.state.trackName}
            trackArtist={this.state.trackArtist}
            trackUrl={this.state.trackUrl}
            onChangeName={(e) => this.setState({trackName: e.target.value})}
            onChangeArtist={(e) => this.setState({trackArtist: e.target.value})}
            onChangeUrl={(e) => this.setState({trackUrl: e.target.value})}
            addTrack={this.handleAddTrackToPlaylist}
          />
        )
      default:
        break;
    }
  }

  render(){
    console.log(this.state.playlistId)
    return (
      <Container>
        <GlobalStyle />
        <div>
          <Navigation onClickSearch={this.onSearch} onClickAdd={this.onAdd}/>
          <Playlist 
            value={this.state.playlistName} 
            onChange={(e) => this.setState({playlistName: e.target.value})}
            onClick={this.handleCreateUser}
            onOff={this.state.add}
            plts={this.state.allPlaylists}
            remove={this.handleDeletePlaylist}
            detail={this.handleGetPlaylistTracks}
            addId={this.getId}
          />
        </div>
        <div>
          <Main searchBtn={this.state.busca}/>
          <ContainerScreen>
            {this.screen()}
          </ContainerScreen>
        </div>
      </Container>
    );
  }
}

export default App;
