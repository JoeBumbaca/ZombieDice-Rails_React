import { RECEIVE_MESSAGE, CLEAR_MESSAGES } from '../actions/message_actions';
import { RECEIVE_GAME } from '../actions/game_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_MESSAGE:
      newState[action.message.id] = action.message;
      return Object.assign({}, state, newState)
    case RECEIVE_GAME:
      return Object.assign({}, state, action.payload.messages)
    case CLEAR_MESSAGES:
      return {};
    default:
      return state;
  };
};

export default messagesReducer;