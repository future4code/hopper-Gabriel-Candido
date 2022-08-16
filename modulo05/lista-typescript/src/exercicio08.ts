const nascimento = process.argv[2]
const emissao = process.argv[3]

const calculadora = (valor: string) => {
  const separador: string[] = valor.split("/")
  const DIA: number = Number(separador[0])
  const MES: number = Number(separador[1])
  const ANO: number = Number(separador[2])

  const dataAtual: Date = new Date()
  const diaAtual: number = dataAtual.getDate()
  const mesAtual: number = dataAtual.getMonth() + 1
  const anoAtual: number = dataAtual.getFullYear()
  
  let data: number

  mesAtual >= MES && diaAtual >= DIA ? data = anoAtual - ANO : data = anoAtual - ANO - 1

  return data
}

const renovacao = (): boolean => {
  
  const idade = calculadora(nascimento)
  const validade = calculadora(emissao)

  return idade > 50 && validade >= 15 || idade >= 20 && validade >= 10 || idade < 20 && validade >= 5 ? true : false
}

console.log(renovacao())