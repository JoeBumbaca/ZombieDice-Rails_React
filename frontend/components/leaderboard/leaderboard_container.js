import { connect } from 'react-redux';
import LeaderBoard from './leaderboard';
import { getLeaders } from '../../actions/session_actions';
import { leaders } from '../../reducers/selectors';

const MSP = (state) => {
  return ({
    leaders: leaders(state)
  })
};

const MDP = (dispatch) => {
  return ({
    getLeaders: () => dispatch(getLeaders())
  })
};

export default connect(MSP, MDP)(LeaderBoard)