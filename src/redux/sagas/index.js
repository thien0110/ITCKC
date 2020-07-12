import {all} from 'redux-saga/effects';
import {watchLogin} from './LoginSagas';
import {watchMenu} from './MenuSagas';

export default function* allSagas() {
  yield all([
    watchLogin(),
    watchMenu(),
  ]);
}
