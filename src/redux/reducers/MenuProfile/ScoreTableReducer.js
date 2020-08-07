import {
    FORMAT_DATA,GET_SCORE_TABLE_SUCCESS,GET_SCORE_TABLE_FAIL,GET_SCORE_TABLE
  } from '../../actions/MenuProfile/ScoreTableAction';
  
  const initialState = {
    isFetching: false,
    data: null,
    message: null,
  };
  const scoreTableReducers = (state = initialState, action) => {
    switch (action.type) {
      case FORMAT_DATA:
        return {  ...state,
          message:null,};
      case GET_SCORE_TABLE:
        return {...state, isFetching: true};
      case GET_SCORE_TABLE_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.data,
        };
      case GET_SCORE_TABLE_FAIL:
        return {...state, isFetching: false, message: action.error};
      default:
        return state;
    }
  };
  
  export default scoreTableReducers;
  