import { SET_LOADING_OFF, SET_LOADING_ON } from '../actions/ui';

const initialState = {
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_ON:
    case SET_LOADING_OFF:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default reducer;
