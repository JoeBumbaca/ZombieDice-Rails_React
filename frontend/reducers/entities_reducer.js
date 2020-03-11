import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import statsReducer from './stats_reducer';
import gamesReducer from './games_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  stats: statsReducer,
  games: gamesReducer
});

export default entitiesReducer;
