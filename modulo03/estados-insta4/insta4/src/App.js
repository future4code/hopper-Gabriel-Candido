import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Bunitao from './img/Bunitao.jpg';
import Bunitona from './img/Bunitona.jpg';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    post : [
      {
        nome: 'paulinha',
        foto: 'https://picsum.photos/50/50',
        imagem: 'https://picsum.photos/200/150',
      },
      {
        nome: 'Yummi',
        foto: Bunitona,
        imagem: Bunitona,
      },
      {
        nome: 'Alex',
        foto: Bunitao,
        imagem: Bunitao,
      },
    ]
  }

  mapeandoPost = this.state.post.map((post, index) => {
    return (
      <Post
        key={index}
        nomeUsuario={post.nome}
        fotoUsuario={post.foto}
        fotoPost={post.imagem}
      />
    )
  })

  render() {
    console.log(this.mapeandoPost)
    return (
      <MainContainer>
        {this.mapeandoPost}
      </MainContainer>
    );
  }
}

export default App;
