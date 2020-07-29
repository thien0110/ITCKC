import {all} from 'redux-saga/effects';
import {watchLogin} from './LoginSagas';
import {watchMenu} from './MenuSagas';
import {watchGetSubject} from './LearningInfo/LearningInfoSagas'
import {watchEditProfile, watchGetProfile} from './MenuProfile/ProfileSagas';
import {watchSearch} from './SearchSagas';
export default function* allSagas() {
  yield all([
    watchLogin(),
    watchMenu(),
    watchEditProfile(),
    watchGetProfile(),
    watchGetSubject(),watchSearch(),
  ]);
}
