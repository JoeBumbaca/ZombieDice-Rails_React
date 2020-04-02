import { RECEIVE_GAME, RECEIVE_ALL_GAMES, REMOVE_GAME } from '../actions/game_actions';

const gameReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_GAME:
      newState[action.payload.game.id] = action.payload.game
      return newState;
    case RECEIVE_ALL_GAMES:
      return action.games
    case REMOVE_GAME:
      delete newState[action.game.id]
      return newState;
    default:
      return state;
  };
};

export default gameReducer;