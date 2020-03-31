import { connect } from 'react-redux';
import GamePlay from './game_play';
import { deleteGame } from '../../../actions/game_actions';

const MSP = (state) => {
  return ({

  })
};

const MDP = (dispatch) => {
  return ({
    deleteGame: (id) => dispatch(deleteGame(id))
  })
};

export default connect(MSP, MDP)(GamePlay);