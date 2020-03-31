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
    let currentPlayer = this.players[0];
    this.cup = new Cup();
    // console.log({currentPlayer: currentPlayer, cup: this.cup})
  }
};

export default Game;