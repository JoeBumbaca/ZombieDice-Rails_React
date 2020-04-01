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
      num_players: 0
    }

    this.startGame = this.startGame.bind(this);
    this.endGame = this.endGame.bind(this);
  };

  startGame() {
    this.setState({
      game: new Game(8, ['Joe', 'Michelle', 'Nico', 'Donovan', 'Roxy', 'Hunny', 'Danny', 'Dave'])
    })
  };

  endGame() {
    this.props.deleteGame(this.props.gameId)
    this.props.history.push('/lobby')
  }

  componentDidMount() {
    this.props.getGame(this.props.gameId)
  }

  render() {
    const buttonText = this.state.game ? 'End Game' : 'Start Game';
    const buttonFunction = this.state.game ? this.endGame : this.startGame
    let gameControls;
    if(this.props.game) {
      if (this.props.game.creator_id === this.props.currentUser) {
        gameControls = <button className='start-game' onClick={buttonFunction}>{buttonText}</button>
      } else {
        gameControls = <section className='game-images'>
          <img
            className='game-zombie'
            src={window.images.zombie1}
            alt='zombie'
          />
          <img
            className='game-zombie'
            src={window.images.zombie2}
            alt='zombie'
          />
          <img
            className='game-zombie'
            src={window.images.zombie3}
            alt='zombie'
          />
          <img
            className='game-zombie'
            src={window.images.zombie4}
            alt='zombie'
          />
          <img
            className='game-zombie'
            src={window.images.zombie5}
            alt='zombie'
          />
          <img
            className='game-zombie'
            src={window.images.zombie6}
            alt='zombie'
          />
          </section>
      }
    }
    return(
      <div className='game-play'>
        <GameScores game={this.state.game}/>
        <section className='play-area'>
        </section>
        <section className='game-controls'>
          {gameControls}
        </section>
      </div>
    )
  }
};

export default withRouter(GamePlay);