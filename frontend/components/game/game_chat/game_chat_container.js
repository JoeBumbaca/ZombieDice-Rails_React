import { connect } from 'react-redux';
import GameChat from './game_chat';
import { createMessage } from '../../../actions/message_actions';
import { getGame } from '../../../actions/game_actions';

const MSP = (state, ownProps) => {
  return {
    game: state.entities.games[ownProps.gameId],
    messages: Object.values(state.entities.messages),
    userId: state.session.currentUser,
    userName: state.entities.users[state.session.currentUser].username
  };
};

const MDP = (dispatch) => {
  return ({
    createMessage: (message) => dispatch(createMessage(message)),
    getGame: (id) => dispatch(getGame(id))
  })
};

export default connect(MSP, MDP)(GameChat)