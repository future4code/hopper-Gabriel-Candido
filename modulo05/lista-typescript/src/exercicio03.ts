enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type Filme = {
  nome: string,
  anoLancamento: number,
  genero: GENERO,
  pontuacao?: number
}

const infoFilme = (nome: string, anoLancamento: number, genero: string, pontuacao?: number) => {
  const caracteres = /[\u0300-\u036f]/g
  const generoSCaracteres: string = genero.normalize('NFD').replace(caracteres, "").toUpperCase()
  const key: GENERO = GENERO[generoSCaracteres as keyof typeof GENERO]

  const filme: Filme = {
    nome,
    anoLancamento,
    genero: key,
    pontuacao
  }

  !pontuacao && delete filme["pontuacao"]

  return filme
}

console.log(infoFilme("Click", 2006, "Comédia"))
