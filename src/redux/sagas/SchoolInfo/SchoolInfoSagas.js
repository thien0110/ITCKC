import {
  FORMAT_DATA,
  GET_SCHOOL_INFO,
  GET_SCHOOL_INFO_FAIL,
  GET_SCHOOL_INFO_SUCCESS,
} from '../../actions/SchoolInfo/SchoolInfoAction';
import {call, takeEvery, put} from 'redux-saga/effects';
import {getSchoolInfoApi} from '../../api/SchoolInfo/SchoolInfoApis';
const messageError = 'Không thể kết nối tới server.';

function* getSchoolInfoFlow(action) {
  try {
    const response = yield getSchoolInfoApi(action.input);
    if (response.resultCode === 200) {
      yield put({
        type: GET_SCHOOL_INFO_SUCCESS,
        data: response.data,
        message: response.message,
      });
    } else {
      yield put({type: GET_SCHOOL_INFO_FAIL, error: response.message});
    }
  } catch (error) {
    yield put({type: GET_SCHOOL_INFO_FAIL, error: messageError});
  }
}

export function* watchGetSchoolInfo() {
  yield takeEvery(GET_SCHOOL_INFO, getSchoolInfoFlow);
}
