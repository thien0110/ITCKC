import {
    FORMAT_DATA,GET_WORKING,GET_WORKING_FAIL,GET_WORKING_SUCCESS
  } from '../../actions/LearningInfo/WorkingAction';
import {call, takeEvery, put} from 'redux-saga/effects';
import {getWorkingApi} from '../../api/LearningInfo/WorkingApis';
const messageError = 'Không thể kết nối tới server.';

function* getWorkingFlow(action) {
  try {
    const response = yield getWorkingApi(action.input);
    if (response.status === 200) {
      yield put({type: GET_WORKING_SUCCESS, data: response.data,});
    } else {
      yield put({type: GET_WORKING_FAIL, error: response.message});
    }
  } catch (error) {
    yield put({type: GET_WORKING_FAIL, error: messageError});
  }
}

export function* watchGetWorking() {
  yield takeEvery(GET_WORKING, getWorkingFlow);
}

