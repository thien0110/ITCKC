import React from 'react';
import TimeTableComponent from '../../components/Profile/TimeTableComponent';
import {connect} from 'react-redux';
import {
  formatData,getTimeTableAction
} from '../../redux/actions/MenuProfile/TimeTableAction';
class TimeTableContainer extends React.Component {
  render() {
    return <TimeTableComponent {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTimeTableAction: (input) => {
      dispatch(getTimeTableAction(input));
    },
    formatData: (input) => {
      dispatch(formatData(input));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    data: state.timeTableReducers.data,
    isFetching: state.timeTableReducers.isFetching,
    message: state.timeTableReducers.message,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimeTableContainer);
