import React from 'react';
import Game from '../../../game_logic/game';
import GameScores from './game_scores';

class GamePlay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      game: null
    }

    this.startGame = this.startGame.bind(this);
  };

  startGame() {
    this.setState({
      game: new Game(4, ['Joe', 'Michelle', 'Nico', 'Donovan'])
    })
  };

  componentDidMount() {
  }

  render() {
    console.log(this.state);
    return(
      <div className='game-play'>
        <GameScores game={this.state.game}/>
        <canvas id='play-area' width='100%' height='800'>

        </canvas>
        <section className='game-controls'>
          <button className='start-game' onClick={this.startGame}>Start Game</button>
        </section>
      </div>
    )
  }
};

export default GamePlay;