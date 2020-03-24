import React from 'react';
import { withRouter } from 'react-router-dom';

const GameIndexItem = (props) => {
  
  const handleClick = (e) => {
    e.preventDefault();
    props.history.push(`/game/${props.game.id}`);
  };

  const privateModal = (e) => {
    e.preventDefault();
    console.log('This game is private');
  }

  const name = props.game.private ? <li className='game-list-name'>{props.game.name} <i className="fas fa-user-lock"></i></li> : <li className='game-list-name'>{props.game.name}</li>

  const clickHandler = props.game.private ? privateModal : handleClick;

  return (
    <div className='game-list-item'>
      {name}
      <li>Number of Players: {props.game.num_players}</li>
      <button className='join-button' onClick={clickHandler}>Join Game</button>
    </div>
  )
};

export default withRouter(GameIndexItem);