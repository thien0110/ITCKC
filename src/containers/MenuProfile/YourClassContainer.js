import React from 'react';
import YourClassComponent from '../../components/Profile/YourClassComponent';
import {connect} from 'react-redux';
import {
  formatData,getYourClassAction
} from '../../redux/actions/MenuProfile/YourClassAction';
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
    formatData: (input) => {
      dispatch(formatData(input));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    data: state.yourClassReducers.data,
    isFetching: state.yourClassReducers.isFetching,
    message: state.yourClassReducers.message,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(YourClassContainer);
