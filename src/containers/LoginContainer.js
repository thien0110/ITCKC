import React from 'react';
import LoginComponent from '../components/LoginComponent';
import {connect} from 'react-redux';
import {loginAction} from '../redux/actions/LoginAction';
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
  };
};
const mapStateToProps = state => {
  return {
    data: state.loginReducers.data,
    isFetching: state.loginReducers.isFetching,
    error: state.loginReducers.error,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
