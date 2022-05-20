import React from 'react';
import axios from 'axios';
import { LoginScreen } from './components/LoginScreen';
import { RenderList } from './components/RenderList';
import { GlobalStyle, Container } from './components/Styles'

class App extends React.Component {

  state = {
    data: [],
    screen: 2,
    userName: '',
    userEmail: ''
  }

  componentDidMount(){
    this.showUser()
  }

  createUser = () => {
    const body = {
      name: this.state.userName,
      email: this.state.userEmail
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body,{
      headers:{
        Authorization: 'gabriel-candido-hopper'
      }
    })
    .then((response) => {
      alert("Usuário criado com sucesso")
      this.setState({userName:''})
      this.setState({userEmail:''})
      this.setState({screen: 2})
      this.showUser()
    })
    .catch(error => alert("Erro ao Cadastrar Usuário"))
  }

  showUser = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
      headers: {
        Authorization: 'gabriel-candido-hopper'
      }
    })
    .then(response => this.setState({data: response.data}))
    .catch(error => console.log(error))
  }
  
  deleteUser = (id) => {

    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,{
      headers: {
        Authorization: 'gabriel-candido-hopper'
      }
    })
    .then((response) => {
      alert('Usuário deletado com sucesso!')
      this.showUser()
    })
    .catch(error => alert('Ocorreu um erro ao deletar o usuário.'))
  }

  onChangeName = (event) => {
    this.setState({userName: event.target.value})
  }
  onChangeEmail = (event) => {
    this.setState({userEmail: event.target.value})
  }

  pageReturn = () => {
    this.setState({screen: 1})
  }
  changeScreen = () => {
    switch (this.state.screen) {
      case 1:
        return(
          <LoginScreen
            onChangeName={this.onChangeName}
            valueName={this.state.userName}
            onChangeEmail={this.onChangeEmail}
            valueEmail={this.state.userEmail}
            criarUsuario={this.createUser}
          />
        )
      case 2:
        return(
          <RenderList
            showScreen={this.state.data}
            remove={this.deleteUser}
            pageReturn={this.pageReturn}
          />
        )
      default:
        break;
    }
  }

  render(){
    return (
      <Container>
        <GlobalStyle/>
        {this.changeScreen()}
      </Container>
    );
  }
}

export default App;
