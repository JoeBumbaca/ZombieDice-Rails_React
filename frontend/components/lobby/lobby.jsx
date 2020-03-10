import React from 'react';
import Nav from '../header/header_container';
import GameIndexContainer from './game_index/game_index_container';
import GameFormContainer from './game_form/game_form_container';
import { Link } from 'react-router-dom';

const LobbyPage = (props) => {
  return (
    <div className='lobby-container'>
      <Nav />
      <div className='lobby-body'>
        <div className='channel-index'>
          <GameIndexContainer />
        </div>
        <div className='game-parameters'>
          <GameFormContainer />
        </div>
      </div>
    </div>
  );
};

export default LobbyPage;