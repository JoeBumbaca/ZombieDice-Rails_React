import { connect } from "react-redux";
import { logout } from '../../actions/session_actions'
import Header from './header';

const MSP = (state) => {
  return ({
    user: state.entities.users[state.session.currentUser]
  })
};

const MDP = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  })
};

export default connect(MSP, MDP)(Header);