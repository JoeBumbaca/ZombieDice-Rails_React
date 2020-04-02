import * as GAMEUtil from '../util/game_util';

export const RECEIVE_GAME = "RECEIVE_GAME";
export const RECEIVE_ALL_GAMES = "RECEIVE_ALL_GAMES";
export const REMOVE_GAME = 'REMOVE_GAME';

export const receiveGame = (payload) => {
  return ({
    type: RECEIVE_GAME,
    payload
  })
};

export const receiveGames = (games) => {
  return ({
    type: RECEIVE_ALL_GAMES,
    games
  });
};

export const removeGame = (game) => {
  return({
    type: REMOVE_GAME,
    game
  })
} ; 

export const createGame = (game) => (dispatch) => {
  GAMEUtil.createGame(game)
};

export const getGames = () => (dispatch) => {
  GAMEUtil.fetchGames()
    .then((games) => dispatch(receiveGames(games)))
};

export const getGame = (id) => (dispatch) => {
  GAMEUtil.fetchGame(id)
    .then((game) => dispatch(receiveGame(game)))
};

export const deleteGame = (id) => (dispatch) => {
  GAMEUtil.destroyGame(id)
    .then((game) => dispatch(removeGame(game)))
};
