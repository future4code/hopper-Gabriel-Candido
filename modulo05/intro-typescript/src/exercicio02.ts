// Exercício 2
// rode o comando npm run start com o exercicio selecionado no package.json e coloque suas 3 cores favoritas separando-as pelo espaço.

const imprimeTresCoresFavoritas = () => {
  const cor1: string = process.argv[2]
  const cor2: string = process.argv[3]
  const cor3: string = process.argv[4]
  console.log([cor1, cor2, cor3])
}

imprimeTresCoresFavoritas()
