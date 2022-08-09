// Exercício 1: 
// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

// Resposta: 
// a) Podemos acessar parâmetros utilizando o process.argv, sendo o primeiro argumento ([0]) o próprio node, o segundo argumento ([1]) o nome_do_arquivo.extensão e a partir do terceiro ([2]), o valor a qual queremos acessar
// b)

// Dentro da pasta "exercicio1" rode o comando ```npm run start``` no terminal

const nome = process.argv[2]
const idade = process.argv[3]

if (idade === undefined && nome === undefined){
  console.log("\033[1;31mPreciso receber dois parâmetros, {nome} {idade} ")
} else if (idade === undefined){
  console.log("\033[31mEsperava 2 parâmetros, só recebi um")
} else {
  console.log("\033[0;32mOlá, " + nome + "! Você tem " + idade + "anos.")
  
  //c)

  console.log("\033[0;32mOlá, " + nome + "! Você tem " + idade + " anos. Em sete anos você terá " + (Number(idade) + 7) + " anos.")
}  
