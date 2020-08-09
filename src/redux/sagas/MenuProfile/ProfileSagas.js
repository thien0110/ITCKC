import {
  EDIT_PROFILE,
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_SUCCESS,
  FORMAT_DATA,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_SUCCESS,
} from '../../actions/MenuProfile/ProfileAction';
import {call, takeEvery, put} from 'redux-saga/effects';
import {
  editProfileApi,
  getProfileApi,
  changePasswordApi,
} from '../../api/MenuProfile/ProfileApis';
const messageError = 'Không thể kết nối tới server.';
function* editProfileFlow(action) {
  try {
    const response = yield editProfileApi(action.input);
    if (response.status === 200) {
      const data = {
        input: action.input,
        output: response.data,
      };
      yield put({
        type: EDIT_PROFILE_SUCCESS,
        data: data,
        message: response.message,
      });
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
    // console.warn(response)
    if (response.status === 200) {
      yield put({type: GET_PROFILE_SUCCESS, data: response.data});
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




function* changPasswordFlow(action) {
  try {
    const response = yield changePasswordApi(action.input);
    // console.warn(response)
    if (response.status === true) {
      yield put({type: CHANGE_PASSWORD_SUCCESS, message: response.msg});
    } else {
      yield put({type: CHANGE_PASSWORD_FAIL, error: response.msg});
    }
  } catch (error) {
    yield put({type: CHANGE_PASSWORD_FAIL, error: messageError});
  }
}

export function* watchChangePassword() {
  yield takeEvery(CHANGE_PASSWORD, changPasswordFlow);
}
