import React from 'react';
import LearningInfoComponent from '../../components/LearningInfo/index';
import {connect} from 'react-redux';
import {getSubjectAction} from '../../redux/actions/LearningInfo/LearningInfoAction';
class LearningInfoContainer extends React.Component {
  render() {
    return <LearningInfoComponent {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSubjectAction: input => {
      dispatch(getSubjectAction(input));
    },
  };
};
const mapStateToProps = state => {
  return {
    data: state.learningInfoReducers.data,
    isFetching: state.learningInfoReducers.isFetching,
    message: state.learningInfoReducers.message,
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LearningInfoContainer);
