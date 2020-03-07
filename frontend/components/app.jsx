import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import ModalContainer from './modal_container';
import GameContainer from './game/game_container';
import SetupContainer from './setup/setup_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return(
    <div>
      <Switch>
        <ProtectedRoute exact path='/game' component={GameContainer}/>
        <ProtectedRoute exact path='/setup' component={SetupContainer} />
        <AuthRoute exact path='/' component={SplashContainer} />
      </Switch>
      <AuthRoute exact path='/' component={ModalContainer} />
    </div>
  )
};

export default App;