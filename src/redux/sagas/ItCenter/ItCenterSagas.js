import {
    FORMAT_DATA,
    GET_IT_CENTER_INFO, GET_IT_CENTER_INFO_FAIL, GET_IT_CENTER_INFO_SUCCESS,

  } from '../../actions/ItCenter/ItCenterAction';
  import {arrayIsEmpty} from '../../../res/Functions'
  import {call, takeEvery, put} from 'redux-saga/effects';
  import {getItCenterInfoApi} from '../../api/ItCenter/ItCenterApis';
  const messageError = 'Không thể kết nối tới server.';
  
  function* getItCenterInfoFlow(action) {
    try {
      const response = yield getItCenterInfoApi(action.input);
      if (!arrayIsEmpty(response)) {
        yield put({
          type: GET_IT_CENTER_INFO_SUCCESS,
          data: response,
        });
      } else {
        yield put({type: GET_IT_CENTER_INFO_FAIL, error: messageError});
      }
    } catch (error) {
      yield put({type: GET_IT_CENTER_INFO_FAIL, error: messageError});
    }
  }
  
  export function* watchGetItCenterInfo() {
    yield takeEvery(GET_IT_CENTER_INFO, getItCenterInfoFlow);
  }
  