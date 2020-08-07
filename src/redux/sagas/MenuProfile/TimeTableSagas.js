import {GET_TIME_TABLE,GET_TIME_TABLE_FAIL,GET_TIME_TABLE_SUCCESS,
    FORMAT_DATA,
  } from '../../actions/MenuProfile/TimeTableAction';
  import {call, takeEvery, put} from 'redux-saga/effects';
  import {getTimeTableApi} from '../../api/MenuProfile/TimeTableApis';
  const messageError = 'Không thể kết nối tới server.';

  function* getTimeTableFlow(action) {
    try {
      const response = yield getTimeTableApi(action.input);
      // console.warn(response)
      if (response.TKB != 0) {
        yield put({type: GET_TIME_TABLE_SUCCESS, data: response.TKB});
      } else {
        yield put({type: GET_TIME_TABLE_FAIL, error: response.message});
      }
    } catch (error) {
      yield put({type: GET_TIME_TABLE_FAIL, error: messageError});
    }
  }
  
  export function* watchGetTimeTable() {
    yield takeEvery(GET_TIME_TABLE, getTimeTableFlow);
  }
  