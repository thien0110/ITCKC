import {
    FORMAT_DATA,GET_SUBJECT,GET_SUBJECT_FAIL,GET_SUBJECT_SUCCESS
  } from '../../actions/LearningInfo/LearningInfoAction';
import {call, takeEvery, put} from 'redux-saga/effects';
import {getSubjectApi} from '../../api/LearningInfo/LearningInfoApis';
const messageError = 'Không thể kết nối tới server.';

function* getSubjectFlow(action) {
  try {
    const response = yield getSubjectApi(action.input);
    if (response.status === 200) {
      yield put({type: GET_SUBJECT_SUCCESS, data: response.data, message:response.message});
    } else {
      yield put({type: GET_SUBJECT_FAIL, error: response.message});
    }
  } catch (error) {
    yield put({type: GET_SUBJECT_FAIL, error: messageError});
  }
}

export function* watchGetSubject() {
  yield takeEvery(GET_SUBJECT, getSubjectFlow);
}

