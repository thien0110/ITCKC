import {combineReducers} from 'redux';
import loginReducers from './LoginReducer';
import menuReducers from './MenuReducer';
import profileReducers from './MenuProfile/ProfileReducer';
import learningInfoReducers from './LearningInfo/LearningInfoReducer';
import searchReducers from './SearchReducer';
import schoolInfoReducers from './SchoolInfo/SchoolInfoReducer';
import departmentInfoReducers from './DepartmentInfo/DepartmentInfoReducer';
const allReducers = combineReducers({
  loginReducers,
  menuReducers,
  profileReducers,
  learningInfoReducers,
  searchReducers,
  schoolInfoReducers,
  departmentInfoReducers,
});

export default allReducers;
