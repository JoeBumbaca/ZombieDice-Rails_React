import React from 'react';


const Splash = (props) => {
  return (
    <div className='splash'>
      <div className='header'>
        <h1 className='header-title'>
          <img src={window.images.dice} height='100' width='100'/>
          Zombie Dice ™
          <img src={window.images.dice} height='100' width='100' />
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
      <section className='footer'>
        <p>
          Zombie Dice is a registered trademark of Steve Jackson Games.  If you like playing please visit them at <a href="http://www.sjgames.com/">www.sjgames.com</a> <br/> Steve Jackson Games is in no way, shape or form affilitaed with this project.  
        </p>
      </section>
    </div>
  );
};

export default Splash;