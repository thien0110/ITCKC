import {GET_SCORE_TABLE,GET_SCORE_TABLE_FAIL,GET_SCORE_TABLE_SUCCESS,
    FORMAT_DATA,
  } from '../../actions/MenuProfile/ScoreTableAction';
  import {call, takeEvery, put} from 'redux-saga/effects';
  import {getScoreTableApi} from '../../api/MenuProfile/ScoreTableApis';
  const messageError = 'Không thể kết nối tới server.';

  function* getScoreTableFlow(action) {
    try {
      const response = yield getScoreTableApi(action.input);
      // console.warn(response)
      if (response.code == 200) {
        yield put({type: GET_SCORE_TABLE_SUCCESS, data: response.data});
      } else {
        yield put({type: GET_SCORE_TABLE_FAIL, error: response.message});
      }
    } catch (error) {
      yield put({type: GET_SCORE_TABLE_FAIL, error: messageError});
    }
  }
  
  export function* watchGetScoreTable() {
    yield takeEvery(GET_SCORE_TABLE, getScoreTableFlow);
  }
  