import {all} from 'redux-saga/effects';
import {watchLogin} from './LoginSagas';
import {watchMenu} from './MenuSagas';
import {watchGetSubject} from './LearningInfo/LearningInfoSagas';
import {watchEditProfile, watchGetProfile} from './MenuProfile/ProfileSagas';
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
    watchGetDepartmentInfo(),watchGetItCenterInfo(),
  ]);
}
