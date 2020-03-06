import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import ModalContainer from './modal_container';
import GameContainer from './game/game_container';

const App = () => {
  return(
    <div>
      <Route path='/' component={ModalContainer} />
      <Switch>
        <Route path='/game' component={GameContainer}/>
        <Route exact path='/' component={SplashContainer} />
      </Switch>
    </div>
  )
};

export default App;