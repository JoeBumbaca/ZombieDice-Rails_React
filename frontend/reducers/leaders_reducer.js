import { RECEIVE_LEADERBOARD } from "../actions/session_actions";

const leadersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_LEADERBOARD:
      Object.values(action.leaders).forEach((leader) => {
        leader.stats.username = leader.username;
        newState[leader.id] = leader.stats;
      })
      return newState;
    default: 
      return state;
  }
};

export default leadersReducer;