import React from 'react';
import Game from '../../../game_logic/game';
import GameScores from './game_scores';
import { withRouter } from 'react-router-dom';

class GamePlay extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      game: null,
      currentPlayer: null,
      full: false
    }

    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
  };

  startGame() {
    this.setState({
      game: new Game(4, ['Joe', 'Michelle', 'Nico', 'Donovan'])
    })
  };

  endGame() {
    this.props.deleteGame(this.props.gameId)
    this.props.history.push('/lobby')
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const buttonText = this.state.game ? 'End Game' : 'Start Game';
    const buttonFunction = this.state.game ? this.endGame : this.startGame
    return(
      <div className='game-play'>
        <GameScores game={this.state.game}/>
        <section className='play-area'>
        </section>
        <section className='game-controls'>
          <button className='start-game' onClick={buttonFunction}>{buttonText}</button>
        </section>
      </div>
    )
  }
};

export default withRouter(GamePlay);