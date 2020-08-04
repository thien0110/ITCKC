import {
  FORMAT_DATA,
  GET_DEPARTMENT_INFO,
  GET_DEPARTMENT_INFO_FAIL,
  GET_DEPARTMENT_INFO_SUCCESS,
} from '../../actions/DepartmentInfo/DepartmentInfoAction';
import {arrayIsEmpty} from '../../../res/Functions'
import {call, takeEvery, put} from 'redux-saga/effects';
import {getDepartmentInfoApi} from '../../api/DepartmentInfo/DepartmentInfoApis';
const messageError = 'Không thể kết nối tới server.';

function* getDepartmentInfoFlow(action) {
  try {
    const response = yield getDepartmentInfoApi(action.input);
    if (!arrayIsEmpty(response.data)) {
      yield put({
        type: GET_DEPARTMENT_INFO_SUCCESS,
        data: response.data,
        message: response.message,
      });
    } else {
      yield put({type: GET_DEPARTMENT_INFO_FAIL, error: response.message});
    }
  } catch (error) {
    yield put({type: GET_DEPARTMENT_INFO_FAIL, error: messageError});
  }
}

export function* watchGetDepartmentInfo() {
  yield takeEvery(GET_DEPARTMENT_INFO, getDepartmentInfoFlow);
}
