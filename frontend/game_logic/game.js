import Cup from './cup';
import Player from './player';

class Game {
  constructor(numPlayers, playerNames) {
    this.numPlayers = numPlayers;
    this.players = [];
    this.cup = new Cup();
    this.round_num = 1;

    playerNames.forEach(player => {
      this.players.push(new Player(player))
    })
  };

};

export default Game;