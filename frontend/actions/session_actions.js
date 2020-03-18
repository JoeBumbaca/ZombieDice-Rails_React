import * as APIUtil from '../util/session_api_util';

export const RECEIVE_LEADERBOARD = 'RECEIVE_LEADERBOARD'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
});

export const receiveLeaderboard = leaders => ({
  type: RECEIVE_LEADERBOARD,
  leaders
})

export const createNewUser = formUser => dispatch =>
  APIUtil.signup(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const login = formUser => dispatch =>
  APIUtil.login(formUser).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const logout = () => dispatch =>
  APIUtil.logout().then(() => dispatch(logoutCurrentUser()));

export const getUser = (id) => dispatch => 
    APIUtil.fetchUser(id)
      .then(user => dispatch(receiveCurrentUser(user)))

export const getLeaders = () => dispatch => 
    APIUtil.fetchLeaders()
      .then(leaders => dispatch(receiveLeaderboard(leaders)))