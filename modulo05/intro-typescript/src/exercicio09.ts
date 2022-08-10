const idade: number = Number(process.argv[2])
const escolaridade: boolean = !!process.argv[3]
const horas: number = Number(process.argv[4])
const tempo: string = process.argv[5]

const validacao = (val1: number, val2: boolean, val3: number, val4: string) => {
  if (val1 >= 18 && val2 === true && val3 >= 20 && val4 === "integral"){
    return "Você está apto para cursar no período integral"
  } else if (val1 >= 18 && val2 === true && val3 >= 40 && val4 === "noturno"){
    return "Você está apto para cursar no período noturno"
  } else {
    return "Você não está apto para cursar no período desejado"
  }
}

console.log(validacao(idade, escolaridade, horas, tempo))
