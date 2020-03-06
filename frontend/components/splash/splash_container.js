import { connect } from 'react-redux';
import Splash from './splash';
import { openModal } from '../../actions/modal_actions';

const MSP = (state) => {
  return ({

  })
};

const MDP = (dispatch) => {
  return ({
    openModal: (type) => dispatch(openModal(type))
  })
};

export default connect(MSP, MDP)(Splash);
