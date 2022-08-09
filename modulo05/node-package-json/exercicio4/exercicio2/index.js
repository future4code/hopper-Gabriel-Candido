// Exercício 2:

// Dentro da pasta "exercicio2" rode os comandos no terminal: 
// para soma: ```npm run start-add```
// para subtração ```npm run start-sub```
// para multiplicação ```npm run start-mult```
// para divisão ```npm run start-div```


const firstValue = Number(process.argv[3])
const secondValue = Number(process.argv[4])

switch (process.argv[2]) {
  case 'add':
    console.log( firstValue + secondValue )
    break;
  case 'sub':
    console.log( firstValue - secondValue )
    break;
  case 'mult':
    console.log( firstValue * secondValue )
    break;
  case 'div':
    console.log( firstValue / secondValue )
    break;
  default:
    break;
}
