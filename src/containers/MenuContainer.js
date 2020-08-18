import React from 'react';
import MenuComponent from '../components/MenuComponent';
import {connect} from 'react-redux';
import {getMenuNewsAction, getHotPostItAction,getNotiAction} from '../redux/actions/MenuAction';
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
    getNotiAction: input => {
      dispatch(getNotiAction(input));
    },
    changeStateAction: (key, value) => {
      dispatch(changeStateLoginAction(key, value));
    },
  };
};
const mapStateToProps = state => {
  return {
    data: state.menuReducers.data,
    dataHotKhoa:state.menuReducers.dataHotKhoa,
    dataNoti:state.menuReducers.dataNoti,
    isFetching: state.menuReducers.isFetching,
    message: state.menuReducers.message,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuContainer);
