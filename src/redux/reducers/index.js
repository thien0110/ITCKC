import {combineReducers} from 'redux';
import loginReducers from './LoginReducer';
import menuReducers from './MenuReducer';
import profileReducers from './MenuProfile/ProfileReducer';
import timeTableReducers from './MenuProfile/TimeTableReducer';
import scoreTableReducers from './MenuProfile/ScoreTableReducer';
import yourClassReducers from './MenuProfile/YourClassReducer';
import learningInfoReducers from './LearningInfo/LearningInfoReducer';
import searchReducers from './SearchReducer';
import schoolInfoReducers from './SchoolInfo/SchoolInfoReducer';
import departmentInfoReducers from './DepartmentInfo/DepartmentInfoReducer';
import itCenterReducers from './ItCenter/ItCenterReducer';
const allReducers = combineReducers({
  loginReducers,
  menuReducers,
  profileReducers,
  learningInfoReducers,
  searchReducers,
  schoolInfoReducers,
  departmentInfoReducers,
  itCenterReducers,
  timeTableReducers,
  yourClassReducers,
  scoreTableReducers,
});

export default allReducers;
