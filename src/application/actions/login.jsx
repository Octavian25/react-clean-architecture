export const SEND_LOGIN = '[login] sending login';
export const LOGIN_SUCCESS = '[login] login success';
export const LOGIN_FAILED = '[login] login failed';

export const sendLogin = {
  type: SEND_LOGIN,
};

export const loginSuccess = (feedback) => ({
  type: LOGIN_SUCCESS,
  payload: feedback,
});

export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  payload: error,
});
