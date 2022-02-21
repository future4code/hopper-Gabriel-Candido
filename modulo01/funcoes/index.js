// --------------------- INTERPRETAÇÃO DE CÓDIGO ------------------------------------------
// - Exercicio 01 -
    // a) 10
    //    50
    
    // b) Nada, pois precisamos do "console.log", para aparecer algo no console.

// - Exercicio 02 - 

    // a) A função irá transformar o texto descrito no prompt, para caixas baixas e irá pesquisar dentro dele, se há a palavra "cenoura"
    // b) i. eu gosto de cenoura - True
    //   ii. cenoura é bom pra vista - True
    //  iii. cenouras crescem na terra - False
    
// ------------------------ ESCRITA DE CÓDIGO -------------------------------------------------

// - Exercicio 1. a) -
function descricaoCandido(){
    console.log("Eu sou Gabriel, tenho 23 anos, moro em São Paulo e sou estudante")
}

descricaoCandido()

// - Exercicio 1. b) - 

function descricaoPessoa(nome, idade, cidade, profissao){
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
}

console.log(descricaoPessoa("Gabriel", 23, "São Vicente", "Op.Micro"))

// - Exercicio 2. a) -

const somarNumeros = function (n1, n2){
    return n1 + n2
}

console.log(somarNumeros(1, 2))

// - Exercicio 2. b) - 

const verificarNumero = function (n1, n2){
    return n1 >= n2
}

console.log(verificarNumero(1, 2))

// - Exercicio 2. c) - 

const ehPar = function (n1){
    return n1 % 2 == 0
}

console.log(ehPar(1))

// - Exercicio 2. d)

const modificaTexto = function(mensagem){
    console.log(mensagem.length)
    console.log(mensagem.toUpperCase())
}

let texto = "Eu odeio brócolis"
modificaTexto(texto)

// - Exercicio 3.)

const somaUsuario = function (n1, n2){
    return n1 + n2
}

const subUsuario = function (n1, n2){
    return n1 - n2
}

const multUsuario = function (n1, n2){
    return n1 * n2
}

const diviUsuario = function (n1, n2){
    return n1 / n2
}

const exibirResultado = function(n1, n2){
    console.log(`Numeros inseridos: ${num1} e ${num2}`)
    console.log(`Soma: ${somaUsuario(num1, num2)}`)
    console.log(`Diferença: ${subUsuario(num1, num2)}`)
    console.log(`Multiplicação: ${multUsuario(num1, num2)}`)
    console.log(`Divisão: ${diviUsuario(num1, num2)}`)
}

let num1 = Number(prompt("Digite um número:"))
let num2 = Number(prompt("Digite outro número:"))

exibirResultado(num1, num2)