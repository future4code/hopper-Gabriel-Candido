type Produtos = {
  nome: string,
  preco: number,
  classificacao: string,
  desconto: number | undefined 
}

enum DESCONTO {
  VERAO = 5,
  INVERNO = 10,
  BANHO = 4,
  INTIMAS = 7
}

const produtos: Produtos[] = [
  {
    nome: "Regata",
    preco: 59.90,
    classificacao: "Verao",
    desconto: DESCONTO.VERAO
  },
  {
    nome: "Casaco",
    preco: 129.90,
    classificacao: "Inverno",
    desconto: DESCONTO.INVERNO
  },
  {
    nome: "Biquíne",
    preco: 35.90,
    classificacao: "Banho",
    desconto: DESCONTO.BANHO
  },
  {
    nome: "Cueca Boxer",
    preco: 25.90,
    classificacao: "Intimas",
    desconto: DESCONTO.INTIMAS
  },
  {
    nome: "Short",
    preco: 59.90,
    classificacao: "Verao",
    desconto: DESCONTO.VERAO
  }
]

const blackFriday = (arr: Produtos[], busca: string) => {
  return arr.map((produto) => {
    const OFF: number = Number(((produto.desconto / 100) * produto.preco).toFixed(2))
    if (produto.classificacao && produto.classificacao === busca) {
      return {
        ...produto,
        priceOFF: Number((produto.preco - OFF).toFixed(2))
      }
    }
  }).filter(Boolean)
}

console.log(blackFriday(produtos, "Verao"))
