import {combineReducers} from 'redux';
import loginReducers from './LoginReducer';
import menuReducers from './MenuReducer';
import profileReducers from './MenuProfile/ProfileReducer';
const allReducers = combineReducers({
  loginReducers,
  menuReducers,
  profileReducers,
});

export default allReducers;
