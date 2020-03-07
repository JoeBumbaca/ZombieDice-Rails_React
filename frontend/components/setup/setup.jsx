import React from 'react';
import Nav from '../header/header_container';
import { Link } from 'react-router-dom';

const SetupPage = (props) => {
  return (
    <div className='setup-container'>
      <Nav />
      <div className='setup-body'>
        <div className="game-inputs">
          <Link  className='game-link' onClick={() => console.log('game')}to='/game'>Create Game</Link >
        </div>
        <div className='game-parameters'>

        </div>
      </div>
    </div>
  )
};

export default SetupPage;