import Profile from './profile';
import { getUser } from '../../actions/session_actions';
import { connect } from "react-redux";

const MSP = (state) => {
  return {
    stats: state.entities.stats[state.session.currentUser],
    currentUser: state.entities.users[state.session.currentUser]
  };
};

const MDP = (dispatch) => {
  return ({
    getUser: (user) => dispatch(getUser(user))
  })
};

export default connect(MSP, MDP)(Profile);