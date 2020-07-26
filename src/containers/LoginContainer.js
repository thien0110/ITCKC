import React from 'react';
import LoginComponent from '../components/LoginComponent';
import {connect} from 'react-redux';
import {loginAction, changeStateLoginAction} from '../redux/actions/LoginAction';
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
    changeStateAction: (key, value) => {
      dispatch(changeStateLoginAction(key, value));
    },
  };
};
const mapStateToProps = state => {
  return {
    data: state.loginReducers.data,
    isFetching: state.loginReducers.isFetching,
    message: state.loginReducers.message,
    loginState: state.loginReducers.state,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
