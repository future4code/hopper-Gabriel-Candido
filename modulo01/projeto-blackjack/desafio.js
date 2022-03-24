// Apenas abstraindo o 'confirm()' para um método.
const pergunta = (text) => confirm(text);

// Função para checkar se uma carta é um 'Ás'.
const ehAs = (carta) => carta.texto.includes('A');

// Função para inicializar a mão de um jogador.
const daMao = (nome) => {
   // Duas cartas iniciais dos jogadores.
   cartaOne = comprarCarta();
   cartaTwo = comprarCarta();

   // Fica comprando até as duas cartas iniciais não serem 'Áses'.
   while(ehAs(cartaOne) && ehAs(cartaTwo)) {
      // Troca as duas cartas definidas.
      cartaOne = comprarCarta();
      cartaTwo = comprarCarta();
   }

   // Objeto jogador.
   return {
      nome: nome, // Define o nome.
      cartas: [cartaOne, cartaTwo], // Define a mão inicial como as duas cartas sorteadas.
      arrayTextoCartas: function() { return this.cartas.map((carta, _indice, _cartas) => carta.texto ) }, // Método do obejto para pegar representação das cartas, exemplo: ['A♣️', '8♦️'].
      textoCartas: function() { return this.arrayTextoCartas().join(' ') },  // Método do obejto para pegar texto das cartas, exemplo: 'A♣️ 8♦️'.
      textoPrimeiraCarta: function() { return this.cartas[0].texto }, // Método do objeto para pegar texto da primeira carta, exemplo: 'A♣️'.
      valorDaMao: function() { return this.cartas.map((carta, _indice, _cartas) => carta.valor ).reduce((valor, acc) => valor + acc, 0) }, // AMétodo para somar o valor da mão do jogador.
      comprarUmaCarta: function() { this.cartas.push(comprarCarta()) } // Método do objeto que compra uma carta para o usuário.
   };
};

// Função que define o texto da partida em progresso.
const imprimirStatusAtual = (usuario, computador) => `Suas cartas são ${usuario.textoCartas()}. A carta revelada do computador é ${computador.textoPrimeiraCarta()}.\nDeseja comprar mais uma carta?`;

// Função quee define se a pontuação da mão é menor que 21 (assim ele pode continuar jogando).
const pontuacaoMenorQue21 = (jogador) => jogador.valorDaMao() < 21

// Função que define que venceu a partida.
const vencedor = (usuario, computador) => {
   // Atrela em uma variável os pontos de cada usuário.
   pontosUsuario = usuario.valorDaMao();
   pontosComputador = computador.valorDaMao();

   // Se o usuário estourou, ou o computador tem mais pontos, o Computador venceu.
   if (pontosUsuario > 21 || pontosComputador > pontosUsuario) {
      return `O ${computador.nome} venceu!`;
   } else if (pontosComputador == pontosUsuario) { // Se ambos tem a mesma quantidade de pontos, empatou.
      return 'Empate!';
   } else { // Do contrário, o Usuário venceu.
      return `O ${usuario.nome} venceu!`;
   }
};

// Função que define o texto final da partida, com o placar.
const textoFinal = (usuario, computador) => `${usuario.nome} - Cartas ${usuario.textoCartas()} - Pontuação: ${usuario.valorDaMao()}\n${computador.nome} - Cartas ${computador.textoCartas()} - Pontuação: ${computador.valorDaMao()}\n${vencedor(usuario, computador)}`

// Define se o usuário vai jogar ou não.
if (pergunta('Bem-vinde ao jogo de Blackjack!\nQuer iniciar uma nova rodada?')) {
   // Pega a mão do usuario e do computador.
   usuario = daMao('Usuário');
   computador = daMao('Computador');

   // Pergunta se o usuário vai comprar.
   vaiComprar = pergunta(imprimirStatusAtual(usuario, computador));

   // Laço que define quando o jogador pode continuar comprando: Ele escolher + não ter valor >= 21.
   while(vaiComprar && pontuacaoMenorQue21(usuario)) {
      // Compra uma carta do usuário.
      usuario.comprarUmaCarta();

      // If de uma linha, não precisa dos '{}'.
      if (pontuacaoMenorQue21(usuario)) vaiComprar = pergunta(imprimirStatusAtual(usuario, computador));
   }

   alert(textoFinal(usuario, computador)); // Alerta com mensagem dee fim de jogo (quando jogou).   
} else { // Caso o jogador não jogue.
   alert('O jogo acabou.'); // Alerta com mensagem de fim de jogo (quando não jogou).
}
