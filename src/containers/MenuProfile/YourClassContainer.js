import React from 'react';
import YourClassComponent from '../../components/Profile/YourClassComponent';
import {connect} from 'react-redux';
import {
  formatData,getYourClassAction
} from '../../redux/actions/MenuProfile/YourClassAction';
import {getSubjectAction} from '../../redux/actions/LearningInfo/LearningInfoAction';

class YourClassContainer extends React.Component {
  render() {
    return <YourClassComponent {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getYourClassAction: (input) => {
      dispatch(getYourClassAction(input));
    },
    getSubjectAction: (input) => {
      dispatch(getSubjectAction(input));
    },
    formatData: (input) => {
      dispatch(formatData(input));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    data: state.learningInfoReducers.data,
    isFetching: state.learningInfoReducers.isFetching,
    message: state.learningInfoReducers.message,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(YourClassContainer);
