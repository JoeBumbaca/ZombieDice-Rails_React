import React from 'react';


const Splash = (props) => {
  return (
    <div className='splash'>
      <div className='header'>
        <h1 className='header-title'>
          <i className='fas fa-dice'></i>
          Zombie Dice
          <i className='fas fa-dice'></i>
        </h1>
        <div className='header-nav'>
          <button onClick={() => props.openModal('login')}>Log In</button>
          <button onClick={() => props.openModal('signup')}>Sign Up</button>
        </div>
      </div>
      <div className='splash-body'>
        <div className='body-left'>Test1</div>
        <img className='zombie' src={window.images.zombie} alt='zombie' />
        <div className='body-right'>Test2</div>
      </div>
    </div>
  );
};

export default Splash;