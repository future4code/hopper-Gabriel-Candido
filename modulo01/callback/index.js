// Exercícios de interpretação de código
// Ex. 01
// R: Será impresso no console, três arrays a partir do original, um para cada usuário, contendo seu nome e apelido.

/*
    0 - [{nome: "Amanda Rangel", apelido: "Mandi"}]
    1 - [{nome: "Laís Petra", apelido: "Laura"}]
    2 - [{nome: "Letícia Chijo", apelido: "Chijo"}]
*/

// Ex. 02
// R: Será impresso no console, uma nova array criada a partir da original, somente para os nomes dos usuários.

// ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

// Ex. 03
// R: Será impresso no console, uma nova array a partir da original, para os usuário que não sejam "Chijo" como apelido.

/*
    [
    0 - {nome: 'Amanda Rangel', apelido: 'Mandi'},
    1 - {nome: 'Laís Petra', apelido: 'Laura'}
    ]
*/

// Exercícios de escrita de código
// Ex. 01
// A)
// Array proposto pelo exercicio
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]


const nomeArrayPets = pets.map((item) => {return item.nome})
console.log(nomeArrayPets)

// B)
const racaArrayPets = pets.filter(item => item.raca === "Salsicha")
console.log(racaArrayPets)

// C)
const mensagemArrayPets = pets
    .filter(item => item.raca === "Poodle")
    .map(item => `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
    console.log(mensagemArrayPets)

//----------------------------------------------------------
// Ex. 02
// A)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const nomeProdutos = produtos.map((item) => {return item.nome}) 
    console.log(nomeProdutos)

// B)

let produtosComDesconto = produtos.map((item) => (
    {nome: item.nome, preco: (item.preco * 0.95).toFixed(2)}))

    console.log(produtosComDesconto)

// C)
const apenasBebidas = produtos.filter(item =>  item.categoria === "Bebidas" )
    console.log(apenasBebidas)

// D
const apenasYpe = produtos.filter(item => item.nome.includes("Ypê"))
    console.log(apenasYpe)

// E
const phrase = produtos
    .filter(item => item.nome.includes("Ypê"))
    .map(item => `Compre ${item.nome} por ${item.preco}`)
    console.log(phrase)
//----------------------------------------------------------
