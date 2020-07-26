import React from 'react';
import MenuProfileComponent from '../components/MenuProfileComponent';
import {connect} from 'react-redux';
import {changeStateLoginAction} from '../redux/actions/LoginAction';
class MenuProfileContainer extends React.Component {
  render() {
    return <MenuProfileComponent {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeStateAction: (key, value) => {
      dispatch(changeStateLoginAction(key, value));
    },
  };
};


export default connect(
  mapDispatchToProps,
)(MenuProfileContainer);
