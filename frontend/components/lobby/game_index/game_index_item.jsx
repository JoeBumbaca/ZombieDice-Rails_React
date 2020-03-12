import React from 'react';
import { withRouter } from 'react-router-dom';

const GameIndexItem = (props) => {
  // const privateGame = <input type="text" placeholder='Game Password'/>

  const handleClick = (e) => {
    e.preventDefault();
    props.history.push(`/game/${props.game.id}`);
  };
  return (
    <div className='game-list-item'>
      <li className='game-list-name'>{props.game.name}</li>
      <li>Number of Players: {props.game.num_players}</li>
      {/* {props.game.private ? privateGame : ''} */}
      <button className='join-button' onClick={handleClick}>Join Game</button>
    </div>
  )
};

export default withRouter(GameIndexItem);