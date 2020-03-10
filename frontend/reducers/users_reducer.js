
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
        return newState;
    case RECEIVE_CURRENT_USER:
        newState = Object.assign({}, {
        [action.currentUser.id]: {id: action.currentUser.id, username: action.currentUser.username}
      });
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
