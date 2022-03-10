//  Exercícios de interpretação de código

// 1.
// a)
// R: O código está realocando um novo valor dentro da variável "valor",
// enquanto o index for menor do que 5, o valor sempre será somado com o próximo index.
// R: Será impresso no console o valor 10.

// 2.
// a)
// R: Será impresso no console, todo os números maiores que 18, no caso: 19, 21,
// 23, 25, 27, 30
// b)
// R: Não é suficiente, teriamos de utilizar somente o for para conseguir acessar
// o indice de cada elemento.

// 3.
/* R: *
      **
      ***
      ****
*/

//------------------------------------------------------------------------------------

//  Exercícios de escrita de código

// *Somente p/ fins estéticos.
console.log('Exercício 01.')

let bichinhosUsuario = Number(prompt('Quantos bichinhos de estimação você tem?')) //Caixa de texto convertido para Number.
let arrayBichinhos = [] // Array vazia, para receber valores futuros

if (bichinhosUsuario === 0){ // Se o valor de bichinhos digitado na caixa de texto for igual a 0.
    console.log("Que pena! Você pode adotar um pet!") //Deverá aparecer essa mensagem no console.
} else {    // "Se não". Se caso a pessoa digite algum número na caixa de texto.
    while(arrayBichinhos.length +1 <= bichinhosUsuario){ //Enquanto o tamanho da variável bichinhos +1(para o index começar em 1), 
                                                         //for menor ou igual que a array de bichinhos.
        arrayBichinhos.push(prompt('Diga seus respectivos nomes abaixo:')) // Aparece outra caixa de texto para escrever o nome de cada pet.
    }
    console.log(`O(s) nome(s) dele(s) são: ${arrayBichinhos +" "}`) // Impressão dos respectivos nomes.
}

// *Somente p/ fins estéticos.
console.log('Exercício 02.')

let arrayExDois = [10, 20, 30, 40, 50] // Array proposto no exercício

console.log('Letra A)') // *Somente p/ fins estéticos.

// Função que recebe um array para impressão futura de seus valores.
function imprimeCadaValor(array) { 
    for (let i = 0; i < array.length; i++) { // Função que percerre todos os indices, começando pelo 0 e incrementa +1.
        const valor = array[i]; // Variável que recebe o valor correspondente ao index.
        console.log(`O ${i +1} é o valor: ${valor}!`) // Impressão do index e o valor no console.
    }
}

// Chamada da função com o array do exercício como parâmetro.
imprimeCadaValor(arrayExDois)

// *Somente p/ fins estéticos.
console.log('Letra B)')

// Função para dividir os valores de uma array como parâmetro. 
function divideCadaValor(array) {
    for (const valor of array) { // Para cada valor da array,
        let resultado = valor / 10 // Alocar dentro da variável o valor dividido por 10.
        console.log(`O valor ${valor}, dividido por 10 é = ${resultado}`) // Impressão no console as divisões.
    }
}

// Chamada da função com o array proposto, para ser executada.
divideCadaValor(arrayExDois) 

// *Somente p/ fins estéticos.
console.log('Letra C)') 

// Função para mostrar números pares em um novo array, se caso houver pares.
function ehPar(array){
    let arrayPar = [] // Nova variável, vazia.

    for(const valor of array) { // Para cada valor do array irá fazer:
        if (valor % 2 == 0){ // Se o valor for divisivel por 2 e tiver resto 0.
            arrayPar.push(valor) // esse valor entrará na nova array.
        } 
        }if (arrayPar.length === 0) { // Se o tamanho da array, for igual a 0, portanto ainda vazia.
            console.log('Não possuí elementos pares no array informado') // Mostrará a seguinte mensagem no console.
        } else { // Se não
            console.log(`Os elementos pares são: ${arrayPar}`) // Mostrará esse texto.
        }
}


//Chamada da função com o array do exercicio.
ehPar(arrayExDois)

// *Somente p/ fins estéticos.
console.log('Letra D)')

function novoArray(array){ // Função para criar um novo array, a partir do array original.
    let newArray = [] // variável com um array vazio.

    for (let i = 0; i < array.length; i++){ // enquanto o indice inicial for menor que o tamanho da array
                                            // encrementar +1 no indice.
        const valor = array[i] // variavel valor que recebe o array do indice.
        newArray.push(`O elemento do index ${i} é ${valor}`)// implementa o indice mais o valor, com uma frase dentro da nova array.
    } console.log(newArray) // Mostrar no console o novo array
}

//Chamada da função.
novoArray(arrayExDois)

// *somente p/ fins estéticos.
console.log('Letra E)')


function maiorEMenorNumero(array = []){ // Função com valor padrão de parâmetro.
      if(array.length == 0) return console.log("arrayVazia")// Comparação do tamanho, com Safe Return
      
      let maior = menor = array[0]

      for (let i = 1; i < array.length; i++){
            if(array[i] > maior) maior = array[i]
            if(array[i] < menor) menor = array[i]   
      }
      console.log(`O maior número é ${maior} e o menor é ${menor} `)
}
maiorEMenorNumero()

