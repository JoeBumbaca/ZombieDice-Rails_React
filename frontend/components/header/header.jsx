import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className='nav'>
      <Link className='lobby-link' to='/lobby'>Zombie Dice</Link>
      <p>
        Hey, <Link className='profile-link' to='/profile'>{props.user.username}</Link>
        !! Get Them Brains!!!
      </p>
      <div>
        <button className='logout' onClick={props.logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;