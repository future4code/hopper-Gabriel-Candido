/*
    Ex. 01 - Interpretação de códigos

    a) Undefined - Pois não foi alocado nada dentro da variável
    b) Null - Pois foi alocado Null, dentro da variável
    c) 11 - Pois foi pedido o tamanho(length) da array
    d) Irá mostrar o primeiro indice de um array
    e) Irá substituir o segundo indice para 19, referente ao i=0
    f) Irá mostrar o 6 indice de um array, referente ao i=0

    Ex. 02 - Interpretação de códigos

    Irá aparecer no console: SUBI NUM ÔNIBUS EM MIRROCOS, com o tamanho
    de número 27

*/

    //Ex. 01 - Escrita de código
const nome = prompt("Digite seu nome abaixo.")
const email = prompt("Digite seu melhor email abaixo.")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

    //Ex. 02 - Escrita de código
let comidas = ["Macarrão", "Lasanha", "Pudim", "Arroz", "Feijão"]
console.log(comidas)

console.log(`Essas são as minhas comidas preferidas:
        ${comidas[0]}
        ${comidas[1]}
        ${comidas[2]}
        ${comidas[3]}
        ${comidas[4]}`)

const comidaUsuario = prompt("Digite sua comida preferida abaixo:")
const i = 0
comidas[i+1] = comidaUsuario
console.log(comidas)

    //Ex. 03 - Escrita de código
let listaDeTarefas = []

listaDeTarefas1 = prompt("Digite uma tarefa que precisa ser realizada hoje.")
listaDeTarefas2 = prompt("Digite outra tarefa que precisa ser realizada hoje.")
listaDeTarefas3 = prompt("Digite mais uma tarefa à ser realizada hoje.")

console.log(listaDeTarefas = [listaDeTarefas1, listaDeTarefas2, listaDeTarefas3])

const tarefaRealizada = Number(prompt("Diga em números de 1 à 3, sua tarefa já realizada"))
const usuario = [tarefaRealizada - 1]
listaDeTarefas.splice(usuario, 1)
console.log(listaDeTarefas)
