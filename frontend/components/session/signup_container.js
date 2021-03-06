import { connect } from 'react-redux';
import { createNewUser, getStats } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import SignupForm from './signup';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(createNewUser(user)),
    closeModal: () => dispatch(closeModal()),
    // getStats: (user) => dispatch(getStats(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
