import { connect } from 'react-redux';
import GamePlay from './game_play';
import { deleteGame, getGame } from '../../../actions/game_actions';

const MSP = (state, ownProps) => {
  return ({
    game: state.entities.games[ownProps.gameId],
    currentUser: state.session.currentUser
  })
};

const MDP = (dispatch) => {
  return ({
    deleteGame: (id) => dispatch(deleteGame(id)),
    getGame: (id) => dispatch(getGame(id))
  })
};

export default connect(MSP, MDP)(GamePlay);