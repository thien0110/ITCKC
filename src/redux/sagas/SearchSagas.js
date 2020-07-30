import {SEARCH, SEARCH_FAIL, SEARCH_SUCCESS} from '../actions/ActionTypes';
import {call, takeEvery, put} from 'redux-saga/effects';
import {searchApi} from '../api/SearchApis';
const messageError = 'Không thể kết nối tới server.';
function* searchFlow(action) {
  try {
    const response = yield searchApi(action.input);
    if (response.resultCode === 1) {
      yield put({type: SEARCH_SUCCESS, data: response.data, message:response.message});
    } else {
      yield put({type: SEARCH_FAIL, error: response.message});
    }
  } catch (error) {
    yield put({type: SEARCH_FAIL, error: messageError});
  }
}

export function* watchSearch() {
  yield takeEvery(SEARCH, searchFlow);
}
