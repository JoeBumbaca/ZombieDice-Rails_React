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
        <div className='body-left'>
          Eat brains. Don't get shotgunned. You are a zombie. You want braaains.
          More brains than any of your zombie buddies. Zombie Dice is fun for
          any zombie fan (or the whole zombie family). The 13 custom dice are
          your victims.
        </div>
        <img className='zombie' src={window.images.zombie} alt='zombie' />
        <div className='body-right'>
          Push your luck to eat their brains, but stop before the shotgun blasts
          end your turn! It's a great quick game. Play it at lunch
          (braaiiiiiins!) or while you're in line for a zombie movie . . . ! Two
          or more can play. Each game takes 10 to 20 minutes, and can be taught
          in a single round.
        </div>
      </div>
    </div>
  );
};

export default Splash;