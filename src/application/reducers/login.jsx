import { LOGIN_FAILED, LOGIN_SUCCESS } from '../actions/login';

const initialState = {
  feedback: [],
  error: null,
};

const login1 = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { feedback: action.payload, error: null };
    case LOGIN_FAILED:
      return { feedback: [], error: action.payload };
    default:
      return state;
  }
};

export default login1;
