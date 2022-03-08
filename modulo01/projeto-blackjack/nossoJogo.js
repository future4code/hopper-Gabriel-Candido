// Função para inicializar a mão de um jogador.
const daMao = (nome) => {
   // Duas cartas iniciais dos jogadores.
   cartaOne = comprarCarta();
   cartaTwo = comprarCarta();

   // Objeto jogador.
   return {
      nome: nome, // Define o nome.
      cartas: [cartaOne, cartaTwo], // Define a mão inicial como as duas cartas sorteadas.
      arrayTextoCartas: function() { return this.cartas.map((carta, _indice, _cartas) => carta.texto ) }, // Método do obejto para pegar representação das cartas, exemplo: ['A♣️', '8♦️'].
      textoCartas: function() { return this.arrayTextoCartas().join(' ') },  // Método do obejto para pegar texto das cartas, exemplo: 'A♣️ 8♦️'.
      valorDaMao: function() { return this.cartas.map((carta, _indice, _cartas) => carta.valor ).reduce((valor, acc) => valor + acc, 0) } // AMétodo para somar o valor da mão do jogador.
   };
};

// Função que define quem venceu a partida.
const vencedor = (usuario, computador) => {
   // Atrela em uma variável os pontos de cada usuário.
   pontosUsuario = usuario.valorDaMao();
   pontosComputador = computador.valorDaMao();

   // Se o usuário estourou, ou o computador tem mais pontos, o Computador venceu.
   if (pontosUsuario > 21 || pontosComputador > pontosUsuario) {
      return `O ${computador.nome} ganhou!`;
   } else if (pontosComputador == pontosUsuario) { // Se ambos tem a mesma quantidade de pontos, empatou.
      return 'Empate!';
   } else { // Do contrário, o Usuário venceu.
      return `O ${usuario.nome} ganhou!`;
   }
};

const imprimeStatusPartida = (usuarios) => {
   for (const usuario of usuarios) { console.log(`${usuario.nome} - cartas: ${usuario.textoCartas()} - ${usuario.valorDaMao()}`) };
};

console.log('Bem-vindo(a) ao jogo de blackjack');

// Define se o usuário vai jogar ou não.
if (confirm('Quer iniciar uma nova rodada?')) {
   // Pega a mão do usuario e do computador.
   usuario = daMao('Usuário');
   computador = daMao('Computador');

   // Imprime as duas mãos.
   imprimeStatusPartida([usuario, computador]);

   // Imprime vencedor.
   console.log(vencedor(usuario, computador));
} else { // Caso o jogador não jogue.
   console.log('O jogo acabou.'); // Alerta com mensagem de fim de jogo (quando não jogou).
};
