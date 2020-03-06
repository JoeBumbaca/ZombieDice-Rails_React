import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import ModalContainer from './modal_container';
import GameContainer from './game/game_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return(
    <div>
      <AuthRoute path='/' component={ModalContainer} />
      <Switch>
        <ProtectedRoute exact path='/game' component={GameContainer}/>
        <AuthRoute exact path='/' component={SplashContainer} />
      </Switch>
    </div>
  )
};

export default App;