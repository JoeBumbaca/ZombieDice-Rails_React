import Cup from './cup';
import Player from './player';

class Game {
  constructor(numPlayers, playerNames) {
    this.numPlayers = numPlayers;
    this.playerNames = playerNames;
    this.players = [];
    this.cup = new Cup();

    this.createPlayers();
  };

  createPlayers() {
    this.playerNames.forEach(player => {
      this.players.push( new Player(player))
    })
  }


};

export default Game;