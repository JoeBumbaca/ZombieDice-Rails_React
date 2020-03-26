import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import statsReducer from './stats_reducer';
import gamesReducer from './games_reducer';
import leadersReducer from './leaders_reducer';
import currentGameReducer from './current_game_reducer';
import messagesReducer from './messages_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  stats: statsReducer,
  games: gamesReducer,
  leaders: leadersReducer,
  currentGame: currentGameReducer,
  messages: messagesReducer
});

export default entitiesReducer;
