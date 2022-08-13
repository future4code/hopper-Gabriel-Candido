const nome: string = process.argv[2]
const data: string = process.argv[3]
const mesStr: any = {
  "01": "Janeiro",
  "02": "Fevereiro",
  "03": "Março",
  "04": "Abril",
  "05": "Maio",
  "06": "Junho",
  "07": "Julho",
  "08": "Agosto",
  "09": "Setembro",
  "10": "Outro",
  "11": "Novembro",
  "12": "Dezembro",
}

const novaData: string[] = data.split('/')

const dia: string = novaData[0]
const mes: string = mesStr[novaData[1]]
const ano: string = novaData[2]

console.log(`Olá, me chamo ${nome}, nasci no dia ${dia}, do mês de ${mes}, do ano de ${ano}.`)