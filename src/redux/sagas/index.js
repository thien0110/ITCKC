import {all} from 'redux-saga/effects';
import {watchLogin} from './LoginSagas';

export default function* allSagas() {
  yield all([
    watchLogin(),
  ]);
}
