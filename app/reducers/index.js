import { combineReducers } from 'redux';
import user from './user';
import nationalDataReducer from './nationalDataReducer';

const reducers = combineReducers({
  user,
  nationalDataReducer
});

export default reducers;
