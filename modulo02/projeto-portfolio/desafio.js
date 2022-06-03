/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   alert("The contents of the page will appear after the game.") 

    let confirmation = confirm('Welcome to the BlackJack game!\nDo you want to start a new game?')
    let player = [];
    let computer = [];

    if(confirmation == true){
      player.push(comprarCarta(), comprarCarta())
      computer.push(comprarCarta(), comprarCarta())

      if ((player[0].valor == 11 && player[1].valor == 11) || (computer[0].valor == 11 && computer[1].valor == 11)){
      player = []
      computer = []
   } else {
      confirmation = true
   };

    let cartaTexto = (array) => array.map((carta) => carta.texto)
    
    let cartaValor = (array) => array.map((carta) => carta.valor)
    
    let cartaSoma = (array) => array
      .map((carta) => carta.valor)
      .reduce((primeiroValor, valorArray) => primeiroValor + valorArray ,0)
    
    let i = 0
    pergunta = false

    while (pergunta = confirm(`Your cards are: ${cartaTexto(player).join(" ")}. The revealed computer card are: ${computer[0].texto}\nDo you want buy one more card?`) === true) {
      player.push(comprarCarta())
      pergunta++
      if(cartaSoma(player) > 21){
         break
      }
    }

    while (cartaSoma(computer) < 18){
       computer.push(comprarCarta())
    }
   
   if(cartaSoma(player) == cartaSoma(computer)) {
      alert(`Your cards are: ${cartaTexto(player).join(" ")}.Your points are: ${cartaSoma(player)}.\nThe computer card are: ${cartaTexto(computer).join(" ")}.Computer points are: ${cartaSoma(computer)}.\nDRAW!!`)
    } else if (cartaSoma(player) > 21 && cartaSoma(computer) > 21) {
      alert(`Your cards are: ${cartaTexto(player).join(" ")}.Your points are: ${cartaSoma(player)}.\nThe computer card are: ${cartaTexto(computer).join(" ")}.Computer points are: ${cartaSoma(computer)}.\nNOBODY WIN!!`)
    } else if (cartaSoma(computer) > 21 || cartaSoma(player) > cartaSoma(computer) && cartaSoma(player) <= 21) {
      alert(`Your cards are: ${cartaTexto(player).join(" ")}. Your points are: ${cartaSoma(player)}.\nThe computer card are: ${cartaTexto(computer).join(" ")}.Computer points are: ${cartaSoma(computer)}.\nUSER WON!!`)
    } else {
      alert(`Your cards are: ${cartaTexto(player).join(" ")}.Your points are: ${cartaSoma(player)}.\nThe computer card are: ${cartaTexto(computer).join(" ")}.Computer points are: ${cartaSoma(computer)}.\nCOMPUTER WON!!`)
    } 

   } else{
      alert('Game Over!')
   };
         