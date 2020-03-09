import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const statsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return {[action.currentUser.id] : action.currentUser.stats}
    default:
      return state;
  }
};

export default statsReducer;