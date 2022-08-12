// A)
// R: A variável irá reclamar, pois é esperado um valor string e não um number

// B)
// R: Utilizamos o Union Types, ou seja, utilizamos um pipe único ( | ) entre um type e o outro. Ou seja, "const nomeDaVariavel: Tipo1 | Tipo2 = ..."

// C) & D)
// R: 

enum ARCOIRIS {
  VIOLETA = "Violeta",
  ANIL = "Anil",
  AZUL = "Azul",
  VERDE = "Verde",
  AMARELO = "Amarelo",
  LARANJA = "Laranja",
  VERMELHO = "Vermelho"
}

type Pessoa = {
  nome: string,
  idade: number,
  corFavorita: ARCOIRIS
}

const pessoa1: Pessoa = {
  nome: "Gabriel",
  idade: 23,
  corFavorita: ARCOIRIS.AZUL
}

const pessoa2: Pessoa = {
  nome: "Giovana",
  idade: 22,
  corFavorita: ARCOIRIS.VERMELHO
}

const pessoa3: Pessoa = {
  nome: "Andréa",
  idade: 51,
  corFavorita: ARCOIRIS.LARANJA
}

console.log(pessoa1, pessoa2, pessoa3)
