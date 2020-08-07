import React from 'react';
import MenuComponent from '../components/MenuComponent';
import {connect} from 'react-redux';
import {getMenuNewsAction, getHotPostItAction} from '../redux/actions/MenuAction';
import {changeStateLoginAction} from '../redux/actions/LoginAction';
class MenuContainer extends React.Component {
  render() {
    return <MenuComponent {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMenuNewsAction: input => {
      dispatch(getMenuNewsAction(input));
    },
    getHotPostItAction: input => {
      dispatch(getHotPostItAction(input));
    },
    changeStateAction: (key, value) => {
      dispatch(changeStateLoginAction(key, value));
    },
  };
};
const mapStateToProps = state => {
  return {
    data: state.menuReducers.data,
    isFetching: state.menuReducers.isFetching,
    message: state.menuReducers.message,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuContainer);
