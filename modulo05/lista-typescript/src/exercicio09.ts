const palavra = process.argv[2]

const fatorial = (palavra: string): number | string => {

  if (palavra) {
    let quantidade: number = palavra.length

    if (quantidade === 0 || quantidade === 1) {
      return 1
    }
    for (let i = quantidade - 1; i>= 1; i--) {
      quantidade *= i
    }
    return quantidade
  } else {
    return "Preciso de uma palavra para efetuar o cálculo"
  }
}
console.log(fatorial(palavra))