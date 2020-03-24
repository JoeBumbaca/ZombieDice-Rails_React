import React from 'react';
import GameIndexItem from './game_index_item';

class GameIndex extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.getGames();
  }

  render() {
    const gamesList = this.props.games.map((game) => {
      return <GameIndexItem game={game} key={game.id} openModal={this.props.openModal}/>;
    })
    return (
      <div className='game-list-container'>
        <h1 className='game-list-header'>Join an Existing Game!</h1>
        <div className='game-list'>{gamesList}</div>
      </div>
    );
  };
};

export default GameIndex;