import React from 'react';
import HeaderContainer from '../header/header_container';
import GameChatContainer from './game_chat/game_chat_container';
import GamePlayContainer from './game_play/game_play_container';

const Game = (props) => {
  return(
    <div className='game-container'>
      <HeaderContainer />
      <div className='game'>
        <GamePlayContainer gameId={props.match.params.id}/>
        <GameChatContainer gameId={props.match.params.id}/>
      </div>
    </div>
  )
};

export default Game;