import React from 'react';
import axios from 'axios';
import { LoginScreen } from './components/LoginScreen';
import { RenderList } from './components/RenderList';
import { UserDetail } from './components/UserDetail';
import { GlobalStyle, Container } from './components/Styles'

class App extends React.Component {

  state = {
    data: [],
    details: [],
    screen: 1,
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

  getUserById = (id) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "gabriel-candido-hopper"
          }
        }
      )
      .then((response) => {
        this.setState({ details: response.data });
        this.setState({ screen: 3 });
      })
      .catch((error) => alert("Ocorreu um erro na requisição de detalhes."));
  };
  
  answerDelete = (id) => {
    let answer = window.confirm("Tem certeza que quer cancelar?");
    if (answer) {
      this.deleteUser(id);
    }
  };

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
    if(this.state.screen > 1){
      this.setState({screen: this.state.screen - 1})
    }
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
            remove={this.answerDelete}
            detail={this.getUserById}
            pageReturn={this.pageReturn}
          />
        )
      case 3:
        return (
          <UserDetail
            detail={this.state.details}
            pageReturn={this.pageReturn}
          />
        );
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
