import React from 'react';
import GameIndexItem from './game_index_item';

class GameIndex extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.getGames();
    App.cable.subscriptions.create(
      {
        channel: 'GamesChannel',
      },
      {
        connected: () => {
          console.log(`Connected to Games Channel`)
        },
        received: () => {
          this.props.getGames();
        }
      }
    )
  }

  render() {
    let gamesList
    if (this.props.games[0]) {
      gamesList = this.props.games.map((game) => {
        return <GameIndexItem game={game} key={game.id} openModal={this.props.openModal}/>;
      })
    } else {
      gamesList = <div className='game-list-item'> No games to join </div>
    }
    return (
      <div className='game-list-container'>
        <h1 className='game-list-header'>Join an Existing Game!</h1>
        <div className='game-list'>{gamesList}</div>
      </div>
    );
  };
};

export default GameIndex;