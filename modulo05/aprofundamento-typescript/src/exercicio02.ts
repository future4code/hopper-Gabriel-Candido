// A)
// R: A entrada é um array de números e a saida é um objeto de números.

const obterEstatisticas = ( numeros: number[] ) => {

  const numerosOrdenados: number[] = numeros.sort(
    (a, b) => a - b
  )

  let soma: number = 0

  for (let num of numeros) {
    soma += num
  }

  const estatisticas: {maior: number, menor: number, media: number} = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length
  }

  return estatisticas
}

console.log(obterEstatisticas([1,2,3,4,5,6,7,8,9]))

// B)
// R: Compõem essa função as variáveis: "numerosOrdenados" que é um array de números, "soma" que é somente number e "estatisticas" que é um objeto de números. 

// C)
// R: 

type Amostra = {
  numeros: [21, 18, 65, 44, 15, 18],
  obterEstatisticas: (numeros: number[]) => {
    maior: number,
    menor: number,
    media: number
  }
}
