const numUm: number = Number(process.argv[2])
const numDois: number = Number(process.argv[3])

if (numUm && numDois) {
  const confereValor = (n1: number, n2: number) => {
    // a)
    console.log(`A soma entre os dois números é: ${n1 + n2}`)
    // b)
    console.log(`A subtração entre os dois números é: ${n1 - n2}`)
    // c)
    console.log(`A multiplicação entre os dois números é: ${n1 * n2}`)
    // d)
    n1 > n2 ? console.log(`O ${n1} é o maior número entre eles`) : console.log(`O ${n2} é o maior número entre eles`)
  }
  
  confereValor(numUm, numDois)

} else {
  console.log("Preciso de dois números para comparar")
}
