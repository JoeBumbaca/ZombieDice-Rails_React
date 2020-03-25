import { connect } from 'react-redux';
import PrivateGameForm from './private_game_form';
import { closeModal } from '../../actions/modal_actions';

const MSP = (state) => {
  return ({
    currentGame: state.entities.currentGame,
    passwordCheck: state.entities.games[state.entities.currentGame].password_digest
  })
};

const MDP = (dispatch) => {
  return ({
    closeModal: () => dispatch(closeModal())
  })
};

export default connect(MSP, MDP)(PrivateGameForm);