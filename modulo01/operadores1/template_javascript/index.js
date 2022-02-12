/* 

            QUESTÃO NUMERO 01

    const bool1 = true
    const bool2 = false
    const bool3 = !bool2 

        O bool3 será TRUE, pois é o oposto (!) do FALSE

    let resultado = bool1 && bool2
    console.log("a.", FALSE)

    resultado = bool1 && bool2 &&& bool3
    console.log("b.", FALSE)

    resultado = !resultado && (bool1 || bool2)
    console.log("c.", TRUE)

    console.log("d.", typeof resultado) 
        O tipo do "resultado" é Boolean

            QUESTÃO NUMERO 02
    
    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = primeiroNumero + segundoNumero

    console.log(soma)

        O console junta os dois números, pois quando o conteúdo é
        escrito dentro de um prompt, ele é automaticamente uma STRING,
        logo, o "+" serve para concatenar os números.
        Para conseguir concluir o processo de Soma, ele deve converter 
        de STRING para NUMBER da seguinte maneira:

            QUESTÃO NUMERO 03

    let primeiroNumero = Number(prompt("Digite um numero!"))
    let segundoNumero = Number(prompt("Digite outro numero!"))

    const soma = primeiroNumero + segundoNumero

    console.log(soma)

*/

//      QUESTÃO 01
const nome = prompt("Qual é a sua idade?")
const amigues = prompt("Qual é a idade de seu melhor amigo(a)?")

console.log ("Sua idade é maior do que a do seu melhor amigo(a)?", nome >= amigues)

//      QUESTÃO 02
const par = prompt("Digite um número par.")

console.log (par % 2)

// R: Sim, há um padrão, todos os número resultaram em 0.
// R: Todos os números ímpares, resultarão em 1.

//      QUESTÃO 03
const idade = prompt ("Quantos anos você tem?")

console.log( `Sua idade em meses é de: ${idade * 12} Meses`)
console.log( `Sua idade em dias é de: ${idade * 365} Dias`)
console.log( `Sua idade em horas é de: ${idade * 8760} Horas`)

//      QUESTÃO 04
const numero1 = Number(prompt("Digite um número abaixo."))
const numero2 = Number(prompt("Digite outro número abaixo."))


console.log(" O primeiro numero é maior que o segundo? ", numero1 > numero2)
console.log(" O primeiro numero é igual ao segundo? ", numero1 == numero2)
console.log(" O primeiro número é divisível pelo segundo? ", numero1 % numero2 == 0)
console.log(" O segundo número é divisível pelo primeiro? ", numero2 % numero1 == 0)
