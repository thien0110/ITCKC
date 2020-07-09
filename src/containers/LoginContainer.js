import React from 'react';
import LoginComponent from '../components/LoginComponent';
import {connect} from 'react-redux';
import {loginAction,formatData} from '../redux/actions/LoginAction';
class LoginContainer extends React.Component {
  render() {
    return <LoginComponent {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginAction: input => {
      dispatch(loginAction(input));
    },
    formatData: input => {
      dispatch(formatData(input));
    },
  };
};
const mapStateToProps = state => {
  return {
    data: state.loginReducers.data,
    isFetching: state.loginReducers.isFetching,
    message: state.loginReducers.message,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
