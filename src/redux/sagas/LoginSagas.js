import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FORGET_PASSWORD,
  FORGET_PASSWORD_FAIL,
  FORGET_PASSWORD_SUCCESS,
} from '../actions/ActionTypes';
import {call, takeEvery, put} from 'redux-saga/effects';
import {loginApi, forgetPasswordApi} from '../api/LoginApis';
import {objectIsNull, stringIsEmpty} from '../../res/Functions';
const messageError = 'Không thể kết nối tới server.';
function* loginFlow(action) {
  try {
    const response = yield loginApi(action.input);
    if (!objectIsNull(response.data)) {
      yield put({
        type: LOGIN_SUCCESS,
        data: response.data,
        message: response.msg,
      });
    } else {
      yield put({
        type: LOGIN_FAIL,
        error: stringIsEmpty(response.msg) ? messageError : response.msg,
      });
    }
  } catch (error) {
    yield put({type: LOGIN_FAIL, error: messageError});
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN, loginFlow);
}
function* forgetPasswordFlow(action) {
  try {
    const response = yield forgetPasswordApi(action.input);
    if (response.status === true) {
      yield put({
        type: FORGET_PASSWORD_SUCCESS,
        message: response.msg,
      });
    } else {
      console.warn("s")
      yield put({type: FORGET_PASSWORD_FAIL, error: stringIsEmpty(response.msg) ? messageError : response.msg});
    }
  } catch (error) {
    yield put({type: FORGET_PASSWORD_FAIL, error: messageError});
  }
}

export function* watchForgetPassword() {
  yield takeEvery(FORGET_PASSWORD, forgetPasswordFlow);
}
