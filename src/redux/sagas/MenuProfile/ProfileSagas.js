import {
    EDIT_PROFILE,EDIT_PROFILE_FAIL,EDIT_PROFILE_SUCCESS,
    FORMAT_DATA,
  } from '../../actions/MenuProfile/ProfileAction';
import {call, takeEvery, put} from 'redux-saga/effects';
import {editProfileApi} from '../../api/MenuProfile/ProfileApis';
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
