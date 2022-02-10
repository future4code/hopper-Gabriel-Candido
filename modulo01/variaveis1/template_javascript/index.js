/*
     1. console.log(b) => console.log(10)
        conole.log(a, b) => console.log(10,5)
    
     2. console.log(a, b, c) => console.log(10, 10, 10)

     3. let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
        let valorDiario = prompt("Quanto você recebe por dia?")
        alert(`Você recebe ${valorDiario/horasTrabalhadas} por hora`)
*/

        let nome = //ex 01, letra a
        let idade = //ex 01, letra b

        console.log (typeof nome) //ex 01, letra c
        console.log (typeof idade) //ex 01, letra c

     /*Os 2 typeof, serão denominados como UNDEFINED,       ex 01, letra d
     pois suas variáveis, não foram atribuidos nenhum valor.*/

        let nome = prompt ("Qual é o seu nome?")
        let idade = prompt ("Qual a sua idade") 
                                                    //ex 01, letra e
        console.log (typeof nome)
        console.log (typeof idade)

/*   
    ex 01, letra f

    As duas variáveis, são consideradas String, pois tudo que é escrito
    dentro do prompt é considerado String, sem a utilização da conversão.
*/

        alert (`Olá ${nome} ,você tem ${idade} anos`) //ex 01, letra g


        //ex 02
     let roupa = prompt("Sua roupa é azul?")
     let anime = prompt("Você assiste animes?")       //letra a
     let brocolis = prompt("Você gosta de brócolis?")

     console.log (`Sua roupa é azul? ${roupa}`)
     console.log (`Você assiste animes? ${anime}`)    //letra b
     console.log (`Você gosta de brócolis? ${brocolis}`)

    
        //ex 03
        let a = 10
        let b = 25

        c = a
        a = b
        b = c

        console.log ("O novo valor de a é", a) // O novo valor de a é 25
        console.log ("O novo valor de b é", b) // O novo valor de b é 10
    