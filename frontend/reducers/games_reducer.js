import { RECEIVE_GAME, RECEIVE_ALL_GAMES } from '../actions/game_actions';

const gameReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_GAME:
      newState[action.game.id] = action.game
      return newState;
    case RECEIVE_ALL_GAMES:
      return action.games
    default:
      return state;
  };
};

export default gameReducer;