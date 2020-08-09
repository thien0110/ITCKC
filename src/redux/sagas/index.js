import {all} from 'redux-saga/effects';
import {watchLogin, watchForgetPassword} from './LoginSagas';
import {watchMenu, watchhotPostsIt} from './MenuSagas';
import {watchGetSubject} from './LearningInfo/LearningInfoSagas';
import {
  watchEditProfile,
  watchGetProfile,
  watchChangePassword,
} from './MenuProfile/ProfileSagas';
import {watchGetYourClass} from './MenuProfile/YourClassSagas';
import {watchGetScoreTable} from './MenuProfile/ScoreTableSagas';
import {watchGetTimeTable} from './MenuProfile/TimeTableSagas';
import {watchSearch} from './SearchSagas';
import {watchGetSchoolInfo} from './SchoolInfo/SchoolInfoSagas';
import {watchGetDepartmentInfo} from './DepartmentInfo/DepartmentInfoSagas';
import {watchGetItCenterInfo} from './ItCenter/ItCenterSagas';
export default function* allSagas() {
  yield all([
    watchLogin(),
    watchMenu(),
    watchEditProfile(),
    watchGetProfile(),
    watchGetSubject(),
    watchSearch(),
    watchGetSchoolInfo(),
    watchGetDepartmentInfo(),
    watchGetItCenterInfo(),
    watchGetTimeTable(),
    watchForgetPassword(),
    watchhotPostsIt(),
    watchGetYourClass(),
    watchGetScoreTable(),
    watchChangePassword(),
  ]);
}
