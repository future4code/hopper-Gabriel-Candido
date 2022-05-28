import axios from "axios";

export const createPlaylist = async ({ name }) => {
  try {
    const { data } = await axios.post (
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      { name }, {
        headers: {
          Authorization: "gabriel-candido-hopper"
        }
      }
    )
    alert('Playlist criada com sucesso!')
    return data
  } catch (error) {
    alert('Ocorreu um erro ao criar a Playlist.')
  }
};

export const getAllPlaylists = async () => {
  try {
    const { data } = await axios.get (
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      {
        headers: {
          Authorization: "gabriel-candido-hopper"
        }
      }
    )
    return data
  } catch (error) {
    console.log(error.response)
  }
};

export const deletePlaylist = async (playlistId) => {
  try {
    const { data } = await axios.delete (
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
      {
        headers: {
          Authorization: "gabriel-candido-hopper"
        }
      }
    )
    alert('Playlist removida com sucesso.')
    return data
  } catch (error) {
    alert('Ocorreu um erro ao remover esta Playlist.')
  }
}

export const getPlaylistTracks = async (playlistId) => {
  try {
    const { data } = await axios.get (
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
      {
        headers: {
          Authorization: "gabriel-candido-hopper"
        }
      }
    )
    return data
  } catch (error) {
    console.log(error.response)
  }
}

export const addTrackToPlaylist = async (playlistId, {name, artist, url}) => {
  try{
    const { data } = await axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
      { name, artist, url }, {
        headers: {
          Authorization: "gabriel-candido-hopper"
        }
      }
    ) 
    alert("Música adicionada com sucesso!")
    return data
  } catch (error) {
    alert("Ocorreu um erro ao adicionar.")
  }
}

export const removeTrackFromPlaylist = async (playlistId, trackId) => {
  try{
    const { data } = await axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${trackId}`,
      {
        headers: {
          Authorization: "gabriel-candido-hopper"
        }
      }
    )
    return data
  } catch (error) {
    console.log(error.response)
  }
}
