import { connect } from 'react-redux';
import MakeGamePrivateForm from './make_private_game_form';
import { closeModal } from '../../actions/modal_actions';

const MSP = (state) => {
  return ({

  })
};

const MDP = (dispatch) => {
  return ({
    closeModal: () => dispatch(closeModal())
  })
};

export default connect(MSP, MDP)(MakeGamePrivateForm);