import React from 'react'
import editIMG from './assets/edit.svg'
import deleteImg from './assets/delete.svg'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 70%;
`;

const Separacao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`;

const Icons = styled.div`
  cursor: pointer;
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        // {
        //   id: Date.now() ,
        //   texto: 'Supermercado',
        //   completa: false
        // },
        // {
        //   id: Date.now() ,
        //   texto: 'Limpar Banheiro',
        //   completa: true
        // }
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tarefas !== this.state.tarefas){
      localStorage.setItem('tarefaLS', JSON.stringify(this.state.tarefas))
    }
  };

  componentDidMount() {
    const itemPego = localStorage.getItem('tarefaLS')
    this.setState({tarefas: JSON.parse(itemPego) || []})
  };

  onChangeInput = (event) => {
    this.setState({inputValue:event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = 
    {
      id: Date.now() ,
      texto: this.state.inputValue,
      completa: false,
    }
    const adicionaTarefaNova = [...this.state.tarefas, novaTarefa]
    this.setState({tarefas: adicionaTarefaNova, inputValue: ''})
  }

  onKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.criaTarefa();
    }
  }

  removerTarefa = (id) => {
    const deletedTodo = this.state.tarefas.filter((tarefa) => {
      return tarefa.id !== id;
    });
    this.setState({ tarefas: deletedTodo });
  };

  removerTodasTarefas = () => {
    this.setState({tarefas: []})
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

  crescente = () => {
    const arrCopiada = [...this.state.tarefas]
    const arrCopiadaMapeada = arrCopiada.map((tarefa) => {
      return tarefa
    })
    const ordenada = arrCopiadaMapeada.sort((a,b) => {
      return a.texto.localeCompare(b.texto)
    })
    this.setState({tarefas: ordenada})
  }

  descrescente = () => {
    const arrCopiada = [...this.state.tarefas]
    const arrCopiadaMapeada = arrCopiada.map((tarefa) => {
      return tarefa
    })
    const ordenada = arrCopiadaMapeada.sort((a,b) => {
      return b.texto.localeCompare(a.texto)
    })
    this.setState({tarefas: ordenada})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
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
        <br/>
        <InputsContainer>
          <input value={this.state.inputValue} placeholder='Digite uma tarefa.' onChange={this.onChangeInput} onKeyDown={this.onKeyDown}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onClick={this.removerTodasTarefas}>Remover Tudo</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
          <input 
          type="text" 
          value={this.state.filtro} 
          onChange={this.onChangeFilter} 
          placeholder='Pesquise pelo nome aqui.'
          />
          <button onClick={this.crescente}>▼</button>
          <button onClick={this.descrescente}>▲</button>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Separacao>
              <Tarefa
                key={tarefa}
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
              <Icons >
                <img 
                src={deleteImg} 
                alt="Icone de remoção" 
                onClick={() => this.removerTarefa(tarefa.id)} 
                width={25}/>

                <img 
                src={editIMG} 
                alt="Icone de edição" 
                width={25}/>
              </Icons>
              </Separacao>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
