import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import statsReducer from './stats_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  stats: statsReducer
});

export default entitiesReducer;
