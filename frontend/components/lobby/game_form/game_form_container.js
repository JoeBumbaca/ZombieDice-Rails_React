import { connect } from 'react-redux';
import GameForm from './game_form';
import { createGame } from '../../../actions/game_actions';
import { openModal } from '../../../actions/modal_actions';

const MSP = (state) => {
  return ({
    creator: state.session.currentUser,
    modal: state.ui.modal ? true : false
  })
};

const MDP = (dispatch) => {
  return ({
    createGame: (game) => dispatch(createGame(game)),
    openModal: (type) => dispatch(openModal(type))
  })
};

export default connect(MSP, MDP)(GameForm)