import React from 'react';
import ThreadComponent from '../../components/LearningInfo/ThreadComponent';
import {connect} from 'react-redux';
import {getLessonAction} from '../../redux/actions/LearningInfo/LessonAction';
class ThreadContainer extends React.Component {
  render() {
    return <ThreadComponent {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLessonAction: input => {
      dispatch(getLessonAction(input));
    },
  };
};
const mapStateToProps = state => {
  return {
    data: state.lessonReducers.data,
    isFetching: state.lessonReducers.isFetching,
    message: state.lessonReducers.message,
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThreadContainer);
