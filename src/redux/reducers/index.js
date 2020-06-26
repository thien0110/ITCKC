import {combineReducers} from 'redux';
import loginReducers from './LoginReducer';
const allReducers = combineReducers({
  loginReducers,
});

export default allReducers;
