// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((valor) => valor % 2 === 0)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array
        .filter((valor) => valor % 2 === 0)
        .map((valor) => valor **2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = array[0]
    for (let i = 1; i < array.length; i++) {
        if(array[i] > maior) maior = array[i]
    } 
    return maior  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero
    let menorNumero
    if(num1 > num2){
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    }

    return {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
        diferenca: maiorNumero - menorNumero
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let primeirosNumerosPares = []
    for (let i = 0; primeirosNumerosPares.length < n; i++) {
        if(i % 2 === 0){
            primeirosNumerosPares.push(i)
        }
    }
    return primeirosNumerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoB == ladoC){
        return "Equilátero"
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC ){
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let crescente = array.sort((a, b) => a - b)
    return [crescente[array.length-2], crescente[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}