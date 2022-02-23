//Exercícios de interpretação de códigos:

//01. a)

//console.log(filme.elenco[0])
//R: Irá mostrar o primeiro nome do valor "elenco", da chave "filme": - Matheus Nachtergaele -. 

//console.log(filme.elenco[filme.elenco.length - 1])
//R: Irá mostrar o ultimo nome do valor "elenco", da chave "filme": - Virginia Cavendish -.

//console.log(filme.transmissoesHoje[2])
//R: Irá mostrar o terceiro valor da array "TransmissõesHoje" no caso, o canal e o horário
//que irá transmitir - canal: "Globo", horario:"14h" -.

//02. a)

//console.log(cachorro)
//R: Irá mostrar o objeto inteiro de "cachorro":
//nome: "Juca", idade: "3", raca: "SRD".

//console.log(gato)
//R: Irá copiar e criar um novo objeto a partir do objeto "cachorro", chamado gato e alterar o nome anterior, para "Juba".
//nome: "Juba", idade: "3", raca: "SRD".

// console.log(tartaruga)
//R: Irá copiar e criar um novo objeto a partir do objeto "gato", chamado tartaruga e trocar todas as letrar "a", pelo "o" em "nome".
//nome: "Jubo", idade: "3", raca: "SRD".

//02. b)
//R: Cria um novo objeto a partir dos dados já informados pelo antigo.

//03. a) e b)
//console.log(minhaFuncao(pessoa, "backender"))
//R: Vai mostrar através da função e consequentemente do objeto, se ela é um backender. Nesse caso: "False"

//console.log(minhaFuncao(pessoa, "altura"))
//R: Irá buscar a altura, através do objeto, porém pela inexistencia da propriedade: "Undefined"

//-------------------------------------------------------------------------------------------------------------------------------------------

// Exercicios de escrita de código

//01. a)

const pessoa = {
    nome: "Gabriel",
    apelidos: ["Cândido", "Magricelo", "Gabri"],
    corFavorita: () => {
        return pessoa.corFavorita = "Azul"
    }
}

pessoa.corFavorita();
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]} e minha cor favorita é ${pessoa.corFavorita}.`)

//01. b)
const novosApelidos = {
    ...pessoa,
    apelidos: ["Bonito", "Gostoso", "Cheiroso"],
}

console.log(`Recentemente tenho sido chamado pelos seguintes apelidos: ${novosApelidos.apelidos[0]}, ${novosApelidos.apelidos[1]} e ${novosApelidos.apelidos[2]}.
Esse bilete é verdade.`)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//02.

let fichaTecnica1 = {
    nome: "Gabriel",
    idade: 23,
    profissao: "Op.Microcomputador"
}

let fichaTecnica2 = {
    nome: "Giovana",
    idade: 21,
    profissao: "Promotora de vendas",
}

    function recebeObj(obj){
        console.log ([obj.nome, obj.nome.length, obj.idade, obj.profissao, obj.profissao.length])
    }
        recebeObj(fichaTecnica1)
        recebeObj(fichaTecnica2)

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//03

let carrinho = []
let frutasSacolao = [
    {fruta1: "Apple", Disponibilidade: true},
    {fruta2: "Banana", Disponibilidade: true},
    {fruta3: "Orange", Disponibilidade: true}
]
    function recebe(fruta) {
        carrinho.push(fruta)
        return [frutasSacolao]
    }
    console.log(recebe(carrinho))
