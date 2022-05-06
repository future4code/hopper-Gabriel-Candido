import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate(prevProps, prevState) {
    
  };

  componentDidMount() {

  };

  onChangeInput = (event) => {
    this.setState({inputValue:event.target.value})
  }


  salvaTarefas = () => {
    localStorage.setItem('tarefa', this.state.tarefas)
  }







  criaTarefa = () => {
    const novaTarefa = 
    {
      id: Date.now() ,
      texto: this.state.inputValue,
      completa: false
    }
    const adicionaTarefaNova = [...this.state.tarefas, novaTarefa]
    this.setState({tarefas: adicionaTarefaNova, inputValue: ''})
  }

  onKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.criaTarefa();
    }
  }

  selectTarefa = (id) => {
    const identificacao = this.state.tarefas.map((idTarefa) => {
      if(idTarefa.id === id){
        const novoCompleta = {
          ...idTarefa, completa: !idTarefa.completa
        }
        // console.log(novoCompleta)
        return novoCompleta
      } else {
        return idTarefa
      }
      
    })
    this.setState({tarefas: identificacao})
  }

  onChangeFilter = (event) => {
    this.setState({filtro:event.target.value})
  }

  render() {
    // console.log(this.state.inputValue)
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} onKeyDown={this.onKeyDown}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
