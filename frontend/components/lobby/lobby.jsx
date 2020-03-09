import React from 'react';
import Nav from '../header/header_container';
import { Link } from 'react-router-dom';

const LobbyPage = (props) => {
  return (
    <div className='lobby-container'>
      <Nav />
      <div className='lobby-body'>
        <div className='channel-index'></div>
        <div className='game-parameters'>
          <Link
            className='game-link'
            onClick={() => console.log("who's got next game?")}
            to='/game'
          >
            Create Game
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LobbyPage;