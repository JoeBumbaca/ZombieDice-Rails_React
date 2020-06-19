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
    this.players.forEach(currentPlayer => {
      this.cup = new Cup();
      currentPlayer.beginTurn(this.cup);
    })
  }


};

export default Game;