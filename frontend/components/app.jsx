import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import ModalContainer from './modal_container';
import GameContainer from './game/game_container';
import LobbyContainer from './lobby/lobby_container';
import ProfileContainer from './profile/profile_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => {
  return(
    <div>
      <Switch>
        <ProtectedRoute path='/game/:id' component={GameContainer}/>
        <ProtectedRoute path='/lobby' component={LobbyContainer} />
        <ProtectedRoute path='/profile' component={ProfileContainer} />
        <AuthRoute exact path='/' component={SplashContainer} />
      </Switch>
      <AuthRoute exact path='/' component={ModalContainer} />
    </div>
  )
};

export default App;