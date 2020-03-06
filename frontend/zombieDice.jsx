import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root';
import {login, logout} from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("zombie_dice");
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);

  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});