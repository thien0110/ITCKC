import React from 'react';
import NotiComponent from '../components/NotiComponent';
import {connect} from 'react-redux';
import {getNotiAction} from '../redux/actions/MenuAction';
class NotiContainer extends React.Component {
  render() {
    return <NotiComponent {...this.props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNotiAction: input => {
      dispatch(getNotiAction(input));
    },
  };
};
const mapStateToProps = state => {
  return {
    data: state.menuReducers.dataNoti,
    isFetching: state.menuReducers.isFetching,
    message: state.menuReducers.message,
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotiContainer);
