import React from 'react';

const GameIndexItem = ({game}) => {
  const privateGame = <input type="text" placeholder='Game Password'/>
  return (
    <div className='game-list-item'>
      <li>{game.name}</li>
      <li>Number of Players: {game.num_players}</li>
      {game.private ? privateGame : ''}
      <button>Join Game</button>
    </div>
  )
};

export default GameIndexItem;