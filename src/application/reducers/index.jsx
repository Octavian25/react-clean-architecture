import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './login';
import ui from './ui';

export default combineReducers({
  login,
  ui,
  form: formReducer,
});
