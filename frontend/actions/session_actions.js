import * as APIUtil from '../util/session_api_util.js';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user).then(
    (user) =>  dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};


export const login = (user) => (dispatch) => {
  debugger

  return APIUtil.login(user).then(
    (user) =>  dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const logout = () => (dispatch) => {
  return APIUtil.logout().then( () => {
    dispatch(receiveCurrentUser(null));
  });
};

const receiveCurrentUser = (currentUser) => {
  debugger
  return {
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  };
};
