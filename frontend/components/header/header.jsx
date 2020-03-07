import React from 'react';

const Header = (props) => {
  return (
    <div className='nav'>
      <p>Zombie Dice</p>
      <p>Hey, {props.user.username}!! Get Them Brains!!!</p>
      <button className='logout' onClick={props.logout}>Logout
      </button>
    </div>
  );
};

export default Header;