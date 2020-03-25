import React from 'react';
import { withRouter } from 'react-router-dom';

import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import CheckPrivateGameContainer from './game/private_game_form_container';
import MakePrivateGameContainer from './game/make_private_game_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'check-private':
      component = <CheckPrivateGameContainer />;
      break;
    case 'make-private':
      component = <MakePrivateGameContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className='modal-background' onClick={closeModal}>
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

export default withRouter(Modal);
