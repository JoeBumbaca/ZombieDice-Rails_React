import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import ModalContainer from './modal_container';

const App = () => {
  return(
    <div>
      <ModalContainer />
      <Switch>
        <Route exact path='/' component={SplashContainer} />
      </Switch>
    </div>
  )
};

export default App;