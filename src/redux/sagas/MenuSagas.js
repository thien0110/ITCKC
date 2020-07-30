import {GET_MENU_NEWS, GET_MENU_NEWS_SUCCESS, GET_MENU_NEWS_FAIL} from '../actions/ActionTypes';
import {call, takeEvery, put} from 'redux-saga/effects';
import {menuApi} from '../api/MenuApis';
const messageError = 'Không thể kết nối tới server.';
function* menuFlow(action) {
  try {
    const response = yield menuApi(action.input);
    if (response.resultCode === 1) {
      yield put({type: GET_MENU_NEWS_SUCCESS, data: response.data, message:response.message});
    } else {
      yield put({type: GET_MENU_NEWS_FAIL, error: response.message});
    }
  } catch (error) {
    yield put({type: GET_MENU_NEWS_FAIL, error: messageError});
  }
}

export function* watchMenu() {
  yield takeEvery(GET_MENU_NEWS, menuFlow);
}
