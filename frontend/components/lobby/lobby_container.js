import { connect } from 'react-redux';
import { clearMessages } from '../../actions/message_actions';
import LobbyPage from './lobby';

const MSP = (state) => {
  return ({

  })
};

const MDP = (dispatch) => {
  return ({
    
  })
};

export default connect(MSP, MDP)(LobbyPage);