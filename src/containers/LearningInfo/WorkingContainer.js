import React from 'react';
import WorkingComponent from '../../components/LearningInfo/WorkingComponent';
import {connect} from 'react-redux';
import {getWorkingAction} from '../../redux/actions/LearningInfo/WorkingAction';
class WorkingContainer extends React.Component {
  render() {
    return <WorkingComponent {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWorkingAction: input => {
      dispatch(getWorkingAction(input));
    },
  };
};
const mapStateToProps = state => {
  return {
    data: state.workingReducers.data,
    isFetching: state.workingReducers.isFetching,
    message: state.workingReducers.message,
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkingContainer);
