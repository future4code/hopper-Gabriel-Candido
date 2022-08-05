// Exercício 3

// Dentro da pasta "exercicio1" rode o comando ``` npm run start-tarefa "tarefa_desejada" ``` no terminal

const tarefas = [
  "Lavar Louça",
  "Varrer a casa"
]

const novaTarefa = process.argv[2]

if(novaTarefa) {
  tarefas.push(novaTarefa)
  console.log("Tarefa adicionada com sucesso!")
} else {
  console.log("Nenhuma tarefa nova adicionada")
}

console.table(tarefas)
