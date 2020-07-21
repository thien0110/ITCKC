import {
    EDIT_PROFILE,EDIT_PROFILE_FAIL,EDIT_PROFILE_SUCCESS,
    FORMAT_DATA,GET_PROFILE,GET_PROFILE_FAIL,GET_PROFILE_SUCCESS
  } from '../../actions/MenuProfile/ProfileAction';
import {call, takeEvery, put} from 'redux-saga/effects';
import {editProfileApi, getProfileApi} from '../../api/MenuProfile/ProfileApis';
const messageError = 'Không thể kết nối tới server.';
function* editProfileFlow(action) {
  try {
    const response = yield editProfileApi(action.input);
    if (response.resultCode === 1) {
      yield put({type: EDIT_PROFILE_SUCCESS, data: response.data, message:response.message});
    } else {
      yield put({type: EDIT_PROFILE_FAIL, error: response.message});
    }
  } catch (error) {
    yield put({type: EDIT_PROFILE_FAIL, error: messageError});
  }
}

export function* watchEditProfile() {
  yield takeEvery(EDIT_PROFILE, editProfileFlow);
}
function* getProfileFlow(action) {
  try {
    const response = yield getProfileApi(action.input);
    if (response.resultCode === 200) {
      yield put({type: GET_PROFILE_SUCCESS, data: response.data, message:response.message});
    } else {
      yield put({type: GET_PROFILE_FAIL, error: response.message});
    }
  } catch (error) {
    yield put({type: GET_PROFILE_FAIL, error: messageError});
  }
}

export function* watchGetProfile() {
  yield takeEvery(GET_PROFILE, getProfileFlow);
}

