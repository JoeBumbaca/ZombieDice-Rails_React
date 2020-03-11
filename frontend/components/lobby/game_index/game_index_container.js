import { connect } from 'react-redux';
import GameIndex from './game_index';
import { getGames } from '../../../actions/game_actions';

const MSP = (state) => {
  return ({
    games: Object.values(state.entities.games)
  })
};

const MDP = (dispatch) => {
  return({
    getGames: () => dispatch(getGames())
  })
};

export default connect(MSP, MDP)(GameIndex)