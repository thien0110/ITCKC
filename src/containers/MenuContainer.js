import React from 'react';
import MenuComponent from '../components/MenuComponent';
import {connect} from 'react-redux';
import {getMenuNewsAction} from '../redux/actions/MenuAction';
class MenuContainer extends React.Component {
  render() {
    return <MenuComponent {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMenuNewsAction: () => {
      dispatch(getMenuNewsAction());
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
