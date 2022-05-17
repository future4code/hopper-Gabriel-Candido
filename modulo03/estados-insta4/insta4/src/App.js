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
const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

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
    ],

    valorInputNome: "",
    valorInputFoto: "",
    valorInputImagem: ""
  }

  onChangeNome = (event) =>{
    this.setState({ valorInputNome: event.target.value });
  }
  onChangeFoto = (event) =>{
    this.setState({ valorInputFoto: event.target.value });
  }
  onChangeImagem = (event) =>{
    this.setState({ valorInputImagem: event.target.value });
  }

  onClickBtn = () =>{
    const adicionaPost = {
      nome: this.state.valorInputNome,
      foto: this.state.valorInputFoto,
      imagem: this.state.valorInputImagem
    }
    const novoPost = [...this.state.post, adicionaPost]
    this.setState({post: novoPost, valorInputNome:"", valorInputFoto:"", valorInputImagem:"" })
  }

  render() {
    
    const mapeandoPost = this.state.post.map((post, index) => {
      return (
        <Post
          key={index}
          nomeUsuario={post.nome}
          fotoUsuario={post.foto}
          fotoPost={post.imagem}
        />
      )
    })
    console.log(mapeandoPost)
    return (
      <MainContainer>
        <ContainerInputs>
          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeNome}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputFoto}
            onChange={this.onChangeFoto}
            placeholder={"Foto do Usuário"}
          />
          <input
            value={this.state.valorInputImagem}
            onChange={this.onChangeImagem}
            placeholder={"Foto do Post"}
          />
          <button onClick={this.onClickBtn}>Adicionar</button>
        </ContainerInputs>
        {mapeandoPost}
      </MainContainer>
    );
  }
}

export default App;
