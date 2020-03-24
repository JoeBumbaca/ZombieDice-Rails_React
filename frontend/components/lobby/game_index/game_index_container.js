import { connect } from 'react-redux';
import GameIndex from './game_index';
import { getGames } from '../../../actions/game_actions';
import { openModal } from '../../../actions/modal_actions';

const MSP = (state) => {
  return ({
    games: Object.values(state.entities.games)
  })
};

const MDP = (dispatch) => {
  return({
    getGames: () => dispatch(getGames()),
    openModal: (type) => dispatch(openModal(type))
  })
};

export default connect(MSP, MDP)(GameIndex)