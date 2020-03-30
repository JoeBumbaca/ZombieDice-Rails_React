import React from 'react';
import Game from '../../../game_logic/game';

class GamePlay extends React.Component {
  constructor(props) {
    super(props)

  };

  startGame() {
    this.setState({
      game: new Game(4, ['Joe', 'Michelle', 'Nico', 'Donovan'])
    })
  };

  componentDidMount() {
    this.startGame();
  }

  render() {
    console.log(this.state);
    return(
      <div className='game-play'>
        <section className='score-ticker'>
          scores
        </section>
        <canvas id='play-area' width='100%' height='900'>

        </canvas>
      </div>
    )
  }
};

export default GamePlay;