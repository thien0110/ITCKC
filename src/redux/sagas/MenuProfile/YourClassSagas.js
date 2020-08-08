import {
  GET_YOUR_CLASS_SUCCESS,
  GET_YOUR_CLASS_FAIL,
  GET_YOUR_CLASS,
  FORMAT_DATA,
} from '../../actions/MenuProfile/YourClassAction';
import {call, takeEvery, put} from 'redux-saga/effects';
import {getYourClassApi} from '../../api/MenuProfile/YourClassApis';
const messageError = 'Không thể kết nối tới server.';
const messageFail = 'Không có lớp học phần.';
import {arrayIsEmpty} from '../../../res/Functions';

function* getYourClassFlow(action) {
  try {
    const response = yield getYourClassApi(action.input);
    if (response.resultCode == -1) {
      yield put({type: GET_YOUR_CLASS_FAIL, error: response.message});
    } else {
      yield put({type: GET_YOUR_CLASS_SUCCESS, data: response});
    }
  } catch (error) {
    yield put({type: GET_YOUR_CLASS_FAIL, error: messageError});
  }
}

export function* watchGetYourClass() {
  yield takeEvery(GET_YOUR_CLASS, getYourClassFlow);
}
