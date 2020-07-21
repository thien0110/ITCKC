import {all} from 'redux-saga/effects';
import {watchLogin} from './LoginSagas';
import {watchMenu} from './MenuSagas';
import {watchEditProfile, watchGetProfile} from './MenuProfile/ProfileSagas';
export default function* allSagas() {
  yield all([
    watchLogin(),
    watchMenu(),
    watchEditProfile(),
    watchGetProfile(),
  ]);
}