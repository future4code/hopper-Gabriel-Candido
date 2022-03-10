//Exercícios de interpretação de código

//01.
//a) R: O teste realiza um cálculo, para saber se o número digitado no prompt é, ou não, multiplos de 2.
//b) R: Somente para números multiplos de 2 (pares).
//c) R: Somente para números que não são multiplos de 2(ímpares).

//02.
//a) R: Para saber o valor correspondente a fruta escrita no prompt, pelo usuário.
//b) R: Será impresso, "O preço da fruta Maçã é, 2.25."
//c) R: Ele continuará, até o próximo "break", nesse caso, parando no "Default", portanto o valor a ser impresso no console, será de R$5.

//03.
//a) R: A primeira linha, está pedindo um número para o usuário, através do prompt, usando o método de conversão de String, para Number.
//b) R: Se o usuário digitar 10, consequentemente será, True, logo, "Esse número passou no teste".
//      Se caso o usuário digitar -10, não aparecerá nada, pois somente foi dado uma condição para números maiores que "0".

//Exercícios de escrita de código

//01.

const idadeUsuario = Number(prompt("Qual é a sua idade?"))

if (idadeUsuario >= 18){
    console.log(`Você tem ${idadeUsuario} anos e está apto para dirigir!`)
} else {
    console.log(`Você tem ${idadeUsuario} anos e não está apto para dirigir!`)
}

//02.

const periodoEscolar = prompt("Digite em qual turno você estuda, sendo: M(matutino), V(Vespertino) ou N(Noturno).").toUpperCase()

if (periodoEscolar === 'M'){
    console.log('Bom Dia aluno(a)!!')
} else if (periodoEscolar === 'V'){
    console.log('Boa Tarde Aluno(a)!!')
} else if (periodoEscolar === 'N'){
    console.log('Boa Noite Aluno(a)!!')
} else {
    console.log('Olá, seja muito bem vindes!!')
}

//03.

switch (periodoEscolar){
    case 'M':
        console.log('Bom Dia aluno(a)!!')
        break
    case 'V':
        console.log('Boa Tarde Aluno(a)!!')
        break
    case 'N':
        console.log('Boa Noite Aluno(a)!!')
        break
    default:
        console.log('Olá, seja muito bem vindes!!')
        break
}

//04.

const filme = prompt("Qual gênero de filme assistiremos?").toLowerCase()
const preco = Number(prompt("Qual o valor do ingresso?"))

if(filme === "fantasia" && preco < 15){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}


