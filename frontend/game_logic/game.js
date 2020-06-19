import Cup from './cup';
import Player from './player';

class Game {
  constructor(numPlayers, playerNames) {
    this.numPlayers = numPlayers;
    this.players = [];
    this.round_num = 1;
    this.cup = null;

    playerNames.forEach(player => {
      this.players.push(new Player(player))
    })

    this.beginRound();
  };

  beginRound() {
    // console.log('The round has begun!')
    let currentPlayer = this.players[0];
    this.cup = new Cup();

    currentPlayer.takeTurn(this.cup);
  }
};

export default Game;