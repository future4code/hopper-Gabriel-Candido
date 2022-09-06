// A) "JSX" me chamou a atenção, pois aparentemente podemos utilizar o React com o Typescript simultaneamente. O arquivo criado pelos slides, facilitam em deixar somente as configurações bases para podermos utilizar o TypeScript de fato.

// DESAFIO -

type Pacientes = {
  nome: string,
  idade: number,
  dataDaConsulta: string
}

const arr: Pacientes[] = [
  { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
  { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]

const filtraPaciente = (): Pacientes[] => {
  return arr.sort((prev: {nome: string}, next: {nome: string}) => {
    if (prev.nome > next.nome) {
      return 1
    } else if (prev.nome < next.nome) {
      return -1
    } else {
      return 0
    }
  })
}

console.log(filtraPaciente())
