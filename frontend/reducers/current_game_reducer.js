import { OPEN_MODAL } from '../actions/modal_actions';

const currentGameReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case OPEN_MODAL:
      if (!action.game){
        return state;
      } else {
        return action.game;
      }
    default:
      return state;
  }
};

export default currentGameReducer;