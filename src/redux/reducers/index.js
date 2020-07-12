import {combineReducers} from 'redux';
import loginReducers from './LoginReducer';
import menuReducers from './MenuReducer';
const allReducers = combineReducers({
  loginReducers,
  menuReducers,
});

export default allReducers;
