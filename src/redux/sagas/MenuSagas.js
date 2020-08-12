import {
  GET_MENU_NEWS,
  GET_MENU_NEWS_SUCCESS,
  GET_MENU_NEWS_FAIL,
  GET_HOT_POST_IT,
  GET_HOT_POST_IT_FAIL,
  GET_HOT_POST_IT_SUCCESS,
} from '../actions/ActionTypes';
import {call, takeEvery, put} from 'redux-saga/effects';
import {menuApi, hotPostsItApi} from '../api/MenuApis';
const messageError = 'Không thể kết nối tới server.';
import {arrayIsEmpty} from '../../res/Functions'
function* menuFlow(action) {
  try {
    const response = yield menuApi(action.input);
    if (!arrayIsEmpty(response.data)) {
      yield put({
        type: GET_MENU_NEWS_SUCCESS,
        data: response.data,
        message: response.message,
      });
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
function* hotPostsItFlow(action) {
  try {
    const response = yield hotPostsItApi(action.input);
    if (response.code === 200) {
      yield put({
        type: GET_HOT_POST_IT_SUCCESS,
        data: response.data,
        message: response.message,
      });
    } else {
      yield put({type: GET_HOT_POST_IT_FAIL, error: response.message});
    }
  } catch (error) {
    yield put({type: GET_HOT_POST_IT_FAIL, error: messageError});
  }
}

export function* watchHotPostsIt() {
  yield takeEvery(GET_HOT_POST_IT, hotPostsItFlow);
}
