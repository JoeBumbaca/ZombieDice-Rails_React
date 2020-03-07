import React from 'react';
import HeaderContainer from '../header/header_container';

const Game = () => {
  return(
    <div className='game-container'>
      <HeaderContainer />
      <div className='game'>
        <div className='game-play'>Play Area</div>
        <div className='game-chat'>Chat Area</div>
      </div>
    </div>
  )
};

export default Game;