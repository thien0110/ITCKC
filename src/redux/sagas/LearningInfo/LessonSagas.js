import {
    FORMAT_DATA,GET_LESSON_SUCCESS,GET_LESSON_FAIL,GET_LESSON
  } from '../../actions/LearningInfo/LessonAction';
import {call, takeEvery, put} from 'redux-saga/effects';
import {getLessonApi} from '../../api/LearningInfo/LessonApis';
const messageError = 'Không thể kết nối tới server.';

function* getLessonFlow(action) {
  try {
    const response = yield getLessonApi(action.input);
    if (response.status === 200) {
      yield put({type: GET_LESSON_SUCCESS, data: response.data,});
    } else {
      yield put({type: GET_LESSON_FAIL, error: response.message});
    }
  } catch (error) {
    yield put({type: GET_LESSON_FAIL, error: messageError});
  }
}

export function* watchGetLesson() {
  yield takeEvery(GET_LESSON, getLessonFlow);
}

