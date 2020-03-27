import * as APIUtil from '../util/message_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const receiveMessage = (message) => {
  return ({
    type: RECEIVE_MESSAGE,
    message
  })
};

export const createMessage = message => dispatch => {
  APIUtil.postMessage(message)
    // .then(message => dispatch(receiveMessage(message)))
};

