import {LOGIN, LOGIN_SUCCESS, LOGIN_FAIL} from '../actions/ActionTypes';
import {call, takeEvery, put} from 'redux-saga/effects';
import {loginApi} from '../api/LoginApis';
const messageError = 'Không thể kết nối tới server.';
function* loginFlow(action) {
  try {
    const responses = yield loginApi(action.input);
    const response=responses.APILogin
      console.warn("responsesgaa",response)
    if (response.resultCode === 1) {
      yield put({type: LOGIN_SUCCESS, data: response.data});
    } else {
      yield put({type: LOGIN_FAIL, error: response.message});
    }
  } catch (error) {
    yield put({type: LOGIN_FAIL, error: messageError});
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN, loginFlow);
}
