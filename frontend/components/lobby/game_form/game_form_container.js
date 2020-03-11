import { connect } from 'react-redux';
import GameForm from './game_form';
import { createGame } from '../../../actions/game_actions';

const MSP = (state) => {
  return ({
    creator: state.session.currentUser
  })
};

const MDP = (dispatch) => {
  return ({
    createGame: (game) => dispatch(createGame(game))
  })
};

export default connect(MSP, MDP)(GameForm)