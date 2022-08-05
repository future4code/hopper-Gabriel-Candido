// Exercício 1: 
// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

// Resposta: 
// a) Podemos acessar parâmetros utilizando o process.argv, sendo o primeiro argumento ([0]) o próprio node, o segundo argumento ([1]) o nome_do_arquivo.extensão e a partir do terceiro ([2]), o valor a qual queremos acessar
// b)

// Descomente a linha 11 até a 18 e rode o comando ```npm run start``` no terminal

// const nome = process.argv[2]
// const idade = process.argv[3]

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

//c)

// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${Number(idade) + 7} anos.`)

// Exercício 2:

// Descomente a linha 29 até a linha 47 e rode os comandos no terminal: 
// para soma: ```npm run start-add```
// para subtração ```npm run start-sub```
// para multiplicação ```npm run start-mult```
// para divisão ```npm run start-div```


// const firstValue = Number(process.argv[3])
// const secondValue = Number(process.argv[4])

// switch (process.argv[2]) {
//   case 'add':
//     console.log( firstValue + secondValue )
//     break;
//   case 'sub':
//     console.log( firstValue - secondValue )
//     break;
//   case 'mult':
//     console.log( firstValue * secondValue )
//     break;
//   case 'div':
//     console.log( firstValue / secondValue )
//     break;
//   default:
//     break;
// }

// Exercício 3

// Descomente as linhas 53 até a 67, rode o comando ``` npm run start-tarefa "tarefa_desejada" ``` no terminal

// const tarefas = [
//   "Lavar Louça",
//   "Varrer a casa"
// ]

// const novaTarefa = process.argv[2]

// if(novaTarefa) {
//   tarefas.push(novaTarefa)
//   console.log("Tarefa adicionada com sucesso!")
// } else {
//   console.log("Nenhuma tarefa nova adicionada")
// }

// console.table(tarefas)
