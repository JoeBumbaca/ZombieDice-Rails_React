import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, logout }) => {
  // console.log(props);
  return (
    <div className='nav'>
      <Link className='lobby-link' to='/lobby'>Zombie Dice</Link>
      <p>
        Hey, <Link className='profile-link' to='/profile'>{user.username}</Link>
        !! Get Them Brains!!!
      </p>
      <div>
        <button className='logout' onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;